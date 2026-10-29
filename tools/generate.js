/* Генерация тренировок через Gemini.

   node tools/generate.js --block 2              весь блок (дни 11–20)
   node tools/generate.js --days 11-13           только эти дни (остальные дни блока берутся из черновиков)
   node tools/generate.js --block 2 --force      сгенерировать заново, даже если черновики есть
   node tools/generate.js --block 2 --dry        показать промпт первого дня, ничего не отправлять
   node tools/generate.js --list-models          какие модели доступны по ключу

   Ключ: переменная окружения GEMINI_API_KEY или строка GEMINI_API_KEY=... в tools/.env (файл не коммитится).
   Модель: --model или GEMINI_MODEL, по умолчанию DEFAULT_MODEL.

   Черновики каждого дня и правила лежат в tools/drafts/ — их можно поправить руками и запустить
   генератор ещё раз: прошедшие проверку черновики он не трогает, а только собирает из них data/blockNN.js. */
const fs = require("fs");
const path = require("path");
const { ROOT, DATA, pad, blockFile, loadFE, checkDay, checkGrammar, isFull, fmt, plainDay, blockSource } = require("./lib");
const { validateAll } = require("./validate");

const DEFAULT_MODEL = "gemini-2.5-pro";
const TOOLS = __dirname;
const DRAFTS = path.join(TOOLS, "drafts");
const ATTEMPTS = 3;

/* Учебные тексты, на которые опираются блоки (номер блока → файлы в tools/sources) */
const SOURCES = { 4: ["1960s-1970s.md"], 5: ["1960s-1970s.md"] };

/* Правила про времена — для них подходит Tense Slider */
const TENSE_RULES = new Set(["g01", "g07", "g08", "g10", "g11", "g12", "g13", "g19", "g20"]);
const grammarTypes = (gid, n) => TENSE_RULES.has(gid)
  ? [["tense", "spot"], ["builder", "spot"], ["tense", "builder"]][n % 3]
  : ["builder", "spot"];

/* ---------- аргументы и ключ ---------- */

function parseArgs(argv) {
  const a = { force: false, dry: false };
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i];
    if (k === "--block") a.block = +argv[++i];
    else if (k === "--days") { const [x, y] = argv[++i].split("-").map(Number); a.days = [x, y || x]; }
    else if (k === "--model") a.model = argv[++i];
    else if (k === "--force") a.force = true;
    else if (k === "--dry") a.dry = true;
    else if (k === "--list-models") a.list = true;
    else throw new Error("Непонятный аргумент: " + k);
  }
  return a;
}

function apiKey() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY.trim();
  const f = path.join(TOOLS, ".env");
  if (fs.existsSync(f)) {
    const m = fs.readFileSync(f, "utf8").match(/^\s*GEMINI_API_KEY\s*=\s*"?([^"\s]+)"?/m);
    if (m) return m[1];
  }
  throw new Error("Нет ключа: задай GEMINI_API_KEY или создай tools/.env со строкой GEMINI_API_KEY=...");
}

/* ---------- Gemini ---------- */

const API = "https://generativelanguage.googleapis.com/v1beta";
const sleep = ms => new Promise(r => setTimeout(r, ms));

const TIMEOUT = 20 * 60000; // один ответ дня у Flash-моделей идёт несколько минут: сначала модель думает молча, потом пишет

class Retry extends Error {}

/* Потоковый запрос: ответ приходит кусками, раз в 15 с печатаем, сколько ждём и сколько получено */
async function stream(model, body) {
  const ctl = new AbortController();
  const t0 = Date.now();
  let text = "", finish = "", feedback = null;
  const timer = setTimeout(() => ctl.abort(), TIMEOUT);
  const tick = setInterval(() => process.stdout.write(`\r    … ${Math.round((Date.now() - t0) / 1000)} с, получено ${text.length} символов   `), 15000);
  try {
    const res = await fetch(`${API}/models/${model}:streamGenerateContent?alt=sse`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey() },
      body: JSON.stringify(body),
      signal: ctl.signal
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      const msg = data.error?.message || res.statusText;
      if (res.status === 429 && /per ?day|PerDay|daily/i.test(JSON.stringify(data)))
        throw new Error(`Дневной лимит модели ${model} исчерпан — продолжи завтра или запусти с другой моделью (--model). Готовые черновики сохранены.\n${msg}`);
      if (res.status === 429 || res.status >= 500) throw new Retry(`Gemini ${res.status}: ${msg}`);
      throw new Error(`Gemini ${res.status}: ${msg}` + (res.status === 404 ? "\nПроверь имя модели: node tools/generate.js --list-models" : ""));
    }
    const dec = new TextDecoder();
    let buf = "";
    for await (const chunk of res.body) {
      buf += dec.decode(chunk, { stream: true });
      let i;
      while ((i = buf.indexOf("\n")) >= 0) {
        const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
        if (!line.startsWith("data:")) continue;
        const data = JSON.parse(line.slice(5));
        const cand = data.candidates?.[0];
        text += (cand?.content?.parts || []).filter(p => !p.thought).map(p => p.text || "").join("");
        if (cand?.finishReason) finish = cand.finishReason;
        if (data.promptFeedback) feedback = data.promptFeedback;
      }
    }
  } catch (e) {
    if (e.name === "AbortError" || e.name === "TimeoutError") throw new Retry(`нет ответа за ${TIMEOUT / 60000} мин`);
    if (e instanceof TypeError) throw new Retry("обрыв соединения: " + (e.cause?.message || e.message)); // сеть
    throw e;
  } finally {
    clearTimeout(timer); clearInterval(tick);
    process.stdout.write("\r" + " ".repeat(60) + "\r");
  }
  if (finish === "MAX_TOKENS") throw new Retry("ответ обрезан по длине (MAX_TOKENS)");
  if (!text) throw new Retry("пустой ответ: " + (finish || JSON.stringify(feedback)));
  return text;
}

async function gemini(model, system, contents) {
  const body = {
    systemInstruction: { parts: [{ text: system }] },
    contents,
    generationConfig: { responseMimeType: "application/json", temperature: 0.7 }
  };
  for (let attempt = 1; ; attempt++) {
    try { return await stream(model, body); }
    catch (e) {
      if (!(e instanceof Retry) || attempt >= 3) throw e;
      const wait = 20 * attempt;
      console.log(`    ${e.message} — повтор через ${wait} с (${attempt}/2)`);
      await sleep(wait * 1000);
    }
  }
}

async function listModels() {
  const res = await fetch(`${API}/models?pageSize=200`, { headers: { "x-goog-api-key": apiKey() } });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || res.status);
  for (const m of data.models || [])
    if ((m.supportedGenerationMethods || []).includes("generateContent")) console.log(m.name.replace("models/", "").padEnd(40), m.displayName);
}

const parseJSON = text => JSON.parse(text.trim().replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, ""));

/* Спросить, проверить, при ошибках отправить их обратно модели — до ATTEMPTS раз */
async function ask(model, system, prompt, check, label) {
  const contents = [{ role: "user", parts: [{ text: prompt }] }];
  let last = [];
  for (let i = 1; i <= ATTEMPTS; i++) {
    const t0 = Date.now();
    const text = await gemini(model, system, contents);
    let obj = null, errors;
    try { obj = parseJSON(text); errors = check(obj).errors; } catch (e) { errors = ["ответ не JSON: " + e.message]; }
    const sec = Math.round((Date.now() - t0) / 1000);
    if (!errors.length) { console.log(`    ${label}: готово с попытки ${i} (${sec} с)`); return obj; }
    console.log(`    ${label}: попытка ${i} (${sec} с) — ошибок: ${errors.length}`);
    errors.slice(0, 8).forEach(e => console.log("      · " + e));
    last = errors;
    contents.push({ role: "model", parts: [{ text }] },
      { role: "user", parts: [{ text: "Проверка нашла ошибки. Исправь их и верни весь JSON заново, целиком:\n" + errors.map(e => "- " + e).join("\n") } ] });
  }
  throw new Error(`${label}: не получилось за ${ATTEMPTS} попытки. Последние ошибки:\n` + last.join("\n"));
}

/* ---------- промпты ---------- */

const read = f => fs.readFileSync(path.join(TOOLS, f), "utf8");
const fill = (tpl, vars) => tpl.replace(/\{\{(\w+)\}\}/g, (_, k) => { if (!(k in vars)) throw new Error("нет переменной " + k); return vars[k]; });

function grammarPrompt(FE, gid) {
  const g = FE.grammar[gid];
  const topics = FE.outline.filter(o => o.g === gid).map(o => `«${o.t}»`).join(", ");
  const example = fmt([FE.grammar.g01, FE.grammar.g03], "", true);
  return fill(read("prompts/grammar.md"), { gid, title: g.title, level: g.level, topics, example });
}

function dayPrompt(FE, n) {
  const o = FE.outline[n - 1], b = FE.blocks[o.b - 1];
  const used = Object.values(FE.words).map(w => w.w);
  const src = [...(SOURCES[o.b] || [])].map(f => read("sources/" + f));
  return fill(read("prompts/day.md"), {
    n, block: o.b, blockTitle: b.title, blockSub: b.sub, title: o.t, ru: o.ru, gid: o.g,
    blockPlan: FE.outline.filter(x => x.b === o.b).map(x => `  - день ${x.n}: ${x.t}` + (x.n === n ? " ← сегодня" : "")).join("\n"),
    workLine: o.w
      ? "Это день «на съёмке»: тексты и задания — про работу стилиста (брифы, примерки, клиенты, бюджеты, съёмки), с отсылками к эпохе блока."
      : "Это день про историю моды или основы: тексты — про эпоху, людей и вещи, но со взглядом стилиста.",
    gTitle: FE.grammar[o.g].title,
    grammarJson: fmt(FE.grammar[o.g], "", true),
    grammarTypes: grammarTypes(o.g, n).join(" и "),
    sources: src.length ? "# Учебный текст блока\n\nОпирайся на этот текст: бери из него факты, формулировки и лексику, подходящие к теме дня.\n\n" + src.join("\n\n---\n\n") : "",
    usedWords: used.join(", "),
    seedVocab: read("sources/vocab.md"),
    example: fmt([plainDay(FE.days[1]), plainDay(FE.days[4])], "", true)
  });
}

/* ---------- запись в сайт ---------- */

function patchGrammar(entries) {
  const f = path.join(DATA, "grammar.js");
  let src = fs.readFileSync(f, "utf8");
  for (const [gid, g] of Object.entries(entries)) {
    const re = new RegExp(`^  ${gid}: \\{ title: [^\\n]*\\}(,?)$`, "m");
    if (!re.test(src)) continue; // уже расписано
    src = src.replace(re, (_, comma) => `  ${gid}: ${fmt(g, "  ")}${comma}`);
  }
  fs.writeFileSync(f, src);
}

function patchIndex(b) {
  const f = path.join(ROOT, "index.html");
  let html = fs.readFileSync(f, "utf8");
  const tag = `data/block${pad(b)}.js`;
  if (!html.includes(tag)) {
    const blocks = [...html.matchAll(/<script src="data\/block(\d+)\.js[^\n]*\n/g)];
    const after = blocks.filter(m => +m[1] < b).pop() || blocks[0];
    const line = `<script src="${tag}?v=1"></script>\n`;
    html = after ? html.replace(after[0], +after[1] < b ? after[0] + line : line + after[0]) : html.replace('<script src="app.js', line + '<script src="app.js');
  }
  /* поднять версию у всех файлов, чтобы браузер не держал старые */
  const v = Math.max(...[...html.matchAll(/\?v=(\d+)/g)].map(m => +m[1])) + 1;
  html = html.replace(/\?v=\d+/g, "?v=" + v);
  fs.writeFileSync(f, html);
  return v;
}

/* ---------- main ---------- */

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.list) return listModels();
  const model = args.model || process.env.GEMINI_MODEL || DEFAULT_MODEL;

  const probe = loadFE();
  let days;
  if (args.days) days = Array.from({ length: args.days[1] - args.days[0] + 1 }, (_, i) => args.days[0] + i);
  else if (args.block) days = probe.outline.filter(o => o.b === args.block).map(o => o.n);
  else throw new Error("Укажи --block N или --days A-B");
  const block = probe.outline[days[0] - 1].b;
  if (days.some(n => !probe.outline[n - 1] || probe.outline[n - 1].b !== block)) throw new Error("Дни должны быть из одного блока");
  const blockDays = probe.outline.filter(o => o.b === block).map(o => o.n);

  /* грузим всё, кроме собираемого блока: его дни приходят из черновиков */
  const FE = loadFE({ skip: [blockFile(block)] });
  if (block === 1) throw new Error("Блок 1 написан руками — генератор его не трогает");
  fs.mkdirSync(DRAFTS, { recursive: true });
  const draft = name => path.join(DRAFTS, name + ".json");
  console.log(`Блок ${block}, дни ${days[0]}–${days[days.length - 1]}, модель ${model}\n`);

  if (args.dry) { console.log(dayPrompt(FE, days[0])); return; }

  /* 1. правила грамматики, которые нужны блоку и ещё не расписаны */
  const newGrammar = {};
  for (const gid of [...new Set(blockDays.map(n => FE.outline[n - 1].g))]) {
    if (isFull(FE.grammar[gid])) continue;
    const f = draft(gid);
    const { title, level } = FE.grammar[gid]; // название и уровень — из программы, модель их не меняет
    let g = !args.force && fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf8")) : null;
    if (g) g = Object.assign({ title, level }, g, { title, level });
    if (g && checkGrammar(gid, g).length) g = null;
    if (!g) {
      console.log(`Правило ${gid} «${title}»`);
      g = await ask(model, "Ты отвечаешь только валидным JSON.", grammarPrompt(FE, gid),
        x => ({ errors: checkGrammar(gid, Object.assign(x, { title, level })) }), gid);
      g = Object.assign({ title, level }, g);
      fs.writeFileSync(f, JSON.stringify(g, null, 2));
    }
    FE.grammar[gid] = g; newGrammar[gid] = g;
  }

  /* 2. дни по порядку: слова каждого следующего дня не повторяют предыдущие.
     Откуда берётся день: уже записанный data/blockNN.js (там могут быть ручные правки) → черновик → Gemini.
     --force для выбранных дней пропускает первые два источника. */
  const written = fs.existsSync(blockFile(block)) ? loadFE({ extra: [blockFile(block)] }).days : {};
  for (const n of blockDays) {
    const f = draft("day" + pad(n));
    const usedIds = () => new Set(Object.keys(FE.words));
    const fresh = args.force && days.includes(n);
    let d = null, from = "";
    if (!fresh && written[n]) { d = plainDay(written[n]); from = `data/block${pad(block)}.js`; }
    else if (!fresh && fs.existsSync(f)) { d = JSON.parse(fs.readFileSync(f, "utf8")); from = "черновике"; }
    if (d) {
      const r = checkDay(d, { FE, usedIds: usedIds() });
      if (r.errors.length) {
        console.log(`День ${n}: в ${from} ошибки` + (days.includes(n) ? ", генерирую заново" : " — исправь или перегенерируй с --force"));
        r.errors.forEach(e => console.log("      · " + e));
        if (days.includes(n)) d = null; else process.exitCode = 1;
      }
    }
    if (!d && days.includes(n)) {
      console.log(`День ${n} «${FE.outline[n - 1].t}»`);
      d = await ask(model, "Ты отвечаешь только валидным JSON.", dayPrompt(FE, n),
        x => { x.n = n; return checkDay(x, { FE, usedIds: usedIds() }); }, "день " + n);
      fs.writeFileSync(f, JSON.stringify(d, null, 2));
    }
    if (!d) continue;
    checkDay(d, { FE, usedIds: usedIds() }).warnings.forEach(w => console.log("    предупреждение: " + w));
    FE.addDay(JSON.parse(JSON.stringify(d)));
  }

  /* 3. собрать блок из всех готовых дней и подключить к сайту */
  const ready = blockDays.filter(n => FE.days[n]).map(n => FE.days[n]);
  if (!ready.length) return console.log("Нет готовых дней — нечего записывать.");
  fs.writeFileSync(blockFile(block), blockSource(block, ready, FE));
  patchGrammar(newGrammar);
  const v = patchIndex(block);
  console.log(`\nЗаписан data/block${pad(block)}.js (дни ${ready.map(d => d.n).join(", ")}), версия файлов ?v=${v}.`);

  /* 4. финальная проверка всего сайта так, как его увидит браузер */
  const { errors, warnings } = validateAll(loadFE());
  console.log(`Проверка сайта: ошибок ${errors.length}, предупреждений ${warnings.length}.`);
  errors.forEach(e => console.log("  ОШИБКА: " + e));
  if (errors.length) process.exitCode = 1;
  else console.log("Открой index.html в браузере, пройди новые дни и сделай commit + push.");
}

if (require.main === module) main().catch(e => { console.error("\n" + e.message); process.exit(1); });
module.exports = { gemini };

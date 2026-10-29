/* Общее для генератора и валидатора: загрузка данных сайта, проверки, запись JS в стиле block01.js. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const DATA = path.join(ROOT, "data");
const pad = n => String(n).padStart(2, "0");
const blockFile = b => path.join(DATA, `block${pad(b)}.js`);

/* Скрипты data/ в том порядке, в каком их грузит index.html. extra — блоки, которых ещё нет в index.html. */
function dataScripts(extra = []) {
  const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  const files = [...html.matchAll(/<script src="(data\/[^"?]+)/g)].map(m => path.join(ROOT, m[1]));
  for (const f of extra) if (!files.includes(f)) files.push(f);
  return files;
}

/* Выполняет файлы данных так же, как браузер, и возвращает FE. skip — файлы, которые не грузить. */
function loadFE({ extra = [], skip = [] } = {}) {
  const ctx = {};
  ctx.window = ctx; // как в браузере: window.FE и FE — одно и то же
  vm.createContext(ctx);
  for (const f of dataScripts(extra)) {
    if (skip.includes(f) || !fs.existsSync(f)) continue;
    vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
  }
  return ctx.FE;
}

/* ---------- проверки ---------- */

const GRAMMAR_TYPES = new Set(["builder", "spot", "tense"]);
const TYPES = new Set(["flash", "match", "cloze", "odd", ...GRAMMAR_TYPES]);
const isStr = v => typeof v === "string" && v.trim() !== "";
const strArr = v => Array.isArray(v) && v.length > 0 && v.every(isStr);
const isFull = g => g && isStr(g.intro) && Array.isArray(g.formula);
/* как app.js режет предложение в Error Spotting */
const spotTokens = s => s.split(" ").map(t => t.replace(/[.,!?«»]/g, "").toLowerCase());

/* Проверяет один день. ctx: { FE, usedIds: Set слов из других дней }.
   errors — сломается или будет неверно в приложении, warnings — стоит посмотреть глазами. */
function checkDay(day, ctx) {
  const errors = [], warnings = [];
  const E = (where, msg) => errors.push(`день ${day.n}, ${where}: ${msg}`);
  const W = (where, msg) => warnings.push(`день ${day.n}, ${where}: ${msg}`);
  const { FE } = ctx;
  const o = FE.outline[day.n - 1];
  if (!o) { E("день", "нет в программе"); return { errors, warnings }; }

  const own = new Map();
  if (!Array.isArray(day.words) || !day.words.length) E("words", "нет слов");
  else {
    if (day.words.length < 8 || day.words.length > 12) W("words", `${day.words.length} слов, обычно 10`);
    day.words.forEach((w, k) => {
      const at = `слово ${k + 1} (${w && w.w})`;
      for (const f of ["w", "pos", "ru", "def", "ex"]) if (!isStr(w[f])) E(at, `нет поля ${f}`);
      if (!isStr(w.w)) return;
      const id = FE.slug(w.w);
      if (own.has(id)) E(at, "слово повторяется в этом дне");
      if (ctx.usedIds.has(id)) E(at, "это слово уже было в другом дне");
      /* слово впечатывают целиком в карточке — длинные фразы туда не годятся */
      if (w.w.length > 20 || w.w.trim().split(/\s+/).length > 3) E(at, "слишком длинное для ввода (максимум 3 слова и 20 символов) — дай это выражение в «Соедини пары» или в тексте");
      own.set(id, w);
      if (isStr(w.ex) && w.ex.split("___").length !== 2) E(at, "в примере должен быть ровно один пропуск ___");
      /* после to / модального / did нужна начальная форма — exA там не нужен */
      if (isStr(w.ex) && isStr(w.exA) && /\b(to|can|could|will|would|should|must|might|did|didn't|does|doesn't|do|don't)\s+___/i.test(w.ex)
        && FE.norm(w.exA).split(" ")[0] !== FE.norm(w.w).split(" ")[0])
        E(at, `перед пропуском «${w.ex.match(/\S+\s+___/)[0]}» нужна начальная форма «${w.w}», а exA = «${w.exA}» — убери exA или перестрой пример`);
      if (isStr(w.def) && FE.norm(w.def).includes(FE.norm(w.w))) W(at, "определение содержит само слово");
      for (const f of ["exA", "note"]) if (w[f] != null && !isStr(w[f])) E(at, `${f} должно быть строкой`);
      if (isStr(w.ex) && /[А-Яа-яЁё]/.test(w.ex + w.def)) E(at, "в def/ex русские буквы");
    });
  }
  const known = c => own.has(FE.slug(c)) || FE.words[FE.slug(c)] || FE.words[c];

  if (!Array.isArray(day.ex)) { E("ex", "нет упражнений"); return { errors, warnings }; }
  /* +1 карточки повторения, которые приложение добавляет само → не больше 10 по ТЗ */
  if (day.ex.length > 9) E("ex", `${day.ex.length} упражнений, максимум 9 (+1 повторение = 10)`);
  const nGram = day.ex.filter(x => GRAMMAR_TYPES.has(x.type)).length;
  if (nGram < 1 || nGram > 3) W("ex", `${nGram} грамматических упражнений, обычно 2`);
  const needG = g => {
    if (!isStr(g)) return "нет g";
    if (!FE.grammar[g]) return `нет правила ${g}`;
    if (!isFull(FE.grammar[g])) return `правило ${g} ещё не расписано в grammar.js`;
    return null;
  };

  day.ex.forEach((x, k) => {
    const at = `упр. ${k + 1} (${x && x.type})`;
    if (!x || !TYPES.has(x.type)) return E(at, "неизвестный тип");
    if (GRAMMAR_TYPES.has(x.type)) { const m = needG(x.g); if (m) E(at, m); }

    if (x.type === "flash") {
      if (!strArr(x.cards)) return E(at, "нет cards");
      x.cards.forEach(c => { if (!known(c)) E(at, `карточка «${c}» не найдена среди слов`); });
    }

    if (x.type === "match") {
      if (!Array.isArray(x.pairs) || x.pairs.length < 4) return E(at, "нужно 4–6 пар");
      x.pairs.forEach((p, i) => { if (!Array.isArray(p) || p.length !== 4 || !p.every(isStr)) E(at, `пара ${i + 1}: нужно [слева, перевод, справа, перевод]`); });
      for (const side of [0, 2]) {
        const v = x.pairs.map(p => FE.norm(p[side]));
        if (new Set(v).size !== v.length) E(at, "одинаковые плашки — пары неоднозначны");
      }
    }

    if (x.type === "cloze") {
      if (!["select", "type"].includes(x.mode)) E(at, "mode: select или type");
      if (!isStr(x.text) || !Array.isArray(x.gaps)) return E(at, "нет text или gaps");
      const nums = [...x.text.matchAll(/\{(\d+)\}/g)].map(m => +m[1]);
      x.gaps.forEach((g, i) => {
        const c = nums.filter(n => n === i).length;
        if (c !== 1) E(at, `пропуск {${i}} встречается в тексте ${c} раз`);
        if (!isStr(g.a)) E(at, `пропуск ${i}: нет ответа a`);
        if (!isStr(g.why)) E(at, `пропуск ${i}: нет пояснения why`);
        if (x.mode === "select") {
          if (!strArr(g.o) || g.o.length < 3) E(at, `пропуск ${i}: нужно 3 варианта o`);
          else {
            if (!g.o.includes(g.a)) E(at, `пропуск ${i}: ответа «${g.a}» нет среди вариантов`);
            if (new Set(g.o.map(FE.norm)).size !== g.o.length) E(at, `пропуск ${i}: варианты повторяются`);
          }
        }
        if (g.alt != null && !strArr(g.alt)) E(at, `пропуск ${i}: alt должен быть списком строк`);
      });
      if (nums.some(n => n >= x.gaps.length)) E(at, "в тексте есть {k} без пропуска в gaps");
      if (/\ban \{\d+\}/i.test(x.text)) W(at, "«an» перед пропуском подсказывает ответ");
    }

    if (x.type === "odd") {
      if (!Array.isArray(x.rows) || !x.rows.length) return E(at, "нет rows");
      x.rows.forEach((r, i) => {
        if (!strArr(r.w) || r.w.length !== 4) E(at, `ряд ${i + 1}: нужно ровно 4 слова`);
        else if (new Set(r.w.map(FE.norm)).size !== 4) E(at, `ряд ${i + 1}: слова повторяются`);
        if (!Number.isInteger(r.o) || r.o < 0 || r.o > 3) E(at, `ряд ${i + 1}: o — индекс 0..3`);
        if (!isStr(r.why)) E(at, `ряд ${i + 1}: нет why`);
      });
    }

    if (x.type === "tense") {
      if (!strArr(x.tenses) || x.tenses.length < 2) E(at, "нужно 2–4 времени в tenses");
      if (!Array.isArray(x.bases) || !x.bases.length) return E(at, "нет bases");
      x.bases.forEach((b, i) => {
        if (!isStr(b.base)) E(at, `база ${i + 1}: нет base`);
        if (!Array.isArray(b.tr) || !b.tr.length) return E(at, `база ${i + 1}: нет tr`);
        b.tr.forEach((t, j) => {
          const w = `база ${i + 1}, маркер ${j + 1}`;
          if (!isStr(t.m)) E(at, `${w}: нет m`);
          if (!isStr(t.tpl) || t.tpl.split("{}").length !== 2) E(at, `${w}: в tpl должен быть ровно один {}`);
          else if (isStr(t.m) && !t.tpl.toLowerCase().includes(t.m.toLowerCase())) W(at, `${w}: маркера «${t.m}» нет в tpl — он не подсветится`);
          if (!strArr(t.a)) E(at, `${w}: нет ответа a`);
          if (!strArr(x.tenses) || !x.tenses.includes(t.t)) E(at, `${w}: время «${t.t}» не из списка tenses`);
          if (!isStr(t.why)) E(at, `${w}: нет why`);
        });
      });
    }

    if (x.type === "spot") {
      if (!Array.isArray(x.sets) || !x.sets.length) return E(at, "нет sets");
      x.sets.forEach((s, i) => {
        const w = `набор ${i + 1}`, e = s.err || {};
        if (!strArr(s.sentences) || s.sentences.length !== 3) return E(at, `${w}: нужно 3 предложения`);
        if (!Number.isInteger(e.s) || e.s < 0 || e.s > 2) return E(at, `${w}: err.s — индекс 0..2`);
        if (!isStr(e.span)) return E(at, `${w}: нет err.span`);
        const toks = spotTokens(s.sentences[e.s]), span = e.span.toLowerCase().split(" ");
        let hit = false;
        for (let k = 0; k + span.length <= toks.length; k++) if (span.every((t, j) => toks[k + j] === t)) hit = true;
        if (!hit) E(at, `${w}: «${e.span}» не найдено в предложении ${e.s + 1} целыми словами`);
        if (!strArr(e.fix)) E(at, `${w}: нет fix`);
        else if (e.fix.some(f => FE.norm(f) === FE.norm(e.span))) E(at, `${w}: исправление совпадает с ошибкой`);
        if (!isStr(e.note)) E(at, `${w}: нет note`);
        const m = needG(e.g); if (m) E(at, `${w}: ${m}`);
      });
    }

    if (x.type === "builder") {
      if (!Array.isArray(x.items) || !x.items.length) return E(at, "нет items");
      x.items.forEach((it, i) => {
        const w = `пункт ${i + 1}`;
        if (!isStr(it.ctx)) E(at, `${w}: нет ctx`);
        if (!strArr(it.formula)) return E(at, `${w}: нет formula`);
        if (!Array.isArray(it.parts)) return E(at, `${w}: нет parts`);
        const slots = it.parts.filter(p => typeof p !== "string");
        /* части склеиваются через пробел, поэтому «.» отдельной частью даёт «ago .» */
        it.parts.forEach(p => { if (typeof p === "string" && /^[.,!?;:]/.test(p.trim())) E(at, `${w}: часть «${p}» начинается со знака препинания — последней частью должен быть текст вместе с точкой`); });
        if (!slots.length || slots.length > 2) E(at, `${w}: нужно 1–2 слота`);
        slots.forEach((p, j) => {
          const sw = `${w}, слот ${j + 1}`;
          if (p.v != null) {
            if (!isStr(p.v)) E(at, `${sw}: v — глагол КАПСОМ`);
            if (!strArr(p.a)) E(at, `${sw}: a — список верных форм`);
          } else if (p.p != null) {
            if (!strArr(p.p) || p.p.length < 2) E(at, `${sw}: p — варианты предлога`);
            else if (!p.p.includes(p.a)) E(at, `${sw}: ответа «${p.a}» нет среди вариантов`);
          } else E(at, `${sw}: нужен v (глагол) или p (предлог)`);
          if (!Array.isArray(p.f) || !p.f.length || p.f.some(n => !Number.isInteger(n) || n < 0 || n >= it.formula.length)) E(at, `${sw}: f — индексы элементов formula`);
          if (!isStr(p.rule)) E(at, `${sw}: нет rule`);
        });
      });
    }
  });
  return { errors, warnings };
}

function checkGrammar(id, g) {
  const errors = [];
  const E = m => errors.push(`правило ${id}: ${m}`);
  if (!isStr(g.title)) E("нет title");
  if (!isStr(g.level)) E("нет level");
  if (!isStr(g.intro)) E("нет intro");
  const rows = (f, n) => {
    if (!Array.isArray(g[f]) || !g[f].length) return E(`нет ${f}`);
    g[f].forEach((r, i) => { if (!Array.isArray(r) || r.length !== n || !r.every(isStr)) E(`${f}[${i}]: нужно ${n} строки`); });
  };
  rows("formula", 3); rows("markers", 2); rows("examples", 2); rows("mistakes", 3);
  return errors;
}

/* ---------- запись JS ---------- */

const KEY = /^[A-Za-z_$][\w$]*$/;
const depth = v => Array.isArray(v) ? 1 + Math.max(0, ...v.map(depth))
  : v && typeof v === "object" ? 1 + Math.max(0, ...Object.values(v).map(depth)) : 0;
const key = (k, json) => (KEY.test(k) && !json ? k : JSON.stringify(k));
function inline(v, json) {
  if (Array.isArray(v)) return "[" + v.map(x => inline(x, json)).join(", ") + "]";
  if (v && typeof v === "object") {
    const e = Object.entries(v).filter(([, x]) => x !== undefined);
    return e.length ? "{ " + e.map(([k, x]) => key(k, json) + ": " + inline(x, json)).join(", ") + " }" : "{}";
  }
  return JSON.stringify(v);
}
/* Мелкое — в строку, крупное — по строкам, как в рукописном block01.js. json — ключи в кавычках (для промптов). */
function fmt(v, ind = "", json = false) {
  const one = inline(v, json);
  if (!v || typeof v !== "object") return one;
  const kids = Array.isArray(v) ? v : Object.values(v);
  if (one.length + ind.length <= 110 || (depth(v) <= 2 && !kids.some(k => k && typeof k === "object" && depth(k) >= 2)))
    if (one.length <= 260) return one;
  const i2 = ind + "  ";
  if (Array.isArray(v)) return "[\n" + v.map(x => i2 + fmt(x, i2, json)).join(",\n") + "\n" + ind + "]";
  const e = Object.entries(v).filter(([, x]) => x !== undefined);
  return "{\n" + e.map(([k, x]) => i2 + key(k, json) + ": " + fmt(x, i2, json)).join(",\n") + "\n" + ind + "}";
}

/* день из FE → исходные данные, без полей, которые добавляет FE.addDay */
const plainDay = d => ({ n: d.n, words: d.words.map(({ id, day, ...w }) => w), ex: d.ex });

function blockSource(b, days, FE) {
  const info = FE.blocks[b - 1];
  const nums = days.map(d => d.n);
  const head = `/* Блок ${b}. ${info.title}: ${info.sub}. Дни ${Math.min(...nums)}–${Math.max(...nums)}.\n` +
    `   Сгенерировано tools/generate.js и проверено tools/validate.js. Формат — как в block01.js. */\n`;
  return head + days.map(d => "\nFE.addDay(" + fmt(plainDay(d)) + ");\n").join("");
}

module.exports = { ROOT, DATA, pad, blockFile, dataScripts, loadFE, checkDay, checkGrammar, isFull, fmt, plainDay, blockSource, GRAMMAR_TYPES };

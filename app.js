(function () {
  "use strict";

  /* ---------- helpers ---------- */
  const app = document.getElementById("app");
  const norm = FE.norm, slug = FE.slug;

  function el(tag, props, ...kids) {
    const e = document.createElement(tag);
    if (props) for (const k in props) {
      const v = props[k];
      if (v == null || v === false) continue;
      if (k === "class") e.className = v;
      else if (k === "text") e.textContent = v;
      else if (k === "html") e.innerHTML = v;
      else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? "" : v);
    }
    for (const c of kids.flat()) {
      if (c == null || c === false) continue;
      e.append(c.nodeType ? c : document.createTextNode(c));
    }
    return e;
  }
  const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const today = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const fmtDate = s => new Date(s + "T12:00").toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
  const plural = (n, one, few, many) => { const m10 = n % 10, m100 = n % 100; return m10 === 1 && m100 !== 11 ? one : m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20) ? few : many; };

  function lev(a, b) {
    const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i]);
    for (let j = 1; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  }
  /* ok — точное совпадение, typo — одна буква мимо (только для слов, не для грамматики) */
  function judge(input, answers, typos) {
    const v = norm(input);
    if (!v) return { s: "empty" };
    for (const a of answers) if (norm(a) === v) return { s: "ok", a };
    if (typos) for (const a of answers) if (norm(a).length >= 4 && lev(v, norm(a)) === 1) return { s: "typo", a };
    return { s: "bad" };
  }

  let voice = null;
  function pickVoice() {
    const vs = speechSynthesis.getVoices();
    voice = vs.find(v => v.lang === "en-GB" && /female|serena|kate|libby|sonia/i.test(v.name)) || vs.find(v => v.lang === "en-GB") || vs.find(v => v.lang.startsWith("en")) || null;
  }
  if (window.speechSynthesis) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(t) {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(t);
    u.lang = "en-GB"; if (voice) u.voice = voice; u.rate = 0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
  const audioBtn = t => el("button", { class: "audio", title: "Произношение", "aria-label": "Произношение", onclick: e => { e.stopPropagation(); speak(t); } }, "🔊");

  /* ---------- state ---------- */
  const KEY = "fashion-english-v1";
  const blank = () => ({ results: {}, mis: {}, placement: [], sessions: 0, dates: [], welcomed: false });
  let S;
  try { S = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { S = blank(); }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };

  const TOTAL = FE.outline.length;
  const doneCount = () => Object.keys(S.results).length;
  const nextDay = () => { for (const o of FE.outline) if (!S.results[o.n] && FE.days[o.n]) return o.n; return null; };
  function streak() {
    const set = new Set(S.dates); let n = 0; const d = new Date();
    if (!set.has(today())) d.setDate(d.getDate() - 1);
    for (;;) {
      const k = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      if (!set.has(k)) return n; n++; d.setDate(d.getDate() - 1);
    }
  }

  /* ошибки в словах: повторяем через 1, 3 и 6 тренировок, после трёх верных подряд слово уходит */
  function addMistake(ans) {
    const id = [slug(ans), slug(ans.replace(/s$/, ""))].find(k => FE.words[k]) || FE.wordFor(ans);
    if (!id) return null;
    S.mis[id] = { streak: 0, due: S.sessions + 1 };
    return id;
  }
  function reviewHit(id) {
    const m = S.mis[id]; if (!m) return;
    m.streak++;
    if (m.streak >= 3) delete S.mis[id]; else m.due = S.sessions + [1, 3, 6][m.streak];
  }
  function buildReview(n) {
    const own = new Set(FE.days[n].words.map(w => w.id));
    const ids = Object.keys(S.mis).filter(id => S.mis[id].due <= S.sessions + 1 && !own.has(id))
      .sort((a, b) => S.mis[a].due - S.mis[b].due);
    for (const back of [1, 3, 7, 14, 30]) {
      const d = FE.days[n - back]; if (!d) continue;
      for (const w of shuffle(d.words)) if (!ids.includes(w.id)) { ids.push(w.id); break; }
    }
    const cards = ids.slice(0, 5);
    return cards.length ? { type: "flash", review: true, cards } : null;
  }

  /* ---------- routing ---------- */
  const TYPES = {
    cloze: ["Context Cloze", "Текст с пропусками"],
    match: ["Collocation Matcher", "Сочетания слов"],
    odd: ["Odd One Out", "Найди лишнее"],
    flash: ["Reverse Definition", "Вспомни слово по определению"],
    builder: ["Sentence Builder", "Собери предложение по формуле"],
    spot: ["Error Spotting", "Найди и исправь ошибку"],
    tense: ["Tense Slider", "Выбери время по маркеру"]
  };
  const GRAMMAR = new Set(["builder", "spot", "tense"]);

  function nav(active) {
    const link = (href, label, key) => el("a", { href, class: key === active ? "on" : null }, label);
    return el("header", { class: "top" },
      el("a", { class: "brand", href: "#/profile" }, el("span", { class: "brand-mark" }, "Fashion"), el("span", { class: "brand-sub" }, "English · A2 → B1")),
      el("nav", null, link("#/profile", "Профиль", "profile"), link("#/trainings", "Тренировки", "trainings"), link("#/kb", "База знаний", "kb"))
    );
  }
  function page(active, ...kids) {
    app.innerHTML = "";
    app.append(nav(active), el("main", { class: "wrap" }, ...kids));
    window.scrollTo(0, 0);
  }

  function route() {
    const [, p, arg] = (location.hash || "#/profile").split("/");
    if (!S.welcomed && p !== "placement") return welcome();
    if (p === "trainings") return trainings();
    if (p === "kb") return kb(arg || "words");
    if (p === "day") return runDay(+arg);
    if (p === "placement") return placement();
    return profile();
  }
  window.addEventListener("hashchange", route);

  /* ---------- welcome ---------- */
  function welcome() {
    app.innerHTML = "";
    app.append(el("main", { class: "wrap welcome" },
      el("p", { class: "eyebrow" }, "Fashion English"),
      el("h1", null, "Английский для стилиста"),
      el("p", { class: "lead" }, "90 тренировок по 20 минут: одежда, крой, ткани, история моды с 1920-х до 2000-х и язык съёмок. Уровень растёт от A2 к B1. В каждой тренировке 80% упражнений на слова и 20% на грамматику."),
      el("p", null, "Сначала короткий тест уровня (около 10 минут), чтобы понять, откуда стартуем."),
      el("div", { class: "row" },
        el("a", { class: "btn primary", href: "#/placement", onclick: () => { S.welcomed = true; save(); } }, "Пройти тест уровня"),
        el("button", { class: "btn ghost", onclick: () => { S.welcomed = true; save(); location.hash = "#/profile"; route(); } }, "Пропустить")
      )
    ));
  }

  /* ---------- profile ---------- */
  function profile() {
    const done = doneCount(), pct = Math.round(done / TOTAL * 100);
    const scores = Object.values(S.results).map(r => r.last);
    const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null;
    const learned = Object.values(FE.words).filter(w => S.results[w.day]).length;
    const mis = Object.keys(S.mis).length;
    const nd = nextDay();
    const lastP = S.placement[S.placement.length - 1];

    page("profile",
      el("section", { class: "hero" },
        el("p", { class: "eyebrow" }, "Профиль"),
        el("h1", null, done ? "Продолжаем" : "Добро пожаловать"),
        el("div", { class: "progress-line" },
          el("div", { class: "bar" }, el("span", { style: "width:" + pct + "%" })),
          el("p", { class: "muted" }, `Выполнено ${done} из ${TOTAL} ${plural(TOTAL, "тренировки", "тренировок", "тренировок")} · ${pct}%`)
        ),
        nd ? el("a", { class: "btn primary", href: "#/day/" + nd }, `Тренировка ${nd}: ${FE.outline[nd - 1].t} →`)
          : el("p", { class: "muted" }, "Все доступные тренировки пройдены. Новые блоки скоро появятся.")
      ),
      el("section", { class: "stats" },
        stat(streak(), plural(streak(), "день подряд", "дня подряд", "дней подряд")),
        stat(learned, plural(learned, "слово пройдено", "слова пройдено", "слов пройдено")),
        stat(mis, "на повторении"),
        stat(avg == null ? "—" : avg + "%", "средний результат")
      ),
      el("section", { class: "card" },
        el("h2", null, "Уровень"),
        lastP ? el("div", null,
          el("p", null, el("b", { class: "level" }, lastP.level), ` · ${lastP.score} из 20 · ${fmtDate(lastP.date)}`),
          S.placement.length > 1 ? el("p", { class: "muted" }, "История: " + S.placement.map(p => `${p.level} (${fmtDate(p.date)})`).join(" → ")) : null,
          el("a", { class: "btn ghost", href: "#/placement" }, "Пройти тест ещё раз")
        ) : el("div", null, el("p", { class: "muted" }, "Тест уровня ещё не пройден."), el("a", { class: "btn ghost", href: "#/placement" }, "Пройти тест уровня"))
      ),
      el("section", { class: "card" },
        el("h2", null, "Тренировки"),
        dayList(true)
      ),
      el("section", { class: "card subtle" },
        el("h2", null, "Прогресс хранится в этом браузере"),
        el("p", { class: "muted" }, "Если почистить историю браузера или открыть платформу в другом, прогресс пропадёт. Можно сохранить копию в файл."),
        el("div", { class: "row" },
          el("button", { class: "btn ghost", onclick: exportProgress }, "Сохранить прогресс в файл"),
          el("label", { class: "btn ghost" }, "Загрузить из файла", el("input", { type: "file", accept: ".json", hidden: true, onchange: importProgress }))
        )
      )
    );
  }
  const stat = (v, l) => el("div", { class: "stat" }, el("b", null, String(v)), el("span", null, l));

  function exportProgress() {
    const a = el("a", { href: URL.createObjectURL(new Blob([JSON.stringify(S)], { type: "application/json" })), download: `fashion-english-${today()}.json` });
    a.click();
  }
  function importProgress(e) {
    const f = e.target.files[0]; if (!f) return;
    f.text().then(t => { S = Object.assign(blank(), JSON.parse(t)); save(); route(); }).catch(() => alert("Не получилось прочитать файл."));
  }

  /* ---------- trainings list ---------- */
  function trainings() {
    page("trainings",
      el("p", { class: "eyebrow" }, "Тренировки"),
      el("h1", null, "Программа на 90 дней"),
      el("p", { class: "lead" }, "Тренировки идут по возрастанию сложности, каждая опирается на предыдущие. Открыты все — можно перепроходить любую."),
      dayList(false)
    );
  }
  function dayList(compact) {
    const wrap = el("div", { class: "blocks" + (compact ? " compact" : "") });
    for (const b of FE.blocks) {
      const days = FE.outline.filter(o => o.b === b.n);
      const done = days.filter(o => S.results[o.n]).length;
      const ready = days.some(o => FE.days[o.n]);
      const det = el("details", { class: "block", open: ready && (!compact || done < days.length) ? true : null },
        el("summary", null,
          el("span", { class: "block-n" }, String(b.n).padStart(2, "0")),
          el("span", { class: "block-t" }, el("b", null, b.title), el("small", null, b.sub)),
          el("span", { class: "block-c" }, ready ? `${done}/${days.length}` : "скоро")
        ),
        el("ol", { class: "days" }, days.map(o => {
          const r = S.results[o.n], has = !!FE.days[o.n];
          return el("li", { class: (r ? "done " : "") + (has ? "" : "locked") },
            el(has ? "a" : "span", { href: has ? "#/day/" + o.n : null, class: "day" },
              el("span", { class: "day-n" }, o.n),
              el("span", { class: "day-t" }, el("b", null, o.t), el("small", null, o.ru + (o.w ? " · работа стилиста" : ""))),
              el("span", { class: "day-g" }, FE.grammar[o.g]?.title || ""),
              el("span", { class: "day-s" }, r ? `✓ ${r.last}%` : has ? "" : "скоро")
            )
          );
        }))
      );
      wrap.append(det);
    }
    return wrap;
  }

  /* ---------- knowledge base ---------- */
  function kb(tab) {
    const tabs = el("div", { class: "tabs" },
      el("a", { href: "#/kb/words", class: tab === "words" ? "on" : null }, "Слова"),
      el("a", { href: "#/kb/grammar", class: tab === "grammar" ? "on" : null }, "Грамматика"));
    page("kb", el("p", { class: "eyebrow" }, "База знаний"), el("h1", null, tab === "words" ? "Словарь" : "Грамматические правила"), tabs,
      tab === "words" ? kbWords() : kbGrammar());
  }
  function kbWords() {
    const q = el("input", { type: "search", class: "search", placeholder: "Поиск по-английски или по-русски" });
    const daySel = el("select", { class: "search" }, el("option", { value: "" }, "Все тренировки"),
      Object.keys(FE.days).map(n => el("option", { value: n }, `${n}. ${FE.outline[n - 1].t}`)));
    const list = el("div", { class: "words" });
    function draw() {
      const v = norm(q.value), d = +daySel.value;
      list.innerHTML = "";
      const ws = Object.values(FE.words).filter(w => (!d || w.day === d) && (!v || norm(w.w).includes(v) || norm(w.ru).includes(v)));
      if (!ws.length) list.append(el("p", { class: "muted" }, "Ничего не нашлось."));
      ws.forEach(w => list.append(el("details", { class: "word" },
        el("summary", null, el("b", null, w.w), audioBtn(w.w), el("i", null, w.pos), el("span", null, w.ru), el("small", null, "день " + w.day)),
        el("div", { class: "word-body" },
          el("p", null, w.def),
          el("p", { class: "example" }, w.ex.replace("___", w.exA || w.w)),
          w.note ? el("p", { class: "note" }, w.note) : null)
      )));
    }
    q.oninput = draw; daySel.onchange = draw; draw();
    return el("div", null, el("div", { class: "row filters" }, q, daySel),
      el("p", { class: "muted" }, `${Object.keys(FE.words).length} ${plural(Object.keys(FE.words).length, "слово", "слова", "слов")} в базе. Словарь пополняется с каждой новой тренировкой.`), list);
  }
  function ruleCard(id, open) {
    const g = FE.grammar[id];
    if (!g) return null;
    const used = FE.outline.filter(o => o.g === id).map(o => o.n);
    const range = used.length ? `дни ${used[0]}–${used[used.length - 1]}` : "";
    return el("details", { class: "rule", open: open || null },
      el("summary", null, el("b", null, g.title), el("span", { class: "tag" }, g.level), el("small", null, range)),
      g.intro ? el("div", { class: "rule-body" },
        el("p", null, g.intro),
        el("table", null, g.formula.map(f => el("tr", null, el("th", null, f[0]), el("td", null, f[1]), el("td", { class: "en" }, f[2])))),
        g.markers.map(m => el("p", null, el("b", null, m[0] + ": "), m[1])),
        el("h4", null, "Примеры"),
        el("ul", null, g.examples.map(x => el("li", null, el("span", { class: "en" }, x[0]), " — ", x[1]))),
        el("h4", null, "Типичные ошибки"),
        el("ul", { class: "mistakes" }, g.mistakes.map(x => el("li", null, el("s", null, x[0]), " → ", el("b", null, x[1]), el("br"), el("small", null, x[2]))))
      ) : el("div", { class: "rule-body" }, el("p", { class: "muted" }, "Правило появится вместе с тренировками этого блока."))
    );
  }
  const kbGrammar = () => el("div", { class: "rules" }, Object.keys(FE.grammar).sort().map(id => ruleCard(id)));

  /* ---------- placement ---------- */
  function placement() {
    S.welcomed = true; save();
    const qs = FE.placement; let i = 0, score = 0; const wrong = [];
    const box = el("div", { class: "card quiz" });
    page("profile", el("p", { class: "eyebrow" }, "Тест уровня"), el("h1", null, "Откуда стартуем"),
      el("p", { class: "lead" }, "20 вопросов, от простых к сложным. Если не знаешь ответ — выбирай наугад, это нормально."), box);
    show();
    function show() {
      box.innerHTML = "";
      if (i === qs.length) return finish();
      const [q, opts, a] = qs[i];
      box.append(
        el("div", { class: "bar thin" }, el("span", { style: `width:${i / qs.length * 100}%` })),
        el("p", { class: "muted" }, `Вопрос ${i + 1} из ${qs.length}`),
        el("p", { class: "quiz-q" }, q),
        el("div", { class: "quiz-opts" }, opts.map((o, k) => el("button", { class: "opt", onclick: () => { if (k === a) score++; else wrong.push(i); i++; show(); } }, o)))
      );
    }
    function finish() {
      const r = FE.levelFor(score);
      S.placement.push({ date: today(), score, level: r.level }); save();
      box.append(
        el("p", { class: "eyebrow" }, "Результат"),
        el("p", { class: "big-level" }, r.level),
        el("p", null, `${score} из ${qs.length} правильно. ${r.text}`),
        wrong.length ? el("details", null, el("summary", null, "Посмотреть ошибки"),
          el("ul", null, wrong.map(k => el("li", null, qs[k][0], " — ", el("b", null, qs[k][1][qs[k][2]]))))) : null,
        el("div", { class: "row" }, el("a", { class: "btn primary", href: "#/day/1" }, "Начать тренировку 1"), el("a", { class: "btn ghost", href: "#/profile" }, "В профиль"))
      );
    }
  }

  /* ---------- training runner ---------- */
  function runDay(n) {
    const day = FE.days[n];
    if (!day) { location.hash = "#/trainings"; return; }
    const steps = [{ type: "intro" }, ...day.ex];
    const rev = buildReview(n);
    if (rev) { const gi = steps.findIndex(s => GRAMMAR.has(s.type)); steps.splice(gi < 0 ? steps.length : gi, 0, rev); }
    const exCount = steps.length - 1;
    const tally = { ok: 0, total: 0, missed: new Set() };
    let i = 0, api = null;

    const head = el("div", { class: "run-head" });
    const body = el("div", { class: "run-body" });
    const foot = el("div", { class: "run-foot" });
    page("trainings", head, body, foot);
    show();

    function leave() {
      if (api && steps[i].type !== "intro") { tally.ok += api.ok; tally.total += api.total; }
    }
    function next() { leave(); i++; i < steps.length ? show() : finish(); }

    function show() {
      const s = steps[i];
      head.innerHTML = ""; body.innerHTML = ""; foot.innerHTML = "";
      head.append(
        el("div", { class: "run-top" },
          el("a", { href: "#/trainings", class: "back" }, "← Тренировки"),
          el("span", { class: "muted" }, `Тренировка ${n} · ~20 мин`)
        ),
        el("div", { class: "dots" }, steps.map((_, k) => el("span", { class: k < i ? "past" : k === i ? "now" : "" })))
      );
      if (s.type === "intro") {
        api = null;
        body.append(
          el("p", { class: "eyebrow" }, day.work ? "Работа стилиста" : `Блок ${FE.outline[n - 1].b} · ${FE.blocks[FE.outline[n - 1].b - 1].title}`),
          el("h1", null, day.title),
          el("p", { class: "lead" }, `${day.ru}. ${day.words.length} новых слов и грамматика: ${FE.grammar[day.g].title}.`),
          el("div", { class: "intro-words" }, day.words.map(w => el("div", { class: "iw" },
            el("div", { class: "iw-top" }, el("b", null, w.w), audioBtn(w.w), el("i", null, w.pos)),
            el("div", { class: "iw-ru" }, w.ru),
            el("div", { class: "iw-ex" }, w.ex.replace("___", w.exA || w.w)),
            w.note ? el("div", { class: "note" }, w.note) : null
          ))),
          el("p", { class: "muted" }, `Дальше — ${exCount} ${plural(exCount, "упражнение", "упражнения", "упражнений")}. Прочитай слова вслух, нажимая 🔊.`)
        );
        foot.append(el("span"), el("button", { class: "btn primary", onclick: next }, "Начать упражнения →"));
        return;
      }
      const num = i;
      const [en, ru] = TYPES[s.type];
      const nextBtn = el("button", { class: "btn primary", disabled: true, onclick: next }, i === steps.length - 1 ? "Завершить" : "Дальше →");
      const scoreTag = el("span", { class: "score-tag" });
      api = {
        ok: 0, total: 0,
        point() { this.ok++; },
        miss(ans) { const id = addMistake(ans); if (id) tally.missed.add(id); save(); },
        hit(id) { if (s.review) reviewHit(id); },
        complete() {
          nextBtn.disabled = false; nextBtn.focus({ preventScroll: true });
          scoreTag.textContent = `${this.ok} из ${this.total} с первой попытки`;
          scoreTag.className = "score-tag vis " + (this.ok === this.total ? "full" : "");
        }
      };
      body.append(
        el("p", { class: "eyebrow" }, `Упражнение ${num} из ${exCount} · ${s.review ? "Повторение" : GRAMMAR.has(s.type) ? "Грамматика" : "Лексика"}`),
        el("h2", { class: "ex-title" }, s.review ? "Повторение слов" : s.title || en, el("small", null, s.review ? "Слова из прошлых тренировок и те, где были ошибки" : ru)),
        RENDER[s.type](s, api)
      );
      foot.append(
        el("button", { class: "btn ghost", onclick: next }, "Пропустить"),
        scoreTag, nextBtn
      );
    }

    function finish() {
      const pct = tally.total ? Math.round(tally.ok / tally.total * 100) : 100;
      const prev = S.results[n];
      S.results[n] = { last: pct, best: Math.max(pct, prev?.best || 0), date: today(), count: (prev?.count || 0) + 1 };
      S.sessions++;
      if (!S.dates.includes(today())) S.dates.push(today());
      save();
      const nd = FE.days[n + 1] ? n + 1 : null;
      head.innerHTML = ""; foot.innerHTML = "";
      body.innerHTML = "";
      body.append(
        el("p", { class: "eyebrow" }, `Тренировка ${n} пройдена`),
        el("h1", null, pct >= 85 ? "Отлично!" : pct >= 60 ? "Хорошая работа" : "Есть над чем поработать"),
        el("p", { class: "big-level" }, pct + "%"),
        el("p", { class: "muted" }, `${tally.ok} из ${tally.total} заданий с первой попытки.`),
        tally.missed.size ? el("div", { class: "card" },
          el("h3", null, "Эти слова вернутся в следующих тренировках"),
          el("ul", { class: "missed" }, [...tally.missed].map(id => { const w = FE.words[id]; return el("li", null, el("b", null, w.w), audioBtn(w.w), " — ", w.ru); }))
        ) : el("p", null, "Ни одной ошибки в словах."),
        el("div", { class: "row" },
          nd ? el("a", { class: "btn primary", href: "#/day/" + nd }, `Тренировка ${nd} →`) : null,
          el("button", { class: "btn ghost", onclick: () => runDay(n) }, "Пройти снова"),
          el("a", { class: "btn ghost", href: "#/profile" }, "В профиль")
        )
      );
      window.scrollTo(0, 0);
    }
  }

  /* ---------- exercises ---------- */
  const RENDER = {};

  /* Context Cloze: текст с пропусками, выпадающий список или ввод */
  RENDER.cloze = function (ex, api) {
    api.total = ex.gaps.length;
    let resolved = 0;
    const typed = ex.mode === "type";
    const whys = el("div", { class: "whys" });
    const checks = [];
    const text = el("div", { class: "cloze" });
    ex.text.split("\n").forEach(line => {
      const p = el("p");
      line.split(/\{(\d+)\}/).forEach((part, k) => {
        if (k % 2 === 0) { if (part) p.append(part); } else p.append(gap(ex.gaps[+part], +part));
      });
      text.append(p);
    });
    function gap(g, idx) {
      let tries = 0, done = false, ctl;
      if (typed) {
        ctl = el("input", { class: "gap", type: "text", autocomplete: "off", spellcheck: "false", style: `width:${Math.max(5, g.a.length + 2)}ch` });
        ctl.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
      } else {
        ctl = el("select", { class: "gap" }, el("option", { value: "" }, "…"), shuffle(g.o).map(o => el("option", { value: o }, o)));
        ctl.addEventListener("change", check);
      }
      ctl.addEventListener("input", () => ctl.classList.remove("bad"));
      function check() {
        if (done) return;
        const r = judge(ctl.value, [g.a, ...(g.alt || [])], typed);
        if (r.s === "empty") return;
        if (r.s === "ok" || r.s === "typo") { if (!tries) api.point(); finish(true, r); return; }
        tries++;
        if (tries === 1) api.miss(g.a);
        ctl.classList.add("bad");
        if (typed && tries >= 2) finish(false);
      }
      function finish(ok, r) {
        done = true; ctl.classList.remove("bad"); ctl.classList.add(ok ? "ok" : "shown");
        if (!ok) { ctl.value = g.a; }
        if (typed && r && r.s === "typo") ctl.value = g.a;
        ctl.disabled = true;
        whys.append(el("div", { class: "why " + (ok ? "good" : "badw") },
          el("span", { class: "why-n" }, idx + 1), el("b", null, g.a), audioBtn(g.a),
          r && r.s === "typo" ? el("span", { class: "typo" }, " опечатка, засчитано") : null,
          !ok ? el("span", { class: "typo" }, " правильный ответ") : null,
          el("span", null, " — " + (g.why || ""))));
        if (++resolved === ex.gaps.length) api.complete();
      }
      checks.push(check);
      return el("span", { class: "gap-wrap" }, el("sup", null, idx + 1), ctl);
    }
    return el("div", null,
      el("p", { class: "instr" }, typed ? "Впиши слово в каждый пропуск. Enter — проверить один пропуск." : "Выбери слово для каждого пропуска. Подсказок на русском нет — опирайся на контекст."),
      text,
      typed ? el("div", { class: "row" }, el("button", { class: "btn", onclick: () => checks.forEach(c => c()) }, "Проверить всё")) : null,
      whys);
  };

  /* Collocation Matcher: перетащи вторую часть к первой */
  RENDER.match = function (ex, api) {
    const pairs = ex.pairs.map(([l, lr, r, rr], i) => ({ l, lr, r, rr, i }));
    api.total = pairs.length;
    let solved = 0, sel = null;
    const tried = new Set();
    const word = (text, tr, cls) => {
      const b = el("span", { class: "mw " + (cls || "") }, el("span", { class: "mw-t" }, text), el("span", { class: "mw-tr" }, tr));
      b.addEventListener("click", () => b.classList.toggle("tr-on"));
      return b;
    };
    const left = el("div", { class: "m-left" });
    const bank = el("div", { class: "m-bank" });
    pairs.forEach(p => {
      p.drop = el("div", { class: "m-drop" }, "перетащи сюда");
      p.row = el("div", { class: "m-row" }, word(p.l, p.lr, "m-l"), p.drop);
      p.drop.pair = p;
      p.drop.addEventListener("click", () => { if (sel != null) attempt(p, sel); });
      left.append(p.row);
    });
    shuffle(pairs).forEach(p => {
      p.chip = word(p.r, p.rr, "chip");
      p.chip.addEventListener("pointerdown", e => drag(e, p));
      p.chip.addEventListener("click", () => {
        if (p.solved || p.dragged) { p.dragged = false; return; }
        pairs.forEach(q => q.chip.classList.remove("sel"));
        sel = sel === p.i ? null : p.i;
        if (sel != null) p.chip.classList.add("sel");
      });
      bank.append(p.chip);
    });
    /* перетаскивание: копия карточки едет за курсором, отпускаем над полем — проверяем пару */
    function drag(e, p) {
      if (p.solved || e.button !== 0) return;
      const sx = e.clientX, sy = e.clientY, r = p.chip.getBoundingClientRect();
      let ghost = null, over = null;
      const move = ev => {
        if (!ghost && Math.hypot(ev.clientX - sx, ev.clientY - sy) < 5) return;
        if (!ghost) {
          ghost = p.chip.cloneNode(true); ghost.classList.add("drag-ghost");
          ghost.style.width = r.width + "px"; document.body.append(ghost);
          p.chip.classList.add("dragging");
        }
        ghost.style.left = ev.clientX - (sx - r.left) + "px"; ghost.style.top = ev.clientY - (sy - r.top) + "px";
        ghost.hidden = true; const t = document.elementFromPoint(ev.clientX, ev.clientY); ghost.hidden = false;
        const d = t && t.closest(".m-drop");
        if (over && over !== d) over.classList.remove("over");
        over = d; if (d) d.classList.add("over");
      };
      const up = () => {
        removeEventListener("pointermove", move); removeEventListener("pointerup", up);
        if (!ghost) return;
        ghost.remove(); p.chip.classList.remove("dragging"); p.dragged = true; setTimeout(() => { p.dragged = false; });
        if (over) { over.classList.remove("over"); attempt(over.pair, p.i); }
      };
      addEventListener("pointermove", move); addEventListener("pointerup", up);
    }
    function attempt(p, j) {
      const q = pairs.find(x => x.i === j);
      sel = null; pairs.forEach(x => x.chip.classList.remove("sel"));
      if (p.solved || !q || q.solved) return;
      if (j === p.i) {
        p.solved = true;
        if (!tried.has(p.i)) api.point();
        p.drop.textContent = ""; p.drop.append(q.chip);
        p.row.classList.add("ok");
        p.drop.append(audioBtn(p.l + " " + p.r));
        if (++solved === pairs.length) api.complete();
      } else {
        if (!tried.has(p.i)) { tried.add(p.i); api.miss(p.l); api.miss(p.r); }
        p.row.classList.add("bad");
        setTimeout(() => p.row.classList.remove("bad"), 900);
      }
    }
    return el("div", null,
      el("p", { class: "instr" }, "Перетащи слово справа к подходящему слову слева. Клик по любому слову — перевод. Можно и без мыши: клик по слову справа, потом по полю слева."),
      el("div", { class: "match" }, left, bank));
  };

  /* Odd One Out: кликни лишнее */
  RENDER.odd = function (ex, api) {
    api.total = ex.rows.length;
    let left = ex.rows.length;
    return el("div", null,
      el("p", { class: "instr" }, "В каждом ряду одно слово лишнее. Кликни по нему."),
      ex.rows.map(r => {
        let miss = false, done = false;
        const why = el("p", { class: "odd-why" });
        const row = el("div", { class: "odd-row" }, shuffle(r.w.map((w, k) => ({ w, k }))).map(({ w, k }) => {
          const b = el("button", { class: "odd-w" }, w);
          b.addEventListener("click", () => {
            if (done) return;
            if (k === r.o) {
              done = true; b.classList.add("ok"); row.classList.add("done");
              if (!miss) api.point();
              why.textContent = r.why;
              if (--left === 0) api.complete();
            } else if (!b.classList.contains("bad")) { miss = true; b.classList.add("bad"); }
          });
          return b;
        }));
        return el("div", { class: "odd" }, row, why);
      }));
  };

  /* Reverse Definition Flash-Cards: определение + пример → вспомнить слово */
  RENDER.flash = function (ex, api) {
    const cards = ex.cards.map(c => FE.words[slug(c)] || FE.words[c]).filter(Boolean);
    api.total = cards.length;
    let i = 0;
    const holder = el("div");
    show();
    function show() {
      holder.innerHTML = "";
      const w = cards[i], ans = w.exA || w.w;
      let tries = 0, done = false;
      const input = el("input", { class: "flash-in", type: "text", autocomplete: "off", spellcheck: "false", placeholder: "Введи слово" });
      const hint = el("div", { class: "hint" });
      const [pre, post] = w.ex.split("___");
      const blank = el("span", { class: "blank" }, "_____");
      const after = el("div", { class: "flash-after" });
      const btn = el("button", { class: "btn" }, "Проверить");
      const card = el("div", { class: "flash" },
        el("div", { class: "flash-n" }, `Карточка ${i + 1} из ${cards.length}`),
        el("p", { class: "flash-def" }, w.def),
        el("p", { class: "flash-ex" }, pre, blank, post || ""),
        el("div", { class: "row" }, input, btn), hint, after);
      holder.append(card);
      setTimeout(() => input.focus({ preventScroll: true }));
      const go = () => { if (done) { i++; i < cards.length ? show() : null; return; } check(); };
      input.addEventListener("keydown", e => { if (e.key === "Enter") go(); });
      btn.addEventListener("click", go);
      input.addEventListener("input", () => input.classList.remove("bad"));
      function check() {
        const r = judge(input.value, [ans, w.w], true);
        if (r.s === "empty") return;
        if (r.s === "ok" || r.s === "typo") {
          if (!tries) { api.point(); api.hit(w.id); }
          return reveal(true, r.s === "typo");
        }
        tries++;
        input.classList.add("bad");
        if (tries === 1) {
          api.miss(w.id);
          hint.textContent = "Подсказка: " + ans.split("").map((ch, k) => k === 0 || ch === " " || ch === "-" ? ch : "_").join(" ") + ` (${ans.replace(/[ -]/g, "").length} букв)`;
        } else if (tries === 2) hint.textContent = "Подсказка: по-русски — «" + w.ru + "»";
        else reveal(false);
      }
      function reveal(ok, typo) {
        done = true;
        input.value = ans; input.disabled = true;
        input.classList.remove("bad"); input.classList.add(ok ? "ok" : "shown");
        blank.textContent = ans; blank.classList.add(ok ? "ok" : "shown");
        hint.textContent = typo ? "Опечатка, но засчитано. Правильно: " + ans : ok ? "" : "Правильный ответ: " + ans;
        after.append(el("b", null, w.w), audioBtn(w.w), el("span", null, " — " + w.ru), w.note ? el("p", { class: "note" }, w.note) : null);
        speak(w.w);
        if (i === cards.length - 1) { btn.remove(); api.complete(); }
        else { btn.textContent = "Следующая карточка →"; btn.disabled = false; btn.focus({ preventScroll: true }); }
      }
    }
    return el("div", null, el("p", { class: "instr" }, "Прочитай определение и пример, вспомни слово. Ошибёшься — появится подсказка."), holder);
  };

  function ruleBox(gid, note) {
    const g = FE.grammar[gid];
    return el("div", { class: "rule-box" },
      el("p", { class: "rule-h" }, "Правило: " + (g ? g.title : "")),
      note ? el("p", null, note) : null,
      g && g.formula ? el("table", null, g.formula.map(f => el("tr", null, el("th", null, f[0]), el("td", null, f[1])))) : null);
  }

  /* Guided Sentence Builder: формула + слоты (форма глагола и предлог) */
  RENDER.builder = function (ex, api) {
    api.total = ex.items.length;
    let left = ex.items.length;
    return el("div", null,
      el("p", { class: "instr" }, "Собери предложение по формуле: поставь глагол из [СКОБОК] в нужную форму и выбери предлог."),
      ex.items.map((it, n) => {
        let tries = 0, done = false;
        const fchips = it.formula.map(f => el("span", { class: "fchip" }, f));
        const expl = el("div", { class: "expl" });
        const slots = [];
        const sentence = el("p", { class: "build" }, it.parts.map(p => {
          if (typeof p === "string") return el("span", null, p + " ");
          let ctl;
          if (p.v) ctl = el("input", { class: "gap", type: "text", placeholder: p.v, autocomplete: "off", spellcheck: "false", style: `width:${Math.max(p.v.length, p.a[0].length) + 3}ch` });
          else ctl = el("select", { class: "gap" }, el("option", { value: "" }, "…"), shuffle(p.p).map(o => el("option", { value: o }, o)));
          ctl.addEventListener("input", () => ctl.classList.remove("bad"));
          ctl.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
          slots.push({ p, ctl });
          return el("span", null, ctl, p.v ? el("span", { class: "base" }, " (" + p.v.toLowerCase() + ")") : null, " ");
        }));
        const btn = el("button", { class: "btn" }, "Проверить");
        btn.addEventListener("click", check);
        function check() {
          if (done) return;
          if (slots.some(s => !norm(s.ctl.value))) { expl.innerHTML = ""; expl.append(el("p", { class: "muted" }, "Заполни все слоты.")); return; }
          fchips.forEach(c => c.classList.remove("hl"));
          expl.innerHTML = "";
          let allOk = true;
          slots.forEach(s => {
            const ok = judge(s.ctl.value, s.p.v ? s.p.a : [s.p.a], false).s === "ok";
            s.ctl.classList.toggle("ok", ok); s.ctl.classList.toggle("bad", !ok);
            if (ok) s.ctl.disabled = true;
            else { allOk = false; s.p.f.forEach(k => fchips[k].classList.add("hl")); expl.append(el("p", null, s.p.rule)); }
          });
          if (allOk) { done = true; if (!tries) api.point(); btn.remove(); end(); return; }
          tries++;
          if (tries >= 2) {
            done = true; btn.remove();
            slots.forEach(s => { if (!s.ctl.disabled) { s.ctl.value = s.p.v ? s.p.a[0] : s.p.a; s.ctl.classList.remove("bad"); s.ctl.classList.add("shown"); s.ctl.disabled = true; } });
            expl.append(el("p", { class: "muted" }, "Правильный вариант подставлен в предложение."));
            end();
          } else expl.prepend(el("p", { class: "bad-t" }, "Не совсем. Подсвеченная часть формулы нарушена — попробуй ещё раз."));
        }
        function end() {
          const full = it.parts.map((p, k) => typeof p === "string" ? p : slots.find(s => s.p === p).ctl.value).join(" ");
          expl.append(el("p", { class: "full" }, full, audioBtn(full)));
          if (--left === 0) api.complete();
        }
        return el("div", { class: "builder" },
          el("p", { class: "ctx" }, el("b", null, `${n + 1}. Ситуация: `), it.ctx),
          el("div", { class: "formula" }, fchips),
          sentence, el("div", { class: "row" }, btn), expl);
      }));
  };

  /* Error Spotting: три предложения, в одном ошибка — кликни и исправь */
  RENDER.spot = function (ex, api) {
    api.total = ex.sets.length;
    let left = ex.sets.length;
    return el("div", null,
      el("p", { class: "instr" }, "В одном из трёх предложений есть ошибка. Кликни по неверному слову и впиши правильный вариант."),
      ex.sets.map(set => {
        const e = set.err;
        const span = e.span.toLowerCase().split(" ");
        let misses = 0, found = false, finished = false;
        const fixRow = el("div", { class: "fix-row" });
        const result = el("div");
        let zone = [];
        const box = el("div", { class: "spot" });
        set.sentences.forEach((sen, si) => {
          const toks = sen.split(" ");
          let from = -1;
          if (si === e.s) {
            const clean = toks.map(t => t.replace(/[.,!?«»]/g, "").toLowerCase());
            for (let k = 0; k + span.length <= clean.length; k++) if (span.every((w, j) => clean[k + j] === w)) { from = k; break; }
          }
          const p = el("p", { class: "spot-s" });
          toks.forEach((t, ti) => {
            const inZone = si === e.s && from >= 0 && ti >= from && ti < from + span.length;
            const tok = el("span", { class: "tok" }, t);
            if (inZone) zone.push(tok);
            tok.addEventListener("click", () => {
              if (found || finished) return;
              if (inZone) return openFix();
              misses++;
              tok.classList.add("bad"); setTimeout(() => tok.classList.remove("bad"), 800);
              if (misses >= 2) { result.innerHTML = ""; result.append(el("p", { class: "muted" }, "Подсказка: ошибка подсвечена.")); openFix(); }
            });
            p.append(tok, " ");
          });
          box.append(p);
        });
        function openFix() {
          found = true;
          zone.forEach(t => t.classList.add("sel"));
          const input = el("input", { class: "gap", type: "text", autocomplete: "off", spellcheck: "false", value: e.span, style: `width:${Math.max(e.span.length, e.fix[0].length) + 4}ch` });
          const btn = el("button", { class: "btn" }, "Исправить");
          const go = () => {
            if (finished) return;
            const ok = judge(input.value, e.fix, false).s === "ok";
            finished = true; input.disabled = true; btn.remove();
            const last = zone[zone.length - 1].textContent.match(/[.,!?»]+$/);
            zone.forEach((t, k) => { t.textContent = k === 0 ? e.fix[0] + (last ? last[0] : "") : ""; t.classList.remove("sel"); t.classList.add(ok ? "ok" : "fixed"); });
            if (ok && misses === 0) api.point();
            if (ok) { input.classList.add("ok"); result.append(el("p", { class: "good-t" }, "Верно! " + e.note)); }
            else { input.classList.add("bad"); result.append(el("p", { class: "bad-t" }, `Правильно: «${e.fix[0]}».`), ruleBox(e.g, e.note)); }
            if (--left === 0) api.complete();
          };
          input.addEventListener("keydown", ev => { if (ev.key === "Enter") go(); });
          btn.addEventListener("click", go);
          fixRow.append(el("span", { class: "muted" }, `«${e.span}» →`), input, btn);
          input.focus({ preventScroll: true }); input.select();
        }
        return el("div", { class: "spot-set" }, box, fixRow, result);
      }));
  };

  /* Contextual Tense Slider: маркер времени → время и форма глагола */
  RENDER.tense = function (ex, api) {
    api.total = ex.bases.reduce((a, b) => a + b.tr.length, 0);
    let left = api.total;
    return el("div", null,
      el("p", { class: "instr" }, "Меняется маркер времени — меняется и глагол. Выбери время и впиши форму глагола."),
      ex.bases.map(b => {
        let cur = 0;
        const tabs = el("div", { class: "slider" });
        const panel = el("div", { class: "t-panel" });
        const marks = b.tr.map((t, k) => {
          const m = el("button", { class: "t-mark" }, el("span", { class: "t-dot" }), t.m);
          m.addEventListener("click", () => { if (m.classList.contains("done") || k === cur) { cur = k; draw(); } });
          tabs.append(m); return m;
        });
        const state = b.tr.map(() => null);
        function draw() {
          marks.forEach((m, k) => m.classList.toggle("now", k === cur));
          panel.innerHTML = "";
          const t = b.tr[cur];
          const [pre, post] = t.tpl.split("{}");
          const hl = s => { const i = s.toLowerCase().indexOf(t.m.toLowerCase()); return i < 0 ? [s] : [s.slice(0, i), el("span", { class: "marker" }, s.slice(i, i + t.m.length)), s.slice(i + t.m.length)]; };
          let chosen = null;
          const chips = el("div", { class: "t-chips" }, ex.tenses.map(name => {
            const c = el("button", { class: "t-chip" }, name);
            c.addEventListener("click", () => { if (state[cur]) return; chosen = name; chips.querySelectorAll(".t-chip").forEach(x => x.classList.toggle("sel", x === c)); });
            return c;
          }));
          const input = el("input", { class: "gap", type: "text", autocomplete: "off", spellcheck: "false", placeholder: "глагол", style: `width:${t.a[0].length + 4}ch` });
          const expl = el("div", { class: "expl" });
          const btn = el("button", { class: "btn" }, "Проверить");
          panel.append(
            el("p", { class: "muted" }, "Исходное: ", el("span", { class: "en" }, b.base)),
            el("p", { class: "t-q" }, "Какое время нужно с маркером ", el("b", null, t.m), "?"), chips,
            el("p", { class: "build" }, ...hl(pre), input, ...hl(post || "")),
            el("div", { class: "row" }, btn), expl);
          if (state[cur]) { // уже отвечено — показать результат
            const st = state[cur];
            input.value = st.value; input.disabled = true; input.classList.add(st.ok ? "ok" : "shown");
            chips.querySelectorAll(".t-chip").forEach(x => { if (x.textContent === t.t) x.classList.add("ok"); });
            btn.remove(); expl.append(el("p", null, t.why));
            return;
          }
          input.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
          btn.addEventListener("click", check);
          function check() {
            if (!chosen || !norm(input.value)) { expl.innerHTML = ""; expl.append(el("p", { class: "muted" }, "Выбери время и впиши глагол.")); return; }
            const tenseOk = chosen === t.t, formOk = judge(input.value, t.a, false).s === "ok", ok = tenseOk && formOk;
            if (ok) api.point();
            state[cur] = { ok, value: ok ? input.value : t.a[0] };
            input.disabled = true; input.classList.add(ok ? "ok" : "bad");
            chips.querySelectorAll(".t-chip").forEach(x => { if (x.textContent === t.t) x.classList.add("ok"); else if (x.textContent === chosen) x.classList.add("bad"); });
            marks[cur].classList.add("done", ok ? "ok" : "bad");
            btn.remove(); expl.innerHTML = "";
            if (ok) expl.append(el("p", { class: "good-t" }, "Верно! " + t.why));
            else {
              panel.querySelectorAll(".marker").forEach(m => m.classList.add("hl"));
              expl.append(el("p", { class: "bad-t" }, `Правильно: ${t.t} — «${t.a[0]}».`), el("p", null, t.why));
            }
            const full = t.tpl.replace("{}", t.a[0]);
            expl.append(el("p", { class: "full" }, full, audioBtn(full)));
            const nextK = state.findIndex(s => !s);
            if (nextK >= 0) {
              const nb = el("button", { class: "btn" }, "Следующий маркер →");
              nb.addEventListener("click", () => { cur = nextK; draw(); });
              expl.append(nb);
            }
            if (--left === 0) api.complete();
          }
        }
        draw();
        return el("div", { class: "tense" }, tabs, panel);
      }));
  };

  route();
})();

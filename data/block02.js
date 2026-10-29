/* Блок 2. 1920-е и 1930-е: Флэпперы, Шанель, голливудский гламур.
   День 11 написан Claude Opus по промпту tools/prompts/day.md — для сравнения с версией Gemini в block02.gemini.js (сайт её не грузит). */

FE.addDay({
  n: 11,
  words: [
    { w: "flapper", pos: "noun", ru: "флэппер (модная независимая девушка 1920-х)", def: "a young woman in the 1920s who had short hair, wore short dresses and loved jazz and dancing", ex: "With her short hair and short dress, she looked like a typical ___." },
    { w: "drop waist", pos: "noun", ru: "заниженная талия", def: "a waistline that sits low, on the hips, not at the natural waist", ex: "A dress with a ___ hides the shape of the body.", note: "drop waist — линия талии опущена на бёдра; high-waisted — наоборот, поднята выше талии." },
    { w: "hemline", pos: "noun", ru: "длина подола", def: "how high or low the bottom edge of a skirt or dress is", ex: "In the 1920s, the ___ moved up from the ankle to the knee.", note: "hem — сам подшитый край, подол; hemline — на какой высоте он заканчивается. Про моду говорят: hemlines rose / fell." },
    { w: "knee-length", pos: "adjective", ru: "длиной до колена", def: "long enough to reach the knee, but not longer", ex: "In 1926, a ___ skirt still looked very short to older people." },
    { w: "bob", pos: "noun", ru: "стрижка боб, каре", def: "a short haircut that is the same length all around the head, at about the level of the chin", ex: "She cut off her long hair and got a ___." },
    { w: "corset", pos: "noun", ru: "корсет", def: "a tight piece of underwear that pulls in the waist to make it look smaller", ex: "Her grandmother wore a tight ___ every day of her life." },
    { w: "boyish", pos: "adjective", ru: "мальчишеский", def: "looking like a young man: straight and slim, without curves", ex: "The flapper dress created a flat, ___ silhouette." },
    { w: "beaded", pos: "adjective", ru: "расшитый бисером, стеклярусом", def: "decorated with many tiny pieces of glass sewn onto the fabric", ex: "Her ___ evening dress sparkled every time she moved." },
    { w: "Charleston", pos: "noun", ru: "чарльстон (танец)", def: "a fast dance with quick kicks of the legs, very popular in the 1920s", ex: "At the party, everyone danced the ___ until morning." },
    { w: "rebellious", pos: "adjective", ru: "бунтарский", def: "refusing to follow the rules and doing things that older people don't approve of", ex: "Short hair was a ___ choice for a woman in 1922." }
  ],
  ex: [
    { type: "flash", cards: ["flapper", "drop waist", "hemline", "knee-length", "bob"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["cut your hair", "подстричь волосы", "into a bob", "под каре"],
        ["reject", "отвергать", "conventional expectations", "общепринятые ожидания"],
        ["dance", "танцевать", "the Charleston", "чарльстон"],
        ["a beaded", "расшитое бисером", "evening dress", "вечернее платье"],
        ["a boyish", "мальчишеская", "haircut", "стрижка"],
        ["hemlines", "подолы", "rose", "поднялись"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "After the First World War, many young women in Europe and America wanted more freedom. The {0} became the symbol of this new generation. She cut her long hair into a short {1} and stopped wearing a tight {2}. Her dresses hung straight from the shoulders, and the waistline moved down to the hips — this is called a {3}. The result was a straight, {4} silhouette with almost no curves. By the middle of the decade, the {5} had risen to the knee, so everyone could see her stockings. At night her evening dress, often {6} from top to bottom, sparkled under the lights while she danced the Charleston.",
      gaps: [
        { a: "flapper", o: ["flapper", "stylist", "model"], why: "Символ нового поколения 1920-х — флэппер, молодая независимая девушка. stylist и model — профессии, а не явление эпохи." },
        { a: "bob", o: ["bob", "hem", "cuff"], why: "Длинные волосы стригли «под каре» — bob. hem и cuff — детали одежды, к волосам не относятся." },
        { a: "corset", o: ["corset", "waistcoat", "tracksuit"], why: "Тугой корсет утягивал талию — от него флэпперы и отказались. waistcoat — жилет, tracksuit появился намного позже." },
        { a: "drop waist", o: ["drop waist", "neckline", "waistband"], why: "Линия талии опущена на бёдра — это drop waist. neckline — вырез у шеи, waistband — пришитый пояс брюк или юбки." },
        { a: "boyish", o: ["boyish", "figure-hugging", "beaded"], why: "«almost no curves» — прямой, мальчишеский силуэт. figure-hugging — наоборот, облегает и подчёркивает изгибы." },
        { a: "hemline", o: ["hemline", "neckline", "sleeve"], why: "«had risen to the knee» — речь о длине юбки, то есть hemline. Вырез и рукав до колена не поднимаются." },
        { a: "beaded", o: ["beaded", "boxy", "oversized"], why: "Платье sparkled — сверкало, значит было расшито бисером: beaded. boxy и oversized — про форму, а не про блеск." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["boyish", "figure-hugging", "straight", "loose-fitting"], o: 1, why: "boyish, straight, loose-fitting — прямой свободный силуэт флэпперов. figure-hugging — облегающий, подчёркивает изгибы." },
        { w: ["shoulder pads", "bob", "drop waist", "beaded dress"], o: 0, why: "Каре, заниженная талия и платье с бисером — мода 1920-х. Подплечники — символ 1980-х." },
        { w: ["rebellious", "bold", "conservative", "shocking"], o: 2, why: "rebellious, bold, shocking — про смелый вызов правилам. conservative — консервативный, наоборот." }
      ]
    },
    { type: "flash", cards: ["corset", "boyish", "beaded", "Charleston", "rebellious"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. In 1925, many young women cut their hair into a short {0}.\n2. Her grandmother never left the house without her tight {1}.\n3. The flapper loved jazz and danced the {2} at every party.\n4. Fashion magazines wrote that {3} were getting shorter every year.\n5. Her evening dress was {4}: hundreds of tiny glass beads were sewn on it.",
      gaps: [
        { a: "bob", why: "Короткая стрижка 1920-х — bob." },
        { a: "corset", why: "Тугое бельё, которое утягивало талию, — корсет." },
        { a: "Charleston", why: "Главный танец эпохи джаза — Charleston." },
        { a: "hemlines", why: "Длина юбок — hemlines. Во множественном числе, потому что дальше were." },
        { a: "beaded", why: "Расшито стеклянными бусинами — beaded." }
      ]
    },
    {
      type: "tense", g: "g07",
      tenses: ["Present Simple", "Present Continuous", "Past Simple"],
      bases: [
        {
          base: "Flappers wear knee-length dresses.",
          tr: [
            { m: "in 1926", tpl: "In 1926 flappers {} knee-length dresses.", a: ["wore"], t: "Past Simple", why: "in 1926 — точный год в прошлом → Past Simple. wear — неправильный глагол: wore." },
            { m: "at the moment", tpl: "At the moment the models {} knee-length dresses for a 1920s shoot.", a: ["are wearing"], t: "Present Continuous", why: "at the moment — прямо сейчас → are + V-ing." },
            { m: "usually", tpl: "Dancers usually {} knee-length dresses for the Charleston.", a: ["wear"], t: "Present Simple", why: "usually — привычка → Present Simple. Dancers = they, поэтому без -s." }
          ]
        },
        {
          base: "Young women cut their hair short.",
          tr: [
            { m: "in the 1920s", tpl: "In the 1920s young women {} their hair short.", a: ["cut"], t: "Past Simple", why: "in the 1920s — прошлое → Past Simple. cut — неправильный глагол, у него все формы одинаковые: cut — cut — cut." },
            { m: "right now", tpl: "Right now the hairdresser {} the model's hair into a bob.", a: ["is cutting"], t: "Present Continuous", why: "right now — в этот момент → is + V-ing. Согласная удваивается: cutting." },
            { m: "two years ago", tpl: "Two years ago she {} her hair into a bob.", a: ["cut"], t: "Past Simple", why: "ago — маркер Past Simple. Форма та же: cut, без -ed." }
          ]
        }
      ]
    },
    {
      type: "builder", g: "g07",
      items: [
        {
          ctx: "Расскажи, что в 1920-е флэпперы перестали носить корсеты.",
          formula: ["Subject", "V2 (Past Simple)", "V-ing + Object", "in + decade"],
          parts: ["Flappers", { v: "STOP", a: ["stopped"], f: [1], rule: "Законченное действие в прошлом → Past Simple. stop — правильный глагол, согласная удваивается: stopped." }, "wearing corsets", { p: ["in", "on", "at"], a: "in", f: [3], rule: "С десятилетиями — предлог in: in the 1920s." }, "the 1920s."]
        },
        {
          ctx: "Клиентка спрашивает про съёмку в прошлом месяце: модель танцевала чарльстон?",
          formula: ["Did", "Subject", "V (base)", "Object", "time"],
          parts: [{ p: ["Did", "Was", "Does"], a: "Did", f: [0], rule: "Вопрос в Past Simple: Did + подлежащее + глагол в начальной форме." }, "the model", { v: "DANCE", a: ["dance"], f: [2], rule: "После did глагол в начальной форме: dance, а не danced." }, "the Charleston at the shoot last month?"]
        }
      ]
    }
  ]
});

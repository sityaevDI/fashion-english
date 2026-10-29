/* Блок 1. Основы: одежда, крой, детали, ткани. Дни 1–5.
   Слово: w — слово, pos — часть речи, ru — перевод, def — определение на простом английском,
   ex — пример с пропуском ___, exA — форма слова в примере (если отличается), note — важное отличие. */

FE.addDay({
  n: 1,
  words: [
    { w: "garment", pos: "noun", ru: "предмет одежды", def: "one single piece of clothing", ex: "Each ___ in this collection is made by hand.", note: "garment — одна вещь; outfit — весь комплект." },
    { w: "outfit", pos: "noun", ru: "наряд, образ", def: "a set of clothes that you wear together", ex: "She wore a bright red ___ to the party." },
    { w: "blouse", pos: "noun", ru: "блузка", def: "a shirt for women, often made of light fabric", ex: "A white silk ___ goes well with a dark skirt." },
    { w: "waistcoat", pos: "noun", ru: "жилет", def: "a short garment without sleeves, often worn under a suit jacket", ex: "He wore a grey ___ under his jacket." },
    { w: "jumpsuit", pos: "noun", ru: "комбинезон", def: "one garment that covers the body and the legs", ex: "A ___ is easy: you don't need to choose a top and trousers." },
    { w: "miniskirt", pos: "noun", ru: "мини-юбка", def: "a very short skirt that ends high above the knee", ex: "The ___ became a symbol of the 1960s." },
    { w: "maxi dress", pos: "noun", ru: "платье макси", def: "a long dress that reaches the ankles", ex: "A light ___ is perfect for a summer evening." },
    { w: "wrap dress", pos: "noun", ru: "платье с запахом", def: "a dress that crosses over at the front and ties at the waist", ex: "Diane von Furstenberg made the ___ famous in the 1970s." },
    { w: "tracksuit", pos: "noun", ru: "спортивный костюм", def: "a jacket and trousers for sport, usually in the same colour", ex: "He goes to the gym in an old blue ___." },
    { w: "trainers", pos: "noun, plural", ru: "кроссовки", def: "sports shoes (in American English: sneakers)", ex: "Many people wear ___ with a suit now." }
  ],
  ex: [
    { type: "flash", cards: ["garment", "outfit", "blouse", "waistcoat", "jumpsuit"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["garment", "предмет одежды", "industry", "индустрия"],
        ["put together", "собрать, составить", "an outfit", "образ, наряд"],
        ["lace up", "зашнуровать", "your trainers", "кроссовки"],
        ["do up", "застегнуть", "the buttons", "пуговицы"],
        ["dress", "одежда, платье", "code", "правила, код"],
        ["evening", "вечер, вечерний", "wear", "одежда (в составных словах)"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "Every morning, millions of people choose their {0} — a set of clothes that work well together. Some people prefer comfortable things, like a {1} and {2} for the weekend. Others love elegant pieces: a silk {3} with a skirt, or a long {4} for a summer evening. And a {5} is a smart choice when you want one garment instead of a top and trousers.",
      gaps: [
        { a: "outfit", o: ["outfit", "garment", "blouse"], why: "«a set of clothes that work together» — это outfit, весь комплект. garment — только одна вещь." },
        { a: "tracksuit", o: ["tracksuit", "waistcoat", "wrap dress"], why: "Для отдыха и комфорта — спортивный костюм. waistcoat и wrap dress — более нарядные вещи." },
        { a: "trainers", o: ["trainers", "blouse", "miniskirt"], why: "К спортивному костюму — кроссовки. В британском английском trainers, в американском sneakers." },
        { a: "blouse", o: ["blouse", "tracksuit", "jumpsuit"], why: "«silk … with a skirt» — шёлковая блузка с юбкой. Комбинезон и спортивный костюм с юбкой не носят." },
        { a: "maxi dress", o: ["maxi dress", "miniskirt", "waistcoat"], why: "«long … for a summer evening» — длинное платье. miniskirt — наоборот, очень короткая." },
        { a: "jumpsuit", o: ["jumpsuit", "blouse", "garment"], why: "«one garment instead of a top and trousers» — комбинезон заменяет и верх, и брюки." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["blouse", "waistcoat", "maxi dress", "trainers"], o: 3, why: "trainers — обувь, остальное — одежда." },
        { w: ["miniskirt", "maxi dress", "wrap dress", "tracksuit"], o: 3, why: "tracksuit — спортивная одежда. Остальное — юбки и платья." },
        { w: ["garment", "outfit", "clothes", "waistcoat"], o: 3, why: "waistcoat — конкретная вещь. Остальные слова — общие названия одежды." }
      ]
    },
    { type: "flash", cards: ["miniskirt", "maxi dress", "wrap dress", "tracksuit", "trainers"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. A {0} has no sleeves, and men often wear it under a jacket.\n2. The {1} industry makes clothes for shops all over the world.\n3. She ties the belt of her {2} at the waist.\n4. A {3} is very short: it ends high above the knee.\n5. Runners and tennis players usually wear {4}.",
      gaps: [
        { a: "waistcoat", why: "Без рукавов и под пиджак — жилет." },
        { a: "garment", why: "garment industry — устойчивое выражение: швейная индустрия." },
        { a: "wrap dress", why: "Пояс завязывают на талии — платье с запахом." },
        { a: "miniskirt", alt: ["mini skirt", "mini-skirt"], why: "Очень короткая — мини-юбка." },
        { a: "trainers", alt: ["sneakers"], why: "Спортивная обувь. sneakers тоже верно, но это американский вариант." }
      ]
    },
    {
      type: "tense", g: "g01",
      tenses: ["Present Simple", "Present Continuous", "Past Simple"],
      bases: [
        {
          base: "The stylist chooses the outfits.",
          tr: [
            { m: "every Monday", tpl: "The stylist {} the outfits every Monday.", a: ["chooses"], t: "Present Simple", why: "every Monday — регулярное действие → Present Simple. The stylist = she → choose + s." },
            { m: "right now", tpl: "Right now the stylist {} the outfits.", a: ["is choosing"], t: "Present Continuous", why: "right now — действие идёт в момент речи → is + V-ing." },
            { m: "yesterday", tpl: "Yesterday the stylist {} the outfits.", a: ["chose"], t: "Past Simple", why: "yesterday — законченное действие в прошлом → Past Simple. choose — неправильный глагол: chose." }
          ]
        },
        {
          base: "Models wear trainers backstage.",
          tr: [
            { m: "usually", tpl: "Models usually {} trainers backstage.", a: ["wear"], t: "Present Simple", why: "usually — привычка → Present Simple. Models = they, поэтому без -s." },
            { m: "at the moment", tpl: "At the moment the models {} trainers backstage.", a: ["are wearing"], t: "Present Continuous", why: "at the moment — прямо сейчас → are + V-ing." },
            { m: "last week", tpl: "Last week the models {} trainers backstage.", a: ["wore"], t: "Past Simple", why: "last week — прошлое → Past Simple. wear → wore." }
          ]
        }
      ]
    },
    {
      type: "spot", g: "g01",
      sets: [
        {
          sentences: ["She usually wears a blouse to work.", "Look! He wear a waistcoat today.", "Models often change their outfits backstage."],
          err: { s: 1, span: "wear", fix: ["is wearing"], g: "g01", note: "Look! и today — действие видно прямо сейчас. Нужен Present Continuous: he is wearing." }
        },
        {
          sentences: ["I am liking this jumpsuit very much.", "The stylist is packing the trainers now.", "This wrap dress fits you perfectly."],
          err: { s: 0, span: "am liking", fix: ["like"], g: "g02", note: "like — глагол состояния, его не ставят в Continuous: I like this jumpsuit." }
        }
      ]
    }
  ]
});

FE.addDay({
  n: 2,
  words: [
    { w: "fit", pos: "noun", ru: "посадка (как сидит вещь)", def: "the way clothes sit on your body: too big, too small or just right", ex: "These trousers have a perfect ___." },
    { w: "loose-fitting", pos: "adjective", ru: "свободного кроя", def: "not tight; there is space between the fabric and the body", ex: "In summer I prefer ___ shirts." },
    { w: "tight-fitting", pos: "adjective", ru: "облегающий, тесный", def: "very close to the body, sometimes too close", ex: "Dancers often wear ___ clothes." },
    { w: "fitted", pos: "adjective", ru: "приталенный, по фигуре", def: "shaped to follow the body nicely, but not tight", ex: "A ___ jacket makes the waist look smaller.", note: "fitted — хорошо сидит по фигуре, но не обязательно обтягивает; form-fitting — плотно облегает." },
    { w: "oversized", pos: "adjective", ru: "объёмный, оверсайз", def: "bigger than your normal size, on purpose", ex: "She wore an ___ jumper with slim jeans." },
    { w: "high-waisted", pos: "adjective", ru: "с высокой талией", def: "with the waist higher than usual", ex: "___ trousers make your legs look longer.", exA: "High-waisted" },
    { w: "figure-hugging", pos: "adjective", ru: "подчёркивающий фигуру", def: "fitting closely and showing the shape of the body", ex: "She wore a ___ black dress to the premiere." },
    { w: "silhouette", pos: "noun", ru: "силуэт", def: "the overall shape of a garment or an outfit", ex: "The 1950s ___ had a small waist and a full skirt." },
    { w: "cut", pos: "noun", ru: "крой", def: "the way the fabric is cut and shaped to make a garment", ex: "The ___ of this coat is simple and elegant." },
    { w: "boxy", pos: "adjective", ru: "прямой, квадратного силуэта", def: "square in shape; it does not follow the body", ex: "A ___ jacket hides the waist.", note: "boxy — прямой, без прилегания; oversized — специально на размер больше." }
  ],
  ex: [
    { type: "flash", cards: ["fit", "loose-fitting", "tight-fitting", "fitted", "oversized"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["fit like", "сидеть как", "a glove", "перчатка"],
        ["take in", "ушить", "at the waist", "в талии"],
        ["an hourglass", "песочные часы", "silhouette", "силуэт"],
        ["two sizes", "на два размера", "too big", "слишком большой"],
        ["go up", "перейти выше", "a size", "на размер"],
        ["tight across", "тесный по", "the shoulders", "в плечах"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "For a stylist, the {0} of a garment is more important than the label. A {1} jacket follows the shape of the body, but it is not tight. A {2} dress shows every line of the body, so stylists often choose it for evening events. {3} clothes, on the other hand, are bigger than your normal size on purpose. The {4} of the whole outfit — its overall shape — must look balanced: if the top is {5}, the trousers are often slim.",
      gaps: [
        { a: "fit", o: ["fit", "outfit", "garment"], why: "fit — посадка, как вещь сидит. Дорогая вещь с плохой посадкой выглядит дёшево." },
        { a: "fitted", o: ["fitted", "oversized", "boxy"], why: "«follows the shape… but it is not tight» — fitted. oversized и boxy фигуру не повторяют." },
        { a: "figure-hugging", o: ["figure-hugging", "loose-fitting", "boxy"], why: "«shows every line of the body» — figure-hugging, плотно облегает и подчёркивает фигуру." },
        { a: "Oversized", o: ["Oversized", "Fitted", "High-waisted"], why: "«bigger than your normal size on purpose» — oversized, специально больше размера." },
        { a: "silhouette", o: ["silhouette", "cut", "fit"], why: "«its overall shape» — общая форма образа = silhouette. cut — крой одной вещи, fit — посадка." },
        { a: "loose-fitting", o: ["loose-fitting", "tight-fitting", "figure-hugging"], why: "Баланс: если верх свободный, низ делают узким." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["loose-fitting", "oversized", "boxy", "figure-hugging"], o: 3, why: "figure-hugging облегает фигуру. Остальные — про свободные вещи." },
        { w: ["silhouette", "cut", "fit", "waistcoat"], o: 3, why: "waistcoat — вещь. Остальное — слова про форму и посадку." },
        { w: ["tight-fitting", "figure-hugging", "fitted", "oversized"], o: 3, why: "oversized — большой и свободный. Остальные близко к телу." }
      ]
    },
    { type: "flash", cards: ["high-waisted", "figure-hugging", "silhouette", "cut", "boxy"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. {0} jeans sit high, near the belly button.\n2. This coat has a simple, elegant {1}: the tailor shaped the fabric very carefully.\n3. The dress is two sizes too big — the {2} is wrong.\n4. A {3} jacket is square in shape and hides the waist.\n5. In the 1950s, the fashionable {4} was an hourglass.",
      gaps: [
        { a: "High-waisted", alt: ["high waisted"], why: "Высокая посадка на талии — high-waisted." },
        { a: "cut", why: "Как ткань раскроена и сформирована — крой, cut." },
        { a: "fit", why: "Вещь не того размера — неправильная посадка, fit." },
        { a: "boxy", why: "Квадратный, не по фигуре — boxy." },
        { a: "silhouette", why: "Общая форма — силуэт. «Песочные часы» — hourglass silhouette." }
      ]
    },
    {
      type: "builder", g: "g01",
      items: [
        {
          ctx: "Идёт примерка. Что портной делает прямо сейчас?",
          formula: ["Subject", "am / is / are", "V-ing", "Object", "at the moment"],
          parts: ["The tailor", { v: "TAKE IN", a: ["is taking in"], f: [1, 2], rule: "Действие идёт сейчас → am / is / are + V-ing. The tailor = he → is. take in → taking in." }, "the jacket", { p: ["at", "in", "on"], a: "at", f: [4], rule: "Устойчивое выражение: at the moment — «в данный момент». Не in и не on." }, "the moment."]
        },
        {
          ctx: "Привычка: что стилист делает перед каждой съёмкой.",
          formula: ["Subject", "always", "V(-s)", "Object", "before + event"],
          parts: ["She always", { v: "CHECK", a: ["checks"], f: [2], rule: "always — привычка → Present Simple. She → глагол + -s: checks." }, "the fit of every garment", { p: ["before", "since", "during"], a: "before", f: [4], rule: "before the shoot — «перед съёмкой». since — «с тех пор как», during — «во время»." }, "the shoot."]
        }
      ]
    },
    {
      type: "spot", g: "g01",
      sets: [
        {
          sentences: ["This jacket fits you perfectly.", "Right now the tailor takes in the waist.", "Oversized coats are popular this winter."],
          err: { s: 1, span: "takes in", fix: ["is taking in"], g: "g01", note: "Right now — действие идёт прямо сейчас. Нужен Present Continuous: is taking in." }
        },
        {
          sentences: ["She is wearing high-waisted jeans today.", "Does this dress fit me?", "I am not understanding the word «silhouette»."],
          err: { s: 2, span: "am not understanding", fix: ["don't understand", "do not understand"], g: "g02", note: "understand — глагол состояния: I don't understand." }
        }
      ]
    }
  ]
});

FE.addDay({
  n: 3,
  words: [
    { w: "neckline", pos: "noun", ru: "вырез горловины", def: "the shape of the top edge of a dress or top, around the neck", ex: "A V-___ makes the neck look longer." },
    { w: "hem", pos: "noun", ru: "подол, низ изделия", def: "the bottom edge of a skirt, dress or trousers, folded and sewn", ex: "The ___ of her skirt is just above the knee." },
    { w: "sleeve", pos: "noun", ru: "рукав", def: "the part of a garment that covers your arm", ex: "In summer I wear shirts with short ___.", exA: "sleeves" },
    { w: "cuff", pos: "noun", ru: "манжета", def: "the end of a sleeve, around the wrist", ex: "His shirt has silver buttons on the ___.", exA: "cuffs" },
    { w: "collar", pos: "noun", ru: "воротник", def: "the part of a shirt or coat that goes around the neck", ex: "In the 1970s, shirts had very large ___.", exA: "collars" },
    { w: "seam", pos: "noun", ru: "шов", def: "the line where two pieces of fabric are sewn together", ex: "The ___ on the side of my jeans is coming apart." },
    { w: "stitching", pos: "noun", ru: "строчка", def: "the lines of thread that you can see on a garment", ex: "Jeans often have orange ___." },
    { w: "waistband", pos: "noun", ru: "пояс (пришитый к брюкам или юбке)", def: "the strip of fabric around the top of trousers or a skirt", ex: "These trousers have an elastic ___, so they are very comfortable." },
    { w: "shoulder pads", pos: "noun, plural", ru: "подплечники", def: "pieces of soft material inside a jacket that make the shoulders look wider", ex: "In the 1980s, women's jackets had big ___." },
    { w: "fringe", pos: "noun", ru: "бахрома", def: "thin strips of fabric or leather that hang from the edge of a garment", ex: "Her suede jacket has a long ___ on the sleeves.", note: "В британском английском fringe — ещё и чёлка. В моде одежды — бахрома." }
  ],
  ex: [
    { type: "flash", cards: ["neckline", "hem", "sleeve", "cuff", "collar"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["a V-", "V-образный", "neckline", "вырез"],
        ["roll up", "закатать", "your sleeves", "рукава"],
        ["contrast", "контрастная", "stitching", "строчка"],
        ["a button-down", "на пуговицах", "collar", "воротник"],
        ["an elastic", "эластичный", "waistband", "пояс"],
        ["let down", "отпустить, удлинить", "the hem", "подол"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "How do you know if a garment is good quality? A stylist always checks the details. First, look at the {0}: where two pieces of fabric meet, the line must be straight and strong. Then check the {1} — the bottom edge of the garment. It should be even. Look at the {2}: small, neat lines of thread usually mean good work. Finally, check the {3} at the end of the sleeves and the {4} around the neck: they must keep their shape.",
      gaps: [
        { a: "seams", o: ["seams", "hems", "sleeves"], why: "«where two pieces of fabric meet» — место соединения ткани, шов." },
        { a: "hem", o: ["hem", "cuff", "collar"], why: "«the bottom edge» — нижний край вещи, подол. cuff — край рукава." },
        { a: "stitching", o: ["stitching", "fringe", "waistband"], why: "«lines of thread» — строчка. fringe — бахрома, waistband — пояс." },
        { a: "cuffs", o: ["cuffs", "collars", "shoulder pads"], why: "«at the end of the sleeves» — манжеты." },
        { a: "collar", o: ["collar", "hem", "seam"], why: "«around the neck» — воротник. Осторожно: neckline — это вырез, а не деталь, которая держит форму." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["sleeve", "cuff", "collar", "denim"], o: 3, why: "denim — ткань. Остальное — детали одежды." },
        { w: ["hem", "waistband", "neckline", "outfit"], o: 3, why: "outfit — весь образ. Остальное — части одной вещи." },
        { w: ["seam", "stitching", "fringe", "silhouette"], o: 3, why: "silhouette — общая форма. Остальное — конкретные детали, которые можно потрогать." }
      ]
    },
    { type: "flash", cards: ["seam", "stitching", "waistband", "shoulder pads", "fringe"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. A shirt without {0} is called sleeveless.\n2. In the 1980s, {1} made jackets look powerful.\n3. Cowboy jackets often have a long leather {2}.\n4. This skirt is too long — let's shorten the {3}.\n5. A deep {4} shows the neck and shoulders.",
      gaps: [
        { a: "sleeves", why: "sleeveless — без рукавов, от sleeve." },
        { a: "shoulder pads", why: "Подплечники делали плечи шире — символ power dressing 80-х." },
        { a: "fringe", why: "Ковбойский стиль — кожаная бахрома." },
        { a: "hem", why: "Укоротить вещь = поднять подол, shorten the hem." },
        { a: "neckline", why: "Глубокий вырез — a deep neckline." }
      ]
    },
    {
      type: "tense", g: "g01",
      tenses: ["Present Simple", "Present Continuous", "Past Simple"],
      bases: [
        {
          base: "The tailor shortens the hem.",
          tr: [
            { m: "always", tpl: "The tailor always {} the hem by hand.", a: ["shortens"], t: "Present Simple", why: "always — привычка → Present Simple, he → -s." },
            { m: "right now", tpl: "Right now the tailor {} the hem.", a: ["is shortening"], t: "Present Continuous", why: "right now — в этот момент → is + V-ing." },
            { m: "yesterday", tpl: "Yesterday the tailor {} the hem.", a: ["shortened"], t: "Past Simple", why: "yesterday — прошлое. Правильный глагол → + -ed." }
          ]
        },
        {
          base: "We check the stitching.",
          tr: [
            { m: "every morning", tpl: "We {} the stitching every morning.", a: ["check"], t: "Present Simple", why: "every morning — регулярно → Present Simple. We — без -s." },
            { m: "at the moment", tpl: "At the moment we {} the stitching.", a: ["are checking"], t: "Present Continuous", why: "at the moment — сейчас → are + V-ing." },
            { m: "last Friday", tpl: "Last Friday we {} the stitching.", a: ["checked"], t: "Past Simple", why: "last Friday — прошлое → check + -ed." }
          ]
        }
      ]
    },
    {
      type: "builder", g: "g01",
      items: [
        {
          ctx: "Примерка. Ты видишь, что делает ассистент.",
          formula: ["Look! Subject", "am / is / are", "V-ing", "Object", "of + noun"],
          parts: ["Look! The assistant", { v: "ROLL UP", a: ["is rolling up"], f: [1, 2], rule: "Look! — действие видно прямо сейчас → is + V-ing. roll → rolling, up остаётся после глагола." }, "the sleeves", { p: ["of", "on", "at"], a: "of", f: [4], rule: "the sleeves of the shirt — «рукава рубашки». Принадлежность — через of." }, "the shirt."]
        },
        {
          ctx: "Общий факт о качественной вещи.",
          formula: ["Subject", "usually", "V(-s)", "Object", "on + part"],
          parts: ["A good jacket usually", { v: "HAVE", a: ["has"], f: [2], rule: "usually — обычное положение вещей → Present Simple. A jacket = it, поэтому have → has." }, "buttons", { p: ["on", "in", "at"], a: "on", f: [4], rule: "Пуговицы находятся на поверхности манжет → on the cuffs." }, "the cuffs."]
        }
      ]
    }
  ]
});

FE.addDay({
  n: 4,
  words: [
    { w: "denim", pos: "noun", ru: "деним, джинсовая ткань", def: "a strong cotton fabric, usually blue, used to make jeans", ex: "Jeans are usually made of ___." },
    { w: "suede", pos: "noun", ru: "замша", def: "soft leather with a surface like velvet", ex: "Don't wear your ___ boots in the rain!" },
    { w: "leather", pos: "noun", ru: "кожа", def: "material made from the skin of an animal", ex: "Punks often wore black ___ jackets." },
    { w: "corduroy", pos: "noun", ru: "вельвет", def: "a thick cotton fabric with soft raised lines", ex: "In the 1970s, many students wore ___ trousers." },
    { w: "velvet", pos: "noun", ru: "бархат", def: "a soft, thick fabric with a smooth surface, often used for evening clothes", ex: "A dark green ___ dress looks rich and elegant." },
    { w: "cotton", pos: "noun", ru: "хлопок", def: "a natural fabric made from a plant; light and comfortable", ex: "Most T-shirts are made of ___." },
    { w: "polyester", pos: "noun", ru: "полиэстер", def: "a synthetic fabric that is cheap and doesn't crease easily", ex: "This ___ shirt is cheap, but it feels hot in summer." },
    { w: "synthetic fabric", pos: "noun", ru: "синтетическая ткань", def: "a fabric made from chemicals, not from plants or animals", ex: "Nylon and polyester are ___.", exA: "synthetic fabrics" },
    { w: "printed fabric", pos: "noun", ru: "набивная ткань, ткань с принтом", def: "fabric with a pattern put on its surface with ink", ex: "Floral ___ was very popular in the 1970s.", note: "printed — рисунок нанесён краской сверху; patterned — любой рисунок, в том числе вытканный." },
    { w: "stretchy fabric", pos: "noun", ru: "эластичная ткань", def: "a fabric that becomes longer when you pull it and then goes back", ex: "Leggings are made of ___." }
  ],
  ex: [
    { type: "flash", cards: ["denim", "suede", "leather", "corduroy", "velvet"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["faded", "выцветший", "denim", "деним"],
        ["crushed", "мятый", "velvet", "бархат"],
        ["organic", "органический", "cotton", "хлопок"],
        ["genuine", "натуральный, настоящий", "leather", "кожа"],
        ["a floral", "цветочный", "print", "принт"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "Every garment has a label that shows its fabric composition. Natural fabrics, like {0} and linen, come from plants. {1} and {2} come from animals: they are expensive, but they last for years. {3}, on the other hand, is made from chemicals. It is cheap and doesn't crease, but it can feel hot in summer. Many modern jeans contain a little elastane, so the {4} is stretchy and fits the body better.",
      gaps: [
        { a: "cotton", o: ["cotton", "velvet", "polyester"], why: "«come from plants» — хлопок растёт на растении. Полиэстер — синтетика." },
        { a: "Leather", o: ["Leather", "Corduroy", "Polyester"], why: "«come from animals» — кожа. Вельвет обычно хлопковый." },
        { a: "suede", o: ["suede", "denim", "cotton"], why: "Замша — тоже кожа, только с бархатистой поверхностью." },
        { a: "Polyester", o: ["Polyester", "Velvet", "Suede"], why: "«made from chemicals… doesn't crease» — полиэстер, синтетическая ткань." },
        { a: "denim", o: ["denim", "suede", "velvet"], why: "Джинсы шьют из денима. Эластан делает его тянущимся." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["cotton", "leather", "suede", "polyester"], o: 3, why: "polyester — синтетика, остальное — натуральные материалы." },
        { w: ["velvet", "corduroy", "denim", "collar"], o: 3, why: "collar — деталь одежды, остальное — ткани." },
        { w: ["printed fabric", "patterned fabric", "floral print", "plain fabric"], o: 3, why: "plain fabric — однотонная ткань, без рисунка." }
      ]
    },
    { type: "flash", cards: ["cotton", "polyester", "synthetic fabric", "printed fabric", "stretchy fabric"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. Cowboy jackets are often made of soft brown {0}.\n2. Leggings are made of {1} fabric.\n3. {2} trousers have soft raised lines on the fabric.\n4. A {3} jacket feels soft and looks rich — perfect for a party.\n5. This T-shirt is 100% {4}: it's natural and light.",
      gaps: [
        { a: "suede", alt: ["leather"], why: "Мягкая коричневая кожа с бархатистой поверхностью — замша. leather тоже засчитываем." },
        { a: "stretchy", why: "Легинсы тянутся — stretchy fabric." },
        { a: "Corduroy", why: "Мягкие выпуклые полоски — вельвет." },
        { a: "velvet", why: "Мягкая, «богатая» ткань для вечера — бархат." },
        { a: "cotton", why: "Натуральная и лёгкая — хлопок." }
      ]
    },
    {
      type: "builder", g: "g03",
      items: [
        {
          ctx: "Опиши, из какого материала вещь.",
          formula: ["Subject", "am / is / are", "made", "of", "material"],
          parts: ["These jeans", { v: "BE", a: ["are"], f: [1], rule: "jeans — всегда множественное число → are." }, "made", { p: ["of", "from", "by"], a: "of", f: [3], rule: "Материал вещи видно → made of. by — про того, кто сделал." }, "denim."]
        },
        {
          ctx: "Из какого сырья делают материал (сырьё уже не узнать).",
          formula: ["Subject", "is", "made", "from", "raw material"],
          parts: ["Leather", { v: "BE", a: ["is"], f: [1], rule: "Leather — неисчисляемое → is." }, "made", { p: ["from", "of", "with"], a: "from", f: [3], rule: "Шкура животного превратилась в кожу — сырьё изменилось → made from." }, "animal skin."]
        },
        {
          ctx: "Прямо сейчас дизайнер выбирает ткань.",
          formula: ["Subject", "am / is / are", "V-ing", "Object", "for + purpose"],
          parts: ["The designer", { v: "CHOOSE", a: ["is choosing"], f: [1, 2], rule: "Прямо сейчас → is + V-ing. choose → choosing (e уходит)." }, "a fabric", { p: ["for", "to", "at"], a: "for", f: [4], rule: "Для чего — for: for the new collection." }, "the new collection."]
        }
      ]
    },
    {
      type: "spot", g: "g03",
      sets: [
        {
          sentences: ["These boots are made by suede.", "Velvet feels soft and warm.", "Cotton comes from a plant."],
          err: { s: 0, span: "by", fix: ["of"], g: "g03", note: "by — про автора, а материал вещи — made of: made of suede." }
        },
        {
          sentences: ["She is preferring natural fabrics.", "Polyester doesn't crease easily.", "We are looking for a printed fabric right now."],
          err: { s: 0, span: "is preferring", fix: ["prefers"], g: "g02", note: "prefer — глагол состояния, только Simple: she prefers." }
        }
      ]
    }
  ]
});

FE.addDay({
  n: 5,
  words: [
    { w: "photoshoot", pos: "noun", ru: "фотосъёмка", def: "an event where a photographer takes professional photos", ex: "The ___ starts at nine, so the stylist arrives at seven." },
    { w: "catalogue", pos: "noun", ru: "каталог", def: "a book or website that shows a brand's products with photos and prices", ex: "The brand needs forty photos for its autumn ___." },
    { w: "look", pos: "noun", ru: "образ, лук", def: "a complete outfit that a stylist creates", ex: "We shot twelve ___ for the lookbook.", exA: "looks" },
    { w: "brief", pos: "noun", ru: "бриф, задание", def: "short instructions from a client about what they want", ex: "The client sent a ___: casual, bright, for students." },
    { w: "mood board", pos: "noun", ru: "мудборд", def: "a collage of images, colours and fabrics that shows the idea of a project", ex: "Before the shoot, the stylist makes a ___ with photos from the 1970s." },
    { w: "fitting", pos: "noun", ru: "примерка", def: "a meeting where the model tries on the clothes before the shoot", ex: "We have a ___ with the model on Thursday." },
    { w: "clothing rail", pos: "noun", ru: "рейл, стойка для одежды", def: "a metal frame on wheels where you hang clothes", ex: "All the looks are on the ___, ready for the shoot." },
    { w: "campaign", pos: "noun", ru: "рекламная кампания", def: "a series of adverts and photos that a brand uses to sell a collection", ex: "The new ___ shows the collection on the streets of Paris." },
    { w: "launch", pos: "verb", ru: "запускать", def: "to start something new and show it to the public", ex: "The brand plans to ___ its summer campaign in May." },
    { w: "budget", pos: "noun", ru: "бюджет", def: "the amount of money you can spend", ex: "The ___ for the shoot is small, so we use only clothes from the brand." }
  ],
  ex: [
    { type: "flash", cards: ["photoshoot", "catalogue", "look", "brief", "mood board"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["launch", "запустить", "a campaign", "кампанию"],
        ["stay within", "уложиться в", "the budget", "бюджет"],
        ["follow", "следовать", "the brief", "брифу"],
        ["steam", "отпарить", "the garments", "вещи"],
        ["book", "забронировать", "a photographer", "фотографа"],
        ["pin images on", "прикрепить картинки на", "a mood board", "мудборд"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "Today Anna has a {0} for a summer {1}. The client's {2} is simple: bright colours, easy shapes, young people. Last week Anna made a {3} with photos, colours and fabric samples. Yesterday she had a {4} with the model, so today all the {5} are ready on the {6}. The {7} is small, so Anna uses only clothes from the brand.",
      gaps: [
        { a: "photoshoot", o: ["photoshoot", "budget", "brief"], why: "Сегодня у стилиста — съёмка." },
        { a: "catalogue", o: ["catalogue", "fitting", "clothing rail"], why: "Снимают для летнего каталога бренда." },
        { a: "brief", o: ["brief", "mood board", "look"], why: "Инструкции клиента — бриф. Мудборд делает сам стилист." },
        { a: "mood board", o: ["mood board", "catalogue", "campaign"], why: "Коллаж из фото, цветов и образцов ткани — мудборд." },
        { a: "fitting", o: ["fitting", "budget", "brief"], why: "Встреча с моделью, чтобы примерить вещи, — примерка." },
        { a: "looks", o: ["looks", "budgets", "briefs"], why: "Готовые образы для съёмки — looks." },
        { a: "clothing rail", o: ["clothing rail", "mood board", "catalogue"], why: "Образы висят на рейле." },
        { a: "budget", o: ["budget", "campaign", "fitting"], why: "Мало денег — маленький бюджет." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["photographer", "stylist", "model", "catalogue"], o: 3, why: "catalogue — вещь. Остальное — люди на съёмке." },
        { w: ["launch", "start", "begin", "finish"], o: 3, why: "finish — закончить. Остальные три — «начать, запустить»." },
        { w: ["fashionable", "stylish", "trendy", "old-fashioned"], o: 3, why: "old-fashioned — старомодный. Остальные — «модный»." }
      ]
    },
    { type: "flash", cards: ["fitting", "clothing rail", "campaign", "launch", "budget"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. The client sends a {0} before the project starts.\n2. A stylist creates a {1} — one complete outfit for one photo.\n3. The brand wants to {2} a new campaign in spring.\n4. We don't have much money: the {3} is very small.\n5. The {4} has sixty pages of clothes and prices.",
      gaps: [
        { a: "brief", why: "Задание от клиента до начала проекта — бриф." },
        { a: "look", why: "Один готовый образ — look." },
        { a: "launch", why: "launch a campaign — запустить кампанию." },
        { a: "budget", why: "Сколько денег можно потратить — бюджет." },
        { a: "catalogue", why: "Страницы с вещами и ценами — каталог." }
      ]
    },
    {
      type: "tense", g: "g01",
      tenses: ["Present Simple", "Present Continuous", "Past Simple"],
      bases: [
        {
          base: "The stylist steams the clothes.",
          tr: [
            { m: "before every shoot", tpl: "The stylist {} the clothes before every shoot.", a: ["steams"], t: "Present Simple", why: "before every shoot — каждый раз, регулярно → Present Simple, she → -s." },
            { m: "right now", tpl: "Right now the stylist {} the clothes.", a: ["is steaming"], t: "Present Continuous", why: "right now — в этот момент → is + V-ing." },
            { m: "yesterday morning", tpl: "Yesterday morning the stylist {} the clothes.", a: ["steamed"], t: "Past Simple", why: "yesterday morning — прошлое → steam + -ed." }
          ]
        },
        {
          base: "The brand launches a campaign.",
          tr: [
            { m: "every spring", tpl: "The brand {} a campaign every spring.", a: ["launches"], t: "Present Simple", why: "every spring — регулярно. После -ch добавляем -es: launches." },
            { m: "this week", tpl: "This week the brand {} a new campaign.", a: ["is launching"], t: "Present Continuous", why: "this week — то, что происходит в этот период → is + V-ing." },
            { m: "last year", tpl: "Last year the brand {} a big campaign.", a: ["launched"], t: "Past Simple", why: "last year — прошлое → launch + -ed." }
          ]
        }
      ]
    },
    {
      type: "spot", g: "g01",
      sets: [
        {
          sentences: ["The photographer is taking pictures at the moment.", "Usually the stylist is arriving two hours before the shoot.", "The client wants bright colours."],
          err: { s: 1, span: "is arriving", fix: ["arrives"], g: "g01", note: "Usually — привычка → Present Simple: the stylist arrives." }
        },
        {
          sentences: ["We are needing a bigger budget.", "Anna is making a mood board now.", "The model tries on the looks every Thursday."],
          err: { s: 0, span: "are needing", fix: ["need"], g: "g02", note: "need — глагол состояния: we need." }
        }
      ]
    }
  ]
});

/* Блок 1. Основы: одежда, крой, детали, ткани. Дни 1–10.
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

FE.addDay({
  n: 6,
  words: [
    { w: "pattern", pos: "noun", ru: "узор, рисунок", def: "a design of lines, shapes or colours that repeats on fabric", ex: "I love the ___ on your scarf — are those little birds?" },
    { w: "print", pos: "noun", ru: "принт", def: "a picture or design put on fabric with ink", ex: "The T-shirt has a big ___ of a cat on the front.", note: "pattern — любой повторяющийся рисунок, даже вытканный; print — рисунок, нанесённый краской сверху." },
    { w: "striped", pos: "adjective", ru: "в полоску", def: "with long thin lines of different colours", ex: "A navy and white ___ top is a classic summer piece." },
    { w: "checked", pos: "adjective", ru: "в клетку", def: "with a pattern of squares in different colours", ex: "He wore a red ___ shirt with jeans.", note: "checked — британский вариант; в американском чаще plaid или checkered." },
    { w: "polka dot", pos: "noun", ru: "горошек (узор)", def: "one of many round spots of the same size that make a pattern on fabric", ex: "She wore a red dress with white ___.", exA: "polka dots" },
    { w: "floral", pos: "adjective", ru: "цветочный, в цветочек", def: "with a pattern of flowers", ex: "A light ___ dress is perfect for a spring wedding." },
    { w: "animal print", pos: "noun", ru: "животный принт", def: "a pattern that looks like the skin of a leopard, zebra or snake", ex: "Leopard is the most popular ___ in fashion." },
    { w: "plain", pos: "adjective", ru: "однотонный, без рисунка", def: "in one colour, with no pattern", ex: "Wear a ___ top with a bold skirt — one pattern is enough." },
    { w: "neutral", pos: "adjective", ru: "нейтральный (о цвете)", def: "not bright: beige, grey, white, black or brown", ex: "___ colours go with almost everything.", exA: "Neutral" },
    { w: "clash", pos: "verb", ru: "не сочетаться, «спорить» (о цветах)", def: "to look bad together because the colours or patterns are too different", ex: "Your pink bag and orange shoes ___ — try black shoes." }
  ],
  ex: [
    { type: "flash", cards: ["pattern", "print", "striped", "checked", "polka dot"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["a leopard", "леопардовый", "print", "принт"],
        ["polka", "«полька»", "dots", "точки → горошек"],
        ["clash", "не сочетаться", "with the bag", "с сумкой"],
        ["neutral", "нейтральные", "tones", "оттенки"],
        ["mix", "смешивать, сочетать", "prints", "принты"],
        ["head-to-toe", "с головы до ног", "denim", "деним"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "Patterns can make or break an outfit. {0} shirts have long thin lines, and {1} skirts have a pattern of squares. {2} dresses with roses or daisies look romantic in spring. If you want to look wild and bold, choose a top in {3}, like leopard or zebra. But be careful: two loud patterns can {4}. That's why stylists often add {5} pieces — in one colour, with no pattern. Beige, grey, white and black are {6} colours: they go with almost everything.",
      gaps: [
        { a: "Striped", o: ["Striped", "Checked", "Floral"], why: "«long thin lines» — полоски, striped. checked — клетка, floral — цветы." },
        { a: "checked", o: ["checked", "striped", "plain"], why: "«a pattern of squares» — клетка, checked." },
        { a: "Floral", o: ["Floral", "Plain", "Checked"], why: "«with roses or daisies» — рисунок из цветов, floral. Plain — без рисунка вообще." },
        { a: "animal print", o: ["animal print", "denim", "velvet"], why: "«like leopard or zebra» — животный принт. denim и velvet — ткани, а не рисунок." },
        { a: "clash", o: ["clash", "fit", "launch"], why: "Два ярких узора рядом «спорят» друг с другом — clash. fit — сидеть по фигуре, launch — запускать." },
        { a: "plain", o: ["plain", "floral", "checked"], why: "«in one colour, with no pattern» — однотонные, plain." },
        { a: "neutral", o: ["neutral", "floral", "striped"], why: "Бежевый, серый, белый и чёрный — нейтральные цвета, neutral. floral и striped — это узоры, а не цвета." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["striped", "checked", "plain", "floral"], o: 2, why: "plain — однотонный, без рисунка. Остальные три — узоры." },
        { w: ["beige", "grey", "neon pink", "white"], o: 2, why: "neon pink — яркий кислотный цвет. Бежевый, серый и белый — нейтральные." },
        { w: ["leopard", "zebra", "snake", "rose"], o: 3, why: "rose — цветочный рисунок. Леопард, зебра и змея — животные принты." }
      ]
    },
    { type: "flash", cards: ["floral", "animal print", "plain", "neutral", "clash"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. Zebra and leopard patterns are both types of {0}.\n2. This T-shirt has no pattern at all — it is completely {1}.\n3. Orange and pink sometimes {2}, but some designers love this bold mix.\n4. The dress has small white {3} on a navy background.\n5. The T-shirt has a photo of a cat on the front — a funny {4}.",
      gaps: [
        { a: "animal print", alt: ["animal prints"], why: "Леопард и зебра — животный принт, animal print." },
        { a: "plain", why: "Совсем без рисунка — plain." },
        { a: "clash", why: "Цвета, которые «спорят» друг с другом, — clash." },
        { a: "polka dots", alt: ["dots"], why: "Маленькие белые кружочки — горошек, polka dots." },
        { a: "print", why: "Картинка, нанесённая краской на ткань, — print. Это не узор: картинка одна и не повторяется." }
      ]
    },
    {
      type: "builder", g: "g04",
      items: [
        {
          ctx: "Опиши мудборд: на нём есть несколько фото с животным принтом.",
          formula: ["There", "is / are", "some / any", "plural noun", "on + place"],
          parts: ["There", { v: "BE", a: ["are"], f: [1], rule: "Дальше множественное число (photos) → there are." }, { p: ["some", "any", "a"], a: "some", f: [2], rule: "Утвердительное предложение, несколько вещей → some. any — в вопросах и отрицаниях." }, "photos of animal prints on the mood board."]
        },
        {
          ctx: "На рейле нет ни одной рубашки в клетку.",
          formula: ["There", "isn't / aren't", "any", "plural noun", "on + place"],
          parts: ["There", { v: "NOT BE", a: ["aren't", "are not"], f: [1], rule: "Отрицание со множественным числом (shirts) → there aren't." }, { p: ["any", "some", "no"], a: "any", f: [2], rule: "В отрицании — any: there aren't any. Двойного отрицания (aren't no) в английском нет." }, "checked shirts on the clothing rail."]
        },
        {
          ctx: "Спроси ассистента, есть ли в коллекции платье в горошек.",
          formula: ["Is / Are", "there", "a / any", "noun", "in + place?"],
          parts: [{ v: "BE", a: ["Is"], f: [0], rule: "Вопрос: Is there + одна вещь (a dress), Are there + несколько." }, "there", { p: ["a", "any", "some"], a: "a", f: [2], rule: "Одно платье — a. any ставят перед множественным или неисчисляемым: Are there any dresses?" }, "polka dot dress in the collection?"]
        }
      ]
    },
    {
      type: "spot", g: "g04",
      sets: [
        {
          sentences: ["There is some pink and white stripes on this shirt.", "There aren't any floral prints in the catalogue.", "Is there a plain T-shirt on the rail?"],
          err: { s: 0, span: "is", fix: ["are"], g: "g04", note: "stripes — множественное число, поэтому there are, а не there is." }
        },
        {
          sentences: ["We need some neutral colours for this shoot.", "There aren't some animal prints in the new collection.", "These checked trousers clash with the jacket."],
          err: { s: 1, span: "some", fix: ["any"], g: "g04", note: "В отрицании нужен any: there aren't any animal prints." }
        }
      ]
    }
  ]
});

FE.addDay({
  n: 7,
  words: [
    { w: "accessories", pos: "noun, plural", ru: "аксессуары", def: "small things you wear or carry with your clothes, like bags, belts and jewellery", ex: "The right ___ can change a simple outfit completely." },
    { w: "jewellery", pos: "noun", ru: "украшения, бижутерия", def: "rings, necklaces, earrings and other things you wear for decoration", ex: "She doesn't wear much ___ — just one gold ring.", note: "jewellery — неисчисляемое: much jewellery, a piece of jewellery, но не jewelleries. В американском английском — jewelry." },
    { w: "necklace", pos: "noun", ru: "ожерелье, колье, цепочка", def: "a piece of jewellery that you wear around your neck", ex: "A long pearl ___ looks great with a black dress." },
    { w: "earrings", pos: "noun, plural", ru: "серьги", def: "pieces of jewellery that you wear on your ears", ex: "Big gold ___ make a simple outfit look bright." },
    { w: "bracelet", pos: "noun", ru: "браслет", def: "a piece of jewellery that you wear around your wrist", ex: "She wears a thin silver ___ on her left wrist." },
    { w: "scarf", pos: "noun", ru: "шарф, платок", def: "a piece of fabric that you wear around your neck or on your head", ex: "A silk ___ adds colour to a dark coat." },
    { w: "clutch", pos: "noun", ru: "клатч", def: "a small flat bag with no handle that you hold in your hand", ex: "For the party she took a small gold ___." },
    { w: "statement piece", pos: "noun", ru: "вещь-акцент, главный акцент образа", def: "one bold, eye-catching item that everyone notices first in an outfit", ex: "The huge red necklace is the ___ of this look.", note: "В образе обычно один statement piece — остальные вещи спокойнее, чтобы не спорить с ним." },
    { w: "chunky", pos: "adjective", ru: "массивный, крупный", def: "big, thick and heavy-looking", ex: "A ___ necklace makes a plain T-shirt look interesting." },
    { w: "layer", pos: "verb", ru: "носить слоями, многослойно", def: "to wear several things one on top of another", ex: "Stylists often ___ thin gold necklaces of different lengths." }
  ],
  ex: [
    { type: "flash", cards: ["accessories", "jewellery", "necklace", "earrings", "bracelet"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["a pearl", "жемчужное", "necklace", "ожерелье"],
        ["a silk", "шёлковый", "scarf", "платок"],
        ["a piece of", "одно (изделие)", "jewellery", "украшение"],
        ["layer", "носить слоями", "gold chains", "золотые цепочки"],
        ["hoop", "кольца", "earrings", "серьги-кольца"],
        ["carry", "держать, носить в руке", "a clutch", "клатч"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "Accessories can turn a simple outfit into a great look. A stylist usually starts with one {0} — the thing everyone notices first, for example a big {1} necklace. Then the rest of the {2} must be quieter: small gold {3} and one thin {4} on the wrist. For an evening event, the model holds a small {5} instead of a big bag. In autumn, a silk {6} around the neck adds colour to a black coat.",
      gaps: [
        { a: "statement piece", o: ["statement piece", "clutch", "scarf"], why: "«the thing everyone notices first» — главный акцент образа, statement piece." },
        { a: "chunky", o: ["chunky", "knee-length", "boyish"], why: "Большое тяжёлое ожерелье — chunky. knee-length — про длину юбки, boyish — про силуэт." },
        { a: "jewellery", o: ["jewellery", "denim", "corset"], why: "Дальше перечислены серьги и браслет — это украшения, jewellery." },
        { a: "earrings", o: ["earrings", "scarves", "clutches"], why: "Маленькие золотые… — серьги. Маленьких золотых шарфов и клатчей не бывает." },
        { a: "bracelet", o: ["bracelet", "necklace", "scarf"], why: "«on the wrist» — на запястье носят браслет." },
        { a: "clutch", o: ["clutch", "bracelet", "corset"], why: "Маленькая сумочка в руке вместо большой — клатч." },
        { a: "scarf", o: ["scarf", "bracelet", "clutch"], why: "«around the neck… adds colour to a coat» — шёлковый платок или шарф." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["necklace", "scarf", "bracelet", "earrings"], o: 1, why: "scarf — из ткани, это не украшение. Ожерелье, браслет и серьги — jewellery." },
        { w: ["delicate", "chunky", "big", "heavy"], o: 0, why: "delicate — тонкий, изящный. chunky, big и heavy — про крупные массивные вещи." },
        { w: ["clutch", "handbag", "bracelet", "backpack"], o: 2, why: "bracelet — украшение. Клатч, сумка и рюкзак — это сумки." }
      ]
    },
    { type: "flash", cards: ["scarf", "clutch", "statement piece", "chunky", "layer"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. Rings, necklaces and earrings are all types of {0}.\n2. She wears three thin gold necklaces at once — she likes to {1} them.\n3. This necklace is big and heavy — it's very {2}.\n4. She put her phone and lipstick into a small evening {3}.\n5. Belts, bags, hats and scarves are all {4}.",
      gaps: [
        { a: "jewellery", alt: ["jewelry"], why: "Общее слово для колец, серёг и ожерелий — jewellery." },
        { a: "layer", why: "Несколько цепочек одновременно — носить слоями, layer." },
        { a: "chunky", why: "Большое и тяжёлое украшение — chunky." },
        { a: "clutch", why: "Маленькая вечерняя сумочка без ручки — клатч." },
        { a: "accessories", why: "Ремни, сумки, шляпы и шарфы — всё это аксессуары." }
      ]
    },
    {
      type: "builder", g: "g05",
      items: [
        {
          ctx: "Бюджет маленький — скажи, что много украшений на съёмку не нужно.",
          formula: ["We", "don't + V", "much / many", "noun", "for + event"],
          parts: ["We", { v: "NOT NEED", a: ["don't need", "do not need"], f: [1], rule: "Отрицание в Present Simple: don't + глагол в начальной форме." }, { p: ["much", "many", "a"], a: "much", f: [2], rule: "jewellery — неисчисляемое → much. many — только с исчисляемыми во множественном числе." }, "jewellery for this shoot."]
        },
        {
          ctx: "Спроси, сколько шарфов на рейле.",
          formula: ["How", "much / many", "plural noun", "are / is", "there + place?"],
          parts: ["How", { p: ["many", "much", "a lot"], a: "many", f: [1], rule: "scarves — исчисляемое во множественном числе → How many." }, "scarves", { v: "BE", a: ["are"], f: [3], rule: "scarves — множественное → are there." }, "there on the rail?"]
        },
        {
          ctx: "Скажи, что у модели на руке много браслетов.",
          formula: ["Subject", "V(-s)", "a lot of", "plural noun", "on + place"],
          parts: ["The model", { v: "WEAR", a: ["wears", "is wearing"], f: [1], rule: "The model = she → wears (или is wearing, если прямо сейчас)." }, { p: ["a lot of", "much", "a few of"], a: "a lot of", f: [2], rule: "a lot of подходит и к исчисляемым, и к неисчисляемым. much с исчисляемыми не ставят." }, "bracelets on her left arm."]
        }
      ]
    },
    {
      type: "spot", g: "g05",
      sets: [
        {
          sentences: ["How much necklaces do you need?", "There isn't much jewellery in this box.", "She has a lot of scarves."],
          err: { s: 0, span: "much", fix: ["many"], g: "g05", note: "necklaces — исчисляемое во множественном числе → How many." }
        },
        {
          sentences: ["I need some advice about accessories.", "We need two new jewelleries for the shoot.", "How many earrings are on the table?"],
          err: { s: 1, span: "two new jewelleries", fix: ["two new pieces of jewellery", "some new jewellery"], g: "g05", note: "jewellery — неисчисляемое: у него нет -s и его нельзя посчитать числом. Говорят two pieces of jewellery или some jewellery." }
        }
      ]
    }
  ]
});

FE.addDay({
  n: 8,
  words: [
    { w: "footwear", pos: "noun", ru: "обувь (общее слово)", def: "shoes, boots and sandals — all the things you wear on your feet", ex: "The shop sells clothes, bags and ___.", note: "footwear — неисчисляемое: much footwear, но не footwears." },
    { w: "heels", pos: "noun, plural", ru: "туфли на каблуке; каблуки", def: "shoes with a high part under the back of the foot", ex: "She can't walk far in high ___." },
    { w: "flats", pos: "noun, plural", ru: "обувь на плоской подошве, балетки", def: "shoes with no heel or a very low heel", ex: "I always carry a pair of ___ in my bag." },
    { w: "court shoes", pos: "noun, plural", ru: "туфли-лодочки", def: "simple women's shoes with a heel and no laces or straps (in American English: pumps)", ex: "Black ___ go well with a business suit." },
    { w: "ankle boots", pos: "noun, plural", ru: "ботильоны, ботинки до щиколотки", def: "short boots that end just above the ankle", ex: "___ look great with skinny jeans.", exA: "Ankle boots" },
    { w: "loafers", pos: "noun, plural", ru: "лоферы", def: "flat leather shoes without laces that you slide your feet into", ex: "He wore brown ___ without socks." },
    { w: "mules", pos: "noun, plural", ru: "мюли", def: "shoes with no back part around the heel", ex: "___ are easy to put on: you just slide your feet in.", exA: "Mules" },
    { w: "stilettos", pos: "noun, plural", ru: "туфли на шпильке", def: "women's shoes with a very high, thin heel", ex: "She wore red ___ to the party and danced all night." },
    { w: "sole", pos: "noun", ru: "подошва", def: "the bottom part of a shoe that touches the ground", ex: "These boots have a thick rubber ___." },
    { w: "pointed", pos: "adjective", ru: "острый, заострённый (о носке)", def: "with a narrow, sharp end", ex: "Shoes with ___ toes make the legs look longer." }
  ],
  ex: [
    { type: "flash", cards: ["footwear", "heels", "flats", "court shoes", "ankle boots"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["a rubber", "резиновая", "sole", "подошва"],
        ["a pointed", "острый", "toe", "носок"],
        ["walk", "ходить", "in heels", "на каблуках"],
        ["slide your feet", "просунуть ноги", "into mules", "в мюли"],
        ["break in", "разносить", "new shoes", "новую обувь"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "For a catalogue shoot, the stylist brings a lot of {0}: there are boxes of shoes and boots everywhere. For the office looks, she chooses classic black {1} with a medium heel. For the evening dress, the model wears red {2} with very high, thin heels. The casual looks need something comfortable, so the stylist adds {3} — flat leather shoes without laces. Brown {4} that cover the ankle look great with jeans in autumn. Before the shoot, the assistant cleans the {5} of every shoe, because the camera can see the bottom when the model sits.",
      gaps: [
        { a: "footwear", o: ["footwear", "jewellery", "accessories"], why: "«boxes of shoes and boots» — это обувь, footwear." },
        { a: "court shoes", o: ["court shoes", "trainers", "flats"], why: "Классика для офиса со средним каблуком — лодочки. У flats каблука нет, trainers — спортивная обувь." },
        { a: "stilettos", o: ["stilettos", "loafers", "flats"], why: "«very high, thin heels» — шпильки, stilettos. Лоферы и балетки — плоские." },
        { a: "loafers", o: ["loafers", "stilettos", "court shoes"], why: "«flat leather shoes without laces» — лоферы." },
        { a: "ankle boots", o: ["ankle boots", "loafers", "mules"], why: "«cover the ankle» — закрывают щиколотку, значит это ботинки: ankle boots." },
        { a: "sole", o: ["sole", "heel", "toe"], why: "«the bottom» — низ обуви, подошва: sole." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["stilettos", "court shoes", "flats", "heels"], o: 2, why: "flats — без каблука. Шпильки, лодочки и heels — на каблуке." },
        { w: ["mules", "ankle boots", "sandals", "flip-flops"], o: 1, why: "ankle boots — закрытая осенняя обувь. Мюли, сандалии и шлёпанцы — открытые, летние." },
        { w: ["rubber", "pointed", "round", "square"], o: 0, why: "rubber — материал (резина). pointed, round и square — форма носка." }
      ]
    },
    { type: "flash", cards: ["loafers", "mules", "stilettos", "sole", "pointed"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. Shoes, boots and sandals: the shop sells all kinds of {0}.\n2. My feet hurt after a night in high heels, so I changed into a pair of {1} with no heel at all.\n3. These boots have a thick rubber {2}, so they are good for rain.\n4. {3} have no back, so you can just slide your feet into them.\n5. Her shoes have very {4} toes — they look sharp and elegant.",
      gaps: [
        { a: "footwear", why: "Общее слово для всей обуви — footwear." },
        { a: "flats", alt: ["loafers", "trainers"], why: "Совсем без каблука — flats. Лоферы и кроссовки тоже засчитываем." },
        { a: "sole", why: "Низ ботинка, который касается земли, — подошва." },
        { a: "Mules", why: "Без задника, ноги просто просовывают внутрь — мюли." },
        { a: "pointed", why: "Острые носы туфель — pointed toes." }
      ]
    },
    {
      type: "builder", g: "g05",
      items: [
        {
          ctx: "Спроси стилиста, сколько пар туфель на каблуке нужно на съёмку.",
          formula: ["How", "many / much", "pairs of + noun", "do we + V", "for + event?"],
          parts: ["How", { p: ["many", "much", "a lot"], a: "many", f: [1], rule: "pairs — исчисляемое → How many." }, "pairs of heels do we", { v: "NEED", a: ["need"], f: [3], rule: "После do глагол в начальной форме: do we need." }, "for the shoot?"]
        },
        {
          ctx: "Скажи, что в шкафу мало обуви на плоской подошве.",
          formula: ["There", "isn't / aren't", "much / many", "plural noun", "in + place"],
          parts: ["There", { v: "NOT BE", a: ["aren't", "are not"], f: [1], rule: "flats — множественное число → there aren't." }, { p: ["many", "much", "a lot"], a: "many", f: [2], rule: "Исчисляемое во множественном числе в отрицании → not many." }, "flats in the wardrobe."]
        },
        {
          ctx: "Скажи, что вы каждый сезон тратите на обувь много денег.",
          formula: ["We", "V", "a lot of", "uncountable noun", "on + thing"],
          parts: ["We", { v: "SPEND", a: ["spend"], f: [1], rule: "Present Simple, we → глагол без -s." }, { p: ["a lot of", "many", "a few"], a: "a lot of", f: [2], rule: "money — неисчисляемое: a lot of money. many и a few — только с исчисляемыми." }, "money on footwear every season."]
        }
      ]
    },
    {
      type: "spot", g: "g05",
      sets: [
        {
          sentences: ["How many money do we have for shoes?", "There are a lot of loafers on the shelf.", "We don't need much footwear for this shoot."],
          err: { s: 0, span: "many", fix: ["much"], g: "g05", note: "money — неисчисляемое → How much money." }
        },
        {
          sentences: ["She doesn't wear stilettos to work.", "The sole of this boot is broken.", "She has too many footwears in her wardrobe."],
          err: { s: 2, span: "many footwears", fix: ["much footwear"], g: "g05", note: "footwear — неисчисляемое: без -s и с much. Можно и так: too many pairs of shoes." }
        }
      ]
    }
  ]
});

FE.addDay({
  n: 9,
  words: [
    { w: "casual", pos: "adjective", ru: "повседневный", def: "relaxed and comfortable, not for formal events", ex: "On Fridays, people wear ___ clothes to the office.", note: "smart casual — дресс-код «нарядно, но без костюма»: пиджак с джинсами, рубашка без галстука." },
    { w: "smart", pos: "adjective", ru: "нарядный, элегантный, опрятный", def: "neat and elegant, good for work or important events", ex: "You need a ___ jacket for the job interview.", note: "В разговоре об одежде smart — «нарядный, опрятный», а не «умный»." },
    { w: "sporty", pos: "adjective", ru: "спортивный (о стиле)", def: "looking like clothes for sport: active and comfortable", ex: "Trainers and a hoodie give the outfit a ___ feel." },
    { w: "edgy", pos: "adjective", ru: "дерзкий, с вызовом", def: "modern and a little bit shocking, not safe or classic", ex: "A black leather jacket makes a pretty dress look more ___." },
    { w: "feminine", pos: "adjective", ru: "женственный", def: "soft and pretty, with details like lace, bows or flowers", ex: "A pink blouse with a bow looks very ___." },
    { w: "minimalist", pos: "adjective", ru: "минималистичный", def: "very simple, with clean lines, few details and few colours", ex: "Her style is ___: black, white and no jewellery." },
    { w: "chic", pos: "adjective", ru: "шикарный, стильный", def: "stylish and elegant in a simple way (it sounds like «sheek»)", ex: "Parisian women are famous for their ___ style." },
    { w: "effortless", pos: "adjective", ru: "непринуждённый, без видимых усилий", def: "looking easy and natural, as if you did not try hard", ex: "Her style looks ___: a white shirt, jeans and no make-up." },
    { w: "vintage", pos: "adjective", ru: "винтажный", def: "old, from a past decade, but good quality and still stylish", ex: "She found a ___ handbag from the 1960s at the market." },
    { w: "well-dressed", pos: "adjective", ru: "хорошо одетый", def: "wearing nice, stylish clothes", ex: "He is always ___, even at the weekend." }
  ],
  ex: [
    { type: "flash", cards: ["casual", "smart", "sporty", "edgy", "feminine"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["smart", "нарядно-", "casual", "повседневный (дресс-код)"],
        ["effortless", "непринуждённый", "chic", "шик"],
        ["a vintage", "винтажная", "find", "находка"],
        ["give an outfit", "придать образу", "an edgy feel", "дерзкое настроение"],
        ["dress up", "нарядиться", "for a party", "на вечеринку"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "A good stylist can describe any look in a few words. Jeans, a T-shirt and trainers? That's {0} — relaxed and comfortable. A tailored jacket and neat trousers are {1}: perfect for a business meeting. Leggings, a hoodie and running shoes look {2}. A black leather jacket over a silk dress makes the outfit {3}. A pink blouse with lace and a bow is very {4}. And a simple black dress with no jewellery at all? That's {5} style — clean lines and few details.",
      gaps: [
        { a: "casual", o: ["casual", "smart", "edgy"], why: "«relaxed and comfortable» — повседневный стиль, casual." },
        { a: "smart", o: ["smart", "sporty", "casual"], why: "Пиджак и аккуратные брюки для деловой встречи — нарядно, smart." },
        { a: "sporty", o: ["sporty", "feminine", "smart"], why: "Легинсы, худи и беговые кроссовки — спортивный стиль." },
        { a: "edgy", o: ["edgy", "feminine", "casual"], why: "Кожаная куртка поверх шёлкового платья добавляет дерзости — edgy." },
        { a: "feminine", o: ["feminine", "sporty", "minimalist"], why: "Кружево и бант — женственные детали, feminine." },
        { a: "minimalist", o: ["minimalist", "edgy", "vintage"], why: "«clean lines and few details» — минимализм." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["smart", "casual", "relaxed", "sporty"], o: 0, why: "smart — нарядный. casual, relaxed и sporty — про удобную повседневную одежду." },
        { w: ["chic", "elegant", "scruffy", "stylish"], o: 2, why: "scruffy — неряшливый. Остальные три — про стильный, элегантный вид." },
        { w: ["vintage", "retro", "1970s-inspired", "futuristic"], o: 3, why: "futuristic — про будущее. Остальные три — про стиль прошлых десятилетий." }
      ]
    },
    { type: "flash", cards: ["minimalist", "chic", "effortless", "vintage", "well-dressed"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. For the office party the dress code is smart {0}: no suit, but no trainers either.\n2. This coat is from the 1960s — it's real {1}.\n3. He always looks {2}: his shirts are ironed and his shoes are clean.\n4. French women often look {3} in a simple trench coat and red lipstick.\n5. Her make-up looks natural and {4}, as if it took one minute.",
      gaps: [
        { a: "casual", why: "smart casual — дресс-код «нарядно, но без костюма»." },
        { a: "vintage", why: "Настоящая вещь из прошлого десятилетия — vintage." },
        { a: "well-dressed", alt: ["smart", "well dressed"], why: "Всегда хорошо и аккуратно одет — well-dressed. smart тоже засчитываем." },
        { a: "chic", alt: ["elegant", "stylish"], why: "Простой тренч и красная помада — классический французский шик, chic." },
        { a: "effortless", why: "Будто сделано за минуту — effortless." }
      ]
    },
    {
      type: "builder", g: "g06",
      items: [
        {
          ctx: "Опиши платье: красивое, длинное, красное, шёлковое.",
          formula: ["opinion", "size", "colour", "material", "noun"],
          parts: ["She is wearing a", { p: ["beautiful long red silk", "red silk long beautiful", "long beautiful silk red"], a: "beautiful long red silk", f: [0, 1, 2, 3], rule: "Порядок: мнение → размер → цвет → материал → вещь." }, "dress."]
        },
        {
          ctx: "Стилист нашла на рынке маленькую винтажную кожаную сумку.",
          formula: ["size", "age", "material", "noun"],
          parts: ["The stylist found a", { p: ["small vintage leather", "leather small vintage", "vintage leather small"], a: "small vintage leather", f: [0, 1, 2], rule: "Размер → возраст → материал. Материал всегда последний перед вещью." }, "bag at the market."]
        },
        {
          ctx: "Для съёмки он купил чёрные итальянские лоферы.",
          formula: ["Subject", "V", "colour", "origin", "noun"],
          parts: ["He", { v: "BUY", a: ["buys", "bought"], f: [1], rule: "He → buys (Present Simple, -s). Если уже знаешь Past Simple — bought тоже верно." }, { p: ["black Italian", "Italian black"], a: "black Italian", f: [2, 3], rule: "Цвет идёт перед происхождением: black Italian loafers." }, "loafers for the shoot."]
        }
      ]
    },
    {
      type: "spot", g: "g06",
      sets: [
        {
          sentences: ["She has a leather black jacket.", "He is wearing a smart navy suit.", "I love your vintage silk scarf."],
          err: { s: 0, span: "leather black", fix: ["black leather"], g: "g06", note: "Цвет идёт перед материалом: a black leather jacket." }
        },
        {
          sentences: ["They found a lovely old wooden jewellery box.", "Her style is very chic and effortless.", "The model is wearing pink small earrings."],
          err: { s: 2, span: "pink small", fix: ["small pink"], g: "g06", note: "Размер идёт перед цветом: small pink earrings." }
        }
      ]
    }
  ]
});

FE.addDay({
  n: 10,
  words: [
    { w: "sample", pos: "noun", ru: "образец (вещь из коллекции для съёмок и показов)", def: "a piece of clothing that a brand makes for photos and shows before it goes to the shops", ex: "The brand sent us twenty ___ for the catalogue.", exA: "samples" },
    { w: "steamer", pos: "noun", ru: "отпариватель", def: "a machine that takes creases out of clothes with hot steam", ex: "Use the ___ — this silk blouse is too delicate for an iron." },
    { w: "lint roller", pos: "noun", ru: "ролик для чистки одежды", def: "a sticky roller that takes hair and dust off clothes", ex: "Black velvet shows every hair, so keep a ___ in your kit." },
    { w: "safety pin", pos: "noun", ru: "английская булавка", def: "a pin with a cover on its point, so it can't hurt you", ex: "The skirt was too big, so we fixed it at the back with a ___." },
    { w: "clip", pos: "noun", ru: "зажим, клипса", def: "a small metal or plastic thing that holds fabric tight at the back of a garment", ex: "The dress was too loose, so the stylist used two ___ at the back.", exA: "clips" },
    { w: "tuck in", pos: "verb", ru: "заправить (рубашку, блузку)", def: "to put the bottom of a shirt or top inside your trousers or skirt", ex: "Let's ___ the blouse to show her waist." },
    { w: "accessorise", pos: "verb", ru: "дополнить аксессуарами", def: "to add bags, jewellery, belts and other small things to an outfit", ex: "She likes to ___ a plain black dress with red shoes.", note: "accessorise — британское написание; в американском — accessorize." },
    { w: "complete the look", pos: "phrase", ru: "завершить образ", def: "to add the last item that makes an outfit perfect", ex: "Gold earrings and a small bag ___." },
    { w: "flat lay", pos: "noun", ru: "флэтлей, раскладка (фото вещей сверху)", def: "a photo of clothes and accessories lying on a table or the floor, taken from above", ex: "For the website, we shot every outfit as a ___ on a white background." },
    { w: "shot list", pos: "noun", ru: "список кадров", def: "a list of all the photos you need to take during a shoot", ex: "Look at the ___: we still need three photos of the coats." }
  ],
  ex: [
    { type: "flash", cards: ["sample", "steamer", "lint roller", "safety pin", "clip"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["steam", "отпарить", "the creases out", "складки"],
        ["tuck the shirt", "заправить рубашку", "into the trousers", "в брюки"],
        ["follow", "следовать", "the shot list", "списку кадров"],
        ["send the samples", "отправить образцы", "back to the brand", "обратно бренду"],
        ["pack", "собрать", "the styling kit", "набор стилиста"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "It's 7 a.m. and the studio is quiet. The brand has sent forty {0} for the autumn catalogue, and they are all on the rail. First, the stylist checks the {1}: there are twelve looks to shoot today. The coats are creased after the journey, so the assistant uses the {2}. The black velvet jacket is covered in dust, so she needs the {3}. The model is a size 8, but the trousers are a size 10 — the stylist uses two {4} at the back so the camera can't see it. Finally, gold earrings and a small bag {5}. For the website, the team also photographs every outfit from above on a white table — these photos are called {6}.",
      gaps: [
        { a: "samples", o: ["samples", "steamers", "shot lists"], why: "Вещи, которые бренд присылает на съёмку, — образцы, samples." },
        { a: "shot list", o: ["shot list", "flat lay", "lint roller"], why: "«twelve looks to shoot today» — план кадров на день, shot list." },
        { a: "steamer", o: ["steamer", "lint roller", "safety pin"], why: "Мятые пальто → отпариватель." },
        { a: "lint roller", o: ["lint roller", "steamer", "clip"], why: "Пыль и ворсинки на бархате снимают роликом, lint roller." },
        { a: "clips", o: ["clips", "samples", "flat lays"], why: "Брюки велики → их подкалывают сзади зажимами, clips. Камера снимает спереди и их не видит." },
        { a: "complete the look", o: ["complete the look", "steam the coats", "follow the brief"], why: "Последние детали, которые делают образ законченным, — complete the look." },
        { a: "flat lays", o: ["flat lays", "shot lists", "samples"], why: "Фото вещей сверху на столе — flat lays." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["steamer", "lint roller", "mood board", "safety pin"], o: 2, why: "mood board — это идея проекта. Отпариватель, ролик и булавка — инструменты в наборе стилиста." },
        { w: ["catalogue", "steamer", "website", "lookbook"], o: 1, why: "steamer — инструмент. Каталог, сайт и лукбук — где потом окажутся фото." },
        { w: ["creased", "dusty", "stained", "perfect"], o: 3, why: "perfect — идеальный. creased (мятый), dusty (пыльный), stained (в пятнах) — проблемы, которые стилист решает до съёмки." }
      ]
    },
    { type: "flash", cards: ["tuck in", "accessorise", "complete the look", "flat lay", "shot list"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. This silk blouse is too delicate for an iron — use the {0}.\n2. Let's {1} the shirt to show her waist.\n3. Before every shoot, the photographer and the stylist check the {2} together.\n4. The jacket is too big, so I'll hold it at the back with two {3}.\n5. She likes to {4} a simple black dress with red shoes and a red bag.",
      gaps: [
        { a: "steamer", why: "Для деликатных тканей вместо утюга — отпариватель." },
        { a: "tuck in", why: "Заправить рубашку, чтобы показать талию, — tuck in." },
        { a: "shot list", why: "Список кадров на съёмку — shot list." },
        { a: "clips", alt: ["safety pins", "pins"], why: "Зажимы сзади — clips. Булавки тоже засчитываем." },
        { a: "accessorise", alt: ["accessorize"], why: "Дополнить образ аксессуарами — accessorise." }
      ]
    },
    {
      type: "builder", g: "g06",
      items: [
        {
          ctx: "В брифе клиент просит большую коричневую кожаную сумку.",
          formula: ["Subject", "V(-s)", "size", "colour", "material", "noun"],
          parts: ["The client", { v: "WANT", a: ["wants"], f: [1], rule: "The client = he / she → wants." }, { p: ["a big brown leather", "a brown big leather", "a leather brown big"], a: "a big brown leather", f: [2, 3, 4], rule: "Размер → цвет → материал." }, "bag for the autumn look."]
        },
        {
          ctx: "Для страницы 12 каталога нужна красивая старая французская блузка.",
          formula: ["We", "V", "opinion", "age", "origin", "noun"],
          parts: ["We", { v: "NEED", a: ["need"], f: [1], rule: "need — глагол состояния, только Simple: we need." }, { p: ["a lovely old French", "a French old lovely", "an old lovely French"], a: "a lovely old French", f: [2, 3, 4], rule: "Мнение → возраст → происхождение." }, "blouse for page 12."]
        }
      ]
    },
    {
      type: "spot", g: "g06",
      sets: [
        {
          sentences: ["We need some safety pins for the fitting.", "She is wearing a cotton white shirt.", "There are two samples on the rail."],
          err: { s: 1, span: "cotton white", fix: ["white cotton"], g: "g06", note: "Цвет идёт перед материалом: a white cotton shirt." }
        },
        {
          sentences: ["How many clips do we have?", "The stylist is steaming the coats now.", "There isn't any samples in this box."],
          err: { s: 2, span: "isn't", fix: ["aren't"], g: "g04", note: "samples — множественное число → there aren't any samples." }
        }
      ]
    }
  ]
});

/* Блок 2. 1920-е и 1930-е: флэпперы, Шанель, голливудский гламур. Дни 11–20.
   Написан Claude Opus по промпту tools/prompts/day.md; проверка — node tools/validate.js. */

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

FE.addDay({
  n: 12,
  words: [
    { w: "little black dress", pos: "noun", ru: "маленькое чёрное платье", def: "a simple, short dark dress that you can wear to many different events", ex: "Every woman needs a ___ in her wardrobe." },
    { w: "jersey", pos: "noun", ru: "джерси (мягкий трикотаж)", def: "a soft, stretchy knitted fabric, made of wool or cotton", ex: "Chanel made comfortable dresses from ___, a fabric used for men's underwear.", note: "jersey — ещё и футболка спортивной команды; в моде чаще ткань." },
    { w: "costume jewellery", pos: "noun", ru: "бижутерия", def: "cheap jewellery made of glass, plastic or metal that copies gold and real stones", ex: "Chanel mixed real pearls with ___.", note: "jewellery — любые украшения; costume jewellery — именно бижутерия. Тоже неисчисляемое." },
    { w: "pearls", pos: "noun, plural", ru: "жемчуг", def: "small, round, white and shiny stones that grow inside a sea shell", ex: "She wore three long strings of ___ around her neck." },
    { w: "simplicity", pos: "noun", ru: "простота", def: "the quality of being plain and easy, with no extra details", ex: "The ___ of the dress made it elegant." },
    { w: "mourning", pos: "noun", ru: "траур", def: "the time when people are sad because someone has died; they often wear black then", ex: "Before the 1920s, black was mostly the colour of ___." },
    { w: "timeless", pos: "adjective", ru: "вне времени, неподвластный моде", def: "never going out of fashion; always looking good", ex: "A white shirt is a ___ piece — you can wear it in any decade." },
    { w: "signature", pos: "adjective", ru: "фирменный, узнаваемый", def: "typical of one person or brand, so people recognise it at once", ex: "Pearls and black were Chanel's ___ style." },
    { w: "wardrobe staple", pos: "noun", ru: "базовая вещь гардероба", def: "a basic piece of clothing that you wear again and again", ex: "Jeans and a white T-shirt are ___ for most people.", exA: "wardrobe staples" },
    { w: "fashion house", pos: "noun", ru: "дом моды", def: "a company that designs and makes expensive clothes under its designer's name", ex: "Today Chanel is one of the most famous ___ in the world.", exA: "fashion houses" }
  ],
  ex: [
    { type: "flash", cards: ["little black dress", "jersey", "costume jewellery", "pearls", "simplicity"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["a string of", "нитка", "pearls", "жемчуга"],
        ["costume", "костюмная →", "jewellery", "бижутерия"],
        ["open", "открыть", "a boutique", "бутик"],
        ["a wardrobe", "гардероб →", "staple", "базовая вещь"],
        ["wear black for", "носить чёрное в знак", "mourning", "траура"],
        ["a soft", "мягкое", "jersey dress", "трикотажное платье"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "Gabrielle «Coco» Chanel opened her first shop in Paris in 1910, and later her {0} became one of the most famous in the world. She hated tight corsets and heavy decoration. She loved {1}: clean lines and comfortable shapes. In 1916 she made dresses from {2}, a soft fabric that people used for men's underwear. She also mixed real {3} with cheap {4} and made fake jewels fashionable. In 1926, American Vogue showed her short, simple black dress. Before that, women wore black mostly for {5}. Chanel turned it into evening chic, and today the little black dress is still one of the classic {6}.",
      gaps: [
        { a: "fashion house", o: ["fashion house", "costume jewellery", "wardrobe staple"], why: "«one of the most famous in the world» — компания Шанель, её дом моды." },
        { a: "simplicity", o: ["simplicity", "mourning", "jersey"], why: "«clean lines and comfortable shapes» — это простота, simplicity." },
        { a: "jersey", o: ["jersey", "velvet", "leather"], why: "Мягкий трикотаж, из которого шили мужское бельё, — jersey. Бархат и кожа для белья не годятся." },
        { a: "pearls", o: ["pearls", "clutches", "loafers"], why: "Настоящие… в паре с бижутерией — жемчуг. Клатчи и лоферы — не украшения." },
        { a: "costume jewellery", o: ["costume jewellery", "fashion houses", "simplicity"], why: "Дешёвые украшения, которые копируют настоящие, — бижутерия." },
        { a: "mourning", o: ["mourning", "parties", "weddings"], why: "До Шанель чёрное носили в основном в знак траура." },
        { a: "wardrobe staples", o: ["wardrobe staples", "fashion houses", "mourning clothes"], why: "Вещь, которую носят снова и снова уже сто лет, — базовая вещь гардероба." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["pearls", "jersey", "diamonds", "gold"], o: 1, why: "jersey — ткань. Жемчуг, бриллианты и золото — то, из чего делают украшения." },
        { w: ["timeless", "classic", "trendy", "lasting"], o: 2, why: "trendy — модный сейчас, но быстро уходит. Остальные три — про вещи, которые не стареют." },
        { w: ["Hollywood", "Chanel", "Dior", "Schiaparelli"], o: 0, why: "Hollywood — центр кино. Chanel, Dior и Schiaparelli — дома моды." }
      ]
    },
    { type: "flash", cards: ["mourning", "timeless", "signature", "wardrobe staple", "fashion house"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. Chanel made comfortable dresses from {0}, a soft knitted fabric.\n2. These earrings aren't real gold — they're {1}.\n3. This black blazer never goes out of fashion — it's {2}.\n4. Red lipstick was her {3} look: everyone recognised it.\n5. Dior, Chanel and Givenchy are famous French {4}.",
      gaps: [
        { a: "jersey", why: "Мягкий трикотаж — jersey." },
        { a: "costume jewellery", alt: ["costume jewelry"], why: "Не настоящее золото — бижутерия." },
        { a: "timeless", alt: ["classic"], why: "Никогда не выходит из моды — timeless." },
        { a: "signature", why: "Узнаваемая деталь образа — signature look." },
        { a: "fashion houses", why: "Dior, Chanel, Givenchy — французские дома моды." }
      ]
    },
    {
      type: "tense", g: "g07",
      tenses: ["Present Simple", "Present Continuous", "Past Simple"],
      bases: [
        {
          base: "Chanel designs simple dresses.",
          tr: [
            { m: "in 1926", tpl: "In 1926 Chanel {} a simple black dress.", a: ["designed"], t: "Past Simple", why: "in 1926 — прошлое → Past Simple. Правильный глагол: design + -ed." },
            { m: "every season", tpl: "Every season the fashion house {} new little black dresses.", a: ["designs"], t: "Present Simple", why: "every season — регулярно → Present Simple. The fashion house = it → -s." },
            { m: "right now", tpl: "Right now the designer {} a jersey dress for the show.", a: ["is designing"], t: "Present Continuous", why: "right now — в этот момент → is + V-ing." }
          ]
        },
        {
          base: "Women wear black to parties.",
          tr: [
            { m: "before the 1920s", tpl: "Before the 1920s women {} black mostly for mourning.", a: ["wore"], t: "Past Simple", why: "before the 1920s — прошлое → Past Simple. wear → wore." },
            { m: "nowadays", tpl: "Nowadays women often {} black to parties.", a: ["wear"], t: "Present Simple", why: "nowadays — «в наше время», обычное положение дел → Present Simple." },
            { m: "at the moment", tpl: "At the moment the model {} a little black dress.", a: ["is wearing"], t: "Present Continuous", why: "at the moment — прямо сейчас → is + V-ing." }
          ]
        }
      ]
    },
    {
      type: "spot", g: "g07",
      sets: [
        {
          sentences: ["Chanel opened her first shop in 1910.", "In 1926 Vogue showed her black dress.", "She didn't liked tight corsets."],
          err: { s: 2, span: "didn't liked", fix: ["didn't like", "did not like"], g: "g07", note: "После didn't глагол в начальной форме: didn't like." }
        },
        {
          sentences: ["Many women still wear pearls today.", "Chanel maked dresses from jersey.", "Black became chic in the 1920s."],
          err: { s: 1, span: "maked", fix: ["made"], g: "g07", note: "make — неправильный глагол: make → made." }
        }
      ]
    }
  ]
});

FE.addDay({
  n: 13,
  words: [
    { w: "Art Deco", pos: "noun", ru: "ар-деко", def: "a style of design from the 1920s and 1930s with bold shapes, strong lines and rich materials", ex: "The hotel lobby is pure ___: black, gold and zigzags." },
    { w: "geometric", pos: "adjective", ru: "геометрический", def: "made of shapes like circles, squares, triangles and straight lines", ex: "Her earrings have a bold ___ design." },
    { w: "cloche hat", pos: "noun", ru: "шляпка-клош", def: "a small, close-fitting hat shaped like a bell, worn low over the eyes", ex: "With her short bob, she wore a felt ___." },
    { w: "headband", pos: "noun", ru: "повязка на голову", def: "a strip of fabric or metal that you wear around your head", ex: "For the party, she wore a beaded ___ with a feather." },
    { w: "feather boa", pos: "noun", ru: "боа из перьев", def: "a long, soft scarf made of feathers", ex: "The singer threw a pink ___ around her neck." },
    { w: "bangle", pos: "noun", ru: "браслет-обруч", def: "a hard, round piece of jewellery that you slide over your hand onto your wrist", ex: "Silver ___ clinked on her arm when she danced.", exA: "bangles", note: "bracelet — любой браслет; bangle — жёсткий браслет-кольцо без застёжки." },
    { w: "brooch", pos: "noun", ru: "брошь", def: "a piece of jewellery that you fix to your clothes with a pin", ex: "She pinned her grandmother's ___ to her coat." },
    { w: "T-bar shoes", pos: "noun, plural", ru: "туфли с Т-образным ремешком", def: "women's shoes with one strap across the foot and another down the middle, in the shape of a T", ex: "___ stayed on the feet even in the fastest dances.", note: "В американском английском — T-strap shoes." },
    { w: "chevron", pos: "noun", ru: "шеврон, «ёлочка» (узор из уголков)", def: "a pattern of V shapes, one after another", ex: "The dress had a ___ pattern in black and silver beads." },
    { w: "sleek", pos: "adjective", ru: "гладкий, гладко уложенный, обтекаемый", def: "smooth, shiny and elegant, with simple lines", ex: "Her hair was ___ and shiny, close to her head." }
  ],
  ex: [
    { type: "flash", cards: ["Art Deco", "geometric", "cloche hat", "headband", "feather boa"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["slide", "надеть, продев", "a bangle onto your wrist", "браслет на запястье"],
        ["pin", "приколоть", "a brooch to your collar", "брошь к воротнику"],
        ["a pink feather", "розовое из перьев", "boa", "боа"],
        ["Art", "искусство →", "Deco", "декоративное → ар-деко"],
        ["wear a hat", "носить шляпу", "low over the eyes", "низко на глазах"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "In 1925, Paris held a huge exhibition of decorative arts. Later, the style of the decade got its name from it: {0}. Designers loved {1} shapes — circles, triangles and zigzags. You could see them on buildings, furniture and, of course, accessories. A fashionable woman wore a small {2} pulled low over her eyes. In the evening she changed it for a beaded {3} with a feather. Several {4} slid up and down her arm, and a sparkling {5} shone on her collar. Silver beads on many evening dresses made {6} patterns — rows of V shapes.",
      gaps: [
        { a: "Art Deco", o: ["Art Deco", "jersey", "mourning"], why: "Название стиля пришло от выставки декоративных искусств (arts décoratifs) — ар-деко." },
        { a: "geometric", o: ["geometric", "floral", "boyish"], why: "Круги, треугольники и зигзаги — геометрические формы." },
        { a: "cloche hat", o: ["cloche hat", "headband", "brooch"], why: "Маленькая шляпка, надвинутая на глаза, — клош." },
        { a: "headband", o: ["headband", "bangle", "pearls"], why: "Вечером шляпку меняли на расшитую повязку с пером — headband." },
        { a: "bangles", o: ["bangles", "brooches", "feather boas"], why: "«slid up and down her arm» — по руке скользят браслеты-обручи." },
        { a: "brooch", o: ["brooch", "bangle", "headband"], why: "«on her collar» — на воротнике носят брошь." },
        { a: "chevron", o: ["chevron", "polka dot", "animal print"], why: "«rows of V shapes» — уголки один за другим, шеврон." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["chevron", "bangle", "brooch", "headband"], o: 0, why: "chevron — узор. Браслет, брошь и повязка — аксессуары." },
        { w: ["circle", "triangle", "feather", "square"], o: 2, why: "feather — перо. Круг, треугольник и квадрат — геометрические фигуры." },
        { w: ["sleek", "messy", "smooth", "shiny"], o: 1, why: "messy — растрёпанный. Остальные три — про гладкий, блестящий вид." }
      ]
    },
    { type: "flash", cards: ["bangle", "brooch", "T-bar shoes", "chevron", "sleek"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. Hard round bracelets that you slide over your hand are called {0}.\n2. She pinned her grandmother's old {1} to her coat.\n3. The singer wore a long pink {2} around her neck.\n4. Black and gold zigzags and bold lines — that's typical {3} design.\n5. Her hair was {4} and shiny, close to her head.",
      gaps: [
        { a: "bangles", alt: ["bangle"], why: "Жёсткие браслеты-кольца без застёжки — bangles." },
        { a: "brooch", why: "Украшение, которое прикалывают к одежде, — брошь." },
        { a: "feather boa", alt: ["boa"], why: "Длинный шарф из перьев — боа." },
        { a: "Art Deco", why: "Зигзаги, чёрное с золотом, чёткие линии — ар-деко." },
        { a: "sleek", why: "Гладкие блестящие волосы — sleek." }
      ]
    },
    {
      type: "builder", g: "g07",
      items: [
        {
          ctx: "Скажи, что в 1925 году Париж провёл большую выставку.",
          formula: ["In + year", "Subject", "V2", "Object"],
          parts: [{ p: ["In", "On", "At"], a: "In", f: [0], rule: "С годами — in: in 1925." }, "1925, Paris", { v: "HOLD", a: ["held"], f: [2], rule: "hold — неправильный глагол: hold → held." }, "a big exhibition of decorative arts."]
        },
        {
          ctx: "Спроси, носила ли она шляпку-клош на вечеринки.",
          formula: ["Did", "Subject", "V (base)", "Object", "to + event?"],
          parts: [{ p: ["Did", "Was", "Does"], a: "Did", f: [0], rule: "Вопрос в Past Simple: Did + подлежащее + глагол в начальной форме." }, "she", { v: "WEAR", a: ["wear"], f: [2], rule: "После did — начальная форма: wear, а не wore." }, "a cloche hat to parties?"]
        },
        {
          ctx: "Скажи, что флэпперы не носили корсеты — они предпочитали свободные платья.",
          formula: ["Subject", "didn't + V", "Object", "—", "they + V2 + Object"],
          parts: ["Flappers", { v: "NOT WEAR", a: ["didn't wear", "did not wear"], f: [1], rule: "Отрицание в Past Simple: didn't + начальная форма." }, "corsets — they", { v: "PREFER", a: ["preferred"], f: [4], rule: "prefer → preferred: r удваивается, потому что ударение на последнем слоге." }, "loose dresses with a drop waist."]
        }
      ]
    },
    {
      type: "spot", g: "g07",
      sets: [
        {
          sentences: ["She buyed a silver bangle at the market.", "The singer wore a pink feather boa.", "Art Deco got its name from a Paris exhibition."],
          err: { s: 0, span: "buyed", fix: ["bought"], g: "g07", note: "buy — неправильный глагол: buy → bought." }
        },
        {
          sentences: ["They danced all night.", "He gave her a diamond brooch.", "Did she wore a cloche hat to the party?"],
          err: { s: 2, span: "wore", fix: ["wear"], g: "g07", note: "После did глагол в начальной форме: Did she wear…?" }
        }
      ]
    }
  ]
});

FE.addDay({
  n: 14,
  words: [
    { w: "dapper", pos: "adjective", ru: "щеголеватый, элегантный (о мужчине)", def: "a man who is neat, stylish and well-dressed, often in a classic way", ex: "In his three-piece suit and bow tie, he looked very ___." },
    { w: "Oxford bags", pos: "noun, plural", ru: "«оксфордские мешки» — очень широкие брюки", def: "very wide, loose trousers that university students wore in the 1920s", ex: "Students wore ___ so wide that they covered their shoes." },
    { w: "plus fours", pos: "noun, plural", ru: "брюки-гольфы", def: "loose trousers that end just below the knee, worn for golf and country walks", ex: "The Prince of Wales played golf in ___ and a patterned sweater." },
    { w: "boater", pos: "noun", ru: "канотье (соломенная шляпа)", def: "a hard, flat straw hat with a ribbon, worn in summer", ex: "In summer, men wore a straw ___ with a black ribbon." },
    { w: "flat cap", pos: "noun", ru: "кепка", def: "a soft, flat hat with a small stiff part at the front", ex: "Working men in the 1920s often wore a ___." },
    { w: "bow tie", pos: "noun", ru: "галстук-бабочка", def: "a short tie in the shape of a bow, worn at the neck", ex: "He wore a black ___ with his dinner jacket." },
    { w: "lapel", pos: "noun", ru: "лацкан", def: "the part of a jacket collar that folds back on the front", ex: "He wore a small flower on his ___." },
    { w: "double-breasted", pos: "adjective", ru: "двубортный", def: "with two rows of buttons on the front, so one side covers the other", ex: "A ___ jacket looks more formal than a single-breasted one.", note: "single-breasted — однобортный, с одним рядом пуговиц." },
    { w: "pocket square", pos: "noun", ru: "нагрудный платок, паше", def: "a small piece of silk or cotton that you put in the top pocket of a jacket", ex: "A red ___ adds colour to a grey suit." },
    { w: "two-tone", pos: "adjective", ru: "двухцветный", def: "made in two different colours, for example black and white", ex: "Jazz musicians loved ___ shoes in black and white." }
  ],
  ex: [
    { type: "flash", cards: ["dapper", "Oxford bags", "plus fours", "boater", "flat cap"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["a straw", "соломенная", "boater", "шляпа-канотье"],
        ["a single-breasted", "однобортный", "jacket", "пиджак"],
        ["tie", "завязать", "a bow tie", "бабочку"],
        ["fold", "сложить", "a pocket square", "нагрудный платок"],
        ["wide", "широкие", "lapels", "лацканы"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "Men's fashion also changed in the 1920s. Before the war, gentlemen wore heavy, formal suits. Now young men wanted something more relaxed. At Oxford University, students wore {0} — trousers so wide that they almost covered the shoes. For golf, men chose {1}, loose trousers that ended just below the knee. The Prince of Wales wore them with bright patterned sweaters, and everyone copied him. In summer, a straw {2} was the hat of the season, while working men wore a soft {3}. For the evening, a gentleman put on a black {4} and a dinner jacket with silk {5}. Jazz fans finished the look with {6} shoes in black and white.",
      gaps: [
        { a: "Oxford bags", o: ["Oxford bags", "plus fours", "flat caps"], why: "Брюки такой ширины, что закрывали обувь, — Oxford bags, мода оксфордских студентов." },
        { a: "plus fours", o: ["plus fours", "Oxford bags", "bow ties"], why: "Свободные брюки чуть ниже колена для гольфа — plus fours." },
        { a: "boater", o: ["boater", "flat cap", "lapel"], why: "Соломенная летняя шляпа — канотье. Кепку шили из ткани." },
        { a: "flat cap", o: ["flat cap", "boater", "pocket square"], why: "Мягкая кепка — головной убор рабочих." },
        { a: "bow tie", o: ["bow tie", "flat cap", "boater"], why: "К смокингу вечером — чёрная бабочка." },
        { a: "lapels", o: ["lapels", "pocket squares", "plus fours"], why: "У смокинга шёлковые лацканы." },
        { a: "two-tone", o: ["two-tone", "double-breasted", "boyish"], why: "«in black and white» — двухцветные туфли." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["boater", "flat cap", "bow tie", "fedora"], o: 2, why: "bow tie — галстук. Канотье, кепка и федора — шляпы." },
        { w: ["waistcoat", "Oxford bags", "plus fours", "trousers"], o: 0, why: "waistcoat — жилет. Остальные три — брюки." },
        { w: ["double-breasted", "single-breasted", "three-piece", "two-tone"], o: 3, why: "two-tone — про цвет. Остальные три — про крой костюма или пиджака." }
      ]
    },
    { type: "flash", cards: ["bow tie", "lapel", "double-breasted", "pocket square", "two-tone"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. He tied his {0} carefully before the dinner.\n2. A jacket with two rows of buttons is called {1}.\n3. He folded a silk {2} and put it into his top pocket.\n4. He always looks {3}: a three-piece suit, a flower on his lapel and shiny shoes.\n5. For golf he wore {4} that ended just below the knee.",
      gaps: [
        { a: "bow tie", why: "Галстук-бабочка — bow tie." },
        { a: "double-breasted", alt: ["double breasted"], why: "Два ряда пуговиц — двубортный." },
        { a: "pocket square", why: "Платок в нагрудном кармане — pocket square." },
        { a: "dapper", alt: ["smart", "well-dressed"], why: "Щеголеватый, элегантный мужчина — dapper. smart и well-dressed тоже засчитываем." },
        { a: "plus fours", alt: ["plus-fours"], why: "Брюки для гольфа чуть ниже колена — plus fours." }
      ]
    },
    {
      type: "tense", g: "g07",
      tenses: ["Present Simple", "Present Continuous", "Past Simple"],
      bases: [
        {
          base: "Men wear boaters in summer.",
          tr: [
            { m: "in the 1920s", tpl: "In the 1920s men {} boaters in summer.", a: ["wore"], t: "Past Simple", why: "in the 1920s — прошлое → Past Simple. wear → wore." },
            { m: "at the moment", tpl: "At the moment the model {} a boater for the shoot.", a: ["is wearing"], t: "Present Continuous", why: "at the moment — прямо сейчас → is + V-ing." },
            { m: "every summer", tpl: "My grandfather {} a boater every summer.", a: ["wears"], t: "Present Simple", why: "every summer — регулярно → Present Simple. grandfather = he → -s." }
          ]
        },
        {
          base: "Celebrities set trends.",
          tr: [
            { m: "in the 1920s", tpl: "In the 1920s the Prince of Wales {} trends in menswear.", a: ["set"], t: "Past Simple", why: "set — неправильный глагол, все формы одинаковые: set — set — set." },
            { m: "always", tpl: "Celebrities always {} new trends.", a: ["set"], t: "Present Simple", why: "always — привычное положение дел → Present Simple. Celebrities = they, без -s." },
            { m: "this season", tpl: "This season a young designer {} the trend for wide trousers.", a: ["is setting"], t: "Present Continuous", why: "this season — временный период сейчас → is + V-ing. set → setting." }
          ]
        }
      ]
    },
    {
      type: "builder", g: "g07",
      items: [
        {
          ctx: "Скажи, что принц Уэльский носил брюки-гольфы на поле для гольфа.",
          formula: ["Subject", "V2", "Object", "on + place"],
          parts: ["The Prince of Wales", { v: "WEAR", a: ["wore"], f: [1], rule: "Прошлое → Past Simple. wear → wore." }, "plus fours", { p: ["on", "in", "at"], a: "on", f: [3], rule: "На поле для гольфа — on the golf course." }, "the golf course."]
        },
        {
          ctx: "Спроси: студенты Оксфорда правда носили такие широкие брюки?",
          formula: ["Did", "Subject", "really + V (base)", "Object?"],
          parts: [{ p: ["Did", "Were", "Do"], a: "Did", f: [0], rule: "Вопрос в Past Simple — Did + подлежащее + глагол." }, "Oxford students really", { v: "WEAR", a: ["wear"], f: [2], rule: "После did — начальная форма: wear." }, "such wide trousers?"]
        },
        {
          ctx: "Скажи, что он не надел бабочку на вечеринку.",
          formula: ["Subject", "didn't + V", "Object", "to + event"],
          parts: ["He", { v: "NOT WEAR", a: ["didn't wear", "did not wear"], f: [1], rule: "Отрицание в Past Simple: didn't + wear." }, "a bow tie", { p: ["to", "at", "in"], a: "to", f: [3], rule: "Надеть что-то куда-то — wear something to a party." }, "the party."]
        }
      ]
    }
  ]
});

FE.addDay({
  n: 15,
  words: [
    { w: "era", pos: "noun", ru: "эпоха", def: "a long period of time in history with its own style", ex: "Each ___ has its own silhouette." },
    { w: "inspired by", pos: "phrase", ru: "вдохновлённый (чем-то)", def: "using ideas from something or someone", ex: "The new collection is ___ the 1920s." },
    { w: "reference", pos: "noun", ru: "референс, образец", def: "a picture that you use as an example of the style you want", ex: "The photographer sent me three old photos as ___.", exA: "references" },
    { w: "prop", pos: "noun", ru: "реквизит", def: "an object used in a photo or film, like an old telephone or a suitcase", ex: "We used a vintage gramophone as a ___." },
    { w: "backdrop", pos: "noun", ru: "фон (в студии)", def: "the large background behind the model in a studio", ex: "The model stood in front of a black-and-gold ___." },
    { w: "make-up artist", pos: "noun", ru: "визажист", def: "a person whose job is to do the make-up of models and actors", ex: "The ___ painted dark red lips in a 1920s shape." },
    { w: "finger waves", pos: "noun, plural", ru: "холодная волна (укладка 1920-х)", def: "a 1920s hairstyle with flat S-shaped waves close to the head", ex: "The hairstylist made perfect ___ on the model's bob." },
    { w: "call time", pos: "noun", ru: "время сбора на съёмке", def: "the time when everyone must arrive on set", ex: "___ is 7 a.m., so don't be late!", exA: "Call time" },
    { w: "authentic", pos: "adjective", ru: "подлинный, аутентичный", def: "real, or exactly like the original", ex: "The beaded dress was ___ — from 1925, not a copy." },
    { w: "wrap", pos: "verb", ru: "закончить съёмку", def: "to finish filming or a photoshoot", ex: "We ___ at 6 p.m. and went home.", exA: "wrapped", note: "That's a wrap! — «Всё, снято!», так говорят в конце съёмки." }
  ],
  ex: [
    { type: "flash", cards: ["era", "inspired by", "reference", "prop", "backdrop"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["That's", "Это", "a wrap!", "конец съёмки!"],
        ["a 1920s-inspired", "в духе 1920-х", "shoot", "съёмка"],
        ["paint on", "нарисовать", "dark red lips", "тёмно-красные губы"],
        ["set up", "поставить", "the backdrop", "фон"],
        ["hire", "взять напрокат", "a vintage car", "винтажную машину"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "Yesterday we did a 1920s-inspired shoot for a jewellery brand. {0} was at 7 a.m., and everyone arrived on time. First, the photographer showed us his {1}: old photos of flappers from fashion magazines. The {2} was black with gold Art Deco lines. The hairstylist made {3} on the model's short bob, and the {4} painted dark red lips. We used an old gramophone and a cocktail glass as {5}. The beaded dress was {6} — really from 1925! It was very fragile, so we were careful. We {7} at 6 p.m., and everyone was happy.",
      gaps: [
        { a: "Call time", o: ["Call time", "Backdrop", "Era"], why: "«at 7 a.m. … everyone arrived» — время сбора, call time." },
        { a: "references", o: ["references", "props", "backdrops"], why: "Старые фото как пример нужного стиля — референсы." },
        { a: "backdrop", o: ["backdrop", "era", "reference"], why: "Чёрное с золотыми линиями позади модели — фон, backdrop." },
        { a: "finger waves", o: ["finger waves", "pearls", "bangles"], why: "Укладку на коротких волосах делает парикмахер — холодная волна." },
        { a: "make-up artist", o: ["make-up artist", "hairstylist", "photographer"], why: "Губы рисует визажист. Парикмахер уже занят причёской." },
        { a: "props", o: ["props", "references", "samples"], why: "Граммофон и бокал в кадре — реквизит." },
        { a: "authentic", o: ["authentic", "inspired by", "timeless"], why: "«really from 1925» — настоящее, не копия: authentic." },
        { a: "wrapped", o: ["wrapped", "launched", "clashed"], why: "Закончили съёмку в 6 — wrapped. В Past Simple p удваивается." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["authentic", "copied", "original", "real"], o: 1, why: "copied — скопированный. Остальные три — «настоящий, подлинный»." },
        { w: ["finger waves", "bob", "cloche hat", "bun"], o: 2, why: "cloche hat — шляпка. Холодная волна, боб и пучок (bun) — причёски." },
        { w: ["disco", "Art Deco", "jazz", "flappers"], o: 0, why: "disco — 1970-е. Ар-деко, джаз и флэпперы — 1920-е." }
      ]
    },
    { type: "flash", cards: ["make-up artist", "finger waves", "call time", "authentic", "wrap"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. Don't be late — {0} is 7 a.m. tomorrow.\n2. This dress isn't a copy — it's {1}, from 1926.\n3. Our new collection is {2} the films of the 1930s.\n4. We used old telephones and suitcases as {3}.\n5. The model stood in front of a silver {4}.",
      gaps: [
        { a: "call time", why: "Время, когда все должны быть на площадке, — call time." },
        { a: "authentic", alt: ["original", "real"], why: "Настоящее, не копия — authentic." },
        { a: "inspired by", why: "Взяли идеи из фильмов — inspired by." },
        { a: "props", why: "Предметы в кадре — реквизит, props." },
        { a: "backdrop", why: "Фон за моделью — backdrop." }
      ]
    },
    {
      type: "tense", g: "g07",
      tenses: ["Present Simple", "Present Continuous", "Past Simple"],
      bases: [
        {
          base: "The make-up artist paints the lips.",
          tr: [
            { m: "an hour ago", tpl: "An hour ago the make-up artist {} the model's lips dark red.", a: ["painted"], t: "Past Simple", why: "ago — маркер Past Simple. paint + -ed." },
            { m: "at the moment", tpl: "At the moment the make-up artist {} the model's lips.", a: ["is painting"], t: "Present Continuous", why: "at the moment — прямо сейчас → is + V-ing." },
            { m: "before every shoot", tpl: "Before every shoot the make-up artist {} the lips last.", a: ["paints"], t: "Present Simple", why: "before every shoot — каждый раз → Present Simple, she → -s." }
          ]
        },
        {
          base: "The photographer sends references.",
          tr: [
            { m: "last week", tpl: "Last week the photographer {} us three references.", a: ["sent"], t: "Past Simple", why: "last week — прошлое. send — неправильный: send → sent." },
            { m: "now", tpl: "The photographer {} us more references now.", a: ["is sending"], t: "Present Continuous", why: "now — в этот момент → is + V-ing." },
            { m: "every Monday", tpl: "The photographer {} us references every Monday.", a: ["sends"], t: "Present Simple", why: "every Monday — регулярно → Present Simple, he → -s." }
          ]
        }
      ]
    },
    {
      type: "spot", g: "g07",
      sets: [
        {
          sentences: ["We wraped at six and went home.", "The hairstylist made finger waves.", "Call time was at seven."],
          err: { s: 0, span: "wraped", fix: ["wrapped"], g: "g07", note: "Короткий слог с одной гласной: p удваивается — wrap → wrapped." }
        },
        {
          sentences: ["The make-up artist didn't use pink lipstick.", "Did you found the props?", "The backdrop was black and gold."],
          err: { s: 1, span: "found", fix: ["find"], g: "g07", note: "После did глагол в начальной форме: Did you find…?" }
        }
      ]
    }
  ]
});

FE.addDay({
  n: 16,
  words: [
    { w: "glamorous", pos: "adjective", ru: "гламурный, роскошный", def: "beautiful, rich and exciting, like a film star", ex: "The actress looked ___ in a long silver gown." },
    { w: "silver screen", pos: "noun", ru: "киноэкран, кино (о классическом Голливуде)", def: "an old name for the cinema and the film industry", ex: "Stars of the ___ set the fashion for millions of women." },
    { w: "costume designer", pos: "noun", ru: "художник по костюмам", def: "a person who designs the clothes for a film or a play", ex: "The ___ made forty dresses for the film." },
    { w: "satin", pos: "noun", ru: "атлас", def: "a smooth, shiny fabric, often made of silk", ex: "Jean Harlow often wore white ___ gowns on screen." },
    { w: "platinum blonde", pos: "noun", ru: "платиновая блондинка", def: "a woman with very light, almost white hair", ex: "Jean Harlow was the most famous ___ of the 1930s." },
    { w: "backless", pos: "adjective", ru: "с открытой спиной", def: "with no fabric at the back, so the back is bare", ex: "A ___ evening dress looks beautiful from behind." },
    { w: "fur stole", pos: "noun", ru: "меховой палантин", def: "a wide band of fur that a woman wears around her shoulders", ex: "She wore a white ___ over her evening dress." },
    { w: "premiere", pos: "noun", ru: "премьера", def: "the first public show of a new film or play", ex: "Fans waited for hours outside the ___." },
    { w: "sophisticated", pos: "adjective", ru: "изысканный, утончённый", def: "elegant and stylish in a way that shows experience and good taste", ex: "Her ___ style made her look older than twenty." },
    { w: "waistline", pos: "noun", ru: "линия талии", def: "the line around the body at the waist; also the place where a dress fits the waist", ex: "In the 1930s, the ___ returned to its natural place.", note: "drop waist в 1920-е — талия на бёдрах; в 1930-е waistline вернулась на своё место." }
  ],
  ex: [
    { type: "flash", cards: ["glamorous", "silver screen", "costume designer", "satin", "platinum blonde"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["a white satin", "белое атласное", "gown", "платье"],
        ["a film", "кино-", "premiere", "премьера"],
        ["walk", "пройти по", "the red carpet", "красной дорожке"],
        ["stars of", "звёзды", "the silver screen", "киноэкрана"],
        ["copy", "копировать", "a star's look", "образ звезды"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "In the early 1930s, many people were losing their jobs, but every week millions of them went to the cinema. On the {0}, they saw a different world. Actresses were wearing long, {1} gowns made of shiny {2}. Jean Harlow, the most famous {3} of the decade, often appeared in white. In the 1930s the {4} returned to its natural place, and many evening dresses were {5}, so the back was bare. Over their shoulders, the stars wore a white {6}. Hollywood {7} were very important: while the stars were posing for photographers, women in the crowd were studying every detail of their dresses.",
      gaps: [
        { a: "silver screen", o: ["silver screen", "red carpet", "backdrop"], why: "Другой мир показывали в кино — на киноэкране, silver screen." },
        { a: "glamorous", o: ["glamorous", "sporty", "boyish"], why: "Длинные блестящие платья звёзд — гламурные, роскошные." },
        { a: "satin", o: ["satin", "denim", "corduroy"], why: "«shiny» — блестящий атлас. Деним и вельвет не блестят." },
        { a: "platinum blonde", o: ["platinum blonde", "costume designer", "make-up artist"], why: "Джин Харлоу — знаменитая платиновая блондинка." },
        { a: "waistline", o: ["waistline", "hemline", "neckline"], why: "«returned to its natural place» — талия вернулась на место после заниженной талии 1920-х." },
        { a: "backless", o: ["backless", "knee-length", "double-breasted"], why: "«the back was bare» — с открытой спиной, backless." },
        { a: "fur stole", o: ["fur stole", "bow tie", "flat cap"], why: "На плечи поверх платья — меховой палантин." },
        { a: "premieres", o: ["premieres", "costume designers", "references"], why: "Звёзды позируют фотографам, толпа рассматривает платья — это премьеры." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["glamorous", "scruffy", "sophisticated", "elegant"], o: 1, why: "scruffy — неряшливый. Остальные три — про роскошный, изысканный вид." },
        { w: ["satin", "silk", "denim", "velvet"], o: 2, why: "denim — повседневная ткань. Атлас, шёлк и бархат — вечерние." },
        { w: ["actress", "costume designer", "director", "premiere"], o: 3, why: "premiere — событие. Остальные три — люди, которые делают фильм." }
      ]
    },
    { type: "flash", cards: ["backless", "fur stole", "premiere", "sophisticated", "waistline"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. Adrian was the most famous {0} at MGM: he dressed Joan Crawford and Greta Garbo.\n2. Her dress was {1} — the back was completely bare.\n3. The new film had its {2} in London last night.\n4. She put a white {3} around her shoulders.\n5. Shiny {4} looks wonderful under studio lights.",
      gaps: [
        { a: "costume designer", why: "Человек, который создаёт костюмы для фильмов, — художник по костюмам." },
        { a: "backless", why: "Спина открыта — backless." },
        { a: "premiere", why: "Первый показ фильма — премьера." },
        { a: "fur stole", alt: ["stole"], why: "Мех вокруг плеч — меховой палантин." },
        { a: "satin", why: "Блестящая гладкая ткань — атлас." }
      ]
    },
    {
      type: "builder", g: "g08",
      items: [
        {
          ctx: "Пока звезда позировала фотографам, фанаты выкрикивали её имя.",
          formula: ["While", "Subject", "was / were + V-ing", "Subject", "was / were + V-ing"],
          parts: ["While the star", { v: "POSE", a: ["was posing"], f: [2], rule: "Длинное действие после while → was + V-ing. pose → posing." }, "for photographers, the fans", { v: "SHOUT", a: ["were shouting"], f: [4], rule: "Два процесса одновременно → оба в Past Continuous. fans → were." }, "her name."]
        },
        {
          ctx: "Мы смотрели фильм, когда погас свет.",
          formula: ["Subject", "was / were + V-ing", "Object", "when", "Subject + V2"],
          parts: ["We", { v: "WATCH", a: ["were watching"], f: [1], rule: "Процесс, который прервали → were + V-ing." }, "the film", { p: ["when", "while", "during"], a: "when", f: [3], rule: "Короткое событие, которое прервало процесс, вводим через when." }, "the lights went out."]
        },
        {
          ctx: "Что ты делала вчера в 9 вечера? — Шила атласное платье.",
          formula: ["Subject", "was / were + V-ing", "Object", "at + time"],
          parts: ["I", { v: "SEW", a: ["was sewing"], f: [1], rule: "Процесс в конкретный момент прошлого → was + V-ing." }, "a satin dress", { p: ["at", "in", "on"], a: "at", f: [3], rule: "С точным временем — at: at 9 p.m." }, "9 p.m. yesterday."]
        }
      ]
    },
    {
      type: "spot", g: "g08",
      sets: [
        {
          sentences: ["The actress was wearing a backless gown.", "We was waiting outside the cinema for hours.", "Jean Harlow had platinum blonde hair."],
          err: { s: 1, span: "was", fix: ["were"], g: "g08", note: "we / you / they → were: we were waiting." }
        },
        {
          sentences: ["While she was walking to the car, the fans were waving.", "The stars arrived at the premiere at eight.", "I was reading a magazine when the phone was ringing."],
          err: { s: 2, span: "was ringing", fix: ["rang"], g: "g08", note: "Звонок — короткое событие, которое прервало чтение: Past Simple, rang." }
        }
      ]
    }
  ]
});

FE.addDay({
  n: 17,
  words: [
    { w: "bias cut", pos: "noun", ru: "крой по косой", def: "a way of cutting fabric diagonally, so the dress falls softly and follows the body", ex: "Madeleine Vionnet made the ___ famous." },
    { w: "evening gown", pos: "noun", ru: "вечернее платье", def: "a long, elegant dress for formal events at night", ex: "She wore a silver ___ to the ball." },
    { w: "drape", pos: "verb", ru: "драпироваться, мягко ниспадать", def: "to hang or fall in soft folds", ex: "Silk ___ beautifully over the hips.", exA: "drapes" },
    { w: "cling", pos: "verb", ru: "облегать, льнуть к телу", def: "to stay very close to the body", ex: "The thin silk ___ to her body as she walked.", exA: "clung", note: "Неправильный глагол: cling — clung — clung." },
    { w: "fluid", pos: "adjective", ru: "струящийся, плавный", def: "moving and falling softly, like water", ex: "Vionnet's dresses had soft, ___ lines." },
    { w: "diagonal", pos: "adjective", ru: "диагональный, по косой", def: "going at an angle from one corner to the opposite corner", ex: "She cut the fabric in a ___ line." },
    { w: "halter neck", pos: "noun", ru: "вырез халтер (лямка вокруг шеи)", def: "a neckline with a strap that goes around the back of the neck, so the shoulders are bare", ex: "A ___ shows off beautiful shoulders and arms." },
    { w: "cowl neck", pos: "noun", ru: "воротник-хомут, драпированный вырез", def: "a neckline with soft folds of fabric hanging at the front", ex: "The ___ of her gown fell in soft folds." },
    { w: "train", pos: "noun", ru: "шлейф", def: "a long part at the back of a dress that lies on the floor behind you", ex: "The wedding dress had a three-metre ___.", note: "train — ещё и «поезд»; про платье — шлейф." },
    { w: "floor-length", pos: "adjective", ru: "в пол", def: "long enough to touch the floor", ex: "In the 1930s, evening gowns were ___ again." }
  ],
  ex: [
    { type: "flash", cards: ["bias cut", "evening gown", "drape", "cling", "fluid"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["cut fabric", "кроить ткань", "on the bias", "по косой"],
        ["a floor-length", "в пол", "evening gown", "вечернее платье"],
        ["lift", "приподнять", "the train", "шлейф"],
        ["show off", "показать, подчеркнуть", "bare shoulders", "открытые плечи"],
        ["fall in", "ниспадать", "soft folds", "мягкими складками"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "The French designer Madeleine Vionnet changed the way dresses moved. Most dressmakers cut fabric along the threads, but Vionnet cut it on a {0} line. This method, the {1}, made the fabric soft and a little stretchy. Her silk dresses did not stand away from the body — they {2} to it and moved with every step. The lines were {3}, like water. In the 1930s Hollywood loved this look: actresses wore {4} that were {5}, and some even had a long {6} at the back. Other gowns had soft folds of fabric at the front of the neck — this neckline is the {7}.",
      gaps: [
        { a: "diagonal", o: ["diagonal", "geometric", "boyish"], why: "Не вдоль нитей, а по косой — diagonal." },
        { a: "bias cut", o: ["bias cut", "drop waist", "hemline"], why: "Крой по косой называется bias cut." },
        { a: "clung", o: ["clung", "clashed", "wrapped"], why: "Платья не отстояли от тела, а облегали его — clung (cling — clung)." },
        { a: "fluid", o: ["fluid", "boxy", "chunky"], why: "«like water» — струящиеся линии, fluid. boxy и chunky — наоборот, жёсткие и массивные." },
        { a: "evening gowns", o: ["evening gowns", "plus fours", "tracksuits"], why: "Голливудские актрисы — в вечерних платьях." },
        { a: "floor-length", o: ["floor-length", "knee-length", "double-breasted"], why: "Вечерние платья 1930-х — длиной в пол." },
        { a: "train", o: ["train", "sole", "cuff"], why: "Длинная часть платья сзади, на полу, — шлейф." },
        { a: "cowl neck", o: ["cowl neck", "halter neck", "waistband"], why: "Мягкие складки ткани спереди у шеи — cowl neck. Halter neck — лямка вокруг шеи." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["train", "halter neck", "cowl neck", "V-neck"], o: 0, why: "train — шлейф. Остальные три — виды выреза." },
        { w: ["fluid", "soft", "stiff", "flowing"], o: 2, why: "stiff — жёсткий. Остальные три — про мягкую, струящуюся ткань." },
        { w: ["floor-length", "knee-length", "ankle-length", "backless"], o: 3, why: "backless — про спину. Остальные три — про длину." }
      ]
    },
    { type: "flash", cards: ["diagonal", "halter neck", "cowl neck", "train", "floor-length"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. Cut on the bias, the silk {0} to her body like water.\n2. The bride's dress had a long {1} that lay on the floor behind her.\n3. The strap of her {2} went around the back of her neck.\n4. Evening gowns in the 1930s were {3}: they touched the floor.\n5. Soft silk {4} beautifully, but stiff cotton doesn't.",
      gaps: [
        { a: "clung", alt: ["clings"], why: "Облегала тело — clung (cling — clung — clung). clings тоже засчитываем." },
        { a: "train", why: "Часть платья, которая лежит на полу сзади, — шлейф." },
        { a: "halter neck", why: "Лямка вокруг шеи — halter neck." },
        { a: "floor-length", alt: ["floor length"], why: "До пола — floor-length." },
        { a: "drapes", why: "Мягко ниспадает складками — drapes. Silk = it → -s." }
      ]
    },
    {
      type: "tense", g: "g08",
      tenses: ["Past Simple", "Past Continuous", "Present Simple"],
      bases: [
        {
          base: "The silk clings to her body.",
          tr: [
            { m: "at that moment", tpl: "At that moment the wet silk {} to her body.", a: ["was clinging"], t: "Past Continuous", why: "at that moment — процесс в конкретный момент прошлого → was + V-ing." },
            { m: "always", tpl: "Bias-cut silk always {} to the body.", a: ["clings"], t: "Present Simple", why: "always — общий факт → Present Simple, silk = it → -s." },
            { m: "in 1933", tpl: "In 1933 Jean Harlow's white satin gown {} to her body in a famous film.", a: ["clung"], t: "Past Simple", why: "in 1933 — факт в прошлом → Past Simple. cling → clung." }
          ]
        },
        {
          base: "The tailor cuts the fabric on the bias.",
          tr: [
            { m: "at 10 a.m. yesterday", tpl: "At 10 a.m. yesterday the tailor {} the fabric on the bias.", a: ["was cutting"], t: "Past Continuous", why: "Точный момент в прошлом → процесс, was + V-ing. cut → cutting." },
            { m: "yesterday", tpl: "Yesterday the tailor {} the fabric and finished the gown.", a: ["cut"], t: "Past Simple", why: "Законченные действия одно за другим → Past Simple. cut — cut — cut." },
            { m: "usually", tpl: "The tailor usually {} silk on the bias.", a: ["cuts"], t: "Present Simple", why: "usually — привычка → Present Simple, he → -s." }
          ]
        }
      ]
    },
    {
      type: "builder", g: "g08",
      items: [
        {
          ctx: "Портниха кроила шёлк, когда вошла клиентка.",
          formula: ["Subject", "was / were + V-ing", "Object", "when", "Subject + V2"],
          parts: ["The dressmaker", { v: "CUT", a: ["was cutting"], f: [1], rule: "Процесс, который прервали → was + V-ing. cut → cutting." }, "the silk", { p: ["when", "while", "during"], a: "when", f: [3], rule: "Короткое событие → when + Past Simple." }, "the client came in."]
        },
        {
          ctx: "Пока модель шла по подиуму, шлейф платья скользил по полу.",
          formula: ["While", "Subject", "was + V-ing", "Subject", "was + V-ing"],
          parts: ["While the model", { v: "WALK", a: ["was walking"], f: [2], rule: "Длинный процесс после while → was + V-ing." }, "down the runway, the train of her gown", { v: "SLIDE", a: ["was sliding"], f: [4], rule: "Два одновременных процесса → оба в Past Continuous. slide → sliding." }, "across the floor."]
        }
      ]
    }
  ]
});

FE.addDay({
  n: 18,
  words: [
    { w: "surreal", pos: "adjective", ru: "сюрреалистичный", def: "strange and dreamlike, mixing real things in unexpected ways", ex: "A hat in the shape of a shoe? That's ___!" },
    { w: "shocking pink", pos: "noun", ru: "«шокирующий розовый»", def: "a very bright, strong pink colour", ex: "Schiaparelli's favourite colour was ___." },
    { w: "zip", pos: "noun", ru: "молния (застёжка)", def: "a fastener with two rows of small metal or plastic teeth that close together", ex: "The back of the dress closes with a long ___.", note: "В американском английском — zipper." },
    { w: "knitwear", pos: "noun", ru: "трикотаж, вязаные вещи", def: "clothes made from wool on needles or a machine, like sweaters and cardigans", ex: "She started her career with ___: a black sweater with a white bow on it." },
    { w: "witty", pos: "adjective", ru: "остроумный", def: "clever and funny", ex: "Her designs were ___ — they made people smile." },
    { w: "playful", pos: "adjective", ru: "игривый", def: "full of fun, not too serious", ex: "Buttons in the shape of insects gave the jacket a ___ look." },
    { w: "motif", pos: "noun", ru: "мотив (повторяющийся элемент)", def: "a shape or picture that appears again and again in a design", ex: "The lobster became a famous ___ in her work." },
    { w: "collaboration", pos: "noun", ru: "коллаборация, совместная работа", def: "work that two or more people or brands do together", ex: "The Lobster Dress was a ___ between Schiaparelli and Salvador Dalí." },
    { w: "rival", pos: "noun", ru: "соперник, конкурент", def: "a person or company that competes with another", ex: "Chanel and Schiaparelli were famous ___.", exA: "rivals" },
    { w: "eccentric", pos: "adjective", ru: "эксцентричный", def: "unusual and a little strange, in an interesting way", ex: "Her ___ hats surprised even Paris." }
  ],
  ex: [
    { type: "flash", cards: ["surreal", "shocking pink", "zip", "knitwear", "witty"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["shocking", "шокирующий", "pink", "розовый"],
        ["do up", "застегнуть", "the zip", "молнию"],
        ["a lobster", "с омаром", "motif", "мотив"],
        ["bitter", "заклятые", "rivals", "соперницы"],
        ["a hat shaped", "шляпа в форме", "like a shoe", "туфли"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "Elsa Schiaparelli was born in Rome, but she made her name in Paris. In 1927 she was selling simple {0} when a black sweater with a white bow made her famous. In the 1930s she was working with artists like Salvador Dalí. Their most famous {1} was a white dress with a big red lobster on the skirt. She loved {2} ideas: a hat that looked like a shoe, buttons like insects. Her designs were {3} — they made people laugh. In 1937 she introduced a bright new colour, {4}. She also put plastic {5} on evening dresses, where everyone could see them. Coco Chanel didn't like her style, and the two designers became {6}.",
      gaps: [
        { a: "knitwear", o: ["knitwear", "footwear", "jewellery"], why: "Свитер с бантом — это трикотаж, knitwear." },
        { a: "collaboration", o: ["collaboration", "rival", "motif"], why: "Работа Скьяпарелли вместе с Дали — коллаборация." },
        { a: "surreal", o: ["surreal", "neutral", "plain"], why: "Шляпа-туфля и пуговицы-насекомые — сюрреалистичные идеи." },
        { a: "witty", o: ["witty", "minimalist", "neutral"], why: "«they made people laugh» — остроумные." },
        { a: "shocking pink", o: ["shocking pink", "navy blue", "beige"], why: "«a bright new colour» в 1937 году — шокирующий розовый." },
        { a: "zips", o: ["zips", "pearls", "bangles"], why: "Пластиковые застёжки на виду — молнии." },
        { a: "rivals", o: ["rivals", "collaborations", "motifs"], why: "Шанель не любила её стиль — они стали соперницами." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["serious", "witty", "playful", "funny"], o: 0, why: "serious — серьёзный. Остальные три — про юмор и игру." },
        { w: ["surreal", "strange", "ordinary", "dreamlike"], o: 2, why: "ordinary — обычный. Остальные три — про странное, как во сне." },
        { w: ["zip", "button", "hook", "motif"], o: 3, why: "motif — элемент рисунка. Молния, пуговица и крючок — застёжки." }
      ]
    },
    { type: "flash", cards: ["playful", "motif", "collaboration", "rival", "eccentric"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. Sweaters and cardigans are {0}.\n2. Pull up the {1} at the back of the dress, please.\n3. The designer and the artist worked together: it was a great {2}.\n4. Her hat looked like a shoe — a really {3} idea.\n5. Butterflies appear again and again in her prints: it's her favourite {4}.",
      gaps: [
        { a: "knitwear", why: "Вязаные вещи — трикотаж." },
        { a: "zip", alt: ["zipper"], why: "Застёжка на спине — молния." },
        { a: "collaboration", why: "Совместная работа — коллаборация." },
        { a: "surreal", alt: ["eccentric", "playful"], why: "Шляпа-туфля — сюрреалистичная идея." },
        { a: "motif", why: "Повторяющийся элемент рисунка — мотив." }
      ]
    },
    {
      type: "tense", g: "g08",
      tenses: ["Past Simple", "Past Continuous", "Present Simple"],
      bases: [
        {
          base: "Schiaparelli creates surreal designs.",
          tr: [
            { m: "in 1937", tpl: "In 1937 Schiaparelli {} the Lobster Dress.", a: ["created"], t: "Past Simple", why: "in 1937 — факт в прошлом → Past Simple." },
            { m: "when Dalí visited", tpl: "Schiaparelli {} a new hat when Dalí visited her studio.", a: ["was creating"], t: "Past Continuous", why: "Работа шла, и в этот момент пришёл Дали → процесс в Past Continuous, визит в Past Simple." },
            { m: "every season", tpl: "Her fashion house {} surreal designs every season.", a: ["creates"], t: "Present Simple", why: "every season — регулярно → Present Simple." }
          ]
        },
        {
          base: "The model wears shocking pink.",
          tr: [
            { m: "at 6 p.m. yesterday", tpl: "At 6 p.m. yesterday the model {} shocking pink.", a: ["was wearing"], t: "Past Continuous", why: "Точный момент в прошлом → was + V-ing." },
            { m: "last night", tpl: "Last night the model {} a shocking pink coat to the party.", a: ["wore"], t: "Past Simple", why: "last night — законченное прошлое → wore." },
            { m: "often", tpl: "The model often {} shocking pink.", a: ["wears"], t: "Present Simple", why: "often — привычка → Present Simple, she → -s." }
          ]
        }
      ]
    },
    {
      type: "spot", g: "g08",
      sets: [
        {
          sentences: ["Schiaparelli was working in Paris in the 1930s.", "When I arrived, the designers were drawing new motifs.", "She was meeting Dalí and they quickly became friends."],
          err: { s: 2, span: "was meeting", fix: ["met"], g: "g08", note: "Познакомиться — короткое законченное событие, а не процесс: она met Dalí." }
        },
        {
          sentences: ["While she was sewing the zip, the needle broke.", "They was arguing about pink all morning.", "Chanel and Schiaparelli were rivals."],
          err: { s: 1, span: "was", fix: ["were"], g: "g08", note: "they → were: they were arguing." }
        }
      ]
    }
  ]
});

FE.addDay({
  n: 19,
  words: [
    { w: "affordable", pos: "adjective", ru: "доступный по цене", def: "cheap enough for most people to buy", ex: "Department stores sold ___ copies of film stars' dresses." },
    { w: "thrifty", pos: "adjective", ru: "бережливый, экономный", def: "careful with money; not wasting anything", ex: "My ___ grandmother never threw away a button." },
    { w: "rayon", pos: "noun", ru: "вискоза («искусственный шёлк»)", def: "a cheap fabric made from wood, which looks like silk", ex: "___ dresses looked like silk but cost much less.", exA: "Rayon" },
    { w: "sewing machine", pos: "noun", ru: "швейная машинка", def: "a machine that sews pieces of fabric together", ex: "Many families had a ___ at home." },
    { w: "sewing pattern", pos: "noun", ru: "выкройка", def: "paper shapes that show you how to cut fabric to make a garment", ex: "She bought a ___ and made the dress herself.", note: "pattern — и узор (день 6), и выкройка. Чтобы было понятно, говорят sewing pattern." },
    { w: "homemade", pos: "adjective", ru: "самодельный, сшитый дома", def: "made at home, not bought in a shop", ex: "All her clothes were ___ in the 1930s." },
    { w: "hand-me-downs", pos: "noun, plural", ru: "вещи, доставшиеся от старших", def: "clothes that older brothers or sisters wore before you", ex: "As the youngest child, she only wore ___." },
    { w: "feed sack", pos: "noun", ru: "мешок из-под корма или муки", def: "a cotton bag for flour or animal food; in the 1930s, families made clothes from them", ex: "Her dress was made from a flowered ___." },
    { w: "alter", pos: "verb", ru: "подогнать, перешить (по фигуре)", def: "to make a garment shorter, longer, bigger or smaller so that it fits", ex: "Can you ___ these trousers? They're too long.", note: "alter — подогнать (укоротить, ушить); remake — переделать в другую вещь." },
    { w: "remake", pos: "verb", ru: "переделать (в другую вещь)", def: "to make something old into something new and different", ex: "She ___ her mother's old coat into a jacket for her son.", exA: "remade" }
  ],
  ex: [
    { type: "flash", cards: ["affordable", "thrifty", "rayon", "sewing machine", "sewing pattern"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["alter", "подогнать", "a dress to fit", "платье по фигуре"],
        ["remake", "переделать", "an old coat into a jacket", "пальто в жакет"],
        ["pass down", "передать", "clothes to a younger sister", "одежду младшей сестре"],
        ["save", "экономить", "money", "деньги"],
        ["a cheap", "дешёвое", "rayon dress", "платье из вискозы"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "In October 1929, the American stock market crashed, and the Great Depression began. Many people were losing their jobs and their savings. Families had to be {0}: they didn't throw anything away. Women were making clothes at home with a {1} and a cheap paper {2}. Many children wore {3} from older brothers and sisters. In America, companies sold flour and animal food in cotton bags with pretty prints, and mothers made dresses from every {4}. Instead of silk, women chose {5}, which looked similar but cost much less. When a skirt was too long, they didn't buy a new one — they {6} it. Fashion still mattered, but it had to be {7}.",
      gaps: [
        { a: "thrifty", o: ["thrifty", "glamorous", "eccentric"], why: "«didn't throw anything away» — бережливые, thrifty." },
        { a: "sewing machine", o: ["sewing machine", "steamer", "lint roller"], why: "Шили дома на швейной машинке." },
        { a: "sewing pattern", o: ["sewing pattern", "shot list", "mood board"], why: "Бумажная выкройка, по которой кроят ткань, — sewing pattern." },
        { a: "hand-me-downs", o: ["hand-me-downs", "stilettos", "evening gowns"], why: "Одежда от старших братьев и сестёр — hand-me-downs." },
        { a: "feed sack", o: ["feed sack", "clutch", "fur stole"], why: "Платья шили из хлопковых мешков из-под муки и корма." },
        { a: "rayon", o: ["rayon", "velvet", "satin"], why: "Похоже на шёлк, но дешевле — вискоза, rayon." },
        { a: "altered", o: ["altered", "remade", "wrapped"], why: "Слишком длинную юбку подгоняли — altered. remade — переделать в совсем другую вещь." },
        { a: "affordable", o: ["affordable", "glamorous", "backless"], why: "Мода должна была стоить недорого — affordable." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["thrifty", "wasteful", "economical", "careful"], o: 1, why: "wasteful — расточительный. Остальные три — про бережливость." },
        { w: ["cotton", "rayon", "polyester", "nylon"], o: 0, why: "cotton — натуральная ткань. Вискоза, полиэстер и нейлон сделаны на фабрике из сырья химическим способом." },
        { w: ["homemade", "handmade", "hand-sewn", "shop-bought"], o: 3, why: "shop-bought — купленный в магазине. Остальные три — сделанные своими руками." }
      ]
    },
    { type: "flash", cards: ["homemade", "hand-me-downs", "feed sack", "alter", "remake"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. This dress is too big — can you {0} it for me?\n2. She wore her sister's old clothes: they were all {1}.\n3. {2} looks like silk, but it is made from wood.\n4. My grandmother still has her old {3} and makes curtains on it.\n5. During the Depression, people looked for {4} clothes that didn't cost much.",
      gaps: [
        { a: "alter", why: "Подогнать по фигуре — alter." },
        { a: "hand-me-downs", alt: ["hand me downs"], why: "Вещи от старших — hand-me-downs." },
        { a: "Rayon", why: "Похожа на шёлк, но сделана из древесины — вискоза." },
        { a: "sewing machine", why: "Шьют на швейной машинке." },
        { a: "affordable", alt: ["cheap"], why: "Недорогие — affordable." }
      ]
    },
    {
      type: "builder", g: "g08",
      items: [
        {
          ctx: "Когда начался кризис, её семья жила в Чикаго.",
          formula: ["When", "Subject + V2", "Subject", "was / were + V-ing", "in + place"],
          parts: [{ p: ["When", "While", "During"], a: "When", f: [0], rule: "Короткое событие (кризис начался) → when + Past Simple." }, "the crisis began, her family", { v: "LIVE", a: ["was living"], f: [3], rule: "Состояние на фоне события → was + V-ing. family = it → was." }, "in Chicago."]
        },
        {
          ctx: "Пока мама шила платье, дочь вырезала выкройку.",
          formula: ["While", "Subject", "was + V-ing", "Subject", "was + V-ing", "Object"],
          parts: ["While Mum", { v: "SEW", a: ["was sewing"], f: [2], rule: "Длинный процесс после while → was + V-ing." }, "the dress, her daughter", { v: "CUT OUT", a: ["was cutting out"], f: [4], rule: "Два процесса одновременно → оба в Past Continuous. cut → cutting." }, "the sewing pattern."]
        },
        {
          ctx: "Она переделывала старое пальто, когда сломалась машинка.",
          formula: ["Subject", "was + V-ing", "Object", "when", "Subject + V2"],
          parts: ["She", { v: "REMAKE", a: ["was remaking"], f: [1], rule: "Процесс, который прервали → was + V-ing." }, "an old coat", { p: ["when", "while", "during"], a: "when", f: [3], rule: "Короткое событие → when + Past Simple." }, "the sewing machine broke."]
        }
      ]
    },
    {
      type: "spot", g: "g08",
      sets: [
        {
          sentences: ["In 1929 the stock market crashed.", "People was looking for cheap fabrics.", "She altered the skirt herself."],
          err: { s: 1, span: "was", fix: ["were"], g: "g08", note: "people — множественное число → were looking." }
        },
        {
          sentences: ["While she was sewing, the light went out.", "He was buying a sewing pattern when he was seeing his friend.", "Rayon was cheaper than silk."],
          err: { s: 1, span: "was seeing", fix: ["saw"], g: "g08", note: "Увидел друга — короткое событие, оно прервало покупку: Past Simple, saw." }
        }
      ]
    }
  ]
});

FE.addDay({
  n: 20,
  words: [
    { w: "second-hand", pos: "adjective", ru: "подержанный, б/у", def: "owned and used by someone before you", ex: "She buys most of her clothes ___." },
    { w: "condition", pos: "noun", ru: "состояние (вещи)", def: "how good or bad something is: new, old or damaged", ex: "The coat is from 1935, but it's in perfect ___." },
    { w: "stain", pos: "noun", ru: "пятно", def: "a dirty mark that is hard to remove", ex: "There's a small coffee ___ on the collar." },
    { w: "moth hole", pos: "noun", ru: "дырка от моли", def: "a small hole in wool made by an insect that eats fabric", ex: "Check every sweater for ___ before the shoot.", exA: "moth holes" },
    { w: "fragile", pos: "adjective", ru: "хрупкий, ветхий", def: "easy to break or damage", ex: "This 1920s beaded dress is very ___ — hold it carefully." },
    { w: "label", pos: "noun", ru: "бирка, лейбл", def: "a small piece of fabric inside a garment with the brand name, size or washing instructions", ex: "The ___ inside says «Made in Paris»." },
    { w: "dry-clean", pos: "verb", ru: "сдать в химчистку", def: "to clean clothes with chemicals, not with water", ex: "You can't wash velvet — you have to ___ it." },
    { w: "garment bag", pos: "noun", ru: "чехол для одежды", def: "a long bag with a zip that protects a garment on its hanger", ex: "Each gown travelled to the studio in its own ___." },
    { w: "rental", pos: "noun", ru: "прокат, аренда", def: "paying to use something for a short time", ex: "The vintage car was a ___ — we returned it after the shoot." },
    { w: "price tag", pos: "noun", ru: "ценник", def: "a small label that shows how much something costs", ex: "Don't forget to hide the ___ before the photo." }
  ],
  ex: [
    { type: "flash", cards: ["second-hand", "condition", "stain", "moth hole", "fragile"] },
    {
      type: "match", title: "Соедини пары",
      pairs: [
        ["in mint", "в идеальном", "condition", "состоянии"],
        ["remove", "вывести", "a stain", "пятно"],
        ["hang the gown in", "повесить платье в", "a garment bag", "чехол"],
        ["handle", "обращаться", "with care", "бережно"],
        ["cut off", "срезать", "the price tag", "ценник"]
      ]
    },
    {
      type: "cloze", mode: "select",
      text: "Last Tuesday we were shooting a catalogue for a vintage shop. All the clothes were {0}, from the 1920s to the 1960s. While the assistant was steaming the dresses, I was checking the {1} of each piece. A 1930s satin gown had a small {2} near the hem, so we turned that side away from the camera. A wool coat had two {3}, and a beaded dress was so {4} that only one person could touch it. Some dresses had a Paris {5} inside — the client wanted close-ups of them. In the end, every piece went back to the shop in its own {6}.",
      gaps: [
        { a: "second-hand", o: ["second-hand", "backless", "floor-length"], why: "Винтажный магазин: у всех вещей уже были хозяева — second-hand." },
        { a: "condition", o: ["condition", "label", "rental"], why: "Проверяют, в каком состоянии каждая вещь, — condition." },
        { a: "stain", o: ["stain", "train", "zip"], why: "Дефект, который прячут от камеры, — пятно." },
        { a: "moth holes", o: ["moth holes", "price tags", "zips"], why: "У шерстяного пальто — дырки от моли." },
        { a: "fragile", o: ["fragile", "fluid", "witty"], why: "Трогать мог только один человек — платье очень хрупкое." },
        { a: "label", o: ["label", "stain", "motif"], why: "«Paris» внутри платья — бирка, label." },
        { a: "garment bag", o: ["garment bag", "clutch", "feed sack"], why: "Каждое платье везут в своём чехле." }
      ]
    },
    {
      type: "odd",
      rows: [
        { w: ["stain", "label", "moth hole", "tear"], o: 1, why: "label — бирка. Пятно, дырка от моли и разрыв (tear) — повреждения." },
        { w: ["strong", "fragile", "delicate", "weak"], o: 0, why: "strong — прочный. Остальные три — про хрупкие вещи." },
        { w: ["dry-clean", "steam", "iron", "rent"], o: 3, why: "rent — взять напрокат. Остальные три — уход за одеждой." }
      ]
    },
    { type: "flash", cards: ["label", "dry-clean", "garment bag", "rental", "price tag"] },
    {
      type: "cloze", mode: "type", title: "Complete the sentences",
      text: "1. You can't wash this silk dress in water — you have to {0} it.\n2. There's a red wine {1} on the skirt.\n3. The coat is old, but it's in excellent {2}.\n4. Before the photo, cut off the {3} — we don't want to see the price.\n5. Be careful: this 1920s dress is very old and {4}.",
      gaps: [
        { a: "dry-clean", alt: ["dry clean"], why: "Не в воде, а в химчистке — dry-clean." },
        { a: "stain", why: "След от вина — пятно." },
        { a: "condition", why: "В каком состоянии вещь — condition." },
        { a: "price tag", why: "Бирка с ценой — ценник." },
        { a: "fragile", alt: ["delicate"], why: "Старая и легко рвётся — fragile." }
      ]
    },
    {
      type: "tense", g: "g08",
      tenses: ["Past Simple", "Past Continuous", "Present Simple"],
      bases: [
        {
          base: "The assistant steams the dresses.",
          tr: [
            { m: "at 9 a.m. yesterday", tpl: "At 9 a.m. yesterday the assistant {} the dresses.", a: ["was steaming"], t: "Past Continuous", why: "Точный момент в прошлом → процесс, was + V-ing." },
            { m: "yesterday morning", tpl: "Yesterday morning the assistant {} all the dresses in an hour.", a: ["steamed"], t: "Past Simple", why: "Законченное действие с результатом (all … in an hour) → Past Simple." },
            { m: "before every shoot", tpl: "The assistant {} the dresses before every shoot.", a: ["steams"], t: "Present Simple", why: "before every shoot — регулярно → Present Simple, she → -s." }
          ]
        },
        {
          base: "We check every label.",
          tr: [
            { m: "while the photographer was setting up", tpl: "While the photographer was setting up the lights, we {} every label.", a: ["were checking"], t: "Past Continuous", why: "Два процесса одновременно → тоже Past Continuous: we were checking." },
            { m: "last week", tpl: "Last week we {} every label and found a real Chanel.", a: ["checked"], t: "Past Simple", why: "last week — законченные факты → Past Simple." },
            { m: "always", tpl: "We always {} every label before a vintage shoot.", a: ["check"], t: "Present Simple", why: "always — привычка → Present Simple, we без -s." }
          ]
        }
      ]
    },
    {
      type: "builder", g: "g08",
      items: [
        {
          ctx: "Мы складывали платья в чехлы, когда позвонил клиент.",
          formula: ["Subject", "was / were + V-ing", "Object", "into + noun", "when + Subject + V2"],
          parts: ["We", { v: "PACK", a: ["were packing"], f: [1], rule: "Процесс, который прервали → were + V-ing." }, "the gowns", { p: ["into", "onto", "at"], a: "into", f: [3], rule: "Положить внутрь — into: into garment bags." }, "garment bags when the client called."]
        },
        {
          ctx: "Пока ассистент отпаривала пальто, я нашла пятно на воротнике.",
          formula: ["While", "Subject", "was + V-ing", "Object", "Subject", "V2", "Object + place"],
          parts: ["While the assistant", { v: "STEAM", a: ["was steaming"], f: [2], rule: "Фон, длинный процесс → was + V-ing." }, "the coat, I", { v: "FIND", a: ["found"], f: [5], rule: "Короткое событие на этом фоне → Past Simple. find → found." }, "a stain on the collar."]
        }
      ]
    }
  ]
});

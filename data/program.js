/* Программа курса: 9 блоков по 10 дней. Содержимое дней — в файлах blockNN.js. */
window.FE = { blocks: [], outline: [], days: {}, words: {}, grammar: {}, placement: [] };

FE.norm = s => String(s || "").toLowerCase().replace(/[’‘`]/g, "'").replace(/[“”"«»]/g, "")
  .replace(/\s+/g, " ").trim().replace(/[.!?,;:]+$/, "").trim();
FE.slug = s => FE.norm(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

FE.addDay = function (d) {
  const o = FE.outline[d.n - 1];
  Object.assign(d, { title: o.t, ru: o.ru, g: o.g, work: o.w });
  d.words.forEach(w => { w.id = FE.slug(w.w); w.day = d.n; FE.words[w.id] = w; });
  FE.days[d.n] = d;
};

FE.wordFor = function (ans) {
  const n = FE.norm(ans);
  for (const id in FE.words) {
    const w = FE.words[id];
    if (FE.norm(w.w) === n || FE.norm(w.exA) === n) return id;
  }
  return null;
};

FE.blocks = [
  { n: 1, title: "Основы", sub: "Одежда, крой, детали, ткани" },
  { n: 2, title: "1920-е и 1930-е", sub: "Флэпперы, Шанель, голливудский гламур" },
  { n: 3, title: "1940-е и 1950-е", sub: "Война, New Look, первые тинейджеры" },
  { n: 4, title: "1960-е", sub: "Swinging London, мини, хиппи" },
  { n: 5, title: "1970-е", sub: "Клёш, диско, панк" },
  { n: 6, title: "1980-е", sub: "Power dressing, логотипы, спорт" },
  { n: 7, title: "1990-е", sub: "Минимализм, гранж, стритвир" },
  { n: 8, title: "2000-е", sub: "Y2K, масс-маркет, мода онлайн" },
  { n: 9, title: "Работа стилиста", sub: "Брифы, клиенты, портфолио" }
];

/* [английское название, по-русски, грамматика, рабочий день стилиста] */
[
  ["Garments: what we wear", "Предметы одежды", "g01"],
  ["Fit and cut", "Посадка и крой", "g02"],
  ["Parts of a garment", "Детали одежды", "g01"],
  ["Fabrics and materials", "Ткани и материалы", "g03"],
  ["On set: a stylist's day", "На съёмке: день стилиста", "g01", 1],
  ["Colours, prints and patterns", "Цвета, принты, узоры", "g04"],
  ["Accessories", "Аксессуары", "g05"],
  ["Footwear", "Обувь", "g05"],
  ["Describing a look", "Описываем образ", "g06"],
  ["On set: building a look for a catalogue", "На съёмке: образ для каталога", "g06", 1],

  ["The Roaring Twenties: the flapper", "Ревущие двадцатые: флэпперы", "g07"],
  ["Coco Chanel and the little black dress", "Шанель и маленькое чёрное платье", "g07"],
  ["Art Deco and accessories", "Ар-деко и аксессуары", "g07"],
  ["Menswear in the 1920s", "Мужская мода 1920-х", "g07"],
  ["On set: a 1920s-inspired shoot", "На съёмке: образы в духе 1920-х", "g07", 1],
  ["The 1930s: Hollywood glamour", "1930-е: голливудский гламур", "g08"],
  ["Bias cut and evening gowns", "Крой по косой и вечерние платья", "g08"],
  ["Elsa Schiaparelli and surrealism", "Скьяпарелли и сюрреализм", "g08"],
  ["Fashion in the Great Depression", "Мода Великой депрессии", "g08"],
  ["On set: styling a vintage catalogue", "На съёмке: винтажный каталог", "g08", 1],

  ["Wartime fashion and rationing", "Мода военного времени", "g09"],
  ["Utility clothing: make do and mend", "Утилитарная одежда", "g09"],
  ["Dior's New Look", "New Look от Dior", "g09"],
  ["The hourglass silhouette", "Силуэт «песочные часы»", "g09"],
  ["On set: a 1950s campaign", "На съёмке: кампания в стиле 1950-х", "g09", 1],
  ["Teenagers and rock'n'roll", "Тинейджеры и рок-н-ролл", "g10"],
  ["Denim and the rebel look", "Деним и образ бунтаря", "g10"],
  ["The couture houses of Paris", "Парижские дома моды", "g10"],
  ["Ready-to-wear arrives", "Появление прет-а-порте", "g10"],
  ["On set: planning and budget", "На съёмке: план и бюджет", "g10", 1],

  ["Youthquake and Swinging London", "Молодёжный бум и Swinging London", "g11"],
  ["Mary Quant and the miniskirt", "Мэри Куант и мини-юбка", "g11"],
  ["Mods and Rockers", "Моды и рокеры", "g11"],
  ["Space Age fashion", "Мода космической эры", "g11"],
  ["On set: a mood board for a 60s shoot", "На съёмке: мудборд в стиле 60-х", "g11", 1],
  ["Hippie style", "Стиль хиппи", "g12"],
  ["Pop art and op art prints", "Принты поп-арт и оп-арт", "g12"],
  ["Icons of the 1960s", "Иконы стиля 1960-х", "g12"],
  ["Tokyo in the 1960s", "Токио в 1960-е", "g12"],
  ["On set: working with a photographer", "На съёмке: работа с фотографом", "g12", 1],

  ["Flares and platforms", "Клёш и платформы", "g13"],
  ["Disco nights", "Эпоха диско", "g13"],
  ["Boho and folk", "Бохо и фолк", "g13"],
  ["Diane von Furstenberg's wrap dress", "Платье с запахом Дианы фон Фюрстенберг", "g13"],
  ["On set: preparing a fitting", "На съёмке: подготовка примерки", "g13", 1],
  ["Punk", "Панк", "g14"],
  ["Sportswear and jeans for everyone", "Спортивная одежда и джинсы для всех", "g14"],
  ["Glam rock", "Глэм-рок", "g14"],
  ["Japanese designers in Paris", "Японские дизайнеры в Париже", "g14"],
  ["On set: talking to the client", "На съёмке: разговор с клиентом", "g14", 1],

  ["Power dressing", "Power dressing", "g15"],
  ["Shoulder pads and structured garments", "Подплечники и структурные вещи", "g15"],
  ["Fitness fashion and the first athleisure", "Фитнес-мода и первый athleisure", "g15"],
  ["Logos and brand recognition", "Логотипы и узнаваемость бренда", "g15"],
  ["On set: launching a campaign", "На съёмке: запуск кампании", "g15", 1],
  ["New Romantics", "Новые романтики", "g16"],
  ["Hip-hop style", "Стиль хип-хоп", "g16"],
  ["Colour blocking and bold prints", "Колор-блокинг и яркие принты", "g16"],
  ["Excess and luxury", "Роскошь и избыточность", "g16"],
  ["On set: making a lookbook", "На съёмке: лукбук", "g16", 1],

  ["Minimalism", "Минимализм", "g17"],
  ["Grunge", "Гранж", "g17"],
  ["The supermodels", "Эпоха супермоделей", "g17"],
  ["Slip dresses and the 90s silhouette", "Платья-комбинации и силуэт 90-х", "g17"],
  ["On set: casting models", "На съёмке: кастинг моделей", "g17", 1],
  ["Streetwear", "Стритвир", "g18"],
  ["Belgian and Japanese avant-garde", "Бельгийский и японский авангард", "g18"],
  ["Fashion and body image", "Мода и образ тела", "g18"],
  ["Denim in the 1990s", "Деним в 1990-е", "g18"],
  ["On set: editorial or catalogue?", "На съёмке: эдиториал или каталог", "g18", 1],

  ["Y2K style", "Стиль Y2K", "g19"],
  ["Low-rise jeans and logomania", "Низкая посадка и логомания", "g19"],
  ["Celebrities and the red carpet", "Звёзды и красная дорожка", "g19"],
  ["Fast fashion", "Фаст-фэшн", "g19"],
  ["On set: an e-commerce shoot", "На съёмке: съёмка для интернет-магазина", "g19", 1],
  ["Luxury goes global", "Люкс становится глобальным", "g20"],
  ["The boho chic revival", "Возвращение бохо-шика", "g20"],
  ["Fashion bloggers", "Фэшн-блогеры", "g20"],
  ["The first steps to sustainability", "Первые шаги к устойчивой моде", "g20"],
  ["On set: allocating the budget", "На съёмке: распределяем бюджет", "g20", 1],

  ["Fashion revivals: why styles return", "Почему мода возвращается", "g21"],
  ["Timeless pieces and wardrobe staples", "Вне времени: базовый гардероб", "g21"],
  ["Styling different body shapes", "Стилизация разных типов фигуры", "g21"],
  ["Building a capsule wardrobe", "Капсульный гардероб", "g21"],
  ["On set: the full workflow", "На съёмке: весь процесс", "g21", 1],
  ["Writing a styling brief", "Пишем бриф на стилизацию", "g22"],
  ["Presenting your ideas to a client", "Презентация идей клиенту", "g22"],
  ["Presenting a mood board", "Презентация мудборда", "g22"],
  ["Your portfolio", "Портфолио стилиста", "g22", 1],
  ["Final review", "Итоговое повторение", "g22"]
].forEach(([t, ru, g, w], i) => FE.outline.push({ n: i + 1, b: Math.floor(i / 10) + 1, t, ru, g, w: !!w }));

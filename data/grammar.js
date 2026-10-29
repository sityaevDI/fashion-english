/* Грамматические правила. Полностью расписаны те, что уже есть в тренировках;
   остальные появятся вместе со своими блоками. */
FE.grammar = {
  g01: {
    title: "Present Simple и Present Continuous", level: "A2",
    intro: "Оба времени — про настоящее, но смысл разный. Present Simple — то, что бывает обычно: привычки, факты, расписания. Present Continuous — то, что происходит прямо сейчас или временно, в этот период.",
    formula: [
      ["Present Simple", "I / you / we / they + V · he / she / it + V-s", "She wears trainers to work."],
      ["Present Continuous", "am / is / are + V-ing", "She is wearing trainers today."]
    ],
    markers: [
      ["Present Simple", "always, usually, often, sometimes, never, every day, every Monday, on Fridays"],
      ["Present Continuous", "now, right now, at the moment, today, this week, Look! Listen!"]
    ],
    examples: [
      ["The stylist usually arrives at seven.", "Стилист обычно приезжает в семь (привычка)."],
      ["The stylist is steaming the clothes now.", "Стилист сейчас отпаривает вещи (в этот момент)."],
      ["Denim comes from cotton.", "Деним делают из хлопка (факт)."],
      ["This week we are working on a catalogue.", "На этой неделе мы работаем над каталогом (временно)."]
    ],
    mistakes: [
      ["She wear a blouse.", "She wears a blouse.", "He / she / it в Present Simple — глагол с окончанием -s."],
      ["Look! He wear a waistcoat.", "Look! He is wearing a waistcoat.", "Look! — действие видно прямо сейчас, нужен Present Continuous."],
      ["Usually the stylist is arriving early.", "Usually the stylist arrives early.", "usually — привычка, значит Present Simple."]
    ]
  },
  g02: {
    title: "Глаголы состояния (stative verbs)", level: "A2",
    intro: "Некоторые глаголы описывают не действие, а состояние: чувства, мнения, знания, владение. Обычно их не ставят в Continuous, даже если речь о «прямо сейчас».",
    formula: [
      ["Чувства", "like, love, hate, want, need, prefer", "I like this jumpsuit."],
      ["Мысли", "know, understand, believe, remember, mean", "I don't understand this word."],
      ["Другое", "belong, cost, contain, fit (= подходить по размеру)", "This dress fits you perfectly."]
    ],
    markers: [
      ["Внимание: look", "The dress looks great (= выглядит, состояние) — Simple. I'm looking at the dress (= смотрю, действие) — Continuous."]
    ],
    examples: [
      ["She prefers natural fabrics.", "Она предпочитает натуральные ткани."],
      ["We need a bigger budget.", "Нам нужен бюджет побольше."],
      ["This coat costs £300.", "Это пальто стоит 300 фунтов."]
    ],
    mistakes: [
      ["I am liking this dress.", "I like this dress.", "like — глагол состояния, в Continuous не ставится."],
      ["She is preferring cotton.", "She prefers cotton.", "prefer — глагол состояния."],
      ["We are needing more time.", "We need more time.", "need — глагол состояния."]
    ]
  },
  g03: {
    title: "made of, made from, made by", level: "A2",
    intro: "Три способа сказать, из чего и кем сделана вещь.",
    formula: [
      ["made of", "из какого материала вещь (материал видно)", "These jeans are made of denim."],
      ["made from", "из какого сырья (сырьё превратилось в другое)", "Leather is made from animal skin."],
      ["made by", "кто сделал: человек, компания", "This bag is made by hand / by a small brand."]
    ],
    markers: [
      ["Подсказка", "Про одежду и ткани почти всегда говорят made of. made from — когда исходное сырьё уже не узнать."]
    ],
    examples: [
      ["The jacket is made of suede.", "Куртка из замши."],
      ["Viscose is made from wood.", "Вискозу делают из древесины."],
      ["The dress was made by a young designer.", "Платье сшила молодой дизайнер."]
    ],
    mistakes: [
      ["These boots are made by suede.", "These boots are made of suede.", "by — про автора, а материал — of."],
      ["The shirt is made with cotton.", "The shirt is made of cotton.", "Про материал вещи говорят made of."]
    ]
  },
  g07: {
    title: "Past Simple", level: "A2",
    intro: "Законченное действие в прошлом, обычно с указанием когда: yesterday, last week, in 1965, two years ago.",
    formula: [
      ["Правильные глаголы", "V + -ed", "She steamed the clothes yesterday."],
      ["Неправильные", "вторая форма из таблицы", "choose → chose, wear → wore, make → made"],
      ["Вопрос и отрицание", "did / didn't + V (без -ed)", "People didn't wear jeans to work."]
    ],
    markers: [["Маркеры", "yesterday, last week, last year, in the 1960s, ago, when I was…"]],
    examples: [
      ["Coco Chanel opened her first shop in 1910.", "Коко Шанель открыла свой первый магазин в 1910 году."],
      ["We launched the campaign last spring.", "Мы запустили кампанию прошлой весной."]
    ],
    mistakes: [
      ["People didn't wore jeans.", "People didn't wear jeans.", "После didn't глагол в начальной форме."]
    ]
  },
  g04: {
    title: "There is / there are, some / any", level: "A2",
    intro: "There is / there are — когда говорим, что что-то где-то есть. По-русски начинаем с места («На рейле — два пальто»), а по-английски — с There is / There are, место ставим в конец. some и any значат «несколько, немного», когда точное количество неважно.",
    formula: [
      ["There is", "there is + единственное или неисчисляемое", "There is a scarf on the chair."],
      ["There are", "there are + множественное", "There are two samples on the rail."],
      ["some", "в утвердительных предложениях", "There are some striped shirts in the box."],
      ["any", "в вопросах и отрицаниях", "Are there any floral dresses? — No, there aren't any."]
    ],
    markers: [
      ["Отрицание и вопрос", "there isn't / there aren't · Is there…? / Are there…?"],
      ["Исключение", "В просьбах и предложениях — some, даже в вопросе: Can I have some pins?"]
    ],
    examples: [
      ["There is a polka dot dress in the catalogue.", "В каталоге есть платье в горошек."],
      ["There are some checked coats on the rail.", "На рейле есть несколько клетчатых пальто."],
      ["There isn't any animal print in this collection.", "В этой коллекции нет животного принта."],
      ["Are there any plain T-shirts?", "Есть однотонные футболки?"]
    ],
    mistakes: [
      ["There is some stripes on the shirt.", "There are some stripes on the shirt.", "stripes — множественное число → there are."],
      ["There aren't some floral prints.", "There aren't any floral prints.", "В отрицании — any."],
      ["In the box are two belts.", "There are two belts in the box.", "Начинаем с There are, а место — в конце."]
    ]
  },
  g05: {
    title: "Исчисляемые и неисчисляемые: much, many, a lot of", level: "A2",
    intro: "Исчисляемые существительные можно посчитать: one bag, two bags. Неисчисляемые — нельзя: jewellery, footwear, money, advice. У них нет множественного числа и нет a/an. От этого зависит, говорим мы much или many.",
    formula: [
      ["many", "+ исчисляемые во множественном числе", "How many scarves do we need?"],
      ["much", "+ неисчисляемые", "We don't have much jewellery."],
      ["a lot of", "+ любые, чаще в утвердительных", "She has a lot of bracelets and a lot of jewellery."]
    ],
    markers: [
      ["much и many", "Чаще в вопросах и отрицаниях: How much…? How many…? not much, not many."],
      ["Неисчисляемые в моде", "jewellery, footwear, clothing, equipment, money, advice, information"]
    ],
    examples: [
      ["How many pairs of heels are there?", "Сколько там пар туфель на каблуке?"],
      ["We haven't got much time.", "У нас мало времени."],
      ["There is a lot of jewellery on the table.", "На столе много украшений."],
      ["Can I give you some advice?", "Можно дам совет?"]
    ],
    mistakes: [
      ["two jewelleries", "two pieces of jewellery", "jewellery — неисчисляемое, считаем через pieces of."],
      ["How much necklaces?", "How many necklaces?", "necklaces — исчисляемое → many."],
      ["How many money?", "How much money?", "money — неисчисляемое → much."],
      ["many footwears", "a lot of footwear / many pairs of shoes", "footwear — неисчисляемое, без -s."]
    ]
  },
  g06: {
    title: "Порядок прилагательных", level: "A2+",
    intro: "Если перед вещью стоят несколько прилагательных, в английском у них строгий порядок. Обычно их 2–3, и главное помнить: мнение идёт первым, материал — последним, прямо перед вещью.",
    formula: [
      ["Полный порядок", "мнение → размер → возраст → форма → цвет → происхождение → материал → назначение + вещь", "a beautiful long red silk evening dress"],
      ["Коротко", "мнение → размер → цвет → материал + вещь", "a lovely small black leather bag"]
    ],
    markers: [
      ["Запомни", "OSASCOMP: Opinion, Size, Age, Shape, Colour, Origin, Material, Purpose"],
      ["Без запятых", "Между такими прилагательными обычно нет ни запятой, ни and: a big brown leather bag."]
    ],
    examples: [
      ["a smart navy wool coat", "нарядное тёмно-синее шерстяное пальто (мнение → цвет → материал)"],
      ["a small vintage leather bag", "маленькая винтажная кожаная сумка (размер → возраст → материал)"],
      ["black Italian loafers", "чёрные итальянские лоферы (цвет → происхождение)"],
      ["a long cotton summer dress", "длинное хлопковое летнее платье (размер → материал → назначение)"]
    ],
    mistakes: [
      ["a leather black jacket", "a black leather jacket", "Цвет идёт перед материалом."],
      ["pink small earrings", "small pink earrings", "Размер идёт перед цветом."],
      ["a silk beautiful scarf", "a beautiful silk scarf", "Мнение всегда первое."]
    ]
  },
  g08: {
    title: "Past Continuous и Past Simple",
    level: "A2+",
    intro: "Оба времени описывают прошлое, но с разным фокусом. Past Continuous показывает процесс, атмосферу и фоновое действие в конкретный момент. Past Simple называет завершенный факт или короткое действие, которое прервало этот процесс.",
    formula: [
      ["Past Continuous", "was / were + V-ing", "The model was wearing a bias-cut evening gown."],
      ["Past Simple", "V-ed / V2 (вторая форма глагола)", "Schiaparelli designed a surrealist hat."],
      ["Связка (прерывание)", "was/were + V-ing ... WHEN + V-ed (или WHILE + was/were + V-ing)", "We were styling the look when the director arrived."]
    ],
    markers: [
      ["Past Continuous", "while, as, at 5 pm yesterday, all evening, this time yesterday"],
      ["Past Simple", "when, suddenly, yesterday, in 1935, two days ago, then"],
      ["Подсказка для историй", "While обычно вводит долгий процесс (Past Continuous), а when — внезапное короткое событие (Past Simple)."]
    ],
    examples: [
      ["During the 1930s, women were dreaming of Hollywood glamour.", "В 1930-е годы женщины мечтали о голливудском гламуре (фоновый длительный процесс эпохи)."],
      ["While the stylist was steaming the silk dress, the photographer set up the lights.", "Пока стилист отпаривала шелковое платье, фотограф выставил свет (длинное действие на фоне другого события)."],
      ["The model was walking on set when the vintage zip broke.", "Модель шла на съемочную площадку, когда винтажная молния сломалась (короткое действие прервало процесс)."],
      ["Schiaparelli met Salvador Dalí and created the famous lobster dress.", "Скиапарелли встретила Сальвадора Дали и создала знаменитое платье с омаром (последовательность завершенных фактов)."]
    ],
    mistakes: [
      ["While I steamed the gown, the light broke.", "While I was steaming the gown, the light broke.", "После while для длительного действия-фона нужен Past Continuous (was steaming)."],
      ["The model was dropping her gloves when she turned.", "The model dropped her gloves while she was turning.", "Уронить перчатки — мгновенный факт (Past Simple), а поворачиваться — процесс (Past Continuous)."],
      ["They was shooting the vintage catalogue all day.", "They were shooting the vintage catalogue all day.", "С местоимениями they / we / you используем were, а не was."]
    ]
  },
  g09: { title: "Сравнения: -er / more, as … as, too / enough", level: "A2" },
  g10: { title: "used to", level: "A2+" },
  g11: { title: "Present Perfect: ever, never, just, already, yet", level: "A2+" },
  g12: { title: "Present Perfect или Past Simple", level: "B1" },
  g13: { title: "Будущее: will, going to, Present Continuous", level: "A2+" },
  g14: { title: "Модальные: should, must, have to, don't have to", level: "B1" },
  g15: { title: "First Conditional", level: "B1" },
  g16: { title: "Пассив: Present и Past Simple", level: "B1" },
  g17: { title: "Герундий или инфинитив", level: "B1" },
  g18: { title: "Second Conditional", level: "B1" },
  g19: { title: "Present Perfect Continuous, for и since", level: "B1" },
  g20: { title: "Past Perfect", level: "B1" },
  g21: { title: "Относительные придаточные: who, which, that, where", level: "B1" },
  g22: { title: "Косвенная речь", level: "B1" }
};

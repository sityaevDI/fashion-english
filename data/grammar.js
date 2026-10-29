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
  g04: { title: "There is / there are, some / any", level: "A2" },
  g05: { title: "Исчисляемые и неисчисляемые: much, many, a lot of", level: "A2" },
  g06: { title: "Порядок прилагательных", level: "A2+" },
  g08: { title: "Past Continuous и Past Simple", level: "A2+" },
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

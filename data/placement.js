/* Тест уровня: 20 вопросов от A1 до B1+. [вопрос, варианты, индекс правильного, уровень] */
FE.placement = [
  ["Look! She ___ a red dress today.", ["wears", "is wearing", "wear"], 1, "A1"],
  ["These trousers ___ too long for me.", ["is", "are", "be"], 1, "A1"],
  ["I ___ to a fashion show yesterday.", ["go", "went", "gone"], 1, "A2"],
  ["There aren't ___ shoes in my size.", ["some", "any", "a"], 1, "A2"],
  ["This jacket is ___ than that one.", ["more cheap", "cheaper", "cheapest"], 1, "A2"],
  ["What ___ you do last weekend?", ["did", "do", "were"], 0, "A2"],
  ["A shirt has two ___ — one for each arm.", ["sleeves", "collars", "buttons"], 0, "A2"],
  ["Jeans are usually made of ___.", ["denim", "silk", "velvet"], 0, "A2"],
  ["I was ___ the clothes when the client called.", ["ironing", "ironed", "iron"], 0, "A2"],
  ["She has ___ bought a new coat. Look, it's on the chair!", ["yet", "just", "ago"], 1, "A2+"],
  ["I ___ this brand since 2019.", ["have loved", "love", "loved"], 0, "B1"],
  ["If it rains tomorrow, we ___ the shoot inside.", ["do", "will do", "would do"], 1, "B1"],
  ["The dress ___ by a famous designer in 1985.", ["designed", "was designed", "has designed"], 1, "B1"],
  ["I'm really interested ___ fashion history.", ["on", "in", "at"], 1, "B1"],
  ["She enjoys ___ outfits for photoshoots.", ["to create", "creating", "create"], 1, "B1"],
  ["A dress that fits very closely around the body is ___.", ["oversized", "figure-hugging", "loose-fitting"], 1, "B1"],
  ["A person who starts new fashion trends is a ___.", ["trendsetter", "follower", "tailor"], 0, "B1"],
  ["When we arrived, the show ___ already ___.", ["has / started", "had / started", "was / starting"], 1, "B1"],
  ["If I ___ more money, I would buy designer clothes.", ["have", "had", "will have"], 1, "B1+"],
  ["The stylist ___ worked on the campaign is from Milan.", ["who", "which", "where"], 0, "B1+"]
];

FE.levelFor = function (score) {
  if (score <= 7) return { level: "A1", text: "Начальный уровень. Курс рассчитан на A2, первые блоки могут быть трудными — это нормально, проходите их медленно и повторяйте." };
  if (score <= 12) return { level: "A2", text: "Курс как раз под этот уровень. Начинайте с первой тренировки." };
  if (score <= 16) return { level: "A2+", text: "Хорошая база. Первые тренировки дадутся легко, но словарь моды в них новый — начинайте с первой." };
  return { level: "B1", text: "Грамматика на уровне B1. Основная польза — в словаре моды; начинайте с первой тренировки и проходите быстро." };
};

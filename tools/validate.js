/* Проверка всех данных сайта: node tools/validate.js
   Код выхода 1, если есть ошибки. Предупреждения — повод посмотреть глазами. */
const { loadFE, checkDay, checkGrammar, isFull } = require("./lib");

function validateAll(FE) {
  const errors = [], warnings = [];
  for (const [id, g] of Object.entries(FE.grammar)) if (isFull(g)) errors.push(...checkGrammar(id, g));
  for (const day of Object.values(FE.days)) {
    const usedIds = new Set(Object.values(FE.words).filter(w => w.day !== day.n).map(w => w.id));
    const r = checkDay(day, { FE, usedIds });
    errors.push(...r.errors); warnings.push(...r.warnings);
    if (!isFull(FE.grammar[day.g])) errors.push(`день ${day.n}: правило дня ${day.g} не расписано в grammar.js`);
  }
  return { errors, warnings };
}

if (require.main === module) {
  const FE = loadFE();
  const { errors, warnings } = validateAll(FE);
  warnings.forEach(w => console.log("  предупреждение: " + w));
  errors.forEach(e => console.log("  ОШИБКА: " + e));
  console.log(`\nДней: ${Object.keys(FE.days).length}, слов: ${Object.keys(FE.words).length}. Ошибок: ${errors.length}, предупреждений: ${warnings.length}.`);
  process.exit(errors.length ? 1 : 0);
}

module.exports = { validateAll };

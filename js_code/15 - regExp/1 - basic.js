/**
 * Создание регулярных выражений
 */

const regExp = /шаблон/                 // два слеша говорят что между ними регулярное выражение
const regExpFlags = /шаблон/gmi         // можно указать так же флаги

// Можно так же задавать через инициализацию объекта. В таком случае можно будет прокинуть переменную
let someVar = Math.random();
let regExpUsingClass = new RegExp(`${someVar}`)

/**
 * Флаги
 */

// i - С этим флагом поиск не зависит от регистра: нет разницы между A и a
// g - С этим флагом поиск ищет все совпадения, без него – только первое
// m - Многострочный режим
// s - Включает режим «dotall», при котором точка "." может соответствовать символу перевода строки \n
// u - Включает полную поддержку Юникода. Флаг разрешает корректную обработку суррогатных пар
// y - Режим поиска на конкретной позиции в тексте

/**
 * str.match(/regExp/) - находит вхождения шаблона в строку
 */

let stringMatch = "Любо, братцы, любо!"
console.log(stringMatch.match(/любо/))                     // [ 'любо', index: 14, input: 'Любо, братцы, любо!', groups: undefined ]
console.log(stringMatch.match(/любо/g))                    // [ 'любо' ]
console.log(stringMatch.match(/любо/i))                    // [ 'Любо', index: 0, input: 'Любо, братцы, любо!', groups: undefined ]
console.log(stringMatch.match(/любо/gi))                   // [ 'Любо', 'любо' ]
console.log(stringMatch.match(/нет такой строки/gi))       // null

/**
 * str.replace(/regExp/, replacement) - заменяет вхождение шаблона в строке
 */

let stringReplace = "Я строка для замены"
console.log(stringReplace.replace(/а/g, '#'))   // Я строк# для з#мены

// Спецсимволы
// $& - вставляет всё найденное совпадение
console.log(stringReplace.replace(/для/, '$& лучшей' ))  // Я строка для лучшей замены

// $` - вставляет часть строки до совпадения
console.log(stringReplace.replace(/для/, '$`лучшей' ))   // Я строка Я строка лучшей замены

// $' - вставляет часть строки после совпадения
console.log(stringReplace.replace(/для/, '$\' лучшей' )) // Я строка  замены лучшей замены

// $n - если n это 1-2 значное число, вставляет содержимое n-й скобочной группы регулярного выражения
console.log('Hello World'.replace(/(\w)(\w*)/g, '$2$1')) // elloH orldW

// $<name> - вставляет содержимое скобочной группы с именем name

// $$ - вставляет символ "$"

/**
 * regexp.text(str) - проверка есть ли вхождения шаблона в строку
 */

const stringForTest = "I am a test string made for testing"

console.log(/ing/.test(stringForTest))                  // true
console.log(/qwerty/.test(stringForTest))               // false












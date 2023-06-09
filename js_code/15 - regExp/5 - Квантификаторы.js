// https://learn.javascript.ru/regexp-quantifiers

// {n} - добавляется к символу (или символьному классу, или набору [...] и т.д.) и указывает, сколько их нам нужно.
console.log("Мне не 95, а 8 лет".match(/\d{1}/g))           // [ '9', '5', '8' ] - так как тут 3 цифры которые включают 1 символ
console.log("Мне не 95, а 8 лет".match(/\d{2}/g))           // [ '95' ] - так как есть цифра, которая включает 2 символа
console.log("Мне не 95, а 8 лет".match(/\d{3}/g))           // null, потому что нет 3 фицр подряд

// \b - можно указать что бы ограничить поиск (например искать строго числа в 1 цифру)
console.log("Мне не 95, а 8 лет".match(/\b\d{1}\b/g))       // [ '8' ]

// Можно не указывать верхнюю границу, тогда будут искаться от N до бесконечности
console.log("+7(903)-123-45-67".match(/\d{1,}/g))           // [ '7', '903', '123', '45', '67' ]

// + - то же самое что {1,}
// ? - то же самое что {0,1}
// * - то же самое что {0,}
//



// Экранирование - если нужно указать точку или любой другой знак, который зарезервирован, то указываем через обратный слэш
console.log("Привет!... Как дела?.....".match(/\.{1,}/g))   // [ '...', '.....' ]


/**
 * Жадный
 * По умолчанию движок регулярного выражения пытается повторить квантификатор столько раз, сколько это возможно.
 * Например, \d+ получит все возможные цифры. Когда цифры закончатся или он дойдёт до конца строки, движок продолжит искать совпадение для оставшегося шаблона.
 * Если совпадения не будет, он уменьшит количество повторов (осуществит возврат) и попробует снова.
 */
const string = 'a "witch" and her "broom" is one';

console.log(string.match(/".+"/))           //   '"witch" and her "broom"'

/**
 * Ленивый
 * Включается с помощью знака вопроса ? после квантификатора.
 * Движок регулярного выражения пытается найти совпадение для оставшегося шаблона перед каждым повторением квантификатора.
 */

console.log(string.match(/".+?"/))          //   '"witch"'
console.log(string.match(/".+?"/g))         // [ '"witch"', '"broom"' ]
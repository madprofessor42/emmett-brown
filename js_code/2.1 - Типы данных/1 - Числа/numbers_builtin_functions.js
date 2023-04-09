/**
 * Округление
 */
console.log( Math.floor( 3.1 ) )      // 3 - в меньшую сторону
console.log( Math.floor( -1.2 ) )     // -2

console.log( Math.ceil( 3.1 ) )       // 4 - в большую сторону
console.log( Math.ceil( -1.2 ) )      // -1

console.log( Math.round( 3.1 ) )      // 3 - до ближайшего целого
console.log( Math.round( -1.2 ) )     // -1

console.log( Math.trunc( 3.1 ) )      // 3 - удаление дробной части без округления


/**
 * Проверка на тип данных
 */
console.log(isNaN('str'))             // true
console.log(isNaN(5))                 // false

// проверка что число целое
console.log(Number.isInteger(5.5))           // false
console.log(Number.isInteger(5))             // true


// проверка что тип данных число. Используется для проверки, содержится ли число в строке
console.log(Number.isFinite(15))             // true
console.log(Number.isFinite('21'))           // true - преобразует строку в число


/**
 * Преобразование
 */
// Преобразование строки где есть число в чистое число. Они «читают» число из строки. Если в процессе чтения возникает ошибка, они возвращают полученное до ошибки число
console.log(parseInt('100px'))        // 100
console.log(parseFloat('123.456px'))  // 123.456
console.log(parseInt('awe12'))        // NaN


/**
 * Пакет Math
 */
console.log(Math.random())                   // возвращает рандомной число от 0 до 1
console.log(Math.max(1,5,8,12,5))     // 12 - возвращает максимальное число из перечисленных
console.log(Math.min(1,5,8,12,5))     // 1 - возвращает минимальное число из перечисленных
console.log(Math.sqrt(25))                // 5 - это корень 25
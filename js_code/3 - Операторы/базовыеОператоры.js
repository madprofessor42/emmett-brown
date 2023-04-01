// Базовые операторы
// +
console.log("" + 1 + 0)   // 10 - строка складывается с числом как строка
console.log("" - 1 + 0)   // -1 - строка преобразуется в число при вычитании
console.log(true + false) // 1
console.log(6 / "3")      // 2
console.log("2" * "3")    // 6
console.log(4 + 5 + "px") // "9px" - в начале складываются цифры, получается 9, а после сложение со строкой дает строку
console.log("$" + 4 + 5)  // "$45" - сложение со строкой дает строку, а после строка складывается с числом, что так же дает строку
console.log("4px" - 2)    // NaN 
console.log(7 / 0)        // Infinity
console.log(null + 1)     // 1 
console.log(undefined + 1)// NaN - сложение с undefined дает NaN


console.log(typeof('5'))  // String
console.log(typeof(+'5')) // Number ("+" перед значением, преобразует его в число)

// -
console.log(3 - 2);        // 1
console.log('5' - '6');    // -1
console.log('he' - 6);     // NaN

// *
console.log(1 * 5);        // 5
console.log('2' * '3');    // 6
console.log('he' * 2);     // NaN

// /
console.log(5 / 2);        // 2.5
console.log(1 / 0);        // Infinity
console.log('he' / 3);     // NaN

// % - остаток от деления
console.log(5 % 3);        // 2

// ** - возведение в степень
console.log(2 ** 2);       // 4
console.log(2 ** 3);       // 8


// Присваивание. Работает со всеми базовыми операторами + - * /
let n = 5;               
console.log(n += 5);       // 10

// Инкремент/декремент
let counter = 2;
let counter2 = 2;
console.log(++counter)     // 3 - увеличивает на 1. Если поставить до переменной то увеличит в этом же шаге
console.log(counter2++)    // 2 - увелиичвает на 1. Если поставить после переменной, то увеличит в следюущем шаге
console.log(counter2)      // 3






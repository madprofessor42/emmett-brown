// Arrow Function - это Function Expression, но записывается по другому. Удобны для однострочных действий (когда есть 1 инструкция в теле)
// let func = (arg1, arg2, ...argN) => expression;
// Если аргументов нет, то оставляем скобки пустыми
let sum = (a, b) => a + b;      // let functionName = (arguments) => returnValues;
console.log(sum(1,5));

let multiplay = n => n * 6;
console.log(multiplay(5));

let message = () => console.log('hello')
message()


// Динамическое создание функции
let age = 18;
let welcome = (age < 18) ?
    () => console.log('Hi') :         // Если условие выше true
    () => console.log('Hello');       // Если условие выше false

welcome()


// Если нужно писать несколько строк, то добавляем фигурные скобки
let multilneFunction = () => {
    a = 'Hello';
    return a;
}
console.log(multilneFunction())

// Если у нас всего 1 аргумент, то круглые скобки можно опустить
// Так же если функция сразу возвращает результат, то return писать не нужно
let noBracketsFunction = n => n*n;
console.log(noBracketsFunction(3))


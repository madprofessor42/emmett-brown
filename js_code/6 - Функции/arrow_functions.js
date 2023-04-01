// Стрелочные фунцкии очень удобны для простых однострочных действий, когда лень писать много слов.

// let func = (arg1, arg2, ...argN) => expression;
// Если аргументов нет, то оставляем скобки пустыми
let someFunc = () => console.log('Hello');
someFunc();

// Если нужно писать несколько строк, то добавляем фигурные скобки
let multiineFunction = () => {
    a = 'Hello';
    return a;
}
console.log(multiineFunction())

// Если у нас всего 1 аргумент, то круглые скобки можно опустить
// Так же если функция сразу возвращает результат, то return писать не нужно
let noBracketsFunction = n => n*n;
console.log(noBracketsFunction(3))


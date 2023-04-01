// Arrow Function - это function Expression, но записывается по другому. Удобны для однострочных действий (когда есть 1 инструкция в теле)
let sum = (a, b) => a + b;      // let functionName = (arguments) => returnValues;
console.log(sum(1,5));           

let multiplay = n => n * 6;
console.log(multiplay(5));

let message = () => alert('hello')
message()


// Динамическое создание функции
let age = +prompt();
let welcome = (age < 18) ? 
    () => alert('Hi') :         // Если условие выше true
    () => alert('Hello');       // Если условие выше false

welcome()


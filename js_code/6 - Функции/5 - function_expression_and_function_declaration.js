// Синтаксис, который мы использовали до этого, называется Function Declaration (Объявление Функции):
function sayHiDeclaration() {
    return 'Hi'
}
console.log(sayHiDeclaration())

// Существует ещё один синтаксис создания функций, который называется Function Expression (Функциональное Выражение).
// Данный синтаксис позволяет нам создавать новую функцию в середине любого выражения.
let sayHiExpression = function() {
    return 'Hi'
};
console.log(sayHiExpression())


// Функции можно копировать. Должны это делать не указывая фигурные скобки
// Если указать фигурные скобки, то мы скопируем не функцию, а запишем результат функции в переменную
let copyOfDeclaratedFunction = sayHiDeclaration
let copyOfExpressionFunction = sayHiExpression
console.log(copyOfDeclaratedFunction)                 // [Function: sayHi]
console.log(copyOfDeclaratedFunction())               // Hi
const result_of_declarated_function = sayHiDeclaration()
console.log(copyOfExpressionFunction)                 // [Function: sayHi]
console.log(copyOfExpressionFunction())               // Hi
const result_of_expression_function = sayHiExpression()


// Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.
// Function Declaration может быть вызвана раньше, чем она объявлена.
// Другими словами, когда движок JavaScript готовится выполнять скрипт или блок кода, прежде всего он ищет в нём Function Declaration и создаёт все такие функции. Можно считать этот процесс «стадией инициализации».
// И только после того, как все объявления Function Declaration будут обработаны, продолжится выполнение.
// В результате функции, созданные как Function Declaration, могут быть вызваны раньше своих определений.



// В строгом режиме - "use strict", когда Function Declaration находится в блоке {...}, функция доступна везде внутри блока. Но не снаружи него.
let age = 18;
if (age < 18) {
    welcome()                   // 'Привет!' - выполнится, так как внутри блока
    function welcome() {
        console.log('Hi');
    }
}
welcome(); // Error: welcome is not defined - не выполнится, так как снаружи блока где функция была создана


// Function Expression - создается, когда выполнение доходит до него, и затем может использоваться. Нельзя использовать до инициализации
sayHi2()                // выведет ошибку
let sayHi2 = function() {
    console.log('Hello')
};
sayHi2()                // Hello


// Что бы функция была доступна не только внутри блока, то задаем ее с помощью Function Expression (динамическое создание функций)
let another_age = 18;
let another_welcome = (another_age < 18) ? function() { alert('Hi'); } : function() { alert('Hello');};
another_welcome()

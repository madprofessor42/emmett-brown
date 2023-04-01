/*
Зачастую нам надо повторять одно и то же действие во многих частях программы.
Например, необходимо красиво вывести сообщение при приветствии посетителя, при выходе посетителя с сайта, ещё где-нибудь.
Чтобы не повторять один и тот же код во многих местах, придуманы функции. Функции являются основными «строительными блоками» программы.
*/

// function functionName(arguments){} - аргумент это то что передается внутрь функции
function showMessage(){
    console.log('Hello World')
}
// functionName(params) - Функцию нужно вызвать, что бы она отработала. параметр - это переменаня указананя в круглых скобках при вызове функции
showMessage()


// Scope
// Переменные, объявленные внутри функции, видны только внутри этой функции.
let some_var = 'I am outer'
function showScope(){
    let some_var = 'I am inner'
    console.log(some_var)                   // I am inner
    some_var = 'I am changed inner'
    console.log(some_var)                   // I am changed inner
}
showScope()
console.log(some_var)                       // I am outer

// Если не объявить внутри переменную, то функция возьмет ее из глобальных
/*
Желательно сводить использование глобальных переменных к минимуму. В современном коде обычно мало или совсем нет глобальных переменных. 
Хотя они иногда полезны для хранения важнейших «общепроектовых» данных.
*/
let global_var = 'I am global'
function showGlobalScope(){
    console.log(global_var)                 // I am global
    global_var = 'I am changed'
    console.log(global_var)                 // I am changed
}
showGlobalScope()
console.log(global_var)                     // I am changed

// вложенные функции имеют доступ к переменным верхних функций, а так же к глобальным переменным
// так же функции могут быть вложены друг в друга (nested functions)
let x = 'I am global'
function outerFunction(){
    let y = 'I am inner'
    function innerFunction(){
        console.log('global is ' + x)       // global is I am global
        console.log('inner is ' + y)        // inner is I am inner
    }
    innerFunction()
}
outerFunction()


// Параметры - Мы можем передать внутрь функции любую информацию, используя параметры. Параметры переданные в функцию копируются внутрь функции
function showMessageWithParams(firstParam, secondParam){
    console.log(firstParam + ' ' + secondParam)
}
showMessageWithParams('Mike', 'Smith')      // Mike Smith

// Если передавать переменные внутрь функции в качестве ее аргументов, то сама глобальная переменная при этом не изменится
let personName = 'Artem'
function changeLocal(humanName){
    humanName = 'Mike'
    console.log(humanName)
}
changeLocal(personName)                     // Mike
console.log(personName)                     // Artem

// значения по умолчанию - Если при вызове функции аргумент не был указан, то его значением становится undefined
function undefinedName(firstName, secondName){
    console.log(firstName + ' ' + secondName)
}
undefinedName('Mike')                       // Mike undefined
/*
Если мы хотим задать параметру text значение по умолчанию, мы должны указать его после =
*/
function defaultArgs(firstName, secondName='Smith'){
    console.log(firstName + ' ' + secondName)
}
defaultArgs('Mike')                         // Mike Smith
/*
Можно передавать в качестве дефолтного аргумента - функцию
*/
function generateRandomSurname(){
    surnames = ['Black', 'Hammer', 'Wick']
    return surnames[Math.floor(Math.random() * surnames.length)]
}
function defaultArgsFunction(firstName, secondName = generateRandomSurname()){
    console.log(firstName + ' ' + secondName)
}
defaultArgsFunction('Mike')                 // Mike Black ; Mike Hammer ; Mike Wick
defaultArgsFunction('Mike', 'Smith')        // Mike Smith
/*
Иногда имеет смысл присваивать значения по умолчанию для параметров не в объявлении функции, а на более позднем этапе.
*/
function asignArgLater(text){
    text = text || 'Some text'              // Если текст введен, то тексту присвоится текст (по сути ничего не поменяется), но если текста нет, то будет задан 'Some text'
    console.log(text)
}
asignArgLater()                             // Some text
asignArgLater('Hello')                      // Hello


// Функции могут возвращать значение
function sum(a, b){
    return a + b
}
console.log(sum(1, 5))                      // 6

// return может находиться в любом месте функции
function checkAge(age){
    if (age <=18){
        return false
    }
    return true
}
console.log(checkAge(15))                   // false
console.log(checkAge(21))                   // true

// return может ничего не возвращать (для того что бы выйти из функции)
function showMovies(age){
    if (!checkAge(age)){
        return
    }
    console.log('Welcome to cinema')
}
showMovies(15)                              // не выведет ничего
showMovies(25)                              // Welcome to cinema









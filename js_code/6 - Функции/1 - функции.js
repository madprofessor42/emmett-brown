// Функции - служат что бы написать код, а после вызывать его повторно. Одна функция - одно действие
// Общепринятые обозначения:
// showMessage(..)     // показывает сообщение
// getAge(..)          // возвращает возраст (в каком либо значении)
// calcSum(..)         // вычисляет сумму и возвращает результат
// createForm(..)      // создаёт форму (и обычно возвращает её)
// checkPermission(..) // проверяет доступ, возвращая true/false


/**
 * Scope
 */

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




/**
 * Параметры(аргументы) функции - Мы можем передать внутрь функции любую информацию, используя параметры. Параметры переданные в функцию копируются внутрь функции
 */

function showMessageThree(from, text) {
    console.log(from + ': ' + text);
}

showMessageThree('Mike', 'greetings')       // Mike: greetings


// Когда мы передаем параметры в функцию, то они становятся локальной переменной. И любые изменения внутри функции, не меняет изначальные переменные
function showMessageFour(from, text) {
    from = "*" + from + "*" + ": "      //*Victor* : 
    console.log(from + text)
}
let from = 'Victor';
showMessageFour(from, 'what\'s up')
console.log(from)                            // Victor


// Параметры по умолчанию
function showMessageFive (from, text) {
    console.log(from + ": " + text)
}
showMessageFive('Pete')                // Pete: undefined - если не указать параметр, то он станет undefined


function showMessageSix (from, text = 'Default text') { // Задаем параметр по умолчанию. Будет использован, если мы не укажем другой параметр при вызове функции
    console.log(from + ": " + text)
}
showMessageSix('Pete')                // Pete: Default text

// Иногда имеет смысл присваивать значения по умолчанию для параметров не в объявлении функции, а на более позднем этапе.
function asignArgLater(text){
    text = text || 'Some text'              // Если текст введен, то тексту присвоится текст (по сути ничего не поменяется), но если текста нет, то будет задан 'Some text'
    console.log(text)
}
asignArgLater()                             // Some text
asignArgLater('Hello')                 // Hello

// Можно передавать в качестве дефолтного аргумента - функцию
function generateRandomSurname(){
    surnames = ['Black', 'Hammer', 'Wick']
    return surnames[Math.floor(Math.random() * surnames.length)]
}
function defaultArgsFunction(firstName, secondName = generateRandomSurname()){
    console.log(firstName + ' ' + secondName)
}
defaultArgsFunction('Mike')                 // Mike Black ; Mike Hammer ; Mike Wick
defaultArgsFunction('Mike', 'Smith')        // Mike Smith



/**
 * Возврат значений
 */
function sum(a, b) {
    return a + b;                     // Директива return может находиться в любом месте тела функции. Как только выполнение доходит до этого места, функция останавливается, 
                                      // и значение возвращается в вызвавший её код
}

result = sum(4,5)
console.log(result);                  // 9


// может быть несколько return и они могут находиться в любом месте функции
function checkAge(age){
    if (age <=18){
        return false
    }
    return true
}
console.log(checkAge(15))                   // false
console.log(checkAge(21))                   // true



// может быть return без значения - используется для выхода из функции
function showMovie(age) {
    if (!checkAge(age)) {                                   // если checkAge() вернет false
        return                                              // выйти из функции
    }
    console.log('***Movie is being screened***')
}

showMovie(15);              // не выведет ничего
showMovie(21);              // ***Movie is being screened***












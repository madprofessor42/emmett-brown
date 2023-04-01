// Функции - служат что бы написать код, а после вызывать его повторно. Одна функция - одно действие
// Общепринятые обозначения:
// showMessage(..)     // показывает сообщение
// getAge(..)          // возвращает возраст (в каком либо значении)
// calcSum(..)         // вычисляет сумму и возвращает результат
// createForm(..)      // создаёт форму (и обычно возвращает её)
// checkPermission(..) // проверяет доступ, возвращая true/false

let outer = 'Outer Variable'

function showMessage() {                        // function имяФункции(параметры) {...body...} 
    let message = 'Hello World'                 // переменные заданные в функции видны только этой функции
    alert(message);
    alert(outer);                               // функция может видеть внешние переменные
    outer = 'Inner Variable'                    // функция может изменять внешние переменные
}

showMessage()                                   // функцию нужно вызвать
alert(outer)                                    // 'Inner Variable'


// Внешняя переменная используется только если в функции нет локальной. Если такая имеется, то локальная перекрывает внешнюю
let duplicated = 'Outer'

function showMessageTwo() {
    let duplicated = 'Inner'
    alert(duplicated)
}

showMessageTwo()         // 'Inner'
alert(duplicated)        // 'Outer'


// Внешняя переменная - это глобальная переменная. Желательно, что бы в коде их было как можно меньше, надо задавать локальные переменные

// Параметры(аргументы) функции
function showMessageThree(from, text) {
    alert(from + ': ' + text);
}

showMessageThree('Mike', 'greetings')       // Mike: greetings


// Когда мы передаем параметры в функцию, то они становятся локальной переменной. И любые изменения внутри функции, не меняет изначальные переменные
function showMessageFour(from, text) {
    from = "*" + from + "*" + ": "      //*Victor* : 
    alert(from + text)
}

let from = 'Victor';
showMessageFour(from, 'what\'s up') 
alert(from)                            // Victor


// Параметры по умолчанию
function showMessageFive (from, text) {
    alert(from + ": " + text)
}
showMessageFive('Pete')                // Pete: undefined - если не указать параметр, то он станет undefined


function showMessageFive (from, text = 'Default text') { // задаем параметр по умолчанию. Будет использован, если мы не укажем другой параметр при вызове функции
    alert(from + ": " + text)
}
showMessageFive('Pete')                // Pete: Default text


// Возврат значений
function sum(a, b) {
    return a + b;                     // Директива return может находиться в любом месте тела функции. Как только выполнение доходит до этого места, функция останавливается, 
                                      // и значение возвращается в вызвавший её код
}

result = sum(4,5)                     
alert(result);                        // 9


// может быть несколько return
function checkAge (age) {
    if (age > 18) {
        return true
    }
    else {
        return confirm('Do you want access to be granted?') // если в confirm() нажать yes, то будет return true, а если no, то будет return false
    }
}

let age = prompt()

if (checkAge(age)) {                                        // если функция вернула true
    alert('Granted')
}
else {                                                      // если функция вернула false
    alert('Not Granted')
}


// может быть return без значения - используется для выхода из функции
function showMovie(age) {
    if (!checkAge(age)) {                                   // если checkAge() вернет false
        return                                              // выйти из функции
    }
    alert('***Movie is being screened*')
}











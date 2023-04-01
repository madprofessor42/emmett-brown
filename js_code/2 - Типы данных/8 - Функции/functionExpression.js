// Function Declaration - можно использовать до их инициализации
sayHi()                 // 'Hello'

function sayHi() {
    alert('Hello')
}

alert(sayHi)            // function sayHi() { - sayHi это просто переменная. И применяя alert мы можем увидеть значение переменной - код
                        // alert('Hello')
                        // }
newFunction = sayHi     // если мы напишем newFunction = sayHi(), то запишем в newFunction результат вызова sayHi(). А так мы просто копируем код
newFunction()           // 'Hello'


// В строгом режиме, когда Function Declaration находится в блоке {...}, функция доступна везде внутри блока. Но не снаружи него.
let age = prompt('How old are you', 18);
if (age < 18) {
    welcome()                   // 'Привет!' - выполнится, так как внутри блока
    function welcome() {
        alert('Hi');
     }
} 
else {
    function welcome() {
        alert('Hello');
    }
}
welcome(); // Error: welcome is not defined - не выполнится, так как снаружи блока где функция была создана


// Function Expression - создается, когда выполнение доходит до него, и затем может использоваться. Нельзя использовать до инициализации
sayHi2()                // выведет ошибку

let sayHi2 = function() {   
    alert('Hello')
};


// Что бы функция была доступна не только внутри блока, то задаем ее с помощью Function Expression
let age = prompt('How old are you', 18);
let welcome = (age < 18) ? function() { alert('hi'); } : function() { alert('Hello'); };
welcome()



// Call back Functions
function ask(question, yes, no) {
    if (confirm(question)) {                // Если встроенная функция confirm выдаст true, то исполнить участок кода
        yes()
    }
    else {
        no()
    }
}

function showOk() {
    alert('You agreed')
}

function showCancel() {
    alert('You canceled')
}

ask('Do you agree', showOk, showCancel) // аргументы этой функции называются колбэки. 


// Call back использую анонимные функции
function ask2 (question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask2 ('You agree?', 
    function() {alert('You agreed');},  // задаем функцию, как параметр функции ask2, прямо в вызове функции ask2 
    function() {alert('You canceled');}
    );



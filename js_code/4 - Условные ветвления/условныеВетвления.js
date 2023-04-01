// Инструкция if(...) вычисляет условие в скобках и, если результат true, то выполняет блок кода
let year = 2022;

if (year === 2023) {            // если условие true, то выполняется, если false, то не выполняется, и переходи к след условию
    console.log('It\'s now')
} 
else if (year < 2022) {         // если условие выше не выполнилось. Если у нас несколько условий if, то else if будет выполняться только под самым последним if условием
    console.log('It\'s the past')
}
else {
    console.log('It\'s the future')   // если не выполнилось ни 1 условие
}


// условный оператор ? нужен что бы определить переменную в зависимости от условия
let accessAllowed;
let age = 23;

if (age >= 18) {
    accessAllowed = true;
}
else {
    accessAllowed = false;
}

// можно записать короче
let accessAllowed_2 = age >= 18 ? true : false;  // let result = condition ? value1 : value2;


// несколько ? позволяет вернуть значение, которое зависит от более чем одного условия
let message = age < 3 ? 'Hello baby' :
age < 14 ? 'Hello' :
age < 25 ? 'Hello Teen' :
'you are above 25';


// Если условие в 1 строку, то фигурные скобки не нужны (это касается и циклов)
let variable = 5;
if (variable <= 5) console.log('Hello')








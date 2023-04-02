// Number
let n = 123;
n = 12.345;

alert(1/0);       // Infinity
alert('йцу' / 5); // NaN


// String
let str = 'Hello';
let str2 = `Spacial Phrase ${str}`; // Обратные ковычки позволяют встраивать выражения в строку
alert(str2);


// Boolean
let checked = true;
let unchecked = false;
let isGreater = 4 > 1; // true


// null
let age = null;


// undefined
let unknown;


// Массив - служит что бы организовывать списки. Может включать в себя любой тип данных
let fruit = 'Apple', fruit2 = 'Peach', fruit3 = 'Orange';
let cart = [fruit, fruit2, fruit3];


// Список - позволяет указывать отношение между ключом и значением. Ключ всегда String, значение произвольного типа
let employee = {
    'Office' : {
        'Department' : '2b',
        'Floor' : 4
    },
    'Age' : 27
}


// Function - набор действий который приводит к достижению цели. Нужна что бы написать код 1 раз, а после его вызывать
function sum(a, b) {  // function functionName(argumenrs) { ...body... }
    return a + b      // что возвращает функция
}
alert(sum(4,5))











// prompt() - получить ввод от юзера
//console.log(prompt(''));

// alert() - Выводит alert окно в браузере
//alert('Hello World');

// confirm() - окно подтверждения
//const userAgrees = confirm('');

// typeof() || typeof - определить тип
console.log(typeof('hello'));            // string


// console.log() - вывести результат в консоль
console.log('hello');

// console.time('function_1') [some_code] console.timeEnd('function_1') - замеряет время выполнения кода, указанном между началом и концом 
const arr = [1,2,3,4,5,6,7,8,9,10];
const a = input => input.map(el => el%2===0 ? el**2 : el);
const b = input => Array.from(input, el => el%2===0 ? el**2 : el);

console.time('Measure map speed')
for (let i = 0; i < 1000000; i++){
    a(arr);
}
console.timeEnd('Measure map speed')                // Measure map speed: 82.287ms
console.time('Measure from speed')
for (let i = 0; i < 1000000; i++){
    b(arr);
}
console.timeEnd('Measure from speed')               // Measure from speed: 397.36ms


// String() - преобразует значение в строку
let value = 123;
value = String(value);


// Number() - преобразует значение в число
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0


// Boolean() - преобразует в true или false
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false



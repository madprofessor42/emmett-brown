// alert() - показывает сообщение
alert('Hello');


// let variable = prompt(title, default) - принимает ввод пользователя. Default is optional
const userInput = prompt('Введите имя');


// let variable = confirm(question) - окно с подтверждением
const yesOrNo = confirm('Ты главный?');


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



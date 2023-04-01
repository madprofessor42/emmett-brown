// String(var) - преобразовать переменную в строку
console.log('type is' + ' ' + typeof(String(123)) + ' ' + `value is ${String(123)}`);                  // type is string value is 123


// Number(var) - преобразует переменную в число
console.log('type is' + ' ' + typeof(Number('123')) + ' ' + `value is ${Number('123')}`);              // type is number value is 123
console.log('type is' + ' ' + typeof(Number('')) + ' ' + `value is ${Number('')}`);                    // type is number value is 0
console.log('type is' + ' ' + typeof(Number('123z')) + ' ' + `value is ${Number('123z')}`);            // type is number value is NaN
console.log('type is' + ' ' + typeof(Number(true)) + ' ' + `value is ${Number(true)}`);                // type is number value is 1
console.log('type is' + ' ' + typeof(Number(false)) + ' ' + `value is ${Number(false)}`);              // type is number value is 0

console.log('3' / '2');              // number
console.log('3' + '2');              // string

// + - преобразует в число
console.log(typeof(+'13'))           // number 


// Boolean(var) - преобразует переменную в true или false
console.log(Boolean(1));                    // true
console.log(Boolean(15));                   // true
console.log(Boolean('Hello'));              // true

console.log(Boolean(0));                    // false
console.log(Boolean(null));                 // false
console.log(Boolean(undefined));            // false
console.log(Boolean(NaN));                  // false
console.log(Boolean(5 < 4));                // false
console.log(Boolean(''));                   // false


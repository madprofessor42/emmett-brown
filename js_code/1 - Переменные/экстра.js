// Объявление нескольких переменных в 1 строке
let user = 'John', age = 25, message = 'Hello';


// Переменные можно использовать в функциях. В первом случае выведится просто user, так как мы передали строку, а во втором случае выведится John, так как передали переменную
console.log('user');                             // user
console.log(user);                               // John


// Математические манипуляции с переменными
let string_var = '100';
let second_string_var = '50';
let num_var = 20;
let second_num_var = 100;

console.log(string_var + second_string_var);     // 10050
console.log(string_var + num_var);               // 10020
console.log(num_var + second_num_var);           // 120
console.log(string_var * 2)                      // 200


let firstName = 'Mike';
let secondName = 'Smith';

console.log(firstName + ' ' + secondName);       // Mike Smith


// Можно присваивать переменной другие переменные
let fullName = firstName + ' ' + secondName;
console.log(fullName);                           // Mike Smith


// Поменять переменные местами - Деструктуризация 
// Деструктуризация (destructuring assignment) – это особый синтаксис присваивания, при котором можно присвоить массив или объект сразу нескольким переменным, разбив его на части
let a = 5;
let b = 'car';

[a,b] = [b,a]
console.log(a)                                  // car
console.log(b)                                  // 5




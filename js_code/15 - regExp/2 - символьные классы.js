// https://learn.javascript.ru/regexp-character-classes

let phone = "+7 (999) 123 77 88"
// \d - любая одна цифра
console.log(phone.match(/\d/))          // [ '7', index: 1, input: '+7 (999) 123 77 88', groups: undefined ]
console.log(phone.match(/\d/g))         // ['7', '9', '9', '9', '1', '2', '3', '7', '7', '8', '8']

// \s - пробел
console.log(phone.match(/\s/g))         // [ ' ', ' ', ' ', ' ' ]

// \w - буква, цифра, _
let phrase = "I love HTML 5"
console.log(phrase.match(/\s\w\w\w\w\s5/)) // [ ' HTML 5', index: 6, input: 'I love HTML 5', groups: undefined ]
console.log(phrase.match(/\s\w\w\w\w\s4/)) // null

// \D - все кроме цифр

// \S - все кроме пробела

// \W - Все кроме буквы, цифры, _

// . - любой символ. Но при этом символ должен присутствовать
console.log("BMW".match(/B.W/))             // [ 'BMW', index: 0, input: 'BMW', groups: undefined ]
console.log("BW".match(/B.W/))              // null



// Строки пожно обозначать "" или '' или ``
let single = 'single-quoted';
let double = "double-quoted";

let fname = 'Mike'
console.log(`His name is ${fname}`) // His name is Mike. С помощью `` кавычек можно вставлять значения из переменной в строку

let guestList = `Guests:            
    * John
    * Pete
    * Mary`
console.log(guestList)              // С помощью `` можно писать строки, занимающие более 1 строки


// Экранирование - позволяет использовать \ ' и другие символы в строке. А так же переносить строку
console.log('This is new \n string. And this is slash \\. And This is upper coma \'') 


// Доступ к символу
console.log(single[2])              // n. Указываем по какому индексу хотим получить букву str[index]
console.log(single.charAt(2))       // n. str.charAt(index)

// Перебор строки по буквам
for (let char of single) {          // let x of str
    console.log(char)
}

// Строки неизменяемы. Содержимое строк нельзя переопределить, но можно создать новую строку
let str = 'Hi';
str = 'h' + str[1];
console.log(str)                    // hi


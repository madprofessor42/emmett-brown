// В качестве ключей для свойств объекта можно использовать строки или символы
let id = Symbol("id");          // symbolName = Symbol("description"). 
let id2 = Symbol("id")

console.log(id === id2)         // false - каждый символ уникален, даже если у них 1 описание


// Символы не преобразуются автоматически в строки
console.log(id)                       // TypeError: Cannot convert a Symbol value to a string
console.log(id.toString())            // Symbol(id)
console.log(id.description)           // id


// Символы позволяют создавать "скрытые" свойства объектов, к которым нельзя случайно обратиться и перезаписать
let user = {
    name: 'Ivan'
}

user[id] = 1;                         // создаем свойство у объекта id со значением 1. Заключаем [id] в квадратные скобки, так как нам нужно использовать значение переменной id в качестве ключа, а не строку «id».

console.log(user)


// Символы игнорируются циклом for ... in / Object.keys(). Но Object.assign копирует строковые и символьные свойства 


// Глобальные символы. Обычно все символы уникальны, даже если их имена совпадают. Но иногда мы наоборот хотим, чтобы символы с одинаковыми именами были одной сущностью
// читаем символ из глобального реестра и записываем его в переменную
let id3 = Symbol.for("id")             // Symbol.for(key)

let idAgain = Symbol.for("id")

console.log(id3 === idAgain)           // true

console.log(Symbol.keyFor(id3))        // id - Symbol.forKey(key) - возвращает описание символа по его переменной





// string.split() - разбивает строку на массив
let string_for_split = 'banana mango'
console.log(string_for_split.split())     // [ 'banana mango' ]
console.log(string_for_split.split(''))   // [ 'b', 'a', 'n', 'a', 'n', 'a', ' ', 'm', 'a', 'n', 'g', 'o' ]
console.log(string_for_split.split(' '))  // [ 'banana', 'mango' ]

// str.length - возвращает длину строки. length это свойство, а не функция, по этому добавлять скобки не нужно --length()--
console.log(`word length is ${"wordLength".length}`) // word length is 10

// Изменение регистра
console.log('upperCase'.toUpperCase())
console.log('lowerCase'.toLocaleLowerCase())
console.log('specificSymbol'[1].toUpperCase()) // изменение определенной буквы

// Поиск подстроки
let findStr = 'Widget with id';
console.log(findStr.indexOf('Widget'))         // 0  так как Первый символ стоит по индексу 0
console.log(findStr.indexOf('widget'))         // - 1 так как не было найдено совпадений (чувствительный к регистру)
console.log(findStr.indexOf('id'))             // 1 так как комбинация этих букв есть в слове 'Widget'
console.log(findStr.indexOf('id', 2))          // 12 что бы осуществить поиск со следюущей позиции, указываем аргумент. Аргумент может быть либо позицией самого index который следующий
                                               // или просто на 1 выше

// что бы найти все подстроки, то нужно написать цикл
console.log('------------------------'); console.log('Looking for all matches');

let pos = 0;
while (true) {
    let foundPos = findStr.indexOf('id', pos)      // находим индекс вхождения
    if (foundPos === -1) {                         // если вхождений не было, то завершить цикл
        break
    }
    console.log(foundPos)
    pos = foundPos + 1                             // В начале ищется вхождение начиная с 0 индекса и далее - это будет 1
                                                   // После pos становится равным 2, и ищется вхождение которое начинается со второго индекса и далее - это будет 12
                                                   // После pos становится равным 13 и ищется вхождение которое начинается со второго индекса и далее - это будет -1 и цикл прерывается
}

console.log('Finished looking'); console.log('------------------------');

// includes; startsWith; endsWith - возвращает true или false
console.log(findStr.includes('Widget'))            // true
console.log(findStr.includes('id', 13))            // false
console.log(findStr.startsWith('Wid'))             // true
console.log(findStr.endsWith('id'))                // true


// string.slice(start, [end]) - Получение подстроки, end опциональный аргумент
let newStr = 'stringify'
console.log(newStr.slice(0, 6))                    // 'string'. с 0 по 6 идекс(не включительно)
console.log(newStr.slice(6))                       // 'ify'. с 6 до конец строки
console.log(newStr.slice(-4, -2))                  // 'gi' с 4 с конца до 2 с конца
console.log(newStr.slice(-4))                      // 'gify' с 4 с конца до конца


// string.trim() - удаляет пробелы по бокам
let spaces = '   spaces    '
console.log(spaces.trim())                       

// string.repeat(N) - повторяет строку n раз
console.log(spaces.repeat(3))                      
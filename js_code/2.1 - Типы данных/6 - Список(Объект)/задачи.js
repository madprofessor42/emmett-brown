const some_string = 'What is my favorite band?'

// Написать функцию которая подсчитывает кол-во букв
let numberOfLetters = (string) => {
    let objectOfLetters = {};
    for (let char of string){
        if (char in objectOfLetters){           // если буква уже добавлена, то прибавить 1
            objectOfLetters[char] += 1
        }
        else{                                   // если буква еще не добавлена, то добавить букву и указать первое вхождение
            objectOfLetters[char] = 1
        }
    }
    return objectOfLetters
}
console.log(numberOfLetters(some_string))


// Убрать дубликаты из массива
let duplicatedArray = [1,2,3,3,3,4,5,5]
let stringDuplicatedArray= ['Mango', 'Fruit', 'Apple', 'Mango', 'Fruit']

function removeDuplicates(input){
    return [...new Set(input)]
}
console.log(removeDuplicates(duplicatedArray))


function removeDuplicatesUsingObject(input){
    let newObject = {}
    input.forEach(element => {
        newObject[element] = element
    })
    return Object.values(newObject)
}
console.log(removeDuplicatesUsingObject(stringDuplicatedArray))

// Найти в строке счастливое число. То число которое встречается столько же раз как и само число
// 1. Считаем сколько каждое число встречается и добавляем его в объект
// 2. Выбрать из объекта те элементы, где ключ и значения равны


let num = 1122423335566;

const findHappyNumber = num => {
    let resultObject = {};
    let resultArray = [];

    [...String(num)].forEach(el => {
        if (el in resultObject){
            resultObject[el] += 1;
        }
        else{
            resultObject[el] = 1;
        }
    })

    Object.entries(resultObject).forEach(([key, value]) => {
        if (key === String(value)) resultArray.push(key);
    })
    return resultArray;
}

console.log(findHappyNumber(num));
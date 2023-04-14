const some_string = 'What is my favorite band?'


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

/**
 * Перевести число в римское - бежим циклом не по числу, а по объекту который хранит паттерны числа
 */
// 1990 - MCMXC (1000 - M ; 900 - CM ; 90 - XC)
// Бежимся по объекту, и если ключ в объекте меньше или равен числу, то записываем букву этого числа и уменьшаем введенное число на величину числа из объекта

const solution = (number) => {
    // convert the number to a roman numeral
    const ROMAN = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1}

    let ans = '';
    while (number > 0) {
        for (year in ROMAN) {
            if (ROMAN[year] <= number) {
                ans += year;
                number -= ROMAN[year];
                break;
            }
        }
    }
    return ans;
}


console.log(solution(1690))




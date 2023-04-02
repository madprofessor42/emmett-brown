// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
const camelize = input => input.split('-').map((el, index) => index === 0 ? el : el[0].toUpperCase() + el.slice(1)).join('')
console.log(camelize('my-short-string'))

// Из получаемой строки вернуть массив с колличеством букв в каждом слове 
function addLength(str) {
    return [...str.split(' ')].map(el => el + ' ' + el.length)
  }
console.log(addLength('apple ban'))             // [ 'apple 5', 'ban 3' ]

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
const filterRange = (arr, a, b) => arr.filter(el => el >=a && el <=b)


/*СОЗДАНИЕ ПРОМЕЖУТОЧНОГО МАССИВА НУЖНО КОГДА НАДО СОХРАНИТЬ ДАННЫЕ, ПРОИЗВЕСТИ С НИМИ ДЕЙСТВИЯ И ВСТАВИТЬ ОБРАТНО*/
// отсортировать в массиве только нечетные числа
// [11, 5, 4, 61, 23, 66, 24, 10, 3, 7]
// [3, 5, 4, 7, 11, 66, 24, 10, 23, 61]
const arr = [11, 5, 4, 61, 23, 66, 24, 10, 3, 7];


// 1. Получить индексы только нечетных чисел и запушить в отдельные массивы само число и его индекс
// 2. Отсортировать нечетные числа их
// 3. Запихнуть каждое число в тот индекс под которым было прошлое число

const sortOdd = input => {
    let indexArray = [];
    let oddArray = [];
    input.forEach((item, index) =>{
        if (item % 2 !== 0) {
            indexArray.push(index)
            oddArray.push(item);
        }
    })
    oddArray.sort((a,b) => a-b)

    for (let i = 0; i < oddArray.length; i++){
        input[indexArray[i]] = oddArray[i]
    }
    return input
}

console.log(sortOdd(arr))


// Вернуть последние N элементов массива
let nLastElements = [1,2,3,4,5];
console.log(nLastElements.splice(nLastElements.length - 3))



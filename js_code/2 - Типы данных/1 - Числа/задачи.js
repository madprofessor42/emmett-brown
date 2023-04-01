/*ПЕРЕЗАПИСЬ ПЕРЕМЕННОЙ ВО ВРЕМЯ ЦИКЛА НУЖНА ЧТО БЫ ЗАПОМИНАТЬ ПРОШЛЫЙ РЕЗУЛЬТАТ И СРАВНИВАТЬ С НИМ */

// найти минимальное число в массиве используя цикл 
const numbers = [12,32,-5,12,2,3]

const findMin = arrayInput => {
    let subresult = 0;
    arrayInput.forEach(el => {
        if (el < subresult) subresult = el
    })
    return subresult
}

console.log(findMin(numbers))


// Найти максимальную сумму подмассива в массиве
function getMaxSum(arr){
    let maxSum = 0;
    let partialSum = 0;

    for (let elem of arr){
        partialSum = partialSum + elem                      // 1. Получаем сумму. Каждый прогон цикла она будет суммироваться, пока не обнулится, 
                                                            //    если при плюсовании элемента получилось число меньше, чем было записано в maxSum на прошлом прогоне
        maxSum = Math.max(maxSum, partialSum)               // 2. Выбираем максимальный элемент, partialSum будет всегда выше, если мы не плюсовали отрицательное число
        if (partialSum < maxSum) partialSum = 0;            // 3. Обнуляем partialSum, если по сути мы встретили отрицательное число
    }
    return maxSum
}

console.log(getMaxSum([1,2,3, -3, 10]))

// Скопированный массив будет динамически изменяться, если поменяются элементы первого массива
let firstArray = [1,2,3]
let secondArray = firstArray
firstArray[0] = 0
console.log(secondArray)                        // [ 0, 2, 3 ]
// Что бы этого не происходило нужно сделать copy
// 1. Используя spread operator (если нет вложенных массивов)
firstArray = [1,2,3]
secondArray = [...firstArray]
firstArray[0] = 0
console.log(secondArray)                        // [ 1, 2, 3 ]
// 2. slice() (если нет вложенных массивов)
firstArray = [1,2,3]
secondArray = firstArray.slice()
firstArray[0] = 0
console.log(secondArray)                        // [ 1, 2, 3 ]
// 3.Object.assign(target, source) (если нет вложенных массивов)
firstArray = [1,2,3]
secondArray = Object.assign([], firstArray)     
firstArray[0] = 0
console.log(secondArray)                        // [ 1, 2, 3 ]
// 4. array.from() (если нет вложенных массивов)
firstArray = [1,2,3]
secondArray = Array.from(firstArray)
firstArray[0] = 0
console.log(secondArray)                        // [ 1, 2, 3 ]
// Но если есть вложенные массивы, то нужно делать не shallow copy, а deep copy
// 1. JSON.parse(JSON.stringify(array))
firstArray = [[1], [2], [3]]
secondArray = JSON.parse(JSON.stringify(firstArray))
firstArray[0][0] = 0
console.log(secondArray)                        // [ [ 1 ], [ 2 ], [ 3 ] ]
// 2. lodash.cloneDeep()
const lodash = require('lodash')
firstArray = [[1], [2], [3]]
secondArray = lodash.cloneDeep(firstArray)
firstArray[0][0] = 0
console.log(secondArray)                        // [ [ 1 ], [ 2 ], [ 3 ] ]


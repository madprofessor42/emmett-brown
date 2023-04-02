/*
Объекты позволяют хранить данные со строковыми ключами. Это замечательно.
Но довольно часто мы понимаем, что нам необходима упорядоченная коллекция данных, в которой присутствуют 1-й, 2-й, 3-й элементы и т.д. Например, она понадобится нам для хранения списка чего-либо: пользователей, товаров, элементов HTML и т.д.
В этом случае использовать объект неудобно, так как он не предоставляет методов управления порядком элементов. Мы не можем вставить новое свойство «между» уже существующими. Объекты просто не предназначены для этих целей.
Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.
*/

// Обявление массива
let simpleArray = [];
let newSimpleArray = new Array();


// Срезы - через индекс получаем элемент массива. Отсчет идет с 0
simpleArray = ['Apple', 'Orange', 'Banana'];
console.log(simpleArray[0])                     // Apple
console.log(simpleArray[1])                     // Orange
console.log(simpleArray[2])                     // Banana
// Если мы захотим получить последний элемент массива, то есть 2 способа
console.log(simpleArray[simpleArray.length-1])  // Banana
console.log(simpleArray.at(-1))                 // Banana


// Добавление элементов - если вставить элемент по тому индексу где уже есть элемент, то он замениться
simpleArray[1] = 'Mango'
console.log(simpleArray)                        // [ 'Apple', 'Mango', 'Banana' ]
// Если же вставить на новый индекс, то добавится новый
simpleArray[3] = 'Orange'
console.log(simpleArray)                        // [ 'Apple', 'Mango', 'Banana', 'Orange' ]
// При добавлении на индекс больше последнего добавится <1 empty item>
simpleArray[5] = 'Tomato'
console.log(simpleArray)                        // [ 'Apple', 'Mango', 'Banana', 'Orange', <1 empty item>, 'Tomato' ]
// Что бы добавить элемент в конец используем либо push() либо array[array.length] = ...
simpleArray[simpleArray.length] = 'Car'
console.log(simpleArray)                        // [ 'Apple', 'Mango', 'Banana', 'Orange', <1 empty item>, 'Tomato', 'Car ]


// В массиве могут храниться данные любых типов
simpleArray = [1, 'string', [1,'car'], {name:'John'}, true, null, undefined, 1>3, function(){console.log('I am a function inside the array')}]
console.log(simpleArray[2][1])                  // car - получаем в начале доступ к элементу array внутри нашего array, а далее уже получаем второй элемент внутреннего array
simpleArray[8]()                                // I am a function inside the array - что бы выполнить функцию которая находится внутри array, то нужно добавить ()


// Список элементов массива, как и список свойств объекта, может оканчиваться запятой:
simpleArray = [1,2,3,]
console.log(simpleArray)










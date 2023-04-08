/*СОЗДАНИЕ МАССИВА*/

// Array.from(value, el=> ...) - создает новый массив из итерируемого объекта. Если нужно только поменять элементы массива, то лучше использовать map(), так как он быстрее 
let array_for_from = Array.from('foo')
console.log(array_for_from)                                         // [ 'f', 'o', 'o' ]
array_for_from = Array.from([1,2,3], el => el*2)
console.log(array_for_from)                                         // [ 2, 4, 6 ]


/*ПРОВЕРКА ЧТО ЭТО МАССИВ */

// Array.isArray() - Массивы не образуют отдельный тип языка. Они основаны на объектах. Поэтому typeof не может отличить простой объект от массива
let array_for_isArray = []
let object_for_isArray = {}
console.log(typeof(array_for_isArray))                      // object
console.log(typeof(object_for_isArray))                     // object
console.log(Array.isArray(array_for_isArray))               // true
console.log(Array.isArray(object_for_isArray))              // false


/*УДАЛЕНИЕ ЭЛЕМЕНТОВ МАССИВА*/

// delete arr[index] - не удаляет полностью элемент
let array_for_delete = [1,2,3,4]
delete array_for_delete[0]
console.log(array_for_delete)                                       // [ <1 empty item>, 2, 3, 4 ]

// array.splice(index, [deleteCount], [elements to insert]) - удаляет элемент массива
let array_for_splice = [1,2,3,4]
array_for_splice.splice(0, 2)
console.log(array_for_splice)                                       // [ 3, 4 ] - удалил 2 элемента, начиная с первого
array_for_splice.splice(0, 2, 'car', 'fruit')
console.log(array_for_splice)                                       // [ 'car', 'fruit' ] - удалил 2 элемента, начиная с первого и на их место вставил новые
array_for_splice.splice(0, 0, 'mango', 'bazooka')
console.log(array_for_splice)                                       // [ 'mango', 'bazooka', 'car', 'fruit' ] - вставил новые элементы начиная с 0 индекса, без удаления

// array.slice([start], [end]) - Он возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end). 
// Оба индекса start и end могут быть отрицательными. В таком случае отсчёт будет осуществляться с конца массива.
let array_for_slice = [1,2,3,4]
let array_after_slice = array_for_slice.splice(2,3)
console.log(array_after_slice)                                      // [ 3, 4 ] - вернул значения под 2 и 3 индексами

// array.length - узнать длину массива
let array_for_length = [1,2,3,4,5,6]
console.log(array_for_length.length)                                // 6
// Можем очистить массив
array_for_length.length = 0
console.log(array_for_length)                                       // []


/*ПОИСК В МАССИВЕ*/

// array.at(position) - позволяет получить элемент по его позиции - полезно если нужен последний элемент
let array_for_at = [1,2,3,4]
console.log(array_for_at.at(-1))                                    // 4

// array.includes(item, from) - ищет item, начиная с индекса from, и возвращает true, если поиск успешен
let array_for_includes = ['Car', 'Bike', 'Ball'];
console.log(array_for_includes.includes('Car'))                     // true
console.log(array_for_includes.includes('Car', 1))                  // false - так как Car на 0 индексе, а начиная с 1 индекса его уже нет
console.log(array_for_includes.includes('ar'))                      // false - нужно что бы элемент полностью совпадал с searchElem

// array.indexOf(item, from) - ищет item, начиная с индекса from слева направо, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1
let array_for_indexOf = ['car', 'ball', 3, 'car']
console.log(array_for_indexOf.indexOf('car'))                       // 0
console.log(array_for_indexOf.indexOf('car', 1))                    // 3 - искать car, начиная с 1 индекса
// array.lastIndexOf(item, from) - ищет item, начиная с индекса from снаправо налево, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1
let array_for_lastIndexOf = ['car', 'ball', 3, 'car']
console.log(array_for_lastIndexOf.lastIndexOf('car'))               // 3
console.log(array_for_lastIndexOf.lastIndexOf('car', 1))            // 0

// array.find(callbackFn) // array.find((item, index, array) => {}) - метод применяемый к массиву, в метод передается функция (колбэк), который находит первый элемент в массиве, для которого результат колбэка выдал true
let array_for_find = [1,2,3,4,5,6,7,8,9,10]
console.log(array_for_find.find(el => el % 2 === 0))   // 2
// array.findIndex(callbackFn) // array.findIndex((item, index, array) => {}) - то же самое что и array.find(), но выводит индекс найденного элемента 
let array_for_findIndex = ['car', 'wash', 'car', 'qwerty']
console.log(array_for_findIndex.findIndex(el => el === 'wash'))     // 1

// array.some(callbackFn) - если хоть 1 элемент в массиве удовлетворил условию переданному в callbackFn, то метод возвращает true, иначе false
let array_for_some = [1, 4, 6, 9];
console.log('array_for_some - ' + array_for_some.some(el => el > 10));  // false
console.log('array_for_some - ' + array_for_some.some(el => el < 10));  // true


/*ОЧЕРЕДЬ - push(), shift()*/ // Добавляем элемент в конец и забираем с начала
/*СТЕК - push(), pop()*/ // Добавляем элемент в конец и забираем с конца

// array.push(el) - добавляет элемент в конец массива
let array_for_push = [1,2,3]
array_for_push.push(4)
console.log(array_for_push)                                         // [ 1, 2, 3, 4 ]
array_for_push.push(5,6,7)
console.log(array_for_push)                                         // [ 1, 2, 3, 4, 5, 6, 7 ]

// array.unshift(el) - Добавляет элемент в начало массива
let array_for_unshift = [1,2,3]
array_for_unshift.unshift(0)
console.log(array_for_unshift)                                      // [ 0, 1, 2, 3 ]
array_for_unshift.unshift(-2,-1)
console.log(array_for_unshift)                                      // [ -2, -1, 0, 1, 2, 3 ]

// array.pop() - удаляет последний элемент массива и возвращает его
let array_for_pop = [1,2,3]
array_for_pop.pop()
console.log(array_for_pop)                                          // [ 1, 2 ]
let popped = array_for_pop.pop()
console.log(popped)                                                 // 2

// array.shift() - удаляет первый элемент массива и возвращает его
let array_for_shift = [1,2,3]
array_for_shift.shift()
console.log(array_for_shift)                                        // [ 2, 3 ]
let shifted = array_for_shift.shift()
console.log(shifted)                                                // 2





/**
 * ИЗМЕНЕНИЕ ЭЛЕМЕНТОВ МАССИВА И ИТЕРАЦИЯ ПО ЭЛЕМЕНТАМ
 */
console.log("----CHANGE ELEMENTS----")
// Если передавать в качестве колбэка несколько элементов, то оборачиваем их в дополнительные скобки - ()
// Если передаваемый элемент - массив массивов, то оборачиваем все в скобки и квадратные скобки - ([]), что бы получиать доступ к элементом не через elem[0], elem[1], а через переменные
console.log([[55, 12], [23, 13]].map(([first, second]) => first > 30 && second < 13 ? 'x' : 'y'))



// array.filter(callbackFn) // array.filter((item, index, array) => {}) - метод применяемый к массиву, в метод передается функция (колбэк), который оставляет те элементы в массиве, для которых результат колбэка выдал true
let array_for_filter = [1,2,3,4,5,6,7,8,9,10];
console.log(array_for_filter.filter(elem => elem % 2 === 0))        // [ 2, 4, 6, 8, 10 ]

function isBigEnough(value){
    return value>=5;
}
console.log(array_for_filter.filter(isBigEnough))                   // [ 5, 6, 7, 8, 9, 10 ]

const fruits = ["apple", "banana", "grapes", "mango", "orange"];
function searchBag(entry, query){
    return entry.filter(el => el.toLowerCase().includes(query.toLowerCase()))   // Если применить includes для массива, то введя только часть элемента, метод array.includes() выдаст false
                                                                                // Но если используя filter() применить includes(), то он будет применяться для каждого элемента (по сути для строки)
                                                                                // и уже будет выдавать true если в элемент входит только часть слова
}
console.log(searchBag(fruits, 'ap'))                                // [ 'apple', 'grapes' ]

// array.map(callbackFn) // array.map((item, index, array) => {}) - применяет колбэк к каждому элементу массива
let array_for_map = [1,2,3,4,5,6,7,8,9,10];
console.log(array_for_map.map(elem => elem % 2 === 0))              // [false, true, false, true, false, true, false, true, false, true]

// array.reduce(callbackFun) // array.reduce((accumulator, item, index, array) => {}, [initial]) - используется для вычисления какого-нибудь единого значения на основе всего массива.
// accumulator – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial)
//      при отсутствии initial в качестве первого значения берётся первый элемент массива, а перебор стартует со второго.
// item – очередной элемент массива
// index – его индекс
// array – сам массив
let array_for_reduce = [1,2,3,4,5]
console.log(array_for_reduce.reduce((total, current) => total + current))       // 15
console.log(array_for_reduce.reduce((total, current) => total + current, 5))    // 20


// array.forEach(callbackFn) // array.forEach((item, index, array) => {}) - по сути цикл for
let array_for_forEach = ['a', 'b', 'c'];
array_for_forEach.forEach((item, index, array) => console.log(`item is ${item} index is ${index} array is ${array}`));  // item is a index is 0 array is a,b,c
                                                                                                                        // item is b index is 1 array is a,b,c
                                                                                                                        // item is c index is 2 array is a,b,c
// Если нужно поменять значение элемента массива, то по попаданию в условие меняем элемент этого массива на нужный
let array_for_replace = ['abc', 'qwe', '123'];
array_for_replace.forEach((elem, index) => {
    if (elem.slice(-1) === 'c') {
        array_for_replace.splice(index, 1, elem.slice(0, -1))
    }
})


// Всегда возвращает undefined. Что бы что то вернулось, стоит использовать array.map()
const capitalize = input => input.forEach(el => el[0].toUpperCase())
console.log(capitalize(['hello', 'friend']))                                    // undefined
// forEach для объектов в массиве - нужно передать в качестве item - объект {key_1, key_2, ...}
let array_with_objects_for_forEach = [{firstName:'Mike', age:23, nested:{1:'value_1', 2:'value_2'}}, {firstName:'John', age:15, nested:{1:'value_3', 2:'value_4'}}]
array_with_objects_for_forEach.forEach(({firstName, age, nested}) => {
    console.log(firstName)
    console.log(age)
    console.log(Object.values(nested).forEach(el => console.log(el)))
})


/*ПРОЧИЕ ИЗМЕНЕНИЯ МАССИВА (ПЕРЕВЕРНУТЬ ЭЛЕМЕНТЫ, ПРЕОБРАЗОВАТЬ В СТРОКУ, ОБЪЕДЕНИТЬ МАССИВЫ, СКГЛАДИТЬ МАССИВ, СОРТИРОВКА И ТД.) */

// array.reverse() - переворачивает элементы массива
let array_for_reverse = ['mango', 'banana']
console.log(array_for_reverse.reverse())   // [ 'banana', 'mango' ]

// array.join() - соединяем элементы массива и образует строку
let array_for_join = ['a', 'g', 'e', ' ', '28']
console.log(array_for_join.join())            // a,g,e, ,28
console.log(array_for_join.join(''))          // age 28
console.log(array_for_join.join(' '))         // a g e   28

// array.concat(args) - объеденить массив с итерируемым объектом, возвращает новый массив
let array_for_concat = [1,2,3,4] 
let array_after_concat = array_for_concat.concat('hello', 'world')
console.log(array_after_concat)                                     // [ 1, 2, 3, 4, 'hello', 'world' ]
// Что бы добавились значения объекта, то нужно указать свойство [Symbol.isConcatSpreadable]: true
let array_for_concat_with_object = [1,2,3,4]
let object_for_concat = {
    0: 'Something',
    1: 'Else',
    length: 2,
    [Symbol.isConcatSpreadable]: true
}
let array_after_concat_with_object = array_for_concat_with_object.concat(object_for_concat)
console.log(array_after_concat_with_object)

// array.flat([depth]) - возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
let array_for_flat = [1,2,3,[4,5,[6,7]]]
console.log(array_for_flat.flat())                          // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
console.log(array_for_flat.flat(Infinity))                  // [ 1, 2, 3, 4, 5, 6, 7 ]

// array.sort([compareFunction]) - сотрирует массив, применяя правила переданой compareFunction, если ее не передать, то будет все сортировать как строку
let array_for_sort = [15, 10, 3, 5, -5]
console.log(array_for_sort.sort())                                  // [ -5, 10, 15, 3, 5 ]
console.log(array_for_sort.sort((a,b) => a-b))                      // [ -5, 3, 5, 10, 15 ]
console.log(array_for_sort.sort((a,b) => b-a))                      // [ 15, 10, 5, 3, -5 ]







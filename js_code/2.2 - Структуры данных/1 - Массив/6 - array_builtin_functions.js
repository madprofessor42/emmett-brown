// String() - если применить на массив, то получится строка, разделенная запятыми
// Если нужно просто преобразовать в строку, то лучге использовать join('')
let array_for_string = [1, 2, 3, 4]
console.log(String(array_for_string))                   // 1,2,3,4

// Math.max.apply(Math, array) - выводит максимальное число в массиве
let array_for_max = [-1, 6, -4, 2];
console.log(Math.max.apply(Math, array_for_max))        // 6

// Math.min.apply(Math, array) - выводит минимальное число в массиве
let array_for_min = [-1, 6, -4, 2];
console.log(Math.min.apply(Math, array_for_min))        // -4


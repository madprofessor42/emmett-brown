let searchedString = '1234-5';
let key = '-';

// 1. Используя spread оператор переводим строку в массив console.log([...searchedString]) выдаст [ '1', '2', '3', '4', '-', '5' ]
// 2. С помощью filter() сотавляем только нужные значения
// 3. С помощью not includes указываем какого элемента не должно быть что бы это было услвоием фильтрации
// 4. С помощью map() трансформируем каждый элемент объекта в число и плюсуем 2 
// 5. Преобразуем полученный массив в строку

let transformedString = [...searchedString].filter(e => !key.includes(e)).map(e => parseInt(e)+2).join('')
console.log(transformedString)                  // 34567



console.log(2 > 1);    // true
console.log(2 < 1);    // false
console.log(2 >= 2);   // true
console.log(2 <= 1);   // false

console.log(2 == '2');  // true
console.log(2 === '2'); // false. 3 равно провреяет не только значение, но еще и тип данных. В основном используется оно
console.log(2 != 3);    // true - не равно

console.log( 'Я' > 'А' );        // true 
console.log( 'Коты' > 'Кода' );  // true - сравнивает каждый символ с каждым
console.log( 'Сонный' > 'Сон' ); // true


/*
Не используйте сравнения >= > < <= с переменными, которые могут принимать значения null/undefined, разве что вы полностью уверены в том, что делаете. 
Если переменная может принимать эти значения, то добавьте для них отдельные проверки.
*/
console.log(undefined == null)          // true
console.log(undefined === null)         // false



// Приведение типов
console.log(0 == false)                 // true     0 - number, false - bool. Типы приводятся к одному и по этому true
console.log(0 === false)                // false    0 - number, false - bool. Типы не приводятся к одному и по этому false
console.log(1 == '1')                   // true     1 - number, '1' - string. Типы приводятся к одному и по этому true
console.log(1 === '1')                  // false    1 - number, '1' - string. Типы не приводятся к одному и по этому false
console.log(null == undefined)          // true     null - null, indefined - undefiend. Типы приводятся к одному и по этому true
console.log(null === undefined)         // false    null - null, indefined - undefiend. Типы не приводятся к одному и по этому false
console.log('0' == false)               // true     0 - string, false - bool. Типы приводятся к одному и по этому true
console.log('0' === false)              // false    0 - string, false - bool. Типы не приводятся к одному и по этому false
console.log([] == [])                   // false - объекты всегда не равны между собой 
console.log([] === [])                  // false - объекты всегда не равны между собой 
console.log({} == {})                   // false - объекты всегда не равны между собой 
console.log({} === {})                  // false - объекты всегда не равны между собой 

// in - используется для проверки что значение содержится в итерируемом объекте
let arr = [1,2,3,4];
(2 in arr) ? console.log('Yes 2 in array') : console.log('2 is not in array');      // Yes 2 in array
(7 in arr) ? console.log('Yes 7 in array') : console.log('7 is not in array');      // 7 is not in array






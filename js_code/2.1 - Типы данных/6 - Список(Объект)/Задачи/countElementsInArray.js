const some_string = 'What is my favorite band?'

const usingFor = (string) => {
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
console.log(usingFor(some_string))


const usingReduce = (string) => {
    return string.split("").reduce((arr, cur) => {
        arr[cur] ? arr[cur]++ : arr[cur] = 1;
        return arr
    }, {})
}
console.log(usingReduce(some_string))




console.time('usingFor')
for (let i=0; i<1000000; i++) {
    usingFor(some_string);
}
console.timeEnd('usingFor')

// Быстрее на 20%
console.time('usingReduce')
for (let i=0; i<1000000; i++) {
    usingReduce(some_string);
}
console.timeEnd('usingReduce')

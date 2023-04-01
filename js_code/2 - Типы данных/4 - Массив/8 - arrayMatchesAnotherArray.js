const firstArray = [1,2,3];
const secondArray = [2,3];


const intersection = (a, b) => {
    return a.filter(el => b.includes(el));
}

const intersection_2 = (a, b) => {
    const obj = {};
    const arr = [];
    a.forEach((el) => {
    obj[el] = 1;
    })

    b.forEach((el) => {
    if (obj.hasOwnProperty(el)) arr.push(el)
    })

    return arr                                     
}

const intersection_3 = (a, b) => {
    let arr = [];
    for (let i = 0; i < a.length; i++){
        for (let j = 0; j < b.length; j++){
            if (a[i] === b[j]) arr.push(a[i])
        }
    }
    return arr
}

/* array.some() - проверить что часть элементов входят в массив */
const intersection_4 = (a, b) => {
    return a.some(el => b.includes(el))
}
/* array.every() - проверить что все элементы входят в массив */
const intersection_5 = (a, b) => {
    return a.every(el => b.includes(el))
}






console.time('Check intersection using includes')
for (let i = 0; i < 100000; i++){
    intersection(firstArray, secondArray)
}
console.timeEnd('Check intersection using includes')



console.time('Check intersection using object')
for (let i = 0; i < 100000; i++){
    intersection_2(firstArray, secondArray)
}
console.timeEnd('Check intersection using object')


console.time('Check intersection using nested for')
for (let i = 0; i < 100000; i++){
    intersection_3(firstArray, secondArray)
}
console.timeEnd('Check intersection using nested for')


console.time('Check intersection using some')
for (let i = 0; i < 100000; i++){
    intersection_4(firstArray, secondArray)
}
console.timeEnd('Check intersection using some')


console.time('Check intersection using every')
for (let i = 0; i < 100000; i++){
    intersection_5(firstArray, secondArray)
}
console.timeEnd('Check intersection using every')


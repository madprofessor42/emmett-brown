// Функции можно передавать N кол-во аргументов
const infiniteArgs = (...args) => {
    return args;
}
console.log(infiniteArgs(1,2,3,3))                   // [ 1, 2, 3, 3 ]

const infiniteArgs_2 = (...args) => {
    for (let argument of args){
        console.log(argument)
    }
}
infiniteArgs_2(1,2,3,4)         // 1
                                     // 2
                                     // 3
                                     // 4







// break - для выхода из цикла. Используется в While, For, Switch
let sum = 0;
let value = 3                  
while (true){
    value--
    if (!value) break        // Если введенное значение будет false (пустая строка)
    sum += value;
}
console.log(sum);


// continue - переход к следующей итерации и прерывание выполнения последующих команд в теле цикла
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {continue}
    console.log(i)             // 1 3 5 7 9
}


// метки для break/continue - используется что бы выйти из нескольких уровней цикла сразу
outer: for (let i = 0; i < 10; i ++){
    for (let j = 0; j < 10; j++){
        let input = 0
        if (!input) break outer           // если не будет введено значение, то останавливается внешний цикл
    }                                     // если не указать что должен остановиться внешний цикл, то остановится внутренний
}


// нельзя использовать break/continue вместе с терновым оператором ?
let num = 5
for (let i = 0; i < num; i++, num--){
    num > 5 ? console.log(num) : continue
}


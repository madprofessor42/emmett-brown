// while - используется что бы многократно выполнять 1 участок кода, пока условие в скобочках true. 
let i = 0

while (i < 3) {
    // тело цикла. 1 прогон цикла - итерация
    console.log(i)
    i++
}

// do...while - используется что бы выполнить итерацию цикла хотя бы 1 раз, даже если условие не будет выполнено
x = 3;
do {
    // тело цикла
    console.log(x)
    x++
} while(x < 3);
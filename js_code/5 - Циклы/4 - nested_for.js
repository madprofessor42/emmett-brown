// Вначале прогоняются все значения во вложенном цикле, а после инкрементируется внешний на 1 и далее опять прогоняются все элементы внутреннего и так пока не внешний не дойдет до конца

// Simple nested
for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        console.log(`SIMPLE - outer for value is ${i} inner for value is ${j}`)
    }
}
/*
SIMPLE - outer for value is 0 inner for value is 0
SIMPLE - outer for value is 0 inner for value is 1
SIMPLE - outer for value is 0 inner for value is 2
SIMPLE - outer for value is 1 inner for value is 0
SIMPLE - outer for value is 1 inner for value is 1
SIMPLE - outer for value is 1 inner for value is 2
SIMPLE - outer for value is 2 inner for value is 0
SIMPLE - outer for value is 2 inner for value is 1
SIMPLE - outer for value is 2 inner for value is 2
*/


// Inner takes value from outer
for (let i = 0; i < 3; i++){
    for (let j = 0; j < i; j++){
        console.log(`INNER TAKES FROM OUTER - outer for value is ${i} inner for value is ${j}`)
    }
}
/*
INNER TAKES FROM OUTER - outer for value is 1 inner for value is 0
INNER TAKES FROM OUTER - outer for value is 2 inner for value is 0
INNER TAKES FROM OUTER - outer for value is 2 inner for value is 1
*/


// Inner goes backwards
for (let i = 0; i < 3; i++){
    for (let j = 3; j > 0; j--){
        console.log(`INNER GOES BACKWARDS - outer for value is ${i} inner for value is ${j}`)
    }
}
/*
INNER GOES BACKWARDS - outer for value is 0 inner for value is 3
INNER GOES BACKWARDS - outer for value is 0 inner for value is 2
INNER GOES BACKWARDS - outer for value is 0 inner for value is 1
INNER GOES BACKWARDS - outer for value is 1 inner for value is 3
INNER GOES BACKWARDS - outer for value is 1 inner for value is 2
INNER GOES BACKWARDS - outer for value is 1 inner for value is 1
INNER GOES BACKWARDS - outer for value is 2 inner for value is 3
INNER GOES BACKWARDS - outer for value is 2 inner for value is 2
INNER GOES BACKWARDS - outer for value is 2 inner for value is 1
*/


// Каждый цикл уменьшаем кол-во итерируемых элементов на 1, но все равно доходим до конца цикла
const maxMirror = (arr) => {
    for(let i = arr.length; i > 1; i--){                                                        // Начинаем с 4 и заканчиваем 1
      for(let j = 0; j <= arr.length-i; j++){                                                   // Начинаем с 0 и заканчиваем 4 минус текущее значение i
        console.log(`outer value i is ${i} inner value j is ${j}, j+i is ${j+i}`)
        console.log(arr.slice(j, j+i))
      }
      console.log('NEXT')
    }
}
maxMirror([1,2,3,4]);

/*
outer value i is 4 inner value j is 0, j+i is 4
[ 1, 2, 3, 4 ]
NEXT
outer value i is 3 inner value j is 0, j+i is 3
[ 1, 2, 3 ]
outer value i is 3 inner value j is 1, j+i is 4
[ 2, 3, 4 ]
NEXT
outer value i is 2 inner value j is 0, j+i is 2
[ 1, 2 ]
outer value i is 2 inner value j is 1, j+i is 3
[ 2, 3 ]
outer value i is 2 inner value j is 2, j+i is 4
[ 3, 4 ]
NEXT
*/

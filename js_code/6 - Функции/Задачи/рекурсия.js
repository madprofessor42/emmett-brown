// Написать функцию которая упрощает массив. [0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

const reducer = (arr) => {
    console.log(arr)
    // Базовый кейс
    if (arr.length === 1) return arr[0]

    // Кейс рекурсии
    const newArr = [];
    let counter = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            newArr.push(counter)
            counter = 1
        } else {
            counter++
        }
    }
    return reducer(newArr)
}


reducer([4, 4, 6, 6, 3, 1, 2])

// [ 4, 4, 6, 6, 3, 1, 2 ]
// [ 2, 2, 1, 1, 1 ]
// [ 2, 3 ]
// [ 1, 1 ]
// [ 2 ]

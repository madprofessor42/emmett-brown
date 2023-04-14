const maxSequence = (arr) => {
    // Если все числа отрицательные, то возвращаем 0
    const newArr = [...arr];
    newArr.sort((a,b) => a-b);
    if (Math.max.apply(Math, newArr) < 0) return 0


    const subArray = [];
    // Бежимся по массиву и суммируем все числа, добавляя их сумму в отдельный массив
    // Каждый прогон убираем последне число. Как дошли до первого числа, то теперь прогоняем начиная со второго числа и тд
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            const slice = arr.slice(i, j);
            const sum = slice.reduce((acc, val) => acc + val);
            subArray.push(sum);
        }
    }

    // Выводим максимальное число в массиве
    return Math.max.apply(Math, subArray);
}

console.log(maxSequence([-3,3,-2,3]))



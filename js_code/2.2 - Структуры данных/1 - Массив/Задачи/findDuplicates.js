// Найти дубликаты
const duplicates = (arr) => {
    return arr.reduce((prev, cur, index, all) => {
        // Если текущий индекс не равен первому индексу этого элемента (значит нашелся дубликат) И в результрующем массиве еще нет такого элемента
        if (index !== all.indexOf(cur) && prev.indexOf(cur) === -1) {
            prev.push(cur);
        }
        return prev;
    }, []);
}


console.log(duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']))       // [ 4, 3, 'zut' ]

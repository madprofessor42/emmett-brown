const filterObject = (obj1) => {
    return Object.keys(obj1)
        // Фильтруем объект
        .filter(key => obj1[key] % 2 === 0)
        // Преобразуем ключи в объект
        .reduce((acc, key) => {
            acc[key] = obj1[key]
            return acc
        }, {})
}

console.log(filterObject({first: 1, second: 2, third: 3}))      // { second: 2 }


const flattenArray = (arr) => {
    return arr.reduce((flatArr, toFlat) => {
        // Если у нас вложенный массив, то добавляем в flatArr опять функцию flattenArray, которая на выходе даст прост число
        return flatArr.concat(Array.isArray(toFlat) ? flattenArray(toFlat) : toFlat)
    }, [])
}

console.log(flattenArray([1, 2, 3, [4, 5, 6, [7, 8]]]))     // [1,2,3,4,5,6,7,8]


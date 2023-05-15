const filterAndMap = (arr) => {
    return arr.reduce((result, el) => {
        if (el % 2 === 0) {
            result.push(el * 2)
        }
        return result
    }, [])
}

console.log(filterAndMap([1,2,3,4,5]))      // [4, 8]


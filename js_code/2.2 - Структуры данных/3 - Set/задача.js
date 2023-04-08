// Найти уникальные значения
let arr = [1,1,1,1,2,3,3,3,4,5,6,7,8,8,8,8]
console.log([...new Set(arr)])                  // [1, 2, 3, 4, 5, 6, 7, 8]

// Узнать есть ли в слове повторяющиеся буквы, если есть, то показать false
const isIsogram = (str) => {
    const sorted = str.toLowerCase().split("").sort();
    const set = [...new Set(sorted)];

    return sorted.join("") === set.join("");
}

console.log(isIsogram('moOse'))



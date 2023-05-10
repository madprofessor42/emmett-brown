// С помощью [...iterable] можно забрать каждый элемент iterable и положить в массив 
console.log([...'hello world'])             // ['h', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'l', 'd']

console.log(Math.max([1,2,3]))       // NaN
console.log(Math.max(...[1,2,3]))           // 3


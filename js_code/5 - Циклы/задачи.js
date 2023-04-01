// Функция которая возвращает просыте числа (делятся на 1 и на само себя)
let primeNumbers = (start, finish) => {
    let arrayOfNumbers = new Array();
    outer: for (start ; start<=finish ; start++){
        for (let i=2 ; i<start ; i++){
            if (start % i == 0) continue outer;              
        }
        arrayOfNumbers.push(start);
    }
    return arrayOfNumbers;
}
console.log(primeNumbers(2, 15));
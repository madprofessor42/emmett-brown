/**
 * Наборы - [...] означает искать любой символ из заданных
 */

console.log("Tip Top".match(/t[io]p/gi))                                 // [ 'Tip', 'Top' ]


// так же можно задавать диапазон. Например [a-zA-Z0-9_] - будет значить любая буква, цифра и _. По сути это \w
console.log("Exception 0xAF".match(/\dx[a-zA-Z0-9][a-zA-Z0-9]/g))       // [ '0xAF' ]

// [^...] - исключающие диапазоны. В этом примере мы исключаем цифры, пробелы и буквы
console.log("alice15@gmail.com".match(/[^\d\sA-Z]/gi))                  // [ '@', '.' ]


console.log("Exception 0xAF".match(/[^a-zA-Z\s]/gi))                    // [ '0' ]
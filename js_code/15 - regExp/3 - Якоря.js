let phrase = "I love New-York";

// ^ - значит фраза начинается на это
// $ - значит фраза заканчивается на это
console.log(phrase.match(/New-York/))      // [ 'New-York', index: 7, input: 'I love New-York', groups: undefined ]
console.log(phrase.match(/^New-York$/))    // null
console.log(phrase.match(/New-York$/))     // [ 'New-York', index: 7, input: 'I love New-York', groups: undefined ]
console.log(phrase.match(/^New-York/))     // null

// Вместе их используют что бы проверить что строка полностью совпадет

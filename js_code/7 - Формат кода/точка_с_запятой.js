//В большинстве случаев новая строка подразумевает точку с запятой. Но «в большинстве случаев» не значит «всегда»!

// В этом примере будет все ок
console.log(1
    +
    3);

// Выведет ошибку, так как код читается как console.log('Hello')[1, 2].forEach((value) => console.log(value)); а это не валидынй синтаксис
console.log('Hello')
[1, 2].forEach((value) => console.log(value));


// Точка с запятой не требуется после блоков кода {…} и синтаксических конструкций с ними, таких как, например, циклы:
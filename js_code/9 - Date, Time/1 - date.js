// Для создания нового объекта Date нужно вызвать конструктор new Date() с одним из следующих аргументов:

// new Date(milliseconds) - Создать объект Date с временем, равным количеству миллисекунд (тысячная доля секунды), прошедших с 1 января 1970 года UTC+0.
let now = new Date();
console.log(now);
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);                // 1970-01-01T00:00:00.000Z - так как 0 милисекунд от 1 января 1970 год будет это же время


// new Date('dateString') - Если аргумент всего один, и это строка, то из неё «прочитывается» дата
let date = new Date('2022-12-22');
console.log(date);                      // 2022-12-22T00:00:00.000Z


// new Date(year, month, date, hours, minutes, seconds, ms) - задать дату. Месяц начинается с 0
let dateUsingArguments = new Date(2022, 5, 12, 23, 14, 23);
console.log(dateUsingArguments);        // 2022-06-12T20:14:23.000Z


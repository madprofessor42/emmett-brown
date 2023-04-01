let date = new Date();

// Следующие методы возвращают значения в соответствии с местным часовым поясом.
// Date.getFullYear() - получить текущий год
console.log(date.getFullYear()); 

// Date.getMonth() - получить текущий месяц (Январь - это 0, Декабрь - это 11)
console.log(date.getMonth());     

// Date.getDate() - получить текущий день месяца
console.log(date.getDate());   

// Date.getHours() - получить текущий час
console.log(date.getHours());   

// Date.getMinutes() - получить текущую минуту
console.log(date.getMinutes());   

// Date.getSeconds() - получить текущую секунду
console.log(date.getSeconds());   

// Date.getMilliseconds() - получить текущие милисекунды
console.log(date.getMilliseconds());   

// Date.getDay() - получить текущий день недели (0 - это воскресенье, 6 - это суббота)
console.log(date.getDay());   

// Date.getTime() - Для заданной даты возвращает таймстамп – количество миллисекунд, прошедших с 1 января 1970 года
console.log(date.getTime());   
// можно получить таймстемп еще преобразованием текущей даты в число
console.log(+date)

// Date.now() - получить текущее время (таймстемп). Семантически он эквивалентен new Date().getTime(), однако метод не создаёт промежуточный объект Date. Так что этот способ работает быстрее и не нагружает сборщик мусора.
console.log(Date.now())


/*Установка компонентов даты*/

// Date.setFullYear(year, [month], [date]) - установить год
let customYear = new Date();
customYear.setFullYear(2025,11,23);
console.log(customYear);                            // 2025-12-22T21:17:58.674Z

// Date.setMonth(month, [date])

// Date.setDate(date)

// Date.setHours(hour, [min], [sec], [ms])

// Date.setMinutes(min, [sec], [ms])

// Date.setSeconds(sec, [ms])

// Date.setMilliseconds(ms)

// Date.setTime(milliseconds) - устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC

// Date.parse(str) - считывает дату из строки. Формат строки YYYY-MM-DDTHH:mm:ss.sssZ
let someDateTimestamp = Date.parse('2023-01-12T03:12:34');
console.log(someDateTimestamp);                              // Вернет таймстемп
someDate = new Date(someDateTimestamp);
console.log(someDate);                                       // 2023-01-12T00:12:34.000Z


/*МАНИПУЛЯЦИИ С ВРЕМЕНЕМ*/
// Получим дату через 2 дня
let currDate = new Date();
console.log(currDate);
currDate.setDate(currDate.getDate() + 2);           // 2023-02-02T21:25:55.060Z
console.log(currDate)                               // 2023-02-04T21:25:55.060Z

// Преобразование к числу разности дат
let start = new Date();
for (let i=0; i < 10000000; i++){
    let doSomething = i**i**i;
}
let end = new Date();
console.log(`function took ${end - start} milliseconds`)    // function took 8 milliseconds


















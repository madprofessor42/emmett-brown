// Или || - находит первое истинное значение, идя слева на право. Для выполнения условия должно совпасть хоть 1 значение
console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {   // false false true
    console.log('Office is closed');
}

let currentUser = 'Tim';
let unknownUser;
let newName = unknownUser || currentUser || 'Mike';
console.log(newName);           // Tim, так как ИЛИ находит первое true значение и останавливается

let x;
true || (x=1);
console.log(x);                 // undefined


// И && - находит первое ложное значение, идя слева на право. Для выполнения условия должны совпасть все значения
// Или последнее true условие (если все услвоия были true)
console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false
console.log(1 && 2);           // 2

console.log( 1 && 2 && null && 3 ); // null 

let y;
0 && (y=1)
console.log(y)                 // undefined

// НЕ !
console.log(!true);            // false
console.log(!'hello')          // false
console.log(!!'hello')         // true - двойное НЕ позволяет получить булевой тип данных - по сути сейчас идет НЕ true = false, а после НЕ false = true (вернулся первый тип данных)


// ?? - возвращает первое значение, которое не null или undefiner
let height = 0;
console.log(height || 100) // 100, так как 0 это false
console.log(height ?? 100) // 0
/* Полезно что бы назначить переменную*/ 
const days = {
    'Понедельник': 1,
    'Вторник': 2
}
weekDay = days['Среда'] ?? -1
console.log(weekDay)       // Выведится -1, так как Среда undefined


// , - предоставляет нам возможность вычислять несколько выражений, каждое выражение выполняется, но возвращается результат только последнего.
let a = (1+3, 3+4)
console.log(a)             // 7 - показывается только 3+4
/*Бывает полезно что бы осуществить 3 операции в одной строке*/
let increment = 0
for (a = 0, b = 3, c = a+b ; increment < 2 ; increment++){
    console.log(c)
}   




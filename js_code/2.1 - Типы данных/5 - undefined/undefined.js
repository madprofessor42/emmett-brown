// Специальное значение undefined также стоит особняком. Оно формирует тип из самого себя так же, как и null.
/*
Оно означает, что «значение не было присвоено».
Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет undefined
*/
let age;
console.log(age);               // undefined

let userName = undefined;
console.log(userName);          // undefined

let bag = {
    apple: 3,
    banana:2
}
console.log(bag.mango)          // undefined


/*
Обычно null используется для присвоения переменной «пустого» или «неизвестного» значения, а undefined – для проверок, была ли переменная назначена.
*/
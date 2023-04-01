// часто возникает ошибка, когда функциональность пытается получить свойство объекта, которого не существует. Что бы избежать ошибки, используют &&
let user = {}
console.log(user.address)                                   // Выведет undefined, что полезно в ряде случаев
// console.log(user.address.street)                            // Выведет TypeError: Cannot read properties of undefined (reading 'street'), что уже не так полезно 

console.log( user && user.address && user.address.street )  // Указываем && если хотя бы 1 свойства нет, то будет undefined


// Конструкция выше громоздкая, по этому можно воспользоваться опциональной цепочкой something?.something
console.log(user?.address)                                  // синтаксис ?. делает необязательным только свойство перед ним, а не какое-либо последующее.


console.log(user.address?.street)                           // Используйте ?. только тогда, когда допускаете ситуацию, что значение перед ним не существует. Например поле адреса опционально

/*
Нам следует использовать ?. только там, где нормально, что чего-то не существует.
К примеру, если, в соответствии с логикой нашего кода, объект user должен существовать, но address является необязательным, 
то нам следует писать user.address?.street, но не user?.address?.street.
В этом случае, если вдруг user окажется undefined, мы увидим программную ошибку по этому поводу и исправим её. 
В противном случае, если слишком часто использовать ?., ошибки могут замалчиваться там, где это неуместно, и их будет сложнее отлаживать.
*/


// Как было сказано ранее, ?. немедленно останавливает вычисление, если левая часть не существует.
// Так что если после ?. есть какие-то вызовы функций или операции, то они не произойдут.
let bag = null;
let x = 0;
function sayHi(incrementor){
    console.log('Hi' + ' ' + incrementor)
}
bag?.sayHi(++x);                                // Не выполнится


// Опциональная цепочка ?. — это не оператор, а специальная синтаксическая конструкция, которая также работает с функциями, квадратными скобками, совместно с delete.
let admin = {
    admin() {
        console.log('I am an admin')
    }
}

let notAdmin = {}

admin.admin?.()                             // I am ad admin
notAdmin.admin?.()                          // не выполнится

//
let user2 = {
    firstName: 'Ivan'
}

let user3 = null;

let key = 'firstName';

console.log( user2?.[key] )                 // Ivan
console.log( user3?.[key] )                 // undefined


// Можем использовать для удаления
let shoppingCart = {
    mango: 5,
    apples:13,
    banana:5
}
delete shoppingCart?.oranges;               // Ничего не удалит
console.log(shoppingCart)
delete shoppingCart?.mango                  // Удалит mango, так как оно есть в объекте
console.log(shoppingCart)





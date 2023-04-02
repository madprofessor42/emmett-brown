// this - используется, если метод объекта должен получить данные из самого объекта
let user = {
    fname: 'Mike',
    age: 30,
    sayName() {
        console.log(this.fname)   // можно было бы написать console.log(user.fname), но это не надежно. Так как если что то случиться с объектом user, то тогда такой код не будет работать
    }
}
user.sayName()              // Mike


// Здесь мы итерируясь по массиву проходимся по каждой связке ключ:значение массива users, в котором есть объекты
// в метод canJoin мы пасаем объект, у которого достается значение age
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin: function(user){
        return user.age >= this.minAge && user.age <= this.maxAge;
    }
}
let users = [
    {age: 16},
    {age: 21},
    {age: 26},
    {age: 31}
]
console.log(users.filter(user => army.canJoin(user)))       // [ { age: 21 }, { age: 26 } ]


// у стрелочных функций нет this, по этому следующая запись выведет undefined
user.sayAge = () => console.log(this.age)
user.sayAge()               // undefined
// Если задать через function expression, то this работает
user.sayMultipliedAge = function() {
    console.log(this.age * 2)
}
user.sayMultipliedAge();    // 60


// this не является фиксированным. Оно может использоваться в любой функции. this вычисляется во время выполнения кода и зависит от контекста
let guest = {type: 'Guest'}
let admin = {type: 'Admin'}

function userType() {
    console.log(this.type)        // this вычисляется автоматически в заисимости в каком объекте используется функция. Можем потом переиспользовать данную функцию для разных объектов
}

guest.f = userType;
admin.f = userType;

console.log(guest)               // { type: 'Guest', f: [Function: userType] }

guest.f()                   // 'Guest'
admin.f()                   // 'Admin'









// Внутри оъектов могут быть функции
// Объекты, как правило, представляют сущности внешнего мира (пользователь, заказы, и тд)
// Когда мы пишем наш код, используя объекты для представления сущностей реального мира, – это называется объектно-ориентированное программирование или сокращённо: «ООП»
const user = {
    firstName: 'Mike',
    secondName: 'Smith',
    sayHi: () => {
        console.log('Hi')
    },
    sayHello: function(){
        console.log('Hello')
    },
    sayBye(){
        console.log('Bye')
    }
}

// Добавление новой функции к объекту (добавление метода) происходит через function expression или стрелочные функции
user.jump = () => console.log('I Jumped');
user.run = function(){
    console.log('I run');
}

user.sayHi();
user.sayHello();
user.sayBye();
user.jump();
user['run']();


// Можно вызывать метод объекта передавая переменную, которая будет являться ключом
const ACTIONS = ['sayHi', 'sayHello', 'sayBye', 'jump', 'run'];
user[ACTIONS[0]]();


// Можно написать цикл, который будет вызывать метод объекта каждый прогон
const cart = {
    total:{
        apples:0,
        banana:0,
        mango:0
    },
    addItem: function(key, num){
        this.total[key] = this.total[key] + parseInt(num);
    }
};
let purchases = {
    banana:3,
    mango:4
}

Object.keys(purchases).forEach(el => {
    cart.addItem(el, purchases[el])
})

console.log(cart.total)











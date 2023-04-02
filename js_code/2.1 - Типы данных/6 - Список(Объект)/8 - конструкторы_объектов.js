// Функция-конструктор. Обычный синтаксис {...} позволяет создать только один объект. Но зачастую нам нужно создать множество однотипных объектов, таких как пользователи, элементы меню и т.д.
function User(name) {                 // Имя функции-конструктора должно начинаться с большой буквы
    this.name = name;
    this.isAdmin = false;
}


let user = new User('Mike');          // Функция-конструктор должна вызываться при помощи оператора "new". 
let secondUser = new User('Rose')     // Таким образом можно создать много объектов, используя 1 функцию
console.log(user.name, user.isAdmin)  // Mike false

// По сути происходит что то типо следующего 
function newUser(name){
    let obj = {}
    obj.name = name
    obj.isAdmin = false
    return obj
}
let anotherUser = newUser('Mike')
console.log(anotherUser.name)


// Можно написать конструктор объекта, который создаст объект 1 раз, и больше будет не доступен 
let oneTimeUser = new function() {
    this.name = 'John';
    this.isAdmin = false;
}


// Если в функции-конструкторе указать return, то будет возвращено только то что указано в return. Если же return будет пустой, то вернется this (то же самое если мы не указали бы return вовсе)
function BigUser() {
    this.name = 'Smith';
    return {name : "Godzilla"}
}

let bigUserObject = new BigUser();
console.log(bigUserObject)           // {name: 'Godzilla'}
let secondBigUserObject = new BigUser('Mike')
console.log(secondBigUserObject)     // {name: 'Godzilla'


// Создание методов в конструкторе - можно не просто добавлять переменные в объект но и целые функции (будет называться метод объекта)
// Но для создания сложных объектов есть и более продвинутый синтаксис – классы
function UserWithMethod(name){
    this.name = name;
    this.sayHi = function(){
        console.log('Hello ' + this.name);
    }
}
let john = new UserWithMethod('John');
john.sayHi()                        // john.sayHi()




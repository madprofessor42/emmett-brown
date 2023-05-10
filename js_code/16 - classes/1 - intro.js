/**
 * class MyClass {
 *     constructor() {...} - выполнится при инициализации класса
 *     method1() {...}
 *     method2() {...}
 *     ...
 * }
 */


class User {
    constructor(name) {
        this.name = name || 'Mike'
    }
    sayHi() {
        console.log(this.name)
    }
}

const user = new User()
user.sayHi()
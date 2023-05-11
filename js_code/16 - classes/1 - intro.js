/**
 * По сути класс - это разновидность функции, но с рядом отличий:
 * 1. Методы класса являются неперечислимыми, что бы при проходе цикла for..in по объекту не получать методы класса
 * 2. Классы внутри используют use strict
 * 3. Дает ряд других возможностей
 *
 * class MyClass {
 *     prop=value;
 *     constructor() {...} - выполнится при инициализации класса
 *     method1() {...}
 *     method2() {...}
 *     get something(...) {...} - геттер
 *     set something(...) {...} - сеттер
 *     ...
 * }
 */

class User {
    constructor(name, address) {
        // вызывает сеттер
        this.name = name
        this.address = address || "1st Lake Street"
    }
    // геттер
    get address() {
        return this._address
    }

    // сеттер. Может не иметь return
    set address(value) {
        this._address = value
    }

    // method
    sayHi() {
        console.log(this.name)
    }
}

// Инициализация объекта происходит через оператор "new"
const user = new User("Mike")
user.sayHi()


// Геттеры/Сеттеры
console.log(user.address)               // так как это геттер, то по сути обращаемся к нему как элементу объекта
user.address = "2nd Street Drive"       // так как это сеттер, то по сути обращаемся к нему как к элементу объекта и переназначаем адрес
console.log(user.address)









class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with ${this.speed} speed`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} is standing still`)
    }
}

let animal = new Animal("Lion")
animal.run(200)                         // Lion runs with 200 speed
animal.stop()                                 // Lion is standing still


/**
 * Допустим мы хотим расширить наш класс животных, добавим кроика. У него есть свои действия, но при этом мы хотим получить доступ и к run(), speed()
 */
class Rabbit extends Animal {
    hide() {
        this.speed = 0;
        console.log(`${this.name} is hiding`);
    }
}

let rabbit = new Rabbit("White Rabbit");
rabbit.run(150)                     // White Rabbit runs with 150 speed
rabbit.hide()                             // White Rabbit is hiding


/**
 * Переопределение методов
 * Если мы в дочернем классе определим метод который уже есть в родительском, то он будет перезаписан, но порой мы этого не хотим, а хотим расширить имеющийся
 * для этого используем слово super()
 */

class Fish extends Animal {
    alertName(speed) {
        console.log(`${this.name}`);
    }
    stop() {
        super.stop()
        this.alertName()
    }
}
let fish = new Fish("Shark");
fish.stop()                             // Shark is standing still
                                        // Shark


/**
 * Переопределение конструктора. Если у класса потомка нет своего конструктора, то по дефолту берется конструктор родителя
 * constructor(...args) {
 *     super(...args)
 * }
 */

class Monkey extends Animal {
    constructor(name, likesBanana) {
        // Идет инициализация всего конструктора Animal
        super(name);
        // Дополняем его новыми данными
        this.likesBanana = likesBanana
    }

    get likesBananas() {
        return this._likesBananas
    }

    set likesBananas(value) {
        this._likesBananas = value
    }
}

let monkey = new Monkey("Brown", true);
console.log(monkey.likesBanana)             // true
monkey.likesBanana = false
console.log(monkey.likesBanana)             // false
monkey.run(200)                      // Brown runs with 200 speed







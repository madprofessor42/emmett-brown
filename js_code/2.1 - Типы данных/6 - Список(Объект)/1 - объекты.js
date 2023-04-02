// Объекты используются для хранения коллекций различных значений, сложных сущностей
let user = {                // let object = {key: value, key: value, ...}
    firstName: 'John',           // ключ всегда String, значение может быть любым
    age: 30
}
console.log(user.firstName)      // John - досуп к значению объекта осуществляется через точку

// Пустой объект можно создать так
let emptyObject = new Object();
let anotherEmptyObject = {};


// Может быть любая вложенность
let human = {
    firstName: 'Mike',
    lastName: 'Smith',
    age: {
        birthDay: '5th of March',
        year: 1997
    },
    job: 'QA Engineer'
}
console.log(human)

let students = {
    results: [                                  // что бы передать массив из вложенных обхектов, то нужно этому массиву задать ключ
        {
            name:'John',
            age:15,
            marks:{                             // так как у оценок есть название рпедмета и оценка, то это объект, по этому нужны фигурные скобки
                    math:5,
                    history:4,
                    russian:3
                },
            grade: 8
        },
        {
            name:'Mike',
            age: 13,
            marks:{
                    math:4,
                    history:5,
                    russian:5 
                },
            grade: 5       
        }
    ]
}


// Получение элементов объекта происходит через точку, если у нас массив из нескольких элементов, то получаем доступ через индекс
console.log(students.results[0].marks.math)         // 5

// Обращение к ключу, если ключ состоит из нескольких слов
let female = {
    "likes birds": true                 // заключаем ключ в "", если ключ состоит из нескольких слов
}
console.log(female["likes birds"])      // true. При выводе обращаемся к ключу через квадратные скобки

// Квадратные скобки позволяют обратиться к свойству, имя которого может быть результатом выражения. Через точку так сделать бы не получилось - вылезла бы ошибка
let key = 'likes' + ' ' + 'birds'
console.log(female[key])                // true

// Удаление, добавление значений в объект
female.age = 30                         // Object.key = value
console.log(female)                     // {likes birds: true, age: 30}

delete female.age
console.log(female)                     // {likes birds: true}


// объект созданный через const может быть изменен (нельзя переопределить объект, но можно поменять значение объекта)
const man = {
    firstName: 'John'
}
man.firstName = 'Pete'
console.log(man.firstName)                   // Pete


// Вычисляемые свойства - Мы можем использовать квадратные скобки в литеральной нотации для создания вычисляемого свойства
let fruit = 'apple';
let bag = {
    [fruit]: 12
}
console.log(bag.apple)                      // 12
console.log(bag.banana)                     // undefined



// Свойство из переменной
const makeUser = (firstName, age) => {  // Создаем функцию, которая будет возвращать значения объекта 
    return {
        firstName: firstName,
        age: age
    }
}

let newUser = makeUser('John',25)      // создаем объект используя созданную функцию
console.log(newUser)                   // {firstName: 'John', age: 25}


// Проверка существования свойства
let anotherUser = {
    name: 'John',
    age: 30
}
console.log("name" in anotherUser)    // "key" in Object. Берем ключ в кавычки, если этого не сделать, то будет считываться переменная, у которой название такое же как навзание ключа в объекте


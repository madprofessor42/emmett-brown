// Преобразование к примитивам

// String - Для преобразования объекта к строке, когда операция ожидает получить строку, например alert:
// вывод
alert(obj)

// используем объект в качестве имени свойства
anotherObj[obj] = 123;


// Number - для преобразования объекта к числу, в случае математических операций:
// явное преобразование
let num = Number(obj);

// математическое (исключая бинарный плюс "+")
let n = +obj;
let delta = date1 - date2

// сравнение
let greater = user1 > user2


// Default - Происходит редко, когда оператор «не уверен», какой тип ожидать.
// бинарынй плюс
let total = car1 + car2



// В процессе преобразования движок JavaScript пытается найти и вызвать три следующих метода объекта:
// obj[Symbol.toPrimitive](hint) - метод с символьным ключом Symbol.toPrimitive (системный символ), если такой метод существует, и передаёт ему хинт.
let user = {
    name: 'Mike',
    money: 1000,
    [Symbol.toPrimitive](hint) {                                                
        alert(`hint: ${hint}`)
        return hint == "string" ? `{name: "${this.name}"}` : this.money;        // if (hint == "string") {return `name: "${this.name}"`} else {return this.money}

    }
}

alert(user)                                        
console.log(+user)
console.log(user + 1000)               // так как здесь операция сложения, то hint будет number -> возвращено будет this.money                                       


// toString/valueOf - устаревшие методы, Если нет метода Symbol.toPrimitive, движок JavaScript пытается найти эти методы и вызвать их
let user2 = {
    name: 'John',
    money: 1000,

    // для string
    toString() {
        return `{name: "${this.name}"}`;
    },
    
    // для number или default
    valueOf() {
        return this.money;
    }
}







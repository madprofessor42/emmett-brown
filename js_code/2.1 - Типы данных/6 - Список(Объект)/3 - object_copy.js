// Объекты не копируюстя, а создается ссылка на объект
let firstObject = {
    fname: "Mike"
}

let copiedObject = firstObject

firstObject.fname = 'Nick'

console.log(copiedObject.fname)     // Nick. Так как это просто ссылка на объект, то при изменении значений у усновного объекта, меняются значения и во всех его ссылках


// Что бы скопировать объект, нужно создать второй объект и добавить в него все значения из 1 объекта
let clone = {}

for (let key in firstObject) {
    clone[key] = firstObject[key]
}
console.log(clone)


// Или воспользоваться методом Object.assign(target, source)
let user = {}

Object.assign(user, clone)        // Object.assign(объектНазначения, объектКоторыйКопируем, объектКоторыйКопируем, ...)
console.log(user)

// Второй вариант
let secondUser = Object.assign({}, user)
console.log(secondUser)


/**
 * Копирование вложенных объектов
 */
let nestedObject = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};
// structuredClone() - доступно только с node 17 версии
const newObj = structuredClone(nestedObject);
newObj.name = 'Mike';
console.log(nestedObject.name);             // John
console.log(newObj.name);                   // Mike



// Второй вариант использовать библиотеку lodash и встроенный метод cloneDeep(obj)
const lodash = require('lodash')
let deep = lodash.cloneDeep(nestedObject)
nestedObject.sizes.height = 150;

console.log(deep.sizes.height)      // 182


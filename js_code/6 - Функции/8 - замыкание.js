// Лексическое окружение - это невидимый (скрытый) объект, который есть у любого блока, скрипта или функции в JS
/*
    {
        переменные: {},
        ссылка: родительское лексическое окружение
    }
*/

/**
 * В примере ниже лексическое окружение выглядит так
 *  ГЛОБАЛЬНОЕ
 *   {
 *      переменные: {a:1, b: function}
 *      ссылка: null - так как это глобальное окружение
 *   }
 *  ЛОКАЛЬНОЕ
 *   {
 *       переменные: {c: "Hi"}
 *       ссылка: глобальное лекс.окружение - глобальное окружение является родителем
 *   }
 */
const a = 1;

const b = function () {
    const c = 'Hi'
    console.log(c)
}
b()

// Замыкание - способность функции в JS запоминать лексическое окружение, в котором она была создана (т.е хранить в себе ссылку на это окружение)
/**
 * В примере ниже лексическое окружение выглядит так
 *  ГЛОБАЛЬНОЕ
 *   {
 *      переменные: {d: 1, e: function},
 *      ссылка: null
 *   }
 *  ЛОКАЛЬНОЕ
 *   {
 *      переменные: {},
 *      ссылка: глобальное лекс.окружение
 *   }
 *
 *   из за того что в локальном окружении (области видимости) нет нужной переменной, будет искаься такая переменная в ссылке (родительском окружении) - это и есть замыкание
 */
let d = 1;

const e = function () {
    console.log(d)
}
d = 2
e()                     // 2, так как значение переменной d на момент вызова функции равно 2


const createCounterArrow = (n) => () => n++
const counterArrow = createCounterArrow(10)
console.log(counterArrow())
console.log(counterArrow())
console.log(counterArrow())

function createCounter(n) {
    let counter = n
    return function(){
        return counter++
    }
}

const counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())




function createIncrement() {
    let count = 0;
    function increment() {
        count++
    }
    let message = `Message count is ${count}`
    function log() {
        console.log(message)
        console.log(`current count is ${count}`)
    }
    return [increment, log]
}

const [increment, log] = createIncrement();
increment()
increment()
increment()
log()               // Message count is 0 - так как функция log вызывает message, и такая переменная уже создана в родительском окружении и хранит данные count которые относятся к окружению функции createIncrement, а оно по дефолту равно 0
                    // current count is 3 - так как функция log не хранит в себе переменной count, то она смотрит на родительское окружение и оттуда берет актуальное значение count





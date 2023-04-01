// Выходом являются промисы (асинхронные функции)

// Создаем пропис ожидания
const delay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}
delay(2000).then(() => console.log('delay is 2 seconds'))                     // delay is 2 seconds


const URL = 'https://jsonplaceholder.typicode.com/todos'

// Используя промисы
function fetchTodos(){
    return delay(2000)                                                        // Ждем 2 секунды
    .then(() => fetch(URL))                                                   // делаем запрос на URL (возвращается промис)
    .then(response => response.json())                                        // Получаем json
    .then(data => console.log(data))                                          // Выводим json
    .catch(e => console.error(e))                                             // ловим ошибки
}
fetchTodos()


// async. Если внутри функции используется операторй await, с помощью которого мы ждем некоторые промисы, то нужно что бы и сама функция была асинхронной - указываем async перед названием родительской функции
// await равносилен тому, что мы обрабатываем промис используя then(). По сути функции async - это синтаксический сахар над промисами
// Так как метод fetch возвраащет промис, то так же укаызваем await перед ним
// Функции async всегда возвращают промис
async function fetchAsyncTodos(){
    try {
        await delay(2000)
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
    } catch(e) {
        console.error(e)
    } finally {
        console.log('I am execuded every time even if error occurs')
    }
}
fetchAsyncTodos()







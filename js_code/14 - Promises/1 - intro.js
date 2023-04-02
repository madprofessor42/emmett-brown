// async
function f1(){
    console.log(1);
}

function f2(){
    console.log(2);
}

function f3(){
    console.log(3);
}

// Тут все выведется синхронно, в начале 1, потом 2, потом 3
f1();
f2();
f3();

// Тут все выведется синхронно, в начале 2, потом 1, потом 3
f2();
f1();
f3();


/* Порой нам не нужно что бы функция выполнялась синхронно. 
Допустим функция ожидает каких то действий (например идет обращение к серверу) то она хоть и была вызвана раньше другой функции, но может закончить работу позже 
и если другая функция должна забирать результат предыдущей, то это будет критично (например первая функция делает запрос на сервер и получает список товаров, а вторая функция рисует эти товары на странице)
*/

// Тут выполнится в начале 2, потом 3, а потом 1. setTimeout в данном случае эмулирует задержку в ответе от сервера в 1 секунду
setTimeout(f1, 1000)
f2();
f3();

// Здесь уже все функции выполнятся в произвольном порядке (как будто каждая функция ждет ответа от разных ручек сервера)
setTimeout(f1, Math.floor(Math.random() * 2000))
setTimeout(f2, Math.floor(Math.random() * 2000))
setTimeout(f3, Math.floor(Math.random() * 2000))


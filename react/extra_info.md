# Предварительные шаги - разворачивание приложения

1. Устанавливаем node.js
2. Переходим в нужную дирректорию и выполняем команду `npx create-react-app [app-name]`
3. Переходим в папку `cd [app-name]`
4. Выполняем комманту `npm start` - что бы запустить проект на **localhost:3000** 
По сути запускается полноценный сервер, и разработка идет через сервер, а не через файловую систему

**PS:** В названии папок и файлов не должно быть русских букв, пробелов, точке и тд. Используем строчные английские буквы и тире


# SPA (Single Page Application)

- В традиционной архитектуре - клиент шлет запрос на сервер и он возвращает ему HTML страницу, после чего браузер рефрешится.
При Последующих запросах (например на добавление товара в корзину) браузер опять отвечает новой HTML сраницей
- В SPA браузер отдает HTML страницу всего 1 раз, а все последующие запросы сделанные по API (AJAX) и ответы динамически прогружаются без обновления страницы. 
Ответ приходит в формате JSON и frontend уже отрисовывает полученные данные (генерирует HTML) 

Раньше приходило много HTML кода, но мало JS \
Сейчас приходит мало HTML. но много JS \

В SPA например если мы открыли страницу с сообщениями /messages, а потом страницу новостей /news.\
Мы при переходе в /news не запрашиваем новую HTML страницу, просто стирается контент /messages и рисуется контент /news

Так же если мы допустим разрабатываем мобильное приложение, то нам не нужно выдавать ему HTML, так как там другой формат отбражения UI, 
и отдавая только JSON мы по сути унифицируем сервер. Ему для всех клиентов достаточно отдать JSON 




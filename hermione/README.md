1. Инициализируем проект `npm init -y`
2. Устанавливаем гермиону `npm install hermione` - 5.6.2 версии
3. В корне создаем файл `.hermione.conf.js` и наполняем содержимым - https://www.npmjs.com/package/hermione/v/5.6.2#webdriver-protocol
4. В `package.json` прописываем 
`"scripts": {
   "test": "hermione",
   "test:chrome": "hermione --browser chrome",
   }`



5. Устанавливаем selenium-standalone `npm i -g selenium-standalone`
6. Устанавливаем драйвера браузера `selenium-standalone install`
7. Запустить сервер `selenium-standalone start`

8. прогоняем тесты `npm test` или `npm run test:chrome`
9. Прогон тестов с дебагом TUS - `DEBUG=si:tokenator* npm test`


WevDriver io v7 - https://v7.webdriver.io/docs/gettingstarted - 7.30.2 \
Hermione - https://github.com/gemini-testing/hermione \
Hermione internal doc - https://wiki.yandex-team.ru/search-interfaces/testing/hermione/

# TUS
1. Устанавливаем библиотеку `npm install @yandex-int/hermione-auth-commands --registry=http://npm.yandex-team.ru` - https://gitlab.yandex-team.ru/search-interfaces/infratest/tree/master/packages/hermione-auth-commands#authlogin--prefix--loginprefix-phone--true-multi--false-
2. Добавляем hermione-auth-commands в плагины. 
```
'@yandex-int/hermione-auth-commands': {
   enabled: true, // Включить плагин
   tus_consumer: 'txf-turboapp-taxi', // Консьюмер для проекта в TUS
   env: 'test', // Окружение Паспорта
   loginPrefix: 'yandex-team-', // Префикс, автоматически добавляемый перед логином, при вызове команды auth, authAny
   groupSize: 1, // Количество аккаунтов в группе, используется при вызовах команды authAny
   groupLockFor: 0, // Время блокировки аккаунта из группы, в секундах
   logAuth: false, // Логировать логин и пароль использованного для авторизации тестового аккаунта
   requestOptions: {} // Опции для запросов к TUS
}
```
3. Устанавливаем TUS-cli `npm install @yandex-int/tus-cli --registry=http://npm.yandex-team.ru` - https://gitlab.yandex-team.ru/search-interfaces/infratest/-/tree/master/packages/tus-cli#create-consumer
4. Узнаем свой TUS_OAUTH_TOKEN - https://wiki.yandex-team.ru/passport/tus/
5. Добавить токен TUS в ./bashrc и в ./bash_profile - `export TUS_OAUTH_TOKEN="your_token"`
6. Создаем консьюмера (уже было сделано) `tus-cli -c "txf-turboapp-taxi” create-consumer`
7. Выдаем права команде для этого консьюмера - запросить тут роль к txf-turboapp-taxi - https://idm.yandex-team.ru/#rf-role=8x7fVf0a#test-user-service,rf-expanded=8x7fVf0a,rf=1




# Шаблон для тестов
```
describe('github', async function() {
   it('should find hermione', async function() {
      const bro = this.browser;
      await bro.url('https://github.com/gemini-testing/hermione');
      const title = await bro.$('#readme h1').getText();
      await expect(title).toEqual('Hermione');
    });
});
```

1. Используем async function(), что бы можно было обрабатывать промисы через await, а не через вложенность\
   А так же что бы получить доступ к браузеру через this.browser, если бы использовали стрелочную функцию, то не смогли бы, так как у стрелочных функций нет this 
2. Присваиваем `const bro = this.browser`, что бы потом обращаться только к bro, а не к целой конструкции

# Структура
1. commands - хранятся самописные команды. Что бы их заэкспорить, то в начале пишем module.exports = {функции}. Используем их в page_objects
2. page_objects - хранятся локаторы и функции специальные для каждой страницы. Делаем вложенность, под каждую группу свои локатору и там же функции
3. suites - тесты. В них импортируем только определенный page_object



# Общее
В начале ставим node.js 16 версии, так как на версиях выше не работает hermione версии 5.6.2
```
npm install -g n
sudo n 16.20.0
```

Вместо нижних шагов можно установить tap-hermione-config, где уже будут подтянуты все зависимости `npm install @yandex-int/tap-hermione-config --registry=http://npm.yandex-team.ru`


1. Инициализируем проект `npm init hermione-app` - уже сделано
2. Делаем npm install всех пакетов  - делаем
3. Устанавливаем гермиону `npm install hermione` - 5.6.2 версии - уже сделано
4. В корне создаем файл `.hermione.conf.js` и наполняем содержимым - https://www.npmjs.com/package/hermione/v/5.6.2#webdriver-protocol - уже сделано
5. В `package.json` прописываем
`"scripts": {
   "test": "hermione",
   "test:chrome": "hermione --browser chrome",
   }`

   
6. Устанавливаем selenium-standalone `npm i -g selenium-standalone`
7. Устанавливаем драйвера браузера `selenium-standalone install`
8. Запустить сервер `selenium-standalone start`

9. прогоняем тесты `npm test` или `npm run test:mobile`
10. Прогон тестов с дебагом TUS - `DEBUG=si:tokenator* npm test`


WevDriver io v7 - https://v7.webdriver.io/docs/gettingstarted - 7.30.2 \
Hermione - https://github.com/gemini-testing/hermione \
Hermione internal doc - https://wiki.yandex-team.ru/search-interfaces/testing/hermione/



# TUS
1. Устанавливаем библиотеку `npm install @yandex-int/hermione-auth-commands --registry=http://npm.yandex-team.ru` - https://gitlab.yandex-team.ru/search-interfaces/infratest/tree/master/packages/hermione-auth-commands#authlogin--prefix--loginprefix-phone--true-multi--false-
2. Добавляем hermione-auth-commands в плагины. 
```
'@yandex-int/hermione-auth-commands': {
   enabled: true, // Включить плагин
   tus_consumer: 'tap-team', // Консьюмер для проекта в TUS
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



# Отчеты
1. Установить html-reporter `npm install html-reporter`
2. Добавить в плагины
```
'html-reporter/hermione': {
   // Options for the HTML reporter plugin
   enabled: true,
   path: 'hermione-html-report'
}
```
3. После прогона нужно открыть отчет - `npx hermione gui`




# Шаблон для тестов
```
describe('github', async () => {
   it('should find hermione', async ({browser}) => {
      await browser.url('https://github.com/gemini-testing/hermione');
      const title = await browser.$('#readme h1').getText();
      await expect(title).toEqual('Hermione');
    });
});
```
1. Если нужно именно кликнуть на элемент, то делаем проверку elem.isClickable(), а не elem.isDisplayed()


# Структура
1. commands - хранятся самописные команды. Что бы их заэкспорить, то в начале пишем module.exports = {функции}. Используем их в page_objects
2. page_objects - хранятся локаторы и функции специальные для каждой страницы. Делаем вложенность, под каждую группу свои локатору и там же функции
3. suites - тесты. В них импортируем только определенный page_object


# Прогон через CDP или webdriver
Прогоняем тесты через webdriver - тесты идут на surfwax. Мокать запросы будет на все тесты.\
Прогонять тесты через CDP можно только локально, там есть подмена конкретных ручек


# Запуск тестов
`npm run test:mobile` - запуск мобилки




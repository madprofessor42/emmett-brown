// Смысл импорта в том что бы подключать сторонние библиотеки, а так же импортировать самописные функции из сторонних файлов
// require - часть commonJS - проект направленный на то, что мы можно было использовтаь ипорт и экспорт за пределами браузера (например в nodeJS на сервере) 
// commonJS - каждый файл который мы пишем является модулем, а значит из них можно экспортировать функции и импортировать функции

// const variableName = require('path_to_file')
// const {function1, function2, ...} = require('path_to_file) - если хотим импортировать только часть функций
const nameHelper = require('./function_for_export')

console.log(nameHelper.getFullName('Mike', 'Smith'))
console.log(nameHelper.getFirstLetter('Mike'))


// Так же require() можно вызывать в любой части кода, а не только в начале файла, как в случае с import
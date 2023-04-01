// Смысл импорта в том что бы подключать сторонние библиотеки, а так же импортировать самописные функции из сторонних файлов
// import используется только в браузерах

// import functionName from 'path_to_file.js'
// import {function1, function2, ...} from 'path_to_file'
import nameHelper from "./function_for_export.js";

console.log(nameHelper.getFullName('Mike', 'Smith'));
console.log(nameHelper.getFirstLetter('Mike'));

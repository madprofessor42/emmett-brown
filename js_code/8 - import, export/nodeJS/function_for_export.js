const getFullName = (firstName, surname) => firstName + ' ' + surname;
const getFirstLetter = (firstName) => firstName[0];

// module.exports = {functionName, functionName, ...} - экспортирует функцию для ее выозва в других файлах
module.exports = {getFullName, getFirstLetter};
const recipe = {flour: 500, sugar: 200, eggs: 1};
const available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};


/**
 * Фильтрация объектов
 */
// Object.fromEntries(Object.entries(obj_name).method(([key, value])) => ...)
// obj.hasOwnProperty(key) - проверка что в объекте есть такой ключ
const filtered = Object.fromEntries(Object.entries(available).filter(([ingredient]) => recipe.hasOwnProperty(ingredient)));
console.log(available)          // { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
console.log(filtered)           // { flour: 1200, sugar: 1200, eggs: 5 }

/**
 * Изменение объектов
 */
let availableTemp = Object.assign({}, filtered);
console.log(availableTemp)                  // { flour: 1200, sugar: 1200, eggs: 5 }

// Object.fromEntries(Object.entries(obj_name).method(([key, value])) => [key, value]) - если нужно поменять значения в объекте
availableTempRecalculated = Object.fromEntries(Object.entries(availableTemp).map(([ingredient]) => [ingredient, availableTemp[ingredient] - recipe[ingredient]]));
console.log(availableTempRecalculated)      // { flour: 700, sugar: 1000, eggs: 4 }





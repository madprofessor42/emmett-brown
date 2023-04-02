const obj_for_sort = {
    "Apples": 3,
    'Mango': 1,
    "Banana": 2
}

/**
 * По значениям
 */
console.log(
    // Создаем обратно объект
    Object.fromEntries(
        // Создаем из элементов объекта вложенный массив и сортируем
        Object.entries(obj_for_sort)
            .sort((a, b) => b[1] - a[1])
    )
)
// { Apples: 3, Banana: 2, Mango: 1 }


/**
 * По ключам
 */
let codes = {
    "49": "Германия",
    "41": "Швейцария",
    "44": "Великобритания",
    "1": "США"
};
let codesSorted = {};

for (let key in codes){
    codesSorted[key] = codes[key]
}

console.log(codesSorted)        /*
                                    {
                                    '1': 'США',
                                    '41': 'Швейцария',
                                    '44': 'Великобритания',
                                    '49': 'Германия'
                                    }
                                */


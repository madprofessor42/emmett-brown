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

// Если названия ключей - это integer - Например сколько раз число встречается в массиве. То сортировка по значениям работать не будет. Для этого нужно ключам приписать что то

/**
 * По значениям другого объекта - например когда есть объект в качестве ключей - значения которые фильтруем, а в качестве значений - условия по кторым фильтруем
 */
const sortEmotions = (arr, order) => {
    const emotions = {
        ":D": 2,
        ":)": 1,
        ":|": 0,
        ":(": -1,
        "T_T": -2
    }

    const sorted = arr.sort((a,b) => emotions[a] - emotions[b])
    return order ? sorted : sorted.reverse()

}

console.log(sortEmotions(['T_T', 'T_T', ':D', ':|', ':)', ':('], true))



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


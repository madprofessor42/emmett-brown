/**
 * Найти дупликаты в строке и вывести топ 3 слов которые являются дубликатами и кол-во совпадений
 * @type {string}
 */

const string_of_text = 'My mother really wants me to enroll, but my father is against it. Mother doesn\'t like it.'
const array_of_text = string_of_text.toLowerCase().split(' ');

// Удаляем знаки препинания
array_of_text.forEach((word, index) => {
    if ([',', '.'].some(char => word.endsWith(char))) {
         array_of_text.splice(index, 1, word.slice(0, -1))
    }
})

// находим дубликаты
let obj_of_text = {};
array_of_text.forEach(word => {
    if (word in obj_of_text) {
        obj_of_text[word] += 1;
    }
    else {
    obj_of_text[word] = 1;
    }
})

// Сортируем по кол-ву совпадений
const sorted_obj = Object.entries(obj_of_text).sort((a, b) => b[1] - a[1])
// Оставляем только топ 3
const topThree = Object.fromEntries(sorted_obj.slice(0,3))
console.log(topThree)



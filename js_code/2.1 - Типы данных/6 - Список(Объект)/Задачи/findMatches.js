function scramble(str1, str2) {
    let occurrences = str1.split("").reduce((arr, cur) => {
        arr[cur] ? arr[cur]++ : arr[cur] = 1;
        return arr;
        }, {});
    return str2.split("").every((character) => --occurrences[character] >= 0);
}

console.log(scramble('cedewaraaossoqqyt', 'codewars'))

/**
 * Найти все книги Ремарка на полках
 */
const findRemark = (shelves, books) => {
    const filteredBooks = (
        Object.keys(books)
            .filter((key) => ['ремарк'].includes(books[key]))
    );

    const filteredShelves = (
        Object.keys(shelves)
            .filter(key => shelves[key]
                .some(el => filteredBooks.includes(el)))
    );

    return filteredShelves
}


const shelves = {
    "полка 1": ["1984", "три товарища"],
    "полка 2": ["убить пересмешника", "герой нашего времени"],
    "полка 3": ["10 негритят", "на западном фронте без перемен"]
};
const books = {
    "1984": "оруэлл",
    "три товарища": "ремарк",
    "убить пересмешника": "ли",
    "герой нашего времени": "лермонтов",
    "10 негритят": "кристи",
    "на западном фронте без перемен": "ремарк"
};


console.log(findRemark(shelves, books))










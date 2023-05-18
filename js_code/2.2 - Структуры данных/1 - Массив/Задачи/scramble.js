const scramble = (str1, str2) => {
    // Считаем кол-во каждой буквы в первом слове
    const occurrences = str1.split("").reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1
        return acc
    }, {})

    // Проверяем что второе слово включает все буквы из первого. После проверки каждой буквы удаляем ее из объекта букв
    return str2.split("").every(char => --occurrences[char]>=0)

}


const scrambleUsingLoop = (str1, str2) => {
    let chars = {}
    // Добавляем кол-во букв второго слова
    for (let c of str2) {
        chars[c] ? chars[c]++ : chars[c] = 1
    }
    // Бежимся по первому слову и убираем буквы
    for (let c of str1) {
        chars[c] && chars[c]--
    }

    // Бежимся по полученному обекту с буквами, и если какая та буква встречается 1 и более раз, значит не получилось составить слово
    for (let c in chars) {
        if (chars[c] > 0) {
            return false
        }
    }
    return true

}

console.log(scrambleUsingLoop('cedewaraaossoqqyt', 'cqwodewars'))




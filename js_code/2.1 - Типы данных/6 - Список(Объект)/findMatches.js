function scramble(str1, str2) {
    let occurrences = str1.split("").reduce((arr, cur) => {
        arr[cur] ? arr[cur]++ : arr[cur] = 1;
        return arr;
        }, {});
    return str2.split("").every((character) => --occurrences[character] >= 0);
}

console.log(scramble('cedewaraaossoqqyt', 'codewars'))


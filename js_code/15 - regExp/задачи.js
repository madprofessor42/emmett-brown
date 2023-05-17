
// На вход подается строка. Поставить первую букву в конец, а в конце добавить "ay". Знаки пунктуации ("." "," "!" "?" и тд) не трогаем
// Hello World ! -> elloHay orldWay !
const pigIt = (str) => {
    return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3")
}

console.log(pigIt('Hello World !'))

/**
 * - `/(\w)(\w*)(\s|$)/g`: This is the matching pattern. It captures three groups of characters:
 *   - `(\w)`: Matches the first character of the word.
 *   - `(\w*)`: Matches zero or more word characters.
 *   - `(\s|$)`: Matches a whitespace character or end of line.
 *
 * - `\`$2$1ay$3\``: This is the replacement string. It replaces the matched pattern with:
 *   - `$2`: The second group of the pattern, which matches the rest of the word after the initial character.
 *   - `$1`: The first group of the pattern, which matches the initial character of the word.
 *   - `ay`: The suffix added to the end of the word.
 *   - `$3`: The third group of the pattern, which matches either the whitespace character or end of line after the word.
 */


/**
 * return the total number of smiling faces in the array
 */
const countSmileys = (arr) => {
    return arr.filter(x => /^[:;][-~]{0,1}[)D]$/.test(x)).length;
}

console.log(countSmileys([':)', ';(', ';}', ':-D']))


/**
 * Delete all ending 0's
 */

const noBoringZeros = (n) => {
    return n.toString().replace(/0+$/g, "");
}

console.log(noBoringZeros(10500))                   // 105

/**
 * Разделить число. Например 1000000 превратить в 1.000.000
 */

const numberFormat = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+\b)/g, '$1,')
}
// - (\d) captures any digit and stores it in a capturing group.
//
// - (?=(\d{3})+\b) uses a positive lookahead assertion to match a pattern without capturing it. It checks if the current digit is followed by a group of three digits (\d{3}) at one or more times (+) until the end of a word boundary (\b). The word boundary check ensures that the regex will only match the last group of digits (i.e., it ensures that groups of 3 digits are not matched beyond the last one in the string).
//
// - /g makes sure the regex searches for all matches of the digit pattern throughout the string, rather than just the first match.

console.log(numberFormat(-310063123)) // -310,063,123



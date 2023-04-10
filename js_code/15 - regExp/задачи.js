
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

console.log('Hello World !'.replace(/(\w)(\w*)(\s|$)/g, '$2$1ay$3'))




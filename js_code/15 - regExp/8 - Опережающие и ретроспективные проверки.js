/**
 * Проверить что пароль включает большие и маленькие буквы, цифры. И не менее 6 символов
 */

console.log(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/.test('qw32Dw'))
/**
 * - `^` assert start of string
 * - `(?=.*[a-z])` positive lookahead to ensure the string contains at least one lowercase letter
 * - `(?=.*[A-Z])` positive lookahead to ensure the string contains at least one uppercase letter
 * - `(?=.*\d)` positive lookahead to ensure the string contains at least one digit
 * - `[a-zA-Z\d]{6,}` matches any alphanumeric character (excluding underscore) at least six times
 * - `$` assert end of string
 */


// (?=) - positive lookahead - X(?=Y). Найти X, при условии что за ним идет Y
let priceString = "1 turkey costs 30$";
console.log(priceString.match(/\d+(?=\$)/g))            // 30 - нашел ценник 30, так как за ним доллар
console.log(priceString.match(/\d+(?=\s)(?=.*30)/g))    // 1 - находит число за которым идет пробел, и где то еще в строке есть число 30

// То что внутри скобок выведено не будет - это просто проверка. Но если нам нужно это вывести, то оборачиваем в доп скобки
console.log(priceString.match(/\d+(?=(\$))/))           // 30, $



// (?!) - negative lookahead

// (?<=) - positive lookbehind
// (?<!) - negative lookbehind

// (?>) - atomic group




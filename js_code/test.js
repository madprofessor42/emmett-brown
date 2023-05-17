const reverseVowels = (str) => {
    let vowels = str.replace(/[^aeyiou]/gi, '').split("")
    return str.replace(/[aeyiou]/gi, _ => vowels.pop())
}

console.log(reverseVowels( "Oh my goodness"))


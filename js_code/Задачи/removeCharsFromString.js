const disemVowel = (str) => {
    const VOWELS = ["e", "u", "i", "o", "a"];
    return str
        .split("")
        .filter((char) => !VOWELS.includes(char.toLowerCase()))
        .join('')
}


console.log(disemVowel("This website is for losers LOL!"))


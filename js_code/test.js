const numberFormat = (num) => {
    let formatted = num.toString().split("")
    if (formatted[0] === '-') newFormatted = formatted.slice(1)

    let length = newFormatted.length

    while (length > 0) {
        length -=3
        if (length <= 0) break
        formatted.splice(length, 0, ',')
    }

    return formatted.join("")

}


console.log(numberFormat(-100000))

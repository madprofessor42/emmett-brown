// https://learn.javascript.ru/regexp-groups



const str = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

const addressRegex = /^(\d+)\s(.+)\s([a-zA-Z]{2})\s(\d{5})$/;
str.split(",").forEach(address => {
    const [_, houseNumber, street, state, zipCode] = address.match(addressRegex)
    console.log(_)                              // 123 Main Street St. Louisville OH 43071
    console.log(houseNumber)                    // 123
    console.log(street)                         // Main Street St. Louisville
    console.log(state)                          // OH
    console.log(zipCode)                        // 43071
})


/**
 * Получение суммы всех значений во вложенном объекте
 */
const obj = {
    value: 1,
    children: {
        value: 2,
        children: [
            {
                value: 3
            },
            {
                value: 4
            }
        ]
    }
}
const findSumRecursion = (obj) => {
    let sum = 0;
    Object.keys(obj).forEach(key => {
        if (key === 'value') {
            sum += obj[key]
        }
        if (typeof obj[key] === 'object') {
            sum += findSumRecursion(obj[key])
        }
    })
    return sum
}
console.log(findSumRecursion(obj))



const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [{ value: 3 }],
        },
        {
            value: 4,
            children: [
                { value: 5 },
                { value: 6 },
                { value: 9, children: [{ children: [{ value: 12 }] }] },
            ],
        },
    ],
};
const findSumStack = (obj) => {
    const stack = [obj]

    let sum = 0;
    while (stack.length) {
        const node = stack.pop()
        if (node.value) {
            sum += node.value
        }
        if (node.children?.length) {
            stack.push(...node.children)
        }
    }
    return sum
}
console.log(findSumStack(tree))



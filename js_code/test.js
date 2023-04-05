//принимаем на вход дерево и выводим сумму его value
const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 3 }
            ],
        },
        {
            value: 4,
            children: [
                { value: 5 },
                { value: 6 },
                { value: 9, children: [
                    { children: [
                        { value: 12 }
                        ]
                    }
                    ]
                },
            ],
        },
    ],
};

function sumAllValues(tree) {
    let sum = 0;
    Object.values(tree).forEach(el => {
        if (typeof el === 'number') {
            sum += el
        }
        if (typeof el === 'object') {
            sum += sumAllValues(el)
        }
    })
    return sum
}
function getTreeValues(tree) {
    const stack = [tree];

    const result = [];
    while (stack.length) {
        const node = stack.pop();

        if (node.value !== undefined) {
            result.push(node.value);
        }

        if (node.children?.length) {
            stack.push(...node.children);
        }
    }

    return result.reduce((a, b) => a + b, 0);
}


console.time('Measure recursion')
for (let i=0; i<10000; i++) {
    sumAllValues(tree)
}
console.timeEnd('Measure recursion')

console.time('Measure stack')
for (let i=0; i<10000; i++) {
    getTreeValues(tree)
}
console.timeEnd('Measure stack')
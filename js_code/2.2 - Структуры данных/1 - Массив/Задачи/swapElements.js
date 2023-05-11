const swap = (arr, flag) => {
    const filtered = [...arr]

    for (let i=0; i<filtered.length-1; i++) {
        if (filtered[i] === 2) {
            const temp = filtered[i];
            filtered[i] = filtered[i+1];
            filtered[i+1] = temp;
            if (!flag) break
        }
    }
    return filtered
}


console.log(swap([1,2,3,4,5,6]))                       // [ 1, 3, 2, 4, 5, 6 ]
console.log(swap([1,2,3,4,5,6], true))            // [ 1, 3, 4, 5, 6, 2 ] - тут мы не остановили выполнение после первого свапа, из-за этого двойка сместилась в самый конец



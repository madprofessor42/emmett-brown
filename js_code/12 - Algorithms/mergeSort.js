// merge sort

const merge = (left, right) => {
    let subArr = [];

    while (left.length && right.length){
        if (left[0] < right[0]){
            subArr.push(left.shift());
        }
        else{
            subArr.push(right.shift());
        }
    }

    return [...subArr, ...left, ...right]
}

const mergeSort = arr => {
    const half = Math.floor(arr.length / 2);
    // the base case when array length is <=1
    if (arr.length <=1){
        return arr;
    }
    const left = arr.splice(0, half);
    const right = arr;
    return merge(mergeSort(left), mergeSort(right));

}


let thirdArr = [3,1,2,5]

console.log(mergeSort(thirdArr));


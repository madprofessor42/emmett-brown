const deepMerge = (obj1, obj2) => {
    const merged = {...obj1}
    for (let key in obj2) {
        if (typeof obj2[key] === 'object' && obj2[key] !== null) {
            merged[key] = deepMerge(obj1[key], obj2[key])
        } else {
            merged[key] = obj2[key]
        }
    }
    return merged
}

const firstObj = {
    name: "Mike",
    education: {
        school: "Gymnasium"
    }
}
const secondObj = {
    car: "BMW",
    production: {
        year: "2015"
    }
}

console.log(deepMerge(firstObj, secondObj))
// {
//   name: 'Mike',
//   education: { school: 'Gymnasium' },
//   car: 'BMW',
//   production: { year: '2015' }
// }

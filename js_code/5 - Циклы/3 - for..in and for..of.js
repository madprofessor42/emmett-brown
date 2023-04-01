// for..in используется для Enumerable типов данных (Object)
// for..of используется для Iterable типов данных (string, array, map, set)


let arr = ['value1', 'value2', 'value3'];

let obj = {
  propName1: 'propValue1',
  propName2: 'propValue2',
  propName3: 'propValue3'
};

console.log('=====================WORKING WITH ARRAYS===================');
console.log('For Of ')
for (const value of arr) {
  console.log('value: ', value);
}

console.log('For In');
for (const key in arr) {
  console.log('key: ', key, ' value: ', arr[key]);
}

console.log('=====================WORKING WITH OBJECTS===================');
console.log('For In:');
for (const prop in obj) {
  console.log('prop: ', prop, 'value: ', obj[prop]);
}

Object.defineProperty(obj, "definedPropEnFalse", {
  value: 'value of definedPropEnFalse',
  enumerable: false,
});

Object.defineProperty(obj, "definedPropEnTrue", {
  value: 'value of definedPropEnTrue',
  enumerable: true,
});

console.log('For In for Objects with enumerables:');
for (const prop in obj) {
  console.log('prop: ', prop, 'value: ', obj[prop]);
}

console.log('For In for Objects with Object.keys and forEach:');
Object.keys(obj).forEach(e => console.log(`key=${e}  value=${obj[e]}`));


console.log('=====================WORKING WITH STRINGS===================');
let str = "Go Over A String"
console.log('Using For Of for String:');
for (const char of str) {
  console.log(char);
}


console.log('=====================WORKING WITH Sets===================');
console.log("Looping over a Set");
let testSet = new Set();
testSet.add('Hello');
testSet.add('Hope');
testSet.add('You are getting it xD');

for (const setItem of testSet) {
  console.log(setItem);
}


console.log('=====================WORKING WITH Maps===================');
console.log('Iterate over Map using For of')
var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

for (const [key, value] of myMap.entries()) {
  console.log(key, value);
}
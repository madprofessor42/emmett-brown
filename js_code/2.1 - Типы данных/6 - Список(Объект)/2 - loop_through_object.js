const items = {
    first: new Date(),
    second: 2,
    third: 'test'
};


// for..in
for (const key in items) {
    console.log(`key: ${key}, value: ${items[key]}`);           // key: first, value: Thu Jan 26 2023 23:07:48 GMT+0300 (Moscow Standard Time)
                                                                // key: second, value: 2
                                                                // key: third, value: test
}
console.log('----------------------------------------');
/* One problem in using the for...in method is that it loops through the properties in the prototype chain as well. 
Since the objects in JavaScript can inherit properties from their prototypes, the for...in statement will loop through those properties as well.*/
for (const key in items) {
    if (items.hasOwnProperty(key)) {
        console.log(`key: ${key}, value: ${items[key]}`);       // key: first, value: Thu Jan 26 2023 23:07:48 GMT+0300 (Moscow Standard Time)
                                                                // key: second, value: 2
                                                                // key: third, value: test
    }
}
console.log('----------------------------------------');


// Object.keys - It takes the object that you want to loop over as an argument and returns an array containing all properties names (or keys).
console.log(Object.keys(items));                                // [ 'first', 'second', 'third' ]
console.log('----------------------------------------');
/* After which you can use any of the array looping methods, such as forEach(), to iterate through the array and retrieve the value of each property.*/
Object.keys(items).forEach((key) => {
    console.log(key);                                           // first
                                                                // second
                                                                // third                 
})
console.log('----------------------------------------');


// Object.values - It returns the values of all properties in the object as an array. You can then loop through the values array by using any of the array looping methods.
console.log(Object.values(items));                              // [ 2023-01-26T20:11:27.260Z, 2, 'test' ]
console.log('----------------------------------------');
/* After which you can use any of the array looping methods, such as forEach()*/
Object.values(items).forEach((value) => console.log(value));    // 2023-01-26T20:13:19.806Z
                                                                // 2
                                                                // test
console.log('----------------------------------------');
                  

// Object.entries - outputs an array of arrays, with each inner array having two elements. The first element being the property and the second element is the value.
console.log(Object.entries(items));                             // [
                                                                //   [ 'first', 2023-01-26T20:15:15.144Z ],
                                                                //   [ 'second', 2 ],
                                                                //   [ 'third', 'test' ]
                                                                // ]
console.log('----------------------------------------');
/*To loop over the array returned by Object.entries(), you can either use the for...of loop or the forEach() method*/                                                                 
for (const [key, value] of Object.entries(items)) {
    console.log(`Key is ${key} values is ${value}`);
}
console.log('----------------------------------------');
Object.entries(items).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
});






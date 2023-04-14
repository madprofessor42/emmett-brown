const obj = {
    a: {
        b: {
            c: "d"
        },
        e: "f"
    }
};


// Бежимся по каждому ключу. В качестве result переменной, в которую будет все складываться выступает сам объект
// И по сути каждую итерацию он изменяется, так как к нему применяются новые ключи
const get = (obj, path) => path.split('.').reduce((result, node) => result ? result[node] : undefined, obj)

console.log(get(obj, 'a.b'))
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let values = [];
let keys = [];

for (let key in obj) {
keys.push(key);
values.push(obj[key]);
}

console.log(values);
console.log(keys);
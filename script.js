let arr = [];

for (let i = 1; i <= 5; i++) {
let str = '';

for (let j = 0; j < i; j++) {
str += i;
}

arr.push(str);
}

console.log(arr);
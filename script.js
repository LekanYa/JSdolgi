let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let result = 0;
let sumKey = 0;
let sumValue = 0;

for (let key in obj) {
sumKey += Number(key);
sumValue += Number(obj[key]);
}

result = sumKey / sumValue ;
console.log(result);
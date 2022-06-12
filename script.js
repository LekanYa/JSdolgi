let n = 123456;
let sum1 = 0;
let sum2 = 0;

let n2 = n % 1000;
let n1 = Math.floor(n/1000);

while (n1 > 0) {
    sum1 += n1 % 10;
    n1 = Math.floor(n1/10);
}

while (n2 > 0) {
    sum2 += n2 % 10;
    n2 = Math.floor(n2/10);
}

if (sum1 == sum2){
    alert('да');
} else {
    alert('нет');
}
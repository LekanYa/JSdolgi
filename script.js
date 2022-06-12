var n = 123;
var sum = 0;

while (n > 0) {
    sum += n % 10
    n = Math.floor(n/10)
}

alert(sum);
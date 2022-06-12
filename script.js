let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;

for (let elem of arr) {
	if (Math.floor(elem / 10) === 1 || Math.floor(elem / 10) === 2) {
		sum += elem;
	}
}

console.log(sum);
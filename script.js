let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
let result = [];

for (let elem of arr) {
	if (elem % 2 != 0) {
		result.push(elem);
	}
}

console.log(result)
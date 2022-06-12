let arr = [1, 2, 3, 4, 5, 0, 4, 1];
let sum = 0;

for (let elem of arr) {
    sum += elem;
	if (elem == 0) {
		break; 
	}
}
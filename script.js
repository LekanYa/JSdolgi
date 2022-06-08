let num = 12345;
let last = String(num)[4];

if (last == 0 || last == 2 || last == 4 || last == 6 || last == 8) {
	console.log('Четное');
} else {
	console.log('нечетное');
}
let arr = [1, 2, 3, 4, 5];
let res = '';

for (let elem of arr) {
	if (arr[elem] === 3) {
		res = '+++';
        break;
	} else {
		res = '---';
	}
}

alert(res);
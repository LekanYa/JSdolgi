let arr = [1, 2, 3, 4, 5, 0, -4, 1];

for (let i = 0; i < arr.length; i += 1) {
	if (arr[i] == 3) {
        alert (i);
		break; 
	}
}
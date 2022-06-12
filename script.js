let arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 
'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let month = 10;
for (let i = 0; i < arr.length; i++){
	if (i == (month - 1)){
		document.write('<i>', arr[i], '</i>', ' ');
	}
	else{
		document.write(arr[i], ' ');
	}
}

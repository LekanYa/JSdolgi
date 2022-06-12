let arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

for (let i = 0; i < arr.length; i++){
	if ((arr[i] == 'Вс') || (arr[i] == 'Сб')) {
		document.write('<b>', arr[i], '<b>', ' ')
	}
	else{
		document.write(arr[i], ' ')
	} 		
}
  
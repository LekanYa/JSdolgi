let num = 43;

if (num >= 10 && num <= 100){
    let c = num % 10 + Math.floor(num/10);
        if (c <= 9){
            alert ('сумма цифр однозначна');
        }
        else {
            alert('сумма цифр двузначна');
        }
}
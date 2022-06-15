button_01.onclick = function reckoning() {

    let firstNum;
    let secondNum;
    firstNum = +prompt('Введите первое число');
    secondNum = +prompt('Введите второе число');
     if ( isNaN(firstNum) || isNaN(secondNum)) {
           return alert('Некорректный ввод');
     }
     if (secondNum === 2){
         let result = firstNum.toString(2);
        return alert (result);
     }
     if (secondNum === 8){
        let result = firstNum.toString(8);
        return alert (result);
    }
    if (secondNum === 10){
        let result = firstNum.toString(10);
        return alert (result);
    }
     if (secondNum === 16){
        let result = firstNum.toString(16);
        return alert (result);
    }
    if (secondNum === 32){
        let result = firstNum.toString(32);
        return alert (result);
    }
    else {
        return alert('Некорректный ввод');
    }
    }
    


button_02.onclick = function result() {

    let firstNum;
    let secondNum;
        
    firstNum = +prompt('Введите первое число');
    if ( isNaN(firstNum)) {
        return alert('Некорректный ввод');
        }
    else (secondNum = +prompt('Введите второе число'));
    if ( isNaN(secondNum)) {
        return alert('Некорректный ввод');    
         }
    else {
        sum = firstNum + secondNum;
        quo = firstNum / secondNum;
    alert([sum + ', ' + quo]);
    };
    
    }
        
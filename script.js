button_01.onclick = function reckoning() {

    let firstNum;
    let secondNum;
    firstNum = +prompt('Введите первое число');
    secondNum = +prompt('Введите второе число');
     if ( isNaN(firstNum) || isNaN(secondNum)) {
        return console.log('Некорректный ввод');
     }
     if (secondNum === 2){
        let result = firstNum.toString(2);
        return console.log (result);
         
     }
     if (secondNum === 8){
        let result = firstNum.toString(8);
        return console.log (result);
    }
    if (secondNum === 10){
        let result = firstNum.toString(10);
        return console.log (result);
    }
     if (secondNum === 16){
        let result = firstNum.toString(16);
        return console.log (result);
    }
    if (secondNum === 32){
        let result = firstNum.toString(32);    
        return console.log (result); 
    }
    else {
        return console.log('Некорректный ввод');
    }
    }
    


button_02.onclick = function result() {

    let firstNum;
    let secondNum;
        
    firstNum = +prompt('Введите первое число');
    if ( isNaN(firstNum)) {
        return console.log('Некорректный ввод');
        }
    else (secondNum = +prompt('Введите второе число'));
    if ( isNaN(secondNum)) {
        return console.log('Некорректный ввод');    
         }
    else {
        sum = firstNum + secondNum;
        quo = firstNum / secondNum;
        return console.log([sum + ', ' + quo]);
    };
    
    }
        
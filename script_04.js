//1

 const concatStrings = (fn, seed) => {
  
  const next = (...args) => {
    return x => {
      if (typeof x !== 'string') {
        return args.reduce((acc, a, seed) => {
          return fn.call(fn, acc, a, seed)
        }, seed);
      }
      return next(...args, x, seed);
    };
  };
  return next();
  
};

const iSum = concatStrings((x, y) => x + y, '');

// 2


class Calculator {
    constructor (a, b){ 
        if (typeof a == 'bigint' || typeof b == 'bigint'){
            throw new Error ('Ошибка!');
        }   
        if (typeof a == 'string' || typeof b == 'string'){
            throw new Error ('Ошибка! Нужно вводить ЧИСЛО!');
        }
        if ( isNaN(a) || !isFinite(a)) {
            throw new Error ('Ввидите первое ЧИСЛО!');
        }
        if ( isNaN(b) || !isFinite(b)) {
            throw new Error ('Ввидите второе ЧИСЛО!');
        }
        else {  
        this.a = a;
        this.b = b;
        }
    }

    setX = (a) => {
        this.a = a;
        if (typeof a == 'bigint'){
            throw new Error ('Ошибка!');
        }
         if ( isNaN(a) || !isFinite(a) || typeof a == 'string' || typeof a =='boolean' || a == null) {
            throw new Error ('Первый аргумент не ЧИСЛО!');
        }       
    }; 
    setY = (b) => {
        this.b = b;
        if (typeof b == 'bigint'){
            throw new Error ('Ошибка!');
        }
        if ( isNaN(b) || !isFinite(b) || typeof b == 'string' || typeof b =='boolean' || b == null) {
            throw new Error ('Второй аргумент не ЧИСЛО!');
        }      
    };  
    logSum = () => {
        console.log(this.a + this.b);
      };
    logMul = () => {
        console.log(this.a * this.b);
      };
    logSub = () => {
        console.log(this.a - this.b);
      };
    logDiv = () => {
        if (this.b === 0) {
          throw new Error('На ноль делить нельзя!');
        } 
          console.log(this.a / this.b);   
    };

}

const calculator = new Calculator(12, 3);

class Stack {
    constructor(maxSize = 10) {
        this.maxSize = maxSize;
        this.length = 0;
        this.stack = [];
        if (typeof maxSize !== 'number' || maxSize < 0 || !isFinite(maxSize) || isNaN(maxSize)) {
            throw new Error('Аргумент должен быть числом!');
        } 
    }
       
    
    push(item) {
        if (this.stack.length >= this.maxSize){
            throw new Error ('Стек переполнен!');
        }
        this.length +=1;
        this.stack[this.length] = item;
    }

    pop() { 
        if(this.stack.length === 0) {
             throw new Error ('Стек пуст');
             }
        let item = this.stack[this.length]; 
        delete this.stack[this.length]; 
        this.length--;
        return item;       
    
    }

    peek() {
        if (this.stack.length === 0){
            return null;
            }
        return this.stack[this.length - 1];    
    } 

    isEmpty() {
        if (this.stack.length === 0) {
            return true;
          } else {
            return false;
          }   
    }

    toArray() {
        return Object.values(this.stack);
    }

    static fromIterable(iterable) {
        if(!iterable[Symbol.iterator]) {
        throw new Error('Ошибка итерации!')
        } 
        const stack = new Stack();
        for(const item of iterable) stack.push(item);
        stack.maxItemsCount = iterable.length;
        return stack; 
  }
}

module.exports = { Stack };

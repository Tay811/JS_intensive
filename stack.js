class Stack {
    constructor(maxSize = 10) {
        this.maxSize = maxSize;
        this.length = 0;
        this.stack = [];
        if (typeof maxSize !== 'number') {
            throw new Error('Аргумент должен быть числом!');
        } 
    }
       
    
    push(item) {
        if (this.stack.length >= this.maxSize){
            throw new Error ('Стек переполнен!');
        }
        this.length++;
        this.stack[this.length] = item;
        return item;
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
        return this.stack[this.length - (this.length - 1)];    
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
        if (typeof iterable[Symbol.iterator] !== 'function') {
          throw new Error('Ошибка итерации!');
        }
        let newStack = new Stack(iterable.length);
        for (let item of iterable) {
          newStack.push(item);
        }
        return newStack;
    }
}

module.exports = { Stack };
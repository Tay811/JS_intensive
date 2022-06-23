//1

let array = [3, 6, 13, 9, 12, -44, 51, -17, 2, 15, 7, 31, 71, -1, 17, 8];

function isOdd(num) {

  if (num === 2) return false;
  else {
    for (let i = 2; i < num; i++) if (num % 2 === 0) return false;
    return true;
  }
}


Array.prototype.myFilter = function (callback, thisArg) {
  if (this == null) {
    throw new Error("Cant iterate over undefined or null");
  }

  let context = this;

  let O = Object(this);

  if (arguments.length > 1) {
    context = thisArg;
  }

  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let len = O.length;

  let res = [];

  for (let i = 0; i < len; i++) {
    if (i in O) {
      let current = this[i];
      if (callback.call(context, current, i, O)) {
        res.push(current);
      }
    }
  }

  return res;
};

let odd = array.myFilter(isOdd);


//2

function createDebounceFunction(callback, interval) {
    if (typeof callback !== 'function') {
        throw new Error("Invalid callback");
    }

    let timeoutId = null;

    return function(){
        if (timeoutId !== null) {
            clearInterval(timeoutId);
        }
        
      timeoutId = setTimeout(callback, interval);
    }
}

"use strict";
function reduce(callback, accumulator, array) {
    if(typeof callback !== 'function' || Array.isArray(array) === false || accumulator === undefined) {
        throw new TypeError("Parameters are of not correct type");
    }
    for(let i=0;i<array.length;i++){
        accumulator = callback(array[i], accumulator);
    }
    return accumulator;
}

let curriedReduce = curry(reduce);
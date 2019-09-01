"use strict";
function map(mapFn, array){
    return reduce((curr, acc) => acc.concat([mapFn(curr)]), [], array);
}

function power(val) {
    return val * 2;
}

// testing
let a = [1,2,3,4,5];
console.log("power of array[ " + a + " ]is: \n" +map(power, a));
function filter(filterFn, array) {
    return reduce((curr, acc) => filterFn(curr) ? acc.concat([curr]) : acc, [], array);
}

function odd(val) {
    return val%2==0;
}
console.log("odd values are: \n" + filter(odd, a));
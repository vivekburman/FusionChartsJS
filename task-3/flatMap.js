function flatMap(mapFn, array) {
    let result = map(mapFn, array);
    return flat(1, result);
}

let c = [5, 4, -3, 20, 17, -33, -4, 18];
// remove all negative elements and split odd elements into even + 1

function func(val) {
    if(val < 0) {
        return [];
    }
    else if(val%2 ==0) {
        return [val];
    }
    return [val-1, 1];
}
console.log("input: " + c + "\n Output : " + flatMap(func, c));
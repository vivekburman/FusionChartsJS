function flat(depth, array) {
    function flatten(curr, acc) {
        if(Array.isArray(curr) && depth > 0) {
            for(let i in curr) {
                acc = flatten(curr[i], acc);
            }
        }
        else{
            acc = acc.concat([curr]);
        }
        return acc;
    }
    return reduce(flatten, [], array);
}

let b = [[1,2], [4,5,[6,7,[8,9]], [10,11], [], [12], 13, 14]];

console.log("input: " + b + "\n Output: " + flat(2, b));
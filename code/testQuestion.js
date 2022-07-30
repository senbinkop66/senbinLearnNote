/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let mina = m, minb = n;
    for (const op of ops) {
        mina = Math.min(mina, op[0]);
        minb = Math.min(minb, op[1]);
    }
    return mina * minb;
};

let m = 3, n = 3, ops = [[2,2],[3,3]];
console.log(maxCount(m, n, ops));
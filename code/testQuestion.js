/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let end = Math.pow(10, n);
    let ans = new Array(n - 1);
    for (let i = 1; i < end; i++) {
        ans[i - 1] = i;
    }
    return ans;
};

console.log(printNumbers(3));

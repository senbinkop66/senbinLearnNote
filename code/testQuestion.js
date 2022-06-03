/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function(n) {
    let ans = 0;
    let bound = 2 * n;
    for (let k = 1; k * (k + 1) <= bound; k++){
        if (isKConsecutive(n, k)) {
            ans++;
        }
    }
    return ans;
};

const isKConsecutive = (n, k) => {
    if (k % 2 === 1) {
        return n % k === 0;
    } else {
        return n % k !== 0 && 2 * n % k ===0;
    }
};

console.log(consecutiveNumbersSum(15));
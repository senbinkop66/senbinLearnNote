/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let left = 0;
    let n = s.length;
    let scores = new Array(n).fill(0);
    let zero = 0;
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === "0") {
            zero++;
        }
        scores[i] = zero;
    }

    let one = 0;
    let ans = 0;
    for (let i = n - 1; i > 0; i--) {
        if (s[i] === "1") {
            one++;
        }
        ans = Math.max(ans, scores[i - 1] + one);
    }

    return ans;
};

let s = "00111";
console.log(maxScore(s));
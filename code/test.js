/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
  k--;
  let ans = 0;
  while (k > 0) {
    k &= k - 1;
    ans ^= 1;
  }
  return ans;
};

let n = 2, k = 2;
console.log(kthGrammar(n, k));
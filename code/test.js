/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
  let bal = 0, n = s.length, ans = 0;
  for (let i = 0; i < n; i++) {
    bal += (s[i] === '(' ? 1 : -1);
    if (s[i] === ')' && s[i - 1] === '(') {
      ans += 1 << bal;
    }
  }
  return ans;
};

let s = "(()(()))";
console.log(scoreOfParentheses(s));
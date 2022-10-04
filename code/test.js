/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  const n = s.length;
  let ans = 0;
  let leftBracket = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      leftBracket++;
    } else {
      if (leftBracket > 0) {
        leftBracket--;
      } else {
        ans++;
      }
    }
  }
  ans += leftBracket;
  return ans;
};

let s = "(((";
console.log(minAddToMakeValid(s));
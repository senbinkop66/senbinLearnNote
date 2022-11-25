/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
  let ans = 0;
  for (let word of words) {
    if (expand(s, word)) {
      ans++;
    }
  }
  return ans;
};

const expand = (s, t) => {
  let i = 0, j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] !== t[j]) {
      return false;
    }
    const ch = s[i];
    let cnti = 0;
    while (i < s.length && s[i] === ch) {
      cnti++;
      i++;
    }
    let cntj = 0;
    while (j < t.length && t[j] === ch) {
      cntj++;
      j++;
    }
    if (cnti < cntj) {
      return false;
    }
    if (cnti !== cntj && cnti < 3) {
      return false;
    }
  }
  return i === s.length && j === t.length;
}

let s = "heeellooo", words = ["hello", "hi", "helo"];
console.log(expressiveWords(s, words));

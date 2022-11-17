/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
  const p = new Array(26).fill(0).map(() => new Array());
  const codeA = 'a'.charCodeAt();

  for (let i = 0; i < words.length; i++) {
    p[words[i][0].charCodeAt() - codeA].push([i, 0]);
  }

  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    let len = p[c.charCodeAt() - codeA].length;
    while (len > 0) {
      const t = p[c.charCodeAt() - codeA].shift();
      if (t[1] === words[t[0]].length - 1) {
        ans++;
      } else {
        t[1]++;
        p[words[t[0]][t[1]].charCodeAt() - codeA].push(t);
      }
      len--;
    }
  }
  return ans;
};


let s = "abcde", words = ["a","bb","acd","ace"];
console.log(numMatchingSubseq(s, words));
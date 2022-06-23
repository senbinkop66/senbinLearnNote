/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let ans = [];
    let i  = 0;
    let n = words.length;
    let m = words[0].length;
    let lenS = s.length;
    for (let i = 0; i < m; i++) {
        if (i + n * m > lenS) {
            break;
        }
        const differ = new Map();
        for (let j = 0; j < n; j++) {
            let word = s.substring(i + j * m, i + (j + 1) * m);
            differ.set(word, (differ.get(word) || 0) + 1);
        }
        for (let word of words) {
            differ.set(word, (differ.get(word) || 0) - 1);
            if (differ.get(word) === 0) {
                differ.delete(word);
            }
        }
        for (let start = i; start < lenS - n * m + 1; start += m) {
            if (start !== i) {
                let word = s.substring(start + (n - 1) * m, start + n * m);
                differ.set(word, (differ.get(word) || 0) + 1);
                if (differ.get(word) === 0) {
                    differ.delete(word);
                }
                word = s.substring(start - m, start);
                differ.set(word, (differ.get(word) || 0) - 1);
                if (differ.get(word) === 0) {
                    differ.delete(word);
                }
            }
            if (differ.size === 0) {
                ans.push(start);
            }
        }
    }
    return ans;
};

let s = "barfoofoobarthefoobarman", words = ["bar","foo","the"];
let result = findSubstring(s, words);
console.log(result);
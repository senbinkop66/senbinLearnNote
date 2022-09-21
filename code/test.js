/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const n = strs.length;
    const ans = [];
    const words = new Map();
    for (let i = 0; i < n; i++) {
        let word = strs[i].split("");
        word.sort();
        word = word.join("");
        // console.log(word)
        if (words.has(word)) {
            words.get(word).push(strs[i]);
        } else {
            words.set(word, [strs[i]]);
        }
    }
    for (let [key, value] of words) {
        ans.push(value);
    }
    return ans;
};


let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let result = groupAnagrams(strs);
console.log(result);
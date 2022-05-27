/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function(words, word1, word2) {
    let ans = Number.MAX_SAFE_INTEGER;
    let index1 = -1;
    let index2 = -1;
    words.forEach((word, index) => {
        if (word === word1 || word === word2) {
            if (word === word1){
                index1 = index;
            }else{
                index2 = index;
            }
            if (index1 !== -1 && index2 !== -1) {
                ans = Math.min(Math.abs(index1 - index2), ans);
            }
        }
    });
    return ans;
};

let words = ["I","am","a","student","from","a","university","in","a","city"], word1 = "a", word2 = "student";
let result = findClosest(words, word1, word2);
console.log(result);
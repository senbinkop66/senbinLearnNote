/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
   return (s + s).indexOf(s, 1) !== s.length;
};

let s = "abcabcabcabc";
let result = repeatedSubstringPattern(s);
console.log(result);
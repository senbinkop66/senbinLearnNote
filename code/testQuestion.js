/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let reg = /(^[A-Z]+$)|(^[A-Z][a-z]+$)|(^[a-z]+$)/g;
    return reg.test(word);
};
let word = "FlaG";
let result = detectCapitalUse(word);
console.log(result);
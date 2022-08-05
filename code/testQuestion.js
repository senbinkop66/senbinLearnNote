/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    return s.replace(/\s/g, "%20")
};

let s = "We are happy.";
console.log(replaceSpace(s));
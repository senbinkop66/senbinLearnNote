/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let sumDigit = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        if (isDigit(s[i])) {
            sumDigit++;
        }
    }
    let sumAlpha = n - sumDigit;

    if (Math.abs(sumDigit - sumAlpha) > 1) {
        return "";
    }

    let flag = sumDigit > sumAlpha;

    const arr = [...s];
    for (let i = 0, j = 1; i < n; i += 2) {
        if (isDigit(arr[i]) !== flag) {
            while (isDigit(arr[j]) !== flag) {
                j += 2;
            }
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    return arr.join("");
};

const isDigit = (ch) =>{
    return parseFloat(ch).toString() === "NaN" ? false : true;
}

let s = "covid2019";
console.log(reformat(s));
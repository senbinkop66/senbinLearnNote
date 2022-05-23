/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absent = 0;
    let late = 0;
    for (let i = 0; i < s.length; i++){
        if (s[i] === "A") {
            absent++;
            if (absent > 1){
                return false;
            }
            late = 0;
        }else if (s[i] === "L") {
            late++;
            if (late > 2) {
                return false;
            }
        }else if (s[i] === "P") {
            late = 0;
        }
    }
    return true;
};

let s = "PPALLP";
let result=checkRecord(s);
console.log(result);
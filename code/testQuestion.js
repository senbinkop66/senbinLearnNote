/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let index;
    let sum=0;
    let line=0;
    for (let c of s){
        index=c.charCodeAt()-"a".charCodeAt();
        if (sum+widths[index]>100) {
            line++;
            sum=0;
        }
        sum+=widths[index];
    }
    line++;
    return [line,sum];
};

let widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
let s = "abcdefghijklmnopqrstuvwxyz";
let result=numberOfLines(widths,s);
console.log(result);
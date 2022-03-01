/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length===1) {return 1;}
    let maxLen=s.length;
    let center=s.length>>1;
    let flag1=false;
    let flag2=false;
    let newArr=[];  //
    //从最长到最短判断
    for (let i=0;i<s.length;i++){
        for (let j=i;j<s.length;i++){
            if (s[j]!==s[s.length-1-j]) {

                flag1=true;
                break;
            }
        }

        for (let j=i;j<s.length;i++){
            if (s[i]!==s[s.length-1-i]) {
                flag1=true;
                break;
            }
        }
    }
    return maxLen;
};


let str1 = "babad";
let result=longestPalindrome(str1);
console.log(result);
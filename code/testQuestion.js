/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen=1;
    let flag=true;
    let count=1;
    for (let i=0;i<s.length;i++){
        for (let j=i+1;j<s.length;j++){
            if (s[i]===s[j]) {
                maxLen=count>maxLen ? count : maxLen;
                flag=false;
                count=1;
                break;
            }else{
                count++;
            }
        }
        if (flag) {
            maxLen=count>maxLen ? count : maxLen;
            break;
        }
    }
    return maxLen;
};


let str1 = "heffdddllo";
let result=lengthOfLongestSubstring(str1);
console.log(result);
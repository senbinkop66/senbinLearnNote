/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let n=s.length;
    let ans=new Array(n).fill(0);
    let leftIndex=s.indexOf(c);
    let rightIndex=s.indexOf(c,leftIndex+1);
    let d1,d2;
    for(let i=0;i<n;i++){
        d1=Math.abs(i-leftIndex);
        if (rightIndex!==-1) {
            d2=Math.abs(i-rightIndex)
            if (d1<d2) {
                ans[i]=d1;
            }else{
                ans[i]=d2;
            }
            if (i===rightIndex) {
                leftIndex=rightIndex;
                rightIndex=s.indexOf(c,leftIndex+1);
            }
        }else{
            ans[i]=d1;
        }
    }
    return ans;
};

let s = "loveleetcode", c = "e";
let result=shortestToChar(s,c);
console.log(result);
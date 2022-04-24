/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    n=n.toString(2);
    let ans=0;
    let count=0;
    let flag=false;
    for (let i=0;i<n.length;i++){
        if (n[i]==="1") {
            if (n[i-1]==="1") {
                ans=Math.max(1,ans);
            }else{
                if (count>1) {
                    ans=Math.max(ans,count);
                }
            }
            count=1;
        }else if (n[i]==="0") {
            if (count>0) {
                count++;
            }
        }
    }
    return ans;
};

let test=22;
let result=binaryGap(test);
console.log(result);
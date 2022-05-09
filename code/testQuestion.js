/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let ans=[];
    let n=s.length;
    let left=0,right=n;
    for (let i=0;i<n;i++){
        if (s[i]==="I") {
            //比后一个小则加入当前没有加入最小的的一个
            ans.push(left);
            left++;
        }else if(s[i]==="D"){
            //比后一个大则加入当前没有加入最大的的一个
            ans.push(right);
            right--;
        }
    }
    ans.push(left);  //或 ans.push(right);

    return ans;
};

let s = "DDDII";
let result=diStringMatch(s)
console.log(result);
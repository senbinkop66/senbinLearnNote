/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let ans=0;
    for (let i=0;i<accounts.length;i++){
        let sum=0;
        accounts[i].forEach((item)=>{
            sum+=item;
        });
        ans=sum>ans ? sum : ans;
    }
    return ans;
};

let test= [[1,2,3],[3,2,1]];
let result=maximumWealth(test);
console.log(result);
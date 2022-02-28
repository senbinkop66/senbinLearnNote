/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {
   const delta=new Array(n).fill(0);
   let zero=n,ans=0,cnt=0;
   const dfs=(requests,pos)=>{
      if (pos===requests.length) {
         if (zero===n) {
            ans=Math.max(ans,cnt);
         }
         return;
      }
      //不选 requests[pos]
      dfs(requests,pos+1);
      //选 requests[pos]
      let z=zero;
      ++cnt;
      const r=requests[pos];
      let x=r[0],y=r[1];
      //增加或减少前为0,zero减 1
      zero-=delta[x]===0 ? 1:0;
      --delta[x];
      //增加或减少后为0,zero加1
      zero+=delta[x]===0 ? 1:0;
      //增加或减少前为0,zero减 1
      zero-=delta[y]===0 ? 1:0;
      ++delta[y];
      //增加或减少后为0,zero加1
      zero+=delta[y]===0 ? 1:0;
      dfs(requests,pos+1);
      --delta[y];
      ++delta[x];
      --cnt;
      zero=z;
   }
   dfs(requests,0);
   return ans;
};

let n = 5;
let requests = [[0,1],[1,0],[0,1],[1,2],[2,0],[3,4]]
let result=maximumRequests(n,requests);
console.log(result);
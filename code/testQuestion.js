/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function(parents) {
   //记录每一个结点的父节点、左右子树结点数
   let n=parents.length;
   const children=new Array(n);
   let maxScore=0;
   let cnt=0;
   for (let i=0;i<n;i++){
      children[i]=[];
   }
   for (let i=0;i<n;i++){
      let p=parents[i];
      if (p!==-1) {
         children[p].push(i);
      }
   }
   //使用深度优先搜索来计算以每个节点为根结点的子树的大小
   const dfs=(node)=>{
      let score=1;
      let size=n-1; //size为与父结点向上相连的结点数目
      for (let c of children[node]){
         let t=dfs(c);
         score *=t;
         size-=t;
      }
      if (node!==0){
         score*=size;
      }
      if (score===maxScore) {
         cnt++;
      }else if(score>maxScore){
         maxScore=score;
         cnt=1;
      }
      return n-size;
   }
   dfs(0);
   return cnt;
};

let parents = [-1,2,0,2,0]
let result=countHighestScoreNodes(parents);
console.log(result);
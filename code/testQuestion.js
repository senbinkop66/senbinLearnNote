/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
   if (root===null) {
      return [];
   }
   let arr=[root]
    let ans=[];
    while(arr.length>0){
      let node=arr.pop();
      ans.push(node.val);
      if(node.children!==null){
         let temp=node.children;
         for(let i=temp.length-1;i>=0;i--){
            arr.push(temp[i]);
         }
      }
    }
    return ans;
};


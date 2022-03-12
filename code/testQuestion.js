var postorder = function(root) {
   if (root===null) {
      return [];
   }
   let arr=[root]
    let ans=[];
    while(arr.length>0){
      let node=arr.pop();
      ans.unshift(node.val);
      if(node.children!==null){
         let temp=node.children;
         for(let i=0;i<temp.length;i++){
            arr.push(temp[i]);
         }
      }
    }
    return ans;
};
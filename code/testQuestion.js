/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let value1=[];
    let value2=[]
    //中序遍历
    const inorder=(root,ret)=>{
        if (root) {
            inorder(root.left,ret);
            ret.push(root.val);
            inorder(root.right,ret);
        }
    };

    inorder(root1,value1);
    inorder(root2,value2);

    let ans=[];
    while(value1.length>0 && value2.length>0){
        if (value1[0]<value2[0]) {
            ans.push(value1.shift());
        }else{
            ans.push(value2.shift());
        }
    }
    ans=ans.concat(value1).concat(value2);
    return ans;
};

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root===null) {
        return [];
    }
    let ans=[[root.val]];
    let arr=root.children;
    let len;
    while(arr.length>0){
        len=arr.length;
        let temp=[];
        while(len>0){
            len--;
            let node=arr.shift();
            temp.push(node.val);
            if (node.children) {
                arr=arr.concat(node.children);
            }
        }
        ans.push(temp);
    }
    return ans;
};
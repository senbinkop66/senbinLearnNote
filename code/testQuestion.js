/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    let ans = 0;
    let arr =[root];
    while(arr.length > 0){
        let len = arr.length;
        while(len > 0){
            let node = arr.shift();
            if (node.left === null && node.right === null) {
                ans += node.val;
            }else{
                if (node.left !== null) {
                    node.left.val += 2 * node.val;
                    arr.push(node.left);
                }
                if (node.right !== null) {
                    node.right.val += 2 * node.val;
                    arr.push(node.right);
                }
            }
            len--;
        }
    }
    return ans;
};
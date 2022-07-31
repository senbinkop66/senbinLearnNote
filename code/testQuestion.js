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
var maxLevelSum = function(root) {
    let ans = 1;
    let maxSum = root.val;
    let arr = [root];
    let deep = 0;
    while (arr.length) {
        let len = arr.length;
        let sum = 0;
        while(len > 0) {
            let node = arr.shift();
            if (node.left !== null) {
                arr.push(node.left);
            }
            if (node.right !== null) {
                arr.push(node.right);
            }
            len--;
            sum += node.val;
        }
        deep++;
        if (sum > maxSum) {
            ans = deep;
            maxSum = sum;
        }
    }
    return ans;
};
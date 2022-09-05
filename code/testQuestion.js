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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (root === null) {
        return [];
    }
    const ans = [];
    const queue = [root];
    let isOrderLeft = true;
    while (queue.length) {
        let n = queue.length;
        const temp = [];
        while (n > 0) {
            n--;
            let node = queue.shift();
            
            if (isOrderLeft) {
                temp.push(node.val);
            } else {
                temp.unshift(node.val);
            }
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        ans.push(temp);
        isOrderLeft = !isOrderLeft;
    }
    return ans;
};
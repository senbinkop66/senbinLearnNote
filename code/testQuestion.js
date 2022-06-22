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
var findBottomLeftValue = function(root) {
    let ans = root.val;
    let maxHeight = 1;
    const dfs = (root, height) => {
        if (!root) {
            return;
        }
        height++;
        //因为我们先遍历左子树，然后再遍历右子树，所以对同一高度的所有节点，最左节点肯定是最先被遍历到的。
        dfs(root.left, height);
        dfs(root.right, height);
        if (height > maxHeight) {
            maxHeight = height;
            ans = root.val;
        }
    }
    dfs(root, 0);
    return ans;
};
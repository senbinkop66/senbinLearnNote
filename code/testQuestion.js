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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    const ans = [];
    const path = [];

    const dfs = (root, res) => {
        if (root === null) {
            return;
        }
        path.push(root.val);
        res -= root.val;
        if (root.left === null && root.right === null && res === 0) {
            ans.push([...path]); // 这里记得解构，不然传入的是地址
        }
        dfs(root.left, res);
        dfs(root.right, res);
        path.pop();
    }
    dfs(root, target);
    return ans;
};

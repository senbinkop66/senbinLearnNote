/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const parent = new Map();
    const visited = new Set();

    const dfs = (root) => {
        if (root.left !== null) {
            parent.set(root.left.val, root);
            dfs(root.left);
        }
        if (root.right !== null) {
            parent.set(root.right.val, root);
            dfs(root.right);
        }
    }

    dfs(root);

    while (p !== null) {
        // 把p的父节点加入加入集合
        visited.add(p.val);
        if (parent.has(p.val)) {
            p = parent.get(p.val);
        } else {
            p = null;
        }
    }
    while (q !== null) {
        if (visited.has(q.val)) {
            return q;
        }
        q = parent.get(q.val);
    }
    return null;
};


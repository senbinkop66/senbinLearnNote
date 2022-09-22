/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let post_idx = postorder.length - 1;
    const idx_map = new Map(inorder.map((v, i) => [v, i]));

    const helper = (in_left, in_right) => {
        // 如果这里没有节点构造二叉树了，就结束
        if (in_left > in_right) {
            return null;
        }
        // 选择 post_idx 位置的元素作为当前子树根节点
        const root = new TreeNode(postorder[post_idx]);
        // 根据 root 所在位置分成左右两棵子树
        const index = idx_map.get(postorder[post_idx]);

        // 下标减一
        post_idx--;
        // 构造右子树
        root.right = helper(index + 1, in_right);
        // 构造左子树
        root.left = helper(in_left, index - 1);
        return root;
    }

    return helper(0, inorder.length - 1);
};

let inorder = [9,3,15,20,7], postorder = [9,15,7,20,3];
let result = buildTree(preorder, inorder);
console.log(result);
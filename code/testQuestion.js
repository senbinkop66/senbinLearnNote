function TreeNode(val, left, right){
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

var mergeTrees = function(root1, root2) {
    if (root1 == null){
        return root2;
    }
    if (root2 == null) {
        return root1;
    }
    const root3 = new TreeNode(root1.val + root2.val);
    const queue1 = [root1];
    const queue2 = [root2];
    const queue3 = [root3];

    while (queue1.length > 0 && queue2.length > 0){
        let node3 = queue3.pop();
        let node1 = queue1.pop();
        let node2 = queue2.pop();
        if (node1.left !== null || node2.left !== null) {
            if (node1.left !== null && node2.left !== null) {
                node3.left = new TreeNode(node1.left.val + node2.left.val);
                queue1.push(node1.left);
                queue2.push(node2.left);
                queue3.push(node3.left);
            }else if (node1.left !== null){
                node3.left = node1.left;
            }else if (node2.left !== null){
                node3.left = node2.left;
            }
        }
        if (node1.right !== null || node2.right !== null) {
            if (node1.right !== null && node2.right !== null) {
                node3.right = new TreeNode(node1.right.val + node2.right.val);
                queue1.push(node1.right);
                queue2.push(node2.right);
                queue3.push(node3.right);
            }else if (node1.right !== null){
                node3.right = node1.right;
            }else if (node2.right !== null){
                node3.right = node2.right;
            }
        }
    }
    return root3;
};

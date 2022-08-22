/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
    // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
    const dummyNode = new ListNode(-1);
    dummyNode.next = head;

    let pre = dummyNode;
    
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }

    let cur = pre.next;
    for (let i = 0; i < right - left; i++) {
        const next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }

    return dummyNode.next;
}



module.exports = {
    reverseBetween : reverseBetween
};
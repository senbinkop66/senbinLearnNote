/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (head === null) {
        return head;
    }
    let len = 0;
    let node = head;
    while (node !== null) {
        len++;
        node = node.next;
    }

    const dummyNode = new ListNode(-1, head);

    for (let subLen = 1; subLen < len; subLen <<= 1) {
        let prev = dummyNode, curr = dummyNode.next;
        while (curr !== null) {
            let head1 = curr;
            for (let i = 1; i < subLen && curr.next !== null; i++) {
                curr = curr.next;
            }
            let head2 = curr.next;
            curr.next = null;
            curr = head2;
            for (let i = 1; i < subLen && curr !== null && curr.next !== null; i++) {
                curr = curr.next;
            }
            let next = null;
            if (curr !== null) {
                next = curr.next;
                curr.next = null;
            }
            const merged = merge(head1, head2);
            prev.next = merged;
            while (prev.next !== null) {
                prev = prev.next;
            }
            curr = next;
        }
    }
    return dummyNode.next;
};


const merge = (head1, head2) => {
    if (head1 === null) {
        return head2;
    }
    if (head2 === null) {
        return head1;
    }

    const dummyNode = new ListNode(-1);
    let pre = dummyNode;
    while (head1 !== null && head2 !== null) {
        if (head1.val <= head2.val) {
            pre.next = head1;
            head1 = head1.next;
        } else {
            pre.next = head2;
            head2 = head2.next;
        }
        pre = pre.next;
    }
    pre.next = head1 === null ? head2 : head1;

    return dummyNode.next;
}
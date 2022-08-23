/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head ListNode类 the head node
 * @return ListNode类
 */
function sortInList( head ) {
    // write code here
    return toSortList(head, null);
};

const toSortList = (head, tail) => {
    if (head === null) {
        return head;
    }
    if (head.next === tail) {
        head.next = null;
        return head;
    }
    let slow = head, fast = head;
    while (fast !== tail) {
        slow = slow.next;
        fast = fast.next;
        if (fast !== tail) {
            fast = fast.next;
        }
    }
    const mid = slow;
    return merge(toSortList(head, mid), toSortList(mid, tail));
}

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

module.exports = {
    sortInList : sortInList
};
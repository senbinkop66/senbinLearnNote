http长连接和短连接

三次握手四次挥手

get和post

Vue双向绑定原理

分页功能

如何找到中间链表结点

```js
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
var deleteMiddle = function(head) {
    if (head.next === null) {
        return null;
    }
    let slow = head;
    let fast = head;
    let prev = null;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    prev.next = prev.next.next;
    return head;
};
```


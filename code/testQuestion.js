/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let n=0;
    let temp1=head;
    while(temp1!==null){
        //先遍历一遍，计数
        n++;
        temp1=temp1.next;
    }
    let m=n>>1;
    let temp2=head;
    temp1=head;
    for(let i=0;i<m;i++){
        //遍历过对称轴
        temp2=temp2.next;
    }
    if (n%2!==0) {
        temp2=temp2.next;
    }
    for(let i=0;i<m;i++){
        
        if (temp1.val!==temp2.val) {
            return false;
        }
        temp1=temp1.next;
        temp2=temp2.next;
    }
    return true;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //直接在l1上操作
    let temp=0;
    let head=l1;  //存储l1的头结点，方便返回

    while (l1.next){
        if (l2.next) {
            temp+=l1.val+l2.val;
            l1.val=temp%10;
            temp=Math.floor(temp/10);
            l1=l1.next;
            l2=l2.next;
        }else{
            //当l1更长时
            temp+=l1.val+l2.val;  //计算l2的最后一个
            l2.val=0;  //然后把l2值设置为0
            l1.val=temp%10;
            temp=Math.floor(temp/10);
            l1=l1.next;
        }
    }

    while(l2.next){
        //当l2更长时
        temp+=l1.val+l2.val;  //计算l1的最后一个
        l1.val=temp%10;
        l1.next=new ListNode();  //在l1后加next结点，值设为0
        l1=l1.next;
        l1.val=0;  
        temp=Math.floor(temp/10);
        l2=l2.next;
    }
    temp+=l1.val+l2.val;  //读取最后的一个，就算l1和l2刚好长度相同也一样
    l1.val=temp%10;
    temp=Math.floor(temp/10);
    if (temp===1) {
        //最后是否会进位
        l1.next=new ListNode();
        l1=l1.next;
        l1.val=1;
    }
    return head;

};
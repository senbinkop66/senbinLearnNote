/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var alphas=new Array();
    var counts=new Array();
    var indexs=new Array();
	for (let i=0;i<s.length;i++){
        let index0=alphas.indexOf(s[i]);
        if (index0!==-1) {
            counts[index0]+=1;
        }else{
            counts.push(1);
            alphas.push(s[i]);
            indexs.push(i);
        }
	}
    for (let i=0;i<counts.length;i++){
        if (counts[i]===1) {
            return indexs[i];
        }
    }
    return -1;
};
let str1 = "leetcode";
let str2 = "aabbcdeafg";
let result=firstUniqChar(str2);
console.log(result);


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length!==t.length) {
        return false;
    }
    var alphas1=new Array();
    var alphas2=new Array();
    var counts1=new Array();
    var counts2=new Array();
    for (let i=0;i<s.length;i++){
        let index1=alphas1.indexOf(s[i]);
        let index2=alphas2.indexOf(t[i]);
        if (index1!==-1) {
            counts1[index1]+=1;
        }else{
            counts1.push(1);
            alphas1.push(s[i]);
        }
        if (index2!==-1) {
            counts2[index2]+=1;
        }else{
            counts2.push(1);
            alphas2.push(t[i]);
        }
    }
    if (alphas1.length!==alphas2.length) {return false;}
    for (let i=0;i<alphas1.length;i++){
        if (counts1[i]!==counts2[alphas2.indexOf(alphas1[i])]) {
            return false;
        }
    }
    return true;

};

let str1 = "anaagram";
let str2 = "naggaram";
let result=isAnagram(str1,str2);
console.log(result);

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase();
    s=s.replace(/[^a-z0-9]/g,"")
    console.log(s);
    for (let i=0;i<s.length/2;i++){
        if (s[i]!==s[s.length-1-i]) {
            return false;
        }
    }
    return true;
};


let str1 = "A man, a plan, a canal: Panama";
let result=isPalindrome(str1);
console.log(result);


/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s=s.trim();
    let patt=/[^0-9+-]/
    if (patt.test(s[0])) {
        return 0;
    }
    let nums=new Array();
    nums.push(s[0]);
    for (let i=1;i<s.length;i++){
        if (/\D/.test(s[i])) {
            //查找到非数字停止
            break;
        }else{
            nums.push(s[i]);
        }
    }

    let num=nums.join("");
    if (num==="+" || num==="-") {return 0;}
    num=parseInt(num);
    const START=-Math.pow(2,31);
    const END=Math.pow(2,31)-1;

    if (num<START) {return START;}
    if (num>END) {return END;}
    return num;
};
var myAtoi = function(s) {
    s=s.trim();
    let num=parseInt(s);
    if (isNaN(num)) {
        return 0;
    }
    const START=-Math.pow(2,31);
    const END=Math.pow(2,31)-1;

    if (num<START) {return START;}
    if (num>END) {return END;}
    return num;
};

let str1 = "+-12";
let result=myAtoi(str1);
console.log(result);

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack.length<needle.length) {return -1;}
    if (needle==="") {return 0;}
    if (haystack.length===needle.length && haystack===needle) {return 0;}
    if (haystack.length===needle.length && haystack!==needle) {return -1;}
    for (let i=0;i<haystack.length-needle.length+1;i++){
        if (haystack[i]===needle[0]) {
            let flag=true;
            for (let j=1;j<needle.length;j++){
                if (haystack[i+j]!==needle[j]){
                    flag=false;
                    break;
                }
            }
            if (flag) {
                return i;
            }

        }
    }
    return -1;
};


let str1 = "heffdddllo";
let str2 = "ell";
let result=strStr(str1,str2);
console.log(result);


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

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n=nums.length>>1;
    //console.log(n);
    let obj={};
    for (let i=0;i<nums.length;i++){
        obj[nums[i]]===undefined ? obj[nums[i]]=1 : ++obj[nums[i]];
    }
    //console.log(obj);
    let result;
    Object.keys(obj).forEach((key)=>{
        if (obj[key]>n) {
            result=key;
        }
    });
    return result;

};

let test=[2,2,1,1,1,2,2];
let result=majorityElement(test);
console.log(result);

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let obj={};
    let sum=0;
    for(let i=0;i<nums.length;i++){
        obj[nums[i]]===undefined ? obj[nums[i]]=1 : ++obj[nums[i]];
        if (obj[nums[i]]===1) {
            //计数为1时，加该值
            sum+=nums[i];
        }
        if (obj[nums[i]]===2) {
            //计数为2时,减掉
            sum-=nums[i];
        }
    }
    return sum;
};


let test=[2,2,1,1,1,2,2];
let result=sumOfUnique(test);
console.log(result);

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result=0;
    let n=columnTitle.length
    for (let i=0; i<n; i++){
        let num=columnTitle.charCodeAt(n-1-i)-64;
        result+=num*Math.pow(26,i);
    }
    return result;
};


let test="FXSHRXW";
let result=titleToNumber(test);
console.log(result);

var reverseBits = function(n) {
    const M1 = 0x55555555; // 01010101010101010101010101010101
    const M2 = 0x33333333; // 00110011001100110011001100110011
    const M4 = 0x0f0f0f0f; // 00001111000011110000111100001111
    const M8 = 0x00ff00ff; // 00000000111111110000000011111111

    n = n >>> 1 & M1 | (n & M1) << 1;
    n = n >>> 2 & M2 | (n & M2) << 2;
    n = n >>> 4 & M4 | (n & M4) << 4;
    n = n >>> 8 & M8 | (n & M8) << 8;
    return (n >>> 16 | n << 16) >>> 0;
};

var reverseBits = function(n) {
    let rev=0;
    for (let i=0;i<32 && n>0;++i){
        rev |=(n & 1) << (31-i);  //按位或操作符用管道符
        n >>>=1;  //无符号右移用 3 个大于号表示
    }
    return rev >>> 0;
};

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    let result=[];
    const arr=[[a,'a'],[b,'b'],[c,'c']];
    while(true){
        arr.sort((a,b)=>b[0]-a[0]);
        let hasNext=false;
        for(const [i,[c,ch]] of arr.entries()){
            if (c<=0) {
                break;
            }
            const m=result.length;
            if (m>=2 && result[m-2]===ch && result[m-1]===ch) {
                continue;
            }
            hasNext=true;
            result.push(ch);
            arr[i][0]--;
            break;
        }
        if (!hasNext) {
            break;
        }
    }
    return result.join("");
};



let test=100;
let result=longestDiverseString(1,1,7);
console.log(result);

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set=new Set();
    while(true){
        console.log(n);
        let str=n.toString();
        if (set.has(n)) {
            //如果该数已经计算过，则不是快乐数
            return false;
        }else{
            set.add(n);
        }
        n=0;
        for(let i=0;i<str.length;i++){
            n+=str[i]*str[i];
        }
        if (n===1) {
            return true;
        }
    }
};

let test=19;
let result=isHappy(test);
console.log(result);

var removeElements = function(head, val) {
    const pre=new ListNode(0);
    pre.next=head;
    let temp=pre;
    while(temp.next!==null){
        if (temp.next.val===val) {
            temp.next=temp.next.next;
        }else{
            temp=temp.next;
        }
    }
    return pre.next;
};

var removeElements = function(head, val) {
    if (head===null) {
        return head;
    }
    head.next=removeElements(head.next,val);
    return head.val===val ? head.next : head;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let m1=new Map();
    let m2=new Map();
    for (let i=0;i<s.length;i++){
        if (m1.has(s[i])) {
            //当映射存在
            if (m1.get(s[i])!==t[i]) {
                return false;
            }
        }else{
            m1.set(s[i],t[i]);
        }
        if (m2.has(t[i])) {
            if (m2.get(t[i])!==s[i]) {
                return false;
            }
        }else{
            m2.set(t[i],s[i]);
        }
    }
    return true;
};

let test="paper";
let result=isIsomorphic(test,"title");
console.log(result);

var reverseList = function(head) {
    let prev=null;
    let curr=head;
    while(curr){
        const next=curr.next;  //当前结点的后继
        curr.next=prev;  //将当前节点的 next 指针改为指向前一个节点
        prev=curr;  //先存储其前一个节点
        curr=next;  //存储后一个节点
    }
    return prev;
};

var reverseList = function(head) {
    if (head===null || head.next===null) {
        return head;
    }
    const newHead=reverseList(head.next);
    head.next.next=head;
    head.next=null;
    return newHead;
};

/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(n, lamps, queries) {
    let grids=new Array(n);
    for (let i=0;i<n;i++){
        grids[i]=new Array(n).fill(0);
    }
    //N,NE,E,ES,S,SE,E,EN
    const dirs=[[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]]
    lamps.forEach((lamp)=>{
        if (grids[lamp[0]][lamp[1]]<4*(n-1)+1) {
            //避免灯重复变亮
            dirs.forEach((dir)=>{
                let row=lamp[0];
                let col=lamp[1];
                while(row>=0 && row<n && col>=0 && col<n ){
                    grids[row][col]+=1;
                    row+=dir[0];
                    col+=dir[1];
                }
            });
            grids[lamp[0]][lamp[1]]+=4*(n-1)+1;
        }
    });
    //console.log(grids);
    const result=[];
    queries.forEach((query)=>{
        if (grids[query[0]][query[1]]>0) {
            result.push(1);
        }else{
            result.push(0);
        }
        if (grids[query[0]][query[1]]>4*(n-1)) {
            //查询的灯亮着
            //关闭该灯并设置被照明的网格-1
            shutTheLamp(grids,query[0],query[1],n);
            //console.log(grids);
        }
        dirs.forEach((dir)=>{
            let row=query[0]+dir[0];
            let col=query[1]+dir[1];
            if(row>=0 && row<n && col>=0 && col<n ){
                if (grids[row][col]>4*(n-1)) {
                    //查询灯其他方向上位置的灯亮着
                    //关闭该灯并设置被照明的网格-1
                    shutTheLamp(grids,row,col,n);
                    //console.log(grids);
                }
            }
        });
    });
    return result;
};

var shutTheLamp=function(grids,row0,col0,n){
    const dirs=[[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]];
    dirs.forEach((dir)=>{
        let row=row0;
        let col=col0;
        while(row>=0 && row<n && col>=0 && col<n ){
            grids[row][col]-=1;
            row+=dir[0];
            col+=dir[1];
        }
    });
    grids[row0][col0]-=(4*(n-1)+1);
};

let n = 1;
//let lamps =[[2,5],[4,2],[0,3],[0,5],[1,4],[4,2],[3,3],[1,0]];
//let queries = [[4,3],[3,1],[5,3],[0,5],[4,4],[3,3]];
let lamps=[[0,0],[0,0]];
let queries=[[0,0],[0,0]];
let result=gridIllumination(n,lamps,queries);
console.log(result);

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set=new Set();
    for(let i=0;i<nums.length;i++){
        if (set.has(nums[i])) {
            return true;
        }else{
            set.add(nums[i]);
        }
    }
    return false;
};

let test=[1,1,1,3,3,4,3,2,4,2];
let result=containsDuplicate(test);
console.log(result);

var containsNearbyDuplicate = function(nums, k) {
    let m=new Map();
    for(let i=0;i<nums.length;i++){
        if (m.has(nums[i])) {
            if (Math.abs(m.get(nums[i])-i)<=k) {
                return true;
            }else{
                m.set(nums[i],i);
            }
        }else{
            m.set(nums[i],i);
        }
        //console.log(m);
    }
    return false;
};

let test=[1,0,1,1];
let result=containsNearbyDuplicate(test,1);
console.log(result);

var MyStack = function() {
    this.queue=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    let n=this.queue.length;
    this.queue.push(x);
    for (let i=0;i<n;i++){
        this.queue.push(this.queue.shift());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length===0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    nums.sort((a,b)=>a-b);
    let i=0;
    let j=1;
    let n=nums.length;
    let result=0;
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            if (nums[j]-nums[i]===k) {
                result+=1;
            }
            if (nums[j]-nums[i]>k) {
                break;
            }
        }
    }
    return result;
};

let test=[1,2,2,1];
let result=countKDifference(test,1);
console.log(result);

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root===null) {
        return root;
    }
    if (root.left || root.right) {
        let temp=root.left;
        root.left=root.right;
        root.right=temp;
        invertTree(root.left);
        invertTree(root.right);
    }
    return root;
};

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length===0) {
        return [];
    }
    let i=0;
    let j=1;
    let result=[];
    for(j;j<nums.length;j++){
        if (nums[j]-nums[j-1]!==1) {
            if (i===j-1) {
                result.push(nums[i].toString());
            }else{
                result.push(nums[i].toString()+"->"+nums[j-1].toString());
            }
            i=j;
        }
    }
    if (i===j-1) {
        result.push(nums[i].toString());
    }else{
        result.push(nums[i].toString()+"->"+nums[j-1].toString());
    }
    return result;
};

let test=[0,1,2,4,5,7];
let result=summaryRanges(test);
console.log(result);

var isPowerOfTwo = function(n) {
    if (n<=0) {
        //小于等于0的不满足
        return false;
    }
    while(n>=1){
        if (n===1) {
            return true;
        }
        if (n%2!==0) {
            //如果不能被2整除则不满足
            return false;
        }
        n=n/2;
    }
};

let test=5;
let result=isPowerOfTwo(test);
console.log(result);

var MyQueue = function() {
    this.stack1=[];  //用于存储
    this.stack2=[];  //用于交换
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while(this.stack1.length>0){
        //把栈1的所有元素弹出到栈2
        this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(x);  //进队列元素压到栈1底部
    while(this.stack2.length>0){
        //把栈2的所有元素弹出到栈1
        this.stack1.push(this.stack2.pop());
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack1.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack1[this.stack1.length-1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length===0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

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


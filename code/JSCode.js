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

/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
    if(n===1){
        return [];
    }
    let result=[];
    for(let i=2;i<=n;i++){
        for(j=1;j<i;j++){
            if (gcd(i,j)===1) {
                result.push(j+"/"+i);
            }
        }
    }
    return result;
};
var gcd=function(a,b){
    //辗转相除获取最大公约数
    if (a%b===0) {
        return b;
    }
    return arguments.callee(b,a%b);
}
let test=5;
let result=simplifiedFractions(test);
console.log(result);

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if (nums.length<2) {
        return 0;
    }
    nums.sort((a,b)=>a-b);  //排序
    let mindiff=nums[nums.length-1]-nums[0];  //初始为最大差值
    for(i=0;i<nums.length-k+1;i++){
        let temp=nums[i+k-1]-nums[i];
        mindiff=temp<mindiff ? temp : mindiff;
        if (mindiff===0) {
            return 0;
        }
    }
    return mindiff;
};

let test=[9,4,1,7];
let result=minimumDifference(test,2);
console.log(result);

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
    //注意是二叉搜索
    if (root.val<p.val && root.val<q.val) {
        return lowestCommonAncestor(root.right,p,q);
    }else if(root.val>p.val && root.val>q.val) {
        return lowestCommonAncestor(root.left,p,q);
    }else{
        return root;
    }
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val=node.next.val;
    node.next=node.next.next;
};

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    root.val=[root.val];
    let arr=[root];
    let result=[];
    while(arr.length>0){
        let n=arr.length;
        while(n>0){
            let node=arr.shift();
            if (node.left===null && node.right===null) {
                result.push(node.val.join("->"));
            }
            if (node.left!==null) {
                node.left.val=node.val.concat([node.left.val])
                arr.push(node.left);
            }
            if (node.right!==null) {
                node.right.val=node.val.concat([node.right.val])
                arr.push(node.right);
            }
            n--;
        }
    }
    return result;
};

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    while(num>9){
        let arr=(""+num).split("");
        num=0;
        arr.forEach((item)=>{
            num+=Number(item);
        });
        console.log(num);
    }
    return num;
};

let test=236;
let result=addDigits(test);
console.log(result);

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num===0) {
        return 0;
    }
    if (num%9===0) {
        return 9;
    }else{
        return num%9;
    }
};

let test=236;
let result=addDigits(test);
console.log(result);

var numEnclaves = function(grid) {
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));

    const dfs = (grid, row, col) => {
        if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] == 0 || visited[row][col]) {
            return;
        }
        visited[row][col] = true;
        for (const dir of dirs) {
            dfs(grid, row + dir[0], col + dir[1]);
        }
    };

    for (let i = 0; i < m; i++) {
        dfs(grid, i, 0);
        dfs(grid, i, n - 1);
    }
    for (let j = 1; j < n - 1; j++) {
        dfs(grid, 0, j);
        dfs(grid, m - 1, j);
    }
    let enclaves = 0;
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                enclaves++;
            }
        }
    }
    return enclaves;
}

let test=[[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]];
let result=numEnclaves(test);
console.log(result);

var numEnclaves = function(grid) {
    const m = grid.length, n = grid[0].length;
    const uf = new UnionFind(grid);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const index = i * n + j;
                if (j + 1 < n && grid[i][j + 1] === 1) {
                    uf.union(index, index + 1);
                }
                if (i + 1 < m && grid[i + 1][j] === 1) {
                    uf.union(index, index + n);
                }
            }
        }
    }
    let enclaves = 0;
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] === 1 && !uf.isOnEdge(i * n + j)) {
                enclaves++;
            }
        }
    }
    return enclaves;
}

class UnionFind {
    constructor(grid) {
        const m = grid.length, n = grid[0].length;
        this.parent = new Array(m * n).fill(0);
        this.onEdge = new Array(m * n).fill(false);
        this.rank = new Array(m * n).fill(0);
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1) {
                    const index = i * n + j;
                    this.parent[index] = index;
                    if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                        this.onEdge[index] = true;
                    }
                }
            }
        }
    }

    find(i) {
        if (this.parent[i] !== i) {
            this.parent[i] = this.find(this.parent[i]);
        }
        return this.parent[i];
    }

    union(x, y) {
        const rootx = this.find(x);
        const rooty = this.find(y);
        if (rootx !== rooty) {
            if (this.rank[rootx] > this.rank[rooty]) {
                this.parent[rooty] = rootx;
                this.onEdge[rootx] |= this.onEdge[rooty];
            } else if (this.rank[rootx] < this.rank[rooty]) {
                this.parent[rootx] = rooty;
                this.onEdge[rooty] |= this.onEdge[rootx];
            } else {
                this.parent[rooty] = rootx;
                this.onEdge[rootx] |= this.onEdge[rooty];
                this.rank[rootx]++;
            }
        }
    }

    isOnEdge(i) {
        return this.onEdge[this.find(i)];
    }
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n<=0) {
        return false;
    }
    let factors=[2,3,5];
    for (let f of factors){
        //对n反复除以2,3,5
        while(n%f===0){
            n/=f;
        }
    }
    return n===1;
};

let test=100;
let result=isUgly(test);
console.log(result);

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n=nums.length;
    let sum=n*(n+1)/2;
    for (let i=0;i<n;i++){
        sum-=nums[i];
    }
    return sum;
};

let test=[9,6,4,2,3,5,7,0,1];
let result=missingNumber(test);
console.log(result);

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let m=new Map([["b",0],["a",0],["l",0],["o",0],["n",0]]);
    for(let i=0;i<text.length;i++){
        if (m.has(text[i])) {
            m.set(text[i],m.get(text[i])+1);
        }
    }
    let minNum=text.length;
    m.forEach((v,k)=>{
        if (k==="l" || k==="o") {
            minNum=Math.min(minNum,v>>1);
        }else{
            minNum=Math.min(minNum,v);
        }
    });
    return minNum;
};


let test="loonbalxballpoon";
let result=maxNumberOfBalloons(test);
console.log(result);

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left=1;
        let right=n;
        while(left<right){
             let mid = Math.floor(left + (right - left) / 2); // 防止计算时溢出
            if (isBadVersion(mid)) {
                right=mid;
            }else{
                left=mid+1;
            }
        }
        return left;
    };
};

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s=s.split(" ");
    if (pattern.length!==s.length) {
        return false;
    }
    let m1=new Map();
    let m2=new Map();
    for(let i=0;i<pattern.length;i++){
        if(m1.has(pattern[i])){
            if (m1.get(pattern[i])!==s[i]) {
                return false;
            }
        }else{
            m1.set(pattern[i],s[i]);
        }
        if(m2.has(s[i])){
            if (m2.get(s[i])!==pattern[i]) {
                return false;
            }
        }else{
            m2.set(s[i],pattern[i]);
        }
    }
    return true;
};

let test="dog cat cat fish";
let result=wordPattern("abba",test);
console.log(result);

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums=nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let sum=this.nums[right];
    for (let i=left;i<right;i++){
        sum+=this.nums[i];
    }
    return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let n=nums.length;
    this.sums=new Array(n+1).fill(0); //前n个数的和
    for (let i=0;i<n;i++){
        this.sums[i+1]=this.sums[i]+nums[i];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.sums[right+1]-this.sums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n<=0) {
        return false;
    }
    if (n%3!==0 && n!==1) {
        return false;
    }
    while(n>1){
        n/=3;
    }
    return n===1;
};

let test=81;
let result=isPowerOfThree(test);
console.log(result);

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result=[0];
    let len=1;
    while(n>0){
        len=result.length < n ? result.length : n;
        for(let i=0;i<len;i++){
            result.push(1+result[i])
        }
        n=n-len;
    }
    //console.log(result);
    return result;
};

for(let i=0;i<=64;i++){
    let result=countBits(i);
    console.log(i,result[i]);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
     //数组长度一定是奇数个
     let left=0;
     let right=nums.length-1;
     while(left<right){
          let mid=(left+right)>>1;
          if (nums[mid]===nums[mid^1]) {
               left=mid+1;
          }else{
               right=mid;
          }
     }
     return nums[left];
};

let test=[3,3,7,7,10,11,11];
let result=singleNonDuplicate(test);
console.log(result);

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
     let m=matrix.length;
     let n=matrix[0].length;
     const maxColArr=new Array(n).fill(0);;  //每一列的最大值
     const minRowArr=new Array(m).fill(0);  //每一行的最大值索引;
     for(let i=0;i<m;i++){
          for(let j=0;j<n;j++){
               maxColArr[j]=Math.max(maxColArr[j],matrix[i][j]);
               //矩阵中的所有元素都是不同的
               minRowArr[i]=matrix[i][minRowArr[i]]<matrix[i][j] ? minRowArr[i] : j;
          }
     }
     //console.log(matrix);
     //console.log(maxColArr);
     //console.log(minRowArr);
     let result=[];
     for (let i=0;i<m;i++){
          if (matrix[i][minRowArr[i]]===maxColArr[minRowArr[i]]) {
               result.push(matrix[i][minRowArr[i]]);
          }
     }
     return result;

};

let test=[[1,10,4,2],[9,3,8,7],[15,16,17,12]];
let result=luckyNumbers(test);
console.log(result);

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let n=s.length-1;
    let m=n>>1;
    for(let i=0;i<=m;i++){
        let temp=s[i];
        s[i]=s[n-i];
        s[n-i]=temp;
    }
    return s;
};

let test= ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"];
let result=reverseString(test);
console.log(result);

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s=s.split("");
    let right=s.length-1;
    let left=0;
    let temp="";
    let set=new Set(["a","e","i","o","u","A","E","I","O","U"]);
    //console.log(set);
    while(left<right){
        if (set.has(s[left])) {
            temp=s[left];
            if (set.has(s[right])) {
                s[left]=s[right];
                s[right]=temp;
                left++;
                right--;
            }else{
                right--;
            }
        }else{
            left++;
        }
    }
    return s.join("");
};

let test="leetcode";
let result=reverseVowels(test);
console.log(result);

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result=[];
    let set=new Set();
    for(let i=0;i<nums1.length;i++){
        set.add(nums1[i]);
    }
    for(let i=0;i<nums2.length;i++){
        if (set.has(nums2[i])) {
            result.push(nums2[i]);
            set.delete(nums2[i]);
        }
    }
    return result;
};

let test=[1,2,4,2,1,4,6];
let result=intersection(test,[9,4,9,8,4]);
console.log(result);

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let result=true;
    //2分法
    let left=0;
    let right=num;
    let mid;
    while(left<=right){
        mid=(left+right)>>1;
        if(mid*mid>num) {
            right=mid-1;
        }else if(mid*mid<num){
            left=mid+1;
        }else{
            return true;
        }
        //console.log(mid);
    }
    return false;
};

let test=100000000;
let result=isPerfectSquare(test);
console.log(result);

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return              -1 if num is lower than the guess number
 *                       1 if num is higher than the guess number
 *                       otherwise return 0
 */
var guess = function(num) {
    if (num>1702766719) {
        return -1;
    }else if(num<1702766719){
        return 1;
    }else{
        return 0;
    }
}


/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left=1;
    let right=n;
    let mid;
    while(left<right){
        mid= Math.floor(left + (right - left) / 2);  // 防止计算时溢出;
        if(guess(mid)===-1) {
            right=mid-1;
        }else if(guess(mid)===1){
            left=mid+1;
        }else{
            return mid;
        }
        //console.log(mid);
    }
    return left;
};


let test=2126753390;
let result=guessNumber(test);
console.log(result);

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let m=new Map();
    for(let i=0;i<magazine.length;i++){
        m.set(magazine[i],m.has(magazine[i]) ? m.get(magazine[i])+1 : 1);
    }
    for(let i=0;i<ransomNote.length;i++){
        if (m.has(ransomNote[i])) {
            if (m.get(ransomNote[i])===0) {
                return false;
            }else{
                m.set(ransomNote[i],m.get(ransomNote[i])-1);
            }
        }else{
            return false;
        }
    }
    return true;
};


let test="ab";
let result=canConstruct("aa",test);
console.log(result);

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length===0) {
        //s为空时一定是
        return true;
    }
    if (s.length===t.length) {
        return s===t;
    }
    if(s.length>t.length){
        return false;
    }
    for (let i=0,j=0;i<s.length;j++){
        if (j===t.length) {
            //遍历完t,但s没有遍历完
            return false;
        }
        if (s[i]===t[j]) {
            i++;
        }
    }
    return true;
};


let test1="abec";
let test2="abcde";
let result=isSubsequence(test1,test2);
console.log(result);


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let m=t.length;
    let n=s.length;
    const f=new Array(m+1);
    for(let j=0;j<m+1;j++){
        f[j]=new Array(26).fill(m);
    }

    //预处理出对于 t 的每一个位置，从该位置开始往后每一个字符第一次出现的位置。
    for(let i=m-1;i>=0;i--){
        for(let j=0;j<26;j++){
            if (t.charCodeAt(i)==="a".charCodeAt()+j) {
                f[i][j]=i;
            }else{
                f[i][j]=f[i+1][j];
            }
        }
    }
    //console.log(f);
    let add=0;
    for(let i=0;i<n;i++){
        if (f[add][s.charCodeAt(i)-"a".charCodeAt()]===m) {
            //m表示遍历完t了
            return false;
        }
        add=f[add][s.charCodeAt(i)-"a".charCodeAt()]+1;
    }
    return true;
};


let test1="abecd";
let test2="zxabdeccde";
let result=isSubsequence(test1,test2);
console.log(result);

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    let result=[];
    let n=arr.length;
    while(n>1){
        let maxValueIndex=findMaxValueIndex(arr,n);
        if (maxValueIndex!==n-1) {
            if (maxValueIndex!==0) {
                result.push(maxValueIndex+1);
                swapArrSort(arr,maxValueIndex);
            }
            result.push(n);
            swapArrSort(arr,n-1);
        }
        n--;
        //console.log(arr);
    }
    return result;

};
var findMaxValueIndex=function(arr,n){
    for(let i=0;i<n;i++){
        if (arr[i]===n) {
            return i;
        }
    }
}
var swapArrSort=function(arr,n){
    let temp;
    for(let i=0,j=n;i<j;i++,j--){
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
}


let test=[3,2,4,5,6,1];
let result=pancakeSort(test);
console.log(result);

/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let n=bits.length-1;
    if (bits[n]===1) {
        return false;
    }
    for(let i=0;i<n;){
        if (i===n-1) {
            if (bits[i]===1) {
                return false;
            }
        }
        if (bits[i]==1) {
            i+=2;
        }else{
            i++;
        }
    }
    return true;
};

let test=[1, 1, 1, 0];
let result=isOneBitCharacter(test);
console.log(result);

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    if (turnedOn>8) {
        return [];
    }
    //const hours=[0,1,2,4,8];
    //const minutes=[0,1,2,4,8,16,32];
    const hourOfNums=new Array(4);  //亮几个灯时能代表的小时数,最多亮三盏灯
    for(let i=0;i<4;i++){
        hourOfNums[i]=new Array();
    }
    for(let i=0;i<12;i++){
        let numOfOne=countBitOfOne(i.toString(2));
        hourOfNums[numOfOne].push(i.toString());
    }

    const minuteOfNums=new Array(6);  //亮几个灯时能代表的分钟数,最多亮5盏灯
    for(let i=0;i<6;i++){
        minuteOfNums[i]=new Array();
    }
    for(let i=0;i<60;i++){
        let numOfOne=countBitOfOne(i.toString(2));
        minuteOfNums[numOfOne].push(("00"+i.toString()).slice(-2));
    }

    let result=[];
    for(let h=0;h<=turnedOn;h++){
        let m=turnedOn-h;
        if (h<=3 && m<=5) {
            for(let i=0;i<hourOfNums[h].length;i++){
                for(let j=0;j<minuteOfNums[m].length;j++){
                    result.push(hourOfNums[h][i]+":"+minuteOfNums[m][j]);
                }
            }
            
        }
    }
    return result;
};

var countBitOfOne=function(bits){
    let count=0;
    bits=bits.split("");
    for(let i=0;i<bits.length;i++){
        count+=Number(bits[i]);
    }
    return count;
}

let test=1;
let result=readBinaryWatch(test);
console.log(result);

/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    let n=dominoes.length;
    dominoes=dominoes.split("");
    let left=-1;  //往右倒的
    let right=n;  //往左倒的
    for(let i=0;i<n;i++){
        if(dominoes[i]==="L"){
            right=i;
            if (left===-1) {
                //前面向right倒的没有或倒完了
                while(dominoes[right-1]==="."){
                    dominoes[--right]="L";
                }
                right=n;
            }else{
                //前面有向right倒的
                while((left+1)!==(right-1) && (left+1)!==right && left!==(right-1)){
                    dominoes[++left]="R";
                    dominoes[--right]="L";
                }
                left=-1;
                right=n;
            }
        }else if(dominoes[i]==="R"){
            if (left!==-1) {
                //连续遇到往右倒的
                while(dominoes[left+1]==="."){
                    dominoes[++left]="R";
                }
            }
            left=i;

        }else{}
    }
    if (right===n && left!==-1) {
        while((left+1)<n){
            //后面只有往右倒的
            dominoes[++left]="R";
        }
    }
    return dominoes.join("");
};

let test=".L.R...LR..L..";
let result=pushDominoes(test);
console.log(result);

const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const NUM_MAX = 30;
const MOD = 1000000007;
var numberOfGoodSubsets = function(nums) {
    const freq = new Array(NUM_MAX + 1).fill(0);
    for (const num of nums) {
        ++freq[num];
    }

    const f = new Array(1 << PRIMES.length).fill(0);
    f[0] = 1;
    for (let i = 0; i < freq[1]; ++i) {
        f[0] = f[0] * 2 % MOD;
    }
    
    for (let i = 2; i <= NUM_MAX; ++i) {
        if (freq[i] === 0) {
            continue;
        }
        
        // 检查 i 的每个质因数是否均不超过 1 个
        let subset = 0, x = i;
        let check = true;
        for (let j = 0; j < PRIMES.length; ++j) {
            const prime = PRIMES[j];
            if (x % (prime * prime) == 0) {
                check = false;
                break;
            }
            if (x % prime === 0) {
                subset |= (1 << j);
            }
        }
        if (!check) {
            continue;
        }

        // 动态规划
        for (let mask = (1 << PRIMES.length) - 1; mask > 0; --mask) {
            if ((mask & subset) === subset) {
                f[mask] = ((f[mask] + (f[mask ^ subset]) * freq[i]) % MOD);
            }
        }
    }

    let ans = 0;
    for (let mask = 1, maskMax = (1 << PRIMES.length); mask < maskMax; ++mask) {
        ans = (ans + f[mask]) % MOD;
    }
    
    return ans;
};


let test= [4,2,3,15];
let result=numberOfGoodSubsets(test);
console.log(result);

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    s=s.split("");
    let right=s.length-1;
    let left=0;
    let temp="";
    //console.log(set);
    while(left<right){
        let acci1=s[left].toLowerCase().charCodeAt()
        if (acci1>96 && acci1<123) {
            temp=s[left];
            let acci2=s[right].toLowerCase().charCodeAt()
            if (acci2>96 && acci2<123) {
                s[left]=s[right];
                s[right]=temp;
                left++;
                right--;
            }else{
                right--;
            }
        }else{
            left++;
        }
    }
    return s.join("");
};

let test= "a-bC-dEf-ghIj";
let result=reverseOnlyLetters(test);
console.log(result);

//console.log("a".charCodeAt());  //97
//console.log("z".charCodeAt());  //122
//console.log("A".charCodeAt());  //65
//console.log("Z".charCodeAt());  //90
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
    num1=num1.replace("i","").split("+");
    num2=num2.replace("i","").split("+");
    let real=Number(num1[0])*Number(num2[0])-Number(num1[1])*Number(num2[1]);
    let imaginary_part=Number(num1[0])*Number(num2[1])+Number(num1[1])*Number(num2[0]);
    return real.toString()+"+"+imaginary_part.toString()+"i";
};


let result=complexNumberMultiply("1+-1i","1+-1i");
console.log(result);

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
     let max_diff=0;
     let min_val=nums[0];
     for(let i=1;i<nums.length;i++){
        let diff=nums[i]-min_val;
        max_diff=max_diff>diff ? max_diff : diff;
        min_val=nums[i]<min_val ? nums[i] : min_val;
     }
    return max_diff>0 ? max_diff : -1;
};

let test=[1,5,2,10];
let result=maximumDifference(test);
console.log(result);

/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
   let n=nums.length;
   if (n===1) {
      return nums[0]+"";
   }
   if (n===2) {
      return nums.join("/");
   }
   let result=nums[0]+"/("+nums.slice(1,n).join("/")+")"
   return result;
};

let test=[1000,100,10,2];
let result=optimalDivision(test);
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
   return root!==null ? dfs(root) : 0;
};

var dfs=function(root){
   let ans=0;
   if (root.left!==null) {
      ans+=isLeafNode(root.left) ? root.left.val : dfs(root.left);
   }
   if (root.right!==null && !isLeafNode(root.right)) {
      ans+=dfs(root.right);
   }
   return ans;
}

var isLeafNode=function(root){
   return root.left===null && root.right===null;
}

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
   if (num===0) {
      return "0";
   }
   const ans=[];
   for (let i=7;i>=0;i--){
      let val=(num>>(4*i)) & 0xf;
      if (ans.length>0 || val>0) {
         let digit=val<10 ? String.fromCharCode("0".charCodeAt()+val) : String.fromCharCode("a".charCodeAt()+val-10);
         ans.push(digit);
      }
   }
   return ans.join("");
};


let test=26;
let result=toHex(test);
console.log(result);

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
   let m=new Map();
   for(let i=0;i<s.length;i++){
      m.set(s[i],m.has(s[i]) ? m.get(s[i])+1 : 1);
   }
   let ans=0;
   let flag=false;  //是否存在奇数个，中间可以是奇数个
   for(let val of m.values()){
      if (val%2===0) {
         ans+=val;
      }else{
         ans+=val-1;
         flag=true;
      }
   }
   if (flag) {
      ans+=1;
   }
   return ans;
};

let test="abccccdd";
let result=longestPalindrome(test);
console.log(result);

/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {
   const delta=new Array(n).fill(0);
   let zero=n,ans=0,cnt=0;
   const dfs=(requests,pos)=>{
      if (pos===requests.length) {
         if (zero===n) {
            ans=Math.max(ans,cnt);
         }
         return;
      }
      //不选 requests[pos]
      dfs(requests,pos+1);
      //选 requests[pos]
      let z=zero;
      ++cnt;
      const r=requests[pos];
      let x=r[0],y=r[1];
      //增加或减少前为0,zero减 1
      zero-=delta[x]===0 ? 1:0;
      --delta[x];
      //增加或减少后为0,zero加1
      zero+=delta[x]===0 ? 1:0;
      //增加或减少前为0,zero减 1
      zero-=delta[y]===0 ? 1:0;
      ++delta[y];
      //增加或减少后为0,zero加1
      zero+=delta[y]===0 ? 1:0;
      dfs(requests,pos+1);
      --delta[y];
      ++delta[x];
      --cnt;
      zero=z;
   }
   dfs(requests,0);
   return ans;
};

let n = 5;
let requests = [[0,1],[1,0],[0,1],[1,2],[2,0],[3,4]]
let result=maximumRequests(n,requests);
console.log(result);

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
   const ans=["1"];
   let i=2;
   while(i<=n){
      if (i%3===0 && i%5===0) {
         ans.push("FizzBuzz");
      }else if(i%3===0){
         ans.push("Fizz");
      }else if(i%5===0){
         ans.push("Buzz");
      }else{
         ans.push(i+"");
      }
      i++;
   }
   return ans;
};

let n = 5;
let result=fizzBuzz(n);
console.log(result);

var thirdMax = function(nums) {
    let a = -Number.MAX_VALUE, b = -Number.MAX_VALUE, c = -Number.MAX_VALUE;
    for (const num of nums) {
        if (num > a) {
            c = b;
            b = a;
            a = num;
        } else if (a > num && num > b) {
            c = b;
            b = num;
        } else if (b > num && num > c) {
            c = num;
        }
    }
    return c === -Number.MAX_VALUE ? a : c;
};

let nums = [3, 2, 1,2,3,4,2,5];
let result=thirdMax(nums);
console.log(result);

/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
   let ans=0;
   let n=nums.length;
   for(let i=0;i<n;i++){
      let minValue=Number.MAX_VALUE,maxValue=-Number.MAX_VALUE;
      for(let j=i;j<n;j++){
         minValue=Math.min(minValue,nums[j]);
         maxValue=Math.max(maxValue,nums[j]);
         ans+=maxValue-minValue;
      }
   }
   return ans;

};

let str1=[1,2,3,4,5];
let result=subArrayRanges(str1);
console.log(result);

/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
   let n=data.length;
   let m=0;  //1~4
   let flag=true;
   for(let i=0;i<n;i++){
      let binary=("00000000"+data[i].toString(2)).slice(-8);
      //console.log(binary);
      if (flag) {
         //每个字符的第一个字节
         for(let j=0;j<8;j++){
            if (binary[j]==="0") {
               break;
            }else{
               m++;
            }
         }
         if(m===1 || m>4){
            //开始字节不能一个1开头,不能超过4
            return false;
         }else if (m!==0) {
            flag=false;
            m--;  //再遍历m-1个
         }else{
            //为0时代表一个字节的字符
         }
      }else{
         //判断后续m-1个
         if (binary.indexOf("10")!==0) {
            return false;
         }
         m--;
         if (m==0) {
            flag=true;
         }
      }
   }
   if(m>0){
      //判断最后是否满足
      return false;
   }
   return true;
};

let data = [197,130,1];
let result=validUtf8(data);
console.log(result);

var OffLightState=function(light){
  this.light=light;
};
OffLightState.prototype.buttonWasPressed=function(){
  console.log( '弱光' ); // offLightState 对应的行为
  this.light.setState(this.light.weakLightState);  //切换状态到 weakLightState
};

var WeakLightState=function(light){
  this.light=light;
};
WeakLightState.prototype.buttonWasPressed=function(){
  console.log( '强光' ); // weakLightState 对应的行为
  this.light.setState( this.light.strongLightState ); // 切换状态到 strongLightState
};

var StrongLightState = function( light ){
  this.light = light;
};
StrongLightState.prototype.buttonWasPressed = function(){
  console.log( '超强光' ); // strongLightState 对应的行为
  this.light.setState( this.light.superStrongLightState ); // 切换状态到 superStrongLightState
};

var State=function(){};
State.prototype.buttonWasPressed=function(){
  throw new Error("父类的 buttonWasPressed 方法必须被重写");
}

var SuperStrongLightState = function( light ){
  this.light = light;
};
SuperStrongLightState.prototype=new State();  //// 继承抽象父类

SuperStrongLightState.prototype.buttonWasPressed = function(){
  // 重写 buttonWasPressed 方法
  console.log( '关灯' );
  this.light.setState( this.light.offLightState );
};

var Light=function(){
  this.offLightState=new OffLightState(this);
  this.weakLightState=new WeakLightState(this);
  this.strongLightState=new StrongLightState(this);
  this.superStrongLightState=new SuperStrongLightState(this);
  this.button=null;
};

Light.prototype.init=function(){
  var button=document.createElement("button");
  var self=this;
  button.innerHTML="开关";
  this.button=document.body.appendChild(button);
  this.currentState=this.offLightState;  //设置当前状态
  this.button.onclick=function(){
    self.currentState.buttonWasPressed();
  }
};

Light.prototype.setState=function(newState){
  this.currentState=newState;
};

var light=new Light();
light.init();

window.external.upload=function(state){
  console.log(state);  //可能为 sign、uploading、done、error
};

var plugin=(function(){
  var plugin=document.createElement("embed");
  plugin.style.display="none";

  plugin.type="application/txftn-webkit";
  
  plugin.sign = function(){
    console.log( '开始文件扫描' );
  }
  plugin.pause = function(){
    console.log( '暂停文件上传' );
  };
  plugin.uploading = function(){
    console.log( '开始文件上传' );
  };
  plugin.del = function(){
    console.log( '删除文件上传' );
  }
  plugin.done = function(){
    console.log( '文件上传完成' );
  }
  document.body.appendChild( plugin );

  return plugin;
})();

var Upload=function(fileName){
  this.plugin=plugin;
  this.fileName=fileName;
  this.button1=null;
  this.button2=null;
  this.signState=new SignState(this);  //设置初始状态为 waiting
  this.uploadingState = new UploadingState( this );
  this.pauseState = new PauseState( this );
  this.doneState = new DoneState( this );
  this.errorState = new ErrorState( this );
  this.currState = this.signState; // 设置当前状态
};

Upload.prototype.init=function(){
  var that=this;
  this.dom=document.createElement("div");
  this.dom.innerHTML=
  '<span>文件名称:'+ this.fileName +'</span>'+
  '<button data-action="button1">扫描中</button>'+
  '<button data-action="button2">删除</button>';

  document.body.appendChild( this.dom );
  this.button1 = this.dom.querySelector( '[data-action="button1"]' ); // 第一个按钮
  this.button2 = this.dom.querySelector( '[data-action="button2"]' ); // 第二个按钮
  this.bindEvent();
};

Upload.prototype.bindEvent=function(){
  var self=this;
  this.button1.onclick=function(){
    self.currState.clickHandle1();
  };
  this.button2.onclick=function(){
    self.currState.clickHandle2();
  };
};

Upload.prototype.sign=function(){
  this.plugin.sign();
  this.currState=this.signState;
};
Upload.prototype.uploading=function(){
  this.button1.innerHTML = '正在上传，点击暂停';
  this.plugin.uploading();
  this.currState=this.uploadingState;
};
Upload.prototype.pause = function(){
  this.button1.innerHTML = '已暂停，点击继续上传';
  this.plugin.pause();
  this.currState = this.pauseState;
};
Upload.prototype.done = function(){
  this.button1.innerHTML = '上传完成';
  this.plugin.done();
  this.currState = this.doneState;
};
Upload.prototype.error = function(){
  this.button1.innerHTML = '上传失败';
  this.currState = this.errorState;
};
Upload.prototype.del = function(){
  this.plugin.del();
  this.dom.parentNode.removeChild( this.dom );
};

var StateFactory=(function(){
  var State=function(){};
  State.prototype.clickHandle1=function(){
    throw new Error( '子类必须重写父类的 clickHandler1 方法' );
  }
  State.prototype.clickHandler2 = function(){
    throw new Error( '子类必须重写父类的 clickHandler2 方法' );
  }
  return function(param){
    var F=function(uploadObj){
      this.uploadObj=uploadObj;
    };
    F.prototype=new State();
    for(var i in param){
      F.prototype[i]=param[i];
    }
    return F;
  }
})();

var SignState=StateFactory({
  clickHandle1:function(){
    console.log( '扫描中，点击无效...' );
  },
  clickHandler2:function(){
    console.log( '文件正在上传中，不能删除' );
  }
});
var UploadingState = StateFactory({
  clickHandler1: function(){
    this.uploadObj.pause();
  },
  clickHandler2: function(){
    console.log( '文件正在上传中，不能删除' );
  }
});
var PauseState = StateFactory({
  clickHandler1: function(){
    this.uploadObj.uploading();
  },
  clickHandler2: function(){
    this.uploadObj.del();
  }
});
var DoneState = StateFactory({
  clickHandler1: function(){
    console.log( '文件已完成上传, 点击无效' );
  },
  clickHandler2: function(){
    this.uploadObj.del();
  }
});
var ErrorState = StateFactory({
  clickHandler1: function(){
    console.log( '文件上传失败, 点击无效' );
  },
  clickHandler2: function(){
    this.uploadObj.del();
  }
});

var uploadObj=new Upload("计算机药物设计");
uploadObj.init();

window.external.upload=function(state){
  //// 插件调用 JavaScript 的方法
  uploadObj[state]();
};

window.external.upload("sign");  //// 文件开始扫描

setTimeout(function(){
  window.external.upload("uploading");  // 1 秒后开始上传
},1000);

setTimeout(function(){
  window.external.upload("done");  // 5 秒后上传完成
},5000);

  // 基于准备好的dom，初始化echarts实例
  var myChart=echarts.init(document.getElementById("main"));
  window.onresize=function(){
    myChart.resize();
  }
  // 指定图表的配置项和数据

var option = {
  tooltip:{
    trigger:"axis",
    axisPointer:{type:"cross"},
  },
  legend:{},
  xAxis:[
  {
    type:"category",
    axisTick:{
      alignWithLable:true,
    },
    data:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'] ,
  }],
  yAxis:[
    {
      type:"value",
      name:"降水量",
      min:0,
      max:250,
      position:"right",
      axisLabel:{
        formatter:"{value} ml",
      }
    },
    {
      type:"value",
      name:"温度",
      min:0,
      max:25,
      position:"left",
      axisLabel:{
        formatter:"{value} °C",
      }
    },
  ],
  series:[
    {
      name:"降水量",
      type:"bar",
      yAxisIndex:0,
      data: [6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3],
    },
    {
      name:"温度",
      type:"line",
      smooth:true,
      yAxisIndex:1,
      data:[6.0, 10.2, 10.3, 11.5, 10.3, 13.2, 14.3, 16.4, 18.0, 16.5, 12.0, 5.2],
    },
  ],
  
};

myChart.setOption(option);

var option = {
  title: {
    text: '饼图程序调用高亮示例',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

let currentIndex=-1;
setInterval(function(){
  var dataLen=option.series[0].data.length;
  myChart.dispatchAction({
    type:"downplay",
    seriesIndex:0,
    dataIndex:currentIndex,
  });
  currentIndex=(currentIndex+1)%dataLen;
  myChart.dispatchAction({
    type:"highlight",
    seriesIndex:0,
    dataIndex:currentIndex,
  });
  myChart.dispatchAction({
    type:"showTip",
    seriesIndex:0,
    dataIndex:currentIndex,
  });
},1500);

  // 指定图表的配置项和数据
var data = [900, 345, 393, -108, -154, 135, 178, 286, -119, -361, -203];
var help = [];
var positive = [];
var negative = [];
for (var i = 0, sum = 0; i < data.length; ++i) {
  if (data[i] >= 0) {
    positive.push(data[i]);
    negative.push('-');
  } else {
    positive.push('-');
    negative.push(-data[i]);
  }

  if (i === 0) {
    help.push(0);
  } else {
    sum += data[i - 1];
    if (data[i] < 0) {
      help.push(sum + data[i]);
    } else {
      help.push(sum);
    }
  }
}
var option = {
  title:{
    text:"Waterfall",
  },
  grid:{
    left:"3%",
    right:"4%",
    bottom:"3%",
    containLabel:true,
  },
  xAxis:{
    type:"category",
    splitLine:{show:false},
    data:(function(){
      var list=[];
      for(let i=1;i<=11;i++){
        list.push("Oct/"+i);
      }
      return list;
    })(),
  },
  yAxis:{
    type:"value",
  },
  series:[
      {
        type:"bar",
        stack:"all",
        itemStyle:{
          normal:{
            barBorderColor:"#fff",
            color:"#fff"
          },
          emphasis:{
            barBorderColor:"#fff",
            color:"#fff",
          }
        },
        data:help,
      },
      {
        name:"positive",
        type:"bar",
        stack:"all",
        data:positive
      },
      {
        name:"negative",
        type:"bar",
        stack:"all",
        data:negative,
        itemStyle:{
          color:"#f33"
        }
      },
    ],
};

var option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      type:"line",
      data: [10, 22, 28, 23, 19],
      lineStyle:{
        normal:{
          color:"#329876",
          width:4,
          type:"dashed",
        }
      }
    },
    ],
};

var option = {
  series: [
    {
      type: 'scatter',
      symbolSize: 1,
      data:[
        {
          value:[0,0],
          label: {
            normal: {
              show: true,
              formatter: [
                'Plain text',
                  '{textBorder|textBorderColor + textBorderWidth}',
                  '{textShadow|textShadowColor + textShadowBlur + textShadowOffsetX + textShadowOffsetY}',
                  '{bg|backgroundColor + borderRadius + padding}',
                  '{border|borderColor + borderWidth + borderRadius + padding}',
                  '{shadow|shadowColor + shadowBlur + shadowOffsetX + shadowOffsetY}'
                ].join('\n'),
              backgroundColor: '#eee',
              borderColor: '#333',
              borderWidth: 2,
              borderRadius: 5,
              padding: 10,
              color: '#000',
              fontSize: 14,
              shadowBlur: 3,
              shadowColor: '#888',
              shadowOffsetX: 0,
              shadowOffsetY: 3,
              lineHeight: 30,
              rich: {
                textBorder:{
                  fontSize:20,
                  textBorderCorlor:"#000",
                  textBorderWidth:3,
                  color:"#fff",
                },
                textShadow:{
                  fontSize:16,
                  textShadowBlur:5,
                  textShadowColor:"#000",
                  textShadowOffsetX:3,
                  textShadowOffsetY:3,
                  color:"#fff",
                },
                bg:{
                  backgroundColor:"#339911",
                  color:"#fff",
                  borderRadius:15,
                  padding:5,
                },
                border:{
                  color:"#000",
                  borderColor:"#449911",
                  borderWidth:1,
                  borderRadius:3,
                  padding:5,
                },
                shadow:{
                  backgroundColor:"#992233",
                  padding:5,
                  color:"#fff",
                  shadowBlur:5,
                  shadowColor:"#336699",
                  shadowOffsetX:6,
                  shadowOffsetY:6,
                },
              },
            }
          }
        }
      ]
    }
  ],
   xAxis: {
    show: false,
    min: -1,
    max: 1
  },
  yAxis: {
    show: false,
    min: -1,
    max: 1
  },
};

const labelOption={
  show:true,
  rotate:90,
  formatter:"{c} {name|{a}}",
  fontSize:16,
  rich:{
    name:{},
  }
};

var option = {
  xAxis: [
    {
      type: 'category',
      data: ['2012', '2013', '2014', '2015', '2016']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name:"Forest",
      type:"bar",
      barGap:0,
      label:labelOption,
      emphasis:{
        focus:"series",
      },
      data:[320, 332, 301, 334, 390],
    },
     {
      name: 'Steppe',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290]
    },
  ],
  
};


const weatherIcons = {
  Sunny: ROOT_PATH + '/data/asset/img/weather/sunny_128.png',
  Cloudy: ROOT_PATH + '/data/asset/img/weather/cloudy_128.png',
  Showers: ROOT_PATH + '/data/asset/img/weather/showers_128.png'
};
option = {
  title: {
    text: 'Weather Statistics',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    bottom: 10,
    left: 'center',
    data: ['CityA', 'CityB', 'CityD', 'CityC', 'CityE']
  },
  series: [
    {
      type: 'pie',
      radius: '65%',
      center: ['50%', '50%'],
      selectedMode: 'single',
      data: [
        {
          value: 1548,
          name: 'CityE',
          label: {
            formatter: [
              '{title|{b}}{abg|}',
              '  {weatherHead|Weather}{valueHead|Days}{rateHead|Percent}',
              '{hr|}',
              '  {Sunny|}{value|202}{rate|55.3%}',
              '  {Cloudy|}{value|142}{rate|38.9%}',
              '  {Showers|}{value|21}{rate|5.8%}'
            ].join('\n'),
            backgroundColor: '#eee',
            borderColor: '#777',
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              title: {
                color: '#eee',
                align: 'center'
              },
              abg: {
                backgroundColor: '#333',
                width: '100%',
                align: 'right',
                height: 25,
                borderRadius: [4, 4, 0, 0]
              },
              Sunny: {
                height: 30,
                align: 'left',
                backgroundColor: {
                  image: weatherIcons.Sunny
                }
              },
              Cloudy: {
                height: 30,
                align: 'left',
                backgroundColor: {
                  image: weatherIcons.Cloudy
                }
              },
              Showers: {
                height: 30,
                align: 'left',
                backgroundColor: {
                  image: weatherIcons.Showers
                }
              },
              weatherHead: {
                color: '#333',
                height: 24,
                align: 'left'
              },
              hr: {
                borderColor: '#777',
                width: '100%',
                borderWidth: 0.5,
                height: 0
              },
              value: {
                width: 20,
                padding: [0, 20, 0, 30],
                align: 'left'
              },
              valueHead: {
                color: '#333',
                width: 20,
                padding: [0, 20, 0, 30],
                align: 'center'
              },
              rate: {
                width: 40,
                align: 'right',
                padding: [0, 10, 0, 0]
              },
              rateHead: {
                color: '#333',
                width: 40,
                align: 'center',
                padding: [0, 10, 0, 0]
              }
            }
          }
        },
        { value: 735, name: 'CityC' },
        { value: 510, name: 'CityD' },
        { value: 434, name: 'CityB' },
        { value: 335, name: 'CityA' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

function makeRandomData() {
  return [
    {
      value: Math.random(),
      name: 'A'
    },
    {
      value: Math.random(),
      name: 'B'
    },
    {
      value: Math.random(),
      name: 'C'
    }
  ];
}
option = {
  series: [
    {
      type: 'pie',
      radius: [0, '50%'],
      data: makeRandomData()
    }
  ]
};
myChart.setOption(option);
setInterval(() => {
  myChart.setOption({
    series: {
      data: makeRandomData()
    }
  });
}, 2000);

const easingFuncs = {
  linear: function (k) {
    return k;
  },
  quadraticIn: function (k) {
    return k * k;
  },
  quadraticOut: function (k) {
    return k * (2 - k);
  },
  quadraticInOut: function (k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k;
    }
    return -0.5 * (--k * (k - 2) - 1);
  },
  cubicIn: function (k) {
    return k * k * k;
  },
  cubicOut: function (k) {
    return --k * k * k + 1;
  },
  cubicInOut: function (k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k;
    }
    return 0.5 * ((k -= 2) * k * k + 2);
  },
  quarticIn: function (k) {
    return k * k * k * k;
  },
  quarticOut: function (k) {
    return 1 - --k * k * k * k;
  },
  quarticInOut: function (k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k * k;
    }
    return -0.5 * ((k -= 2) * k * k * k - 2);
  },
  quinticIn: function (k) {
    return k * k * k * k * k;
  },
  quinticOut: function (k) {
    return --k * k * k * k * k + 1;
  },
  quinticInOut: function (k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k * k * k;
    }
    return 0.5 * ((k -= 2) * k * k * k * k + 2);
  },
  sinusoidalIn: function (k) {
    return 1 - Math.cos((k * Math.PI) / 2);
  },
  sinusoidalOut: function (k) {
    return Math.sin((k * Math.PI) / 2);
  },
  sinusoidalInOut: function (k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  },
  exponentialIn: function (k) {
    return k === 0 ? 0 : Math.pow(1024, k - 1);
  },
  exponentialOut: function (k) {
    return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
  },
  exponentialInOut: function (k) {
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    if ((k *= 2) < 1) {
      return 0.5 * Math.pow(1024, k - 1);
    }
    return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
  },
  circularIn: function (k) {
    return 1 - Math.sqrt(1 - k * k);
  },
  circularOut: function (k) {
    return Math.sqrt(1 - --k * k);
  },
  circularInOut: function (k) {
    if ((k *= 2) < 1) {
      return -0.5 * (Math.sqrt(1 - k * k) - 1);
    }
    return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
  },
  elasticIn: function (k) {
    var s;
    var a = 0.1;
    var p = 0.4;
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = (p * Math.asin(1 / a)) / (2 * Math.PI);
    }
    return -(
      a *
      Math.pow(2, 10 * (k -= 1)) *
      Math.sin(((k - s) * (2 * Math.PI)) / p)
    );
  },
  elasticOut: function (k) {
    var s;
    var a = 0.1;
    var p = 0.4;
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = (p * Math.asin(1 / a)) / (2 * Math.PI);
    }
    return (
      a * Math.pow(2, -10 * k) * Math.sin(((k - s) * (2 * Math.PI)) / p) + 1
    );
  },
  elasticInOut: function (k) {
    var s;
    var a = 0.1;
    var p = 0.4;
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = (p * Math.asin(1 / a)) / (2 * Math.PI);
    }
    if ((k *= 2) < 1) {
      return (
        -0.5 *
        (a *
          Math.pow(2, 10 * (k -= 1)) *
          Math.sin(((k - s) * (2 * Math.PI)) / p))
      );
    }
    return (
      a *
        Math.pow(2, -10 * (k -= 1)) *
        Math.sin(((k - s) * (2 * Math.PI)) / p) *
        0.5 +
      1
    );
  },
  // 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
  backIn: function (k) {
    var s = 1.70158;
    return k * k * ((s + 1) * k - s);
  },
  backOut: function (k) {
    var s = 1.70158;
    return --k * k * ((s + 1) * k + s) + 1;
  },
  backInOut: function (k) {
    var s = 1.70158 * 1.525;
    if ((k *= 2) < 1) {
      return 0.5 * (k * k * ((s + 1) * k - s));
    }
    return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
  },
  // 创建弹跳效果
  bounceIn: function (k) {
    return 1 - easingFuncs.bounceOut(1 - k);
  },
  bounceOut: function (k) {
    if (k < 1 / 2.75) {
      return 7.5625 * k * k;
    } else if (k < 2 / 2.75) {
      return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
    } else if (k < 2.5 / 2.75) {
      return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
    } else {
      return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
    }
  },
  bounceInOut: function (k) {
    if (k < 0.5) {
      return easingFuncs.bounceIn(k * 2) * 0.5;
    }
    return easingFuncs.bounceOut(k * 2 - 1) * 0.5 + 0.5;
  }
};
const N_POINT = 30;
const grids = [];
const xAxes = [];
const yAxes = [];
const series = [];
const titles = [];
let count = 0;
Object.keys(easingFuncs).forEach(function (easingName) {
  var easingFunc = easingFuncs[easingName];
  var data = [];
  for (var i = 0; i <= N_POINT; i++) {
    var x = i / N_POINT;
    var y = easingFunc(x);
    data.push([x, y]);
  }
  grids.push({
    show: true,
    borderWidth: 0,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowBlur: 2
  });
  xAxes.push({
    type: 'value',
    show: false,
    min: 0,
    max: 1,
    gridIndex: count
  });
  yAxes.push({
    type: 'value',
    show: false,
    min: -0.4,
    max: 1.4,
    gridIndex: count
  });
  series.push({
    name: easingName,
    type: 'line',
    xAxisIndex: count,
    yAxisIndex: count,
    data: data,
    showSymbol: false,
    animationEasing: easingName,
    animationDuration: 1000
  });
  titles.push({
    textAlign: 'center',
    text: easingName,
    textStyle: {
      fontSize: 12,
      fontWeight: 'normal'
    }
  });
  count++;
});
var rowNumber = Math.ceil(Math.sqrt(count));
grids.forEach(function (grid, idx) {
  grid.left = ((idx % rowNumber) / rowNumber) * 100 + 0.5 + '%';
  grid.top = (Math.floor(idx / rowNumber) / rowNumber) * 100 + 0.5 + '%';
  grid.width = (1 / rowNumber) * 100 - 1 + '%';
  grid.height = (1 / rowNumber) * 100 - 1 + '%';
  titles[idx].left = parseFloat(grid.left) + parseFloat(grid.width) / 2 + '%';
  titles[idx].top = parseFloat(grid.top) + '%';
});
option = {
  title: titles.concat([
    {
      text: 'Different Easing Functions',
      top: 'bottom',
      left: 'center'
    }
  ]),
  grid: grids,
  xAxis: xAxes,
  yAxis: yAxes,
  series: series
};

var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 100; i++) {
  xAxisData.push('A' + i);
  data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
  data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
}
option = {
  legend: {
    data: ['bar', 'bar2']
  },
  xAxis: {
    data: xAxisData,
    splitLine: {
      show: false
    }
  },
  yAxis: {},
  series: [
    {
      name: 'bar',
      type: 'bar',
      data: data1,
      emphasis: {
        focus: 'series'
      },
      animationDelay: function(idx) {
        return idx * 10;
      }
    },
    {
      name: 'bar2',
      type: 'bar',
      data: data2,
      emphasis: {
        focus: 'series'
      },
      animationDelay: function(idx) {
        return idx * 10 + 100;
      }
    }
  ],
  animationEasing: 'elasticOut',
  animationDelayUpdate: function(idx) {
    return idx * 5;
  }
};

const symbolSize = 20;
const data = [
  [40, -10],
  [-30, -5],
  [-76.5, 20],
  [-63.5, 40],
  [-22.1, 50]
];
option = {
  title: {
    text: 'Try Dragging these Points',
    left: 'center'
  },
  tooltip: {
    triggerOn: 'none',
    formatter: function (params) {
      return (
        'X: ' +
        params.data[0].toFixed(2) +
        '<br>Y: ' +
        params.data[1].toFixed(2)
      );
    }
  },
  grid: {
    top: '8%',
    bottom: '12%'
  },
  xAxis: {
    min: -100,
    max: 70,
    type: 'value',
    axisLine: { onZero: false }
  },
  yAxis: {
    min: -30,
    max: 60,
    type: 'value',
    axisLine: { onZero: false }
  },
  dataZoom: [
    {
      type: 'slider',
      xAxisIndex: 0,
      filterMode: 'none'
    },
    {
      type: 'slider',
      yAxisIndex: 0,
      filterMode: 'none'
    },
    {
      type: 'inside',
      xAxisIndex: 0,
      filterMode: 'none'
    },
    {
      type: 'inside',
      yAxisIndex: 0,
      filterMode: 'none'
    }
  ],
  series: [
    {
      id: 'a',
      type: 'line',
      smooth: true,
      symbolSize: symbolSize,
      data: data
    }
  ]
};
setTimeout(function () {
  // Add shadow circles (which is not visible) to enable drag.
  myChart.setOption({
    graphic: data.map(function (item, dataIndex) {
      return {
        type: 'circle',
        position: myChart.convertToPixel('grid', item),
        shape: {
          cx: 0,
          cy: 0,
          r: symbolSize / 2
        },
        invisible: true,
        draggable: true,
        ondrag: function (dx, dy) {
          onPointDragging(dataIndex, [this.x, this.y]);
        },
        onmousemove: function () {
          showTooltip(dataIndex);
        },
        onmouseout: function () {
          hideTooltip(dataIndex);
        },
        z: 100
      };
    })
  });
}, 0);
window.addEventListener('resize', updatePosition);
myChart.on('dataZoom', updatePosition);
function updatePosition() {
  myChart.setOption({
    graphic: data.map(function (item, dataIndex) {
      return {
        position: myChart.convertToPixel('grid', item)
      };
    })
  });
}
function showTooltip(dataIndex) {
  myChart.dispatchAction({
    type: 'showTip',
    seriesIndex: 0,
    dataIndex: dataIndex
  });
}
function hideTooltip(dataIndex) {
  myChart.dispatchAction({
    type: 'hideTip'
  });
}
function onPointDragging(dataIndex, pos) {
  data[dataIndex] = myChart.convertFromPixel('grid', pos);
  // Update data
  myChart.setOption({
    series: [
      {
        id: 'a',
        data: data
      }
    ]
  });
}

myChart.setOption(option);

function UserGreeting(props){
    return "欢迎回来!";
}
function GuestGreeting(props){
    return "请先注册。";
}
function Greeting(props){
    const isLoggedIn=props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

ReactDOM.render(
    <Greeting isLoggedIn={false} />,
    document.getElementById("example")
);


const { series, parallel } = require('gulp');

function clean(cb) {
  // body omitted
  cb();
}

function cssTranspile(cb) {
  // body omitted
  cb();
}

function cssMinify(cb) {
  // body omitted
  cb();
}

function jsTranspile(cb) {
  // body omitted
  cb();
}

function jsBundle(cb) {
  // body omitted
  cb();
}

function jsMinify(cb) {
  // body omitted
  cb();
}

function publish(cb) {
  // body omitted
  cb();
}

exports.build = series(
  clean,
  parallel(
    cssTranspile,
    series(jsTranspile, jsBundle)
  ),
  parallel(cssMinify, jsMinify),
  publish
);


const { series, parallel } = require('gulp');

function streamTask(){
    return src("*.js").pipe(dest("output"));
}
exports.default=streamTask;

function promiseTask(){
    return Promise.resolve("the value is ignored");
}
exports.default=promiseTask;

const {EventEmitter}=require("events");
function eventEmitterTask(){
    const emitter=new EventEmitter();
    setTimeout(()=>emitter.emit("finish"),250);
    return emitter;
}
exports.default=eventEmitterTask;


const {exec}=require("child_process");
function childProcessTask(){
    return exec("date");
}
exports.default=childProcessTask;

const {Observable}=require("rxjs");
function observableTask(){
    return Observable.of(1,2,3);
}
exports.default=observableTask;


function callbackError(cb){
    cb(new Error("error"));
}

const fs=require("fs");
function passingCallback(cb){
    fs.access("gulpfile.js",cb);
}


async function asyncAwaitTask(){
    const {version}=fs.readFileSync("package.json");
    console.log(version);
    await Promise.resolve("some result");
}

exports.default=asyncAwaitTask;

const {src,dest}=require("gulp");
const babel=require("gulp-babel");
const uglify=require("gulp-ugliffy");
const rename=require("gulp-rename");

exports.default=function(){
    return src('src/*.js')
        .pipe(babel())
        .pipe(src('vendor/*.js'))
        .pipe(uglify)
        .pipe(rename({exname:'.min.js'}))
        .pipe(dest('output/'));
}


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


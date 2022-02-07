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




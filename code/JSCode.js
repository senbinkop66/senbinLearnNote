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



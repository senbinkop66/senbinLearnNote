/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort((a,b)=>{
        if (a.length!==b.length) {
            //首先按照单词的长度升序排序
            return a.length-b.length;
        }else{
            //如果单词的长度相同则按照字典序降序排序
            return b.localeCompare(a);
        }
    });
    let longest="";
    let candidates=new Set();
    candidates.add("");
    let n=words.length;
    for(let i=0;i<n;i++){
        let word=words[i];
        if (candidates.has(word.slice(0,word.length-1))) {
            candidates.add(word);
            longest=word;
        }
    }
    return longest;
};

let words = ["w","wo","wor","worl", "world"];
let result=longestWord(words);
console.log(result);
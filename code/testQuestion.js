/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    paragraph=paragraph.replace(/[!?',;.]/g," ");
    paragraph=paragraph.toLowerCase().split(" ");
    let m=new Map();
    let max=0;
    let ans="";
    for (let word of paragraph){
        if (word!=="" && banned.indexOf(word)===-1) {
            m.set(word,m.has(word) ? m.get(word)+1 : 1);
            if (m.get(word)>max){
                max=m.get(word);
                ans=word;
            }
        }
    }
    return ans;
};

let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
let banned = ["hit"]
let result=mostCommonWord(paragraph,banned);
console.log(result);
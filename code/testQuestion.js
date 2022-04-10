/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const passwords=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let s=new Set();
    let index;
    for(let i=0;i<words.length;i++){
        let pass;
        for(let j=0;j<words[i].length;j++){
            index=words[i].charCodeAt(j)-"a".charCodeAt(0);
            pass+=passwords[index];
        }
        s.add(pass);
    }
    return s.size;
};

let words = ["gin", "zen", "gig", "msg"];
let result=uniqueMorseRepresentations(words);
console.log(result);
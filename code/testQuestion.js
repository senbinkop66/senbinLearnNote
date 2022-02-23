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

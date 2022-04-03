/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
	//let n="z".charCodeAt(0)+1;
	//target=target.charCodeAt(0);
	if (target>=letters[letters.length-1]) {
		return letters[0];
	}
	let i=0,j=letters.length-1;
	let mid;
	while(i<j){
		mid=i+Math.floor((j-i)/2);
		if (letters[mid]>target) {
			j=mid;
		}else{
			i=mid+1;
		}
	}
	return letters[i];
	//String.fromCharCode()
};

let letters = ["c", "f", "j"],target = "c";
let result=nextGreatestLetter(letters,target);
console.log(result);
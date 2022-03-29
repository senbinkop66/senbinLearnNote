/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
	n=n.toString(2);
	for(let i=0;i<n.length;i++){
		if (n[i]==n[i-1]) {
			return false;
		}
	}
	return true;
};

let n=7;
let result=hasAlternatingBits(n);
console.log(result);
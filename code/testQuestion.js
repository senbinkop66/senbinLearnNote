/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

let reg=/a\|\/ds/
var selfDividingNumbers = function(left, right) {
	let ans=[];
	for (let i=left;i<=right;i++){
		let n=i.toString();
		if (n.indexOf("0")===-1) {
			let flag=true;
			for (let j=0;j<n.length;j++){
				if (i%Number(n[j])!==0) {
					flag=false;
					break;
				}
			}
			if (flag) {
				ans.push(i);
			}
		}
	}
	return ans;
};

let left = 1, right = 22;
let result=selfDividingNumbers(left,right);
console.log(result);
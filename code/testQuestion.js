/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split("");
    let n = s.length;
    let start = 0;
    for (let i = 0; i < n; i++){
        if (s[i] === " ") {
            swap(s, start,i - 1);
            start = i + 1;
        }
    }
    swap(s, start, n - 1);
    return s.join("");

};
var swap = function(arr, left, right){
    while(left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

let s = "Let's take LeetCode contest";
let result = reverseWords(s);
console.log(result);
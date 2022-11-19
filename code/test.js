/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let height = 0, maxHeight = 0;
  for (let i = 0; i < gain.length; i++) {
    height += gain[i];
    maxHeight = Math.max(height, maxHeight);
  }
  return maxHeight;
};

let gain = [-5,1,5,0,-7];
console.log(largestAltitude(gain));

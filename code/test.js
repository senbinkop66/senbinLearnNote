/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  const n = students.length;
  let sum1 = 0;
  students.forEach((item) => {
    sum1 += item;
  });
  let sum0 = n - sum1;
  for (let i = 0; i < n; i++) {
    if (sandwiches[i] === 0 && sum0 > 0) {
      sum0--;
    } else if (sandwiches[i] === 1 && sum1 > 0) {
      sum1--;
    } else {
      break;
    }
  }
  return sum0 + sum1;
};

let students = [1,1,0,0], sandwiches = [0,1,0,1];
console.log(countStudents(students, sandwiches));
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
    num1=num1.replace("i","").split("+");
    num2=num2.replace("i","").split("+");
    let real=Number(num1[0])*Number(num2[0])-Number(num1[1])*Number(num2[1]);
    let imaginary_part=Number(num1[0])*Number(num2[1])+Number(num1[1])*Number(num2[0]);
    return real.toString()+"+"+imaginary_part.toString()+"i";
};


let result=complexNumberMultiply("1+-1i","1+-1i");
console.log(result);

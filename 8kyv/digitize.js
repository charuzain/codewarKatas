/* Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0] */


const digitize = (n)=> {
  let string =  n.toString();
  let output = [];
  
  for (let i = string.length - 1; i >= 0; i--) {
    output.push(Number(string[i]));
  }
  return output;

};
console.log(digitize(348597));
console.log(digitize(0));
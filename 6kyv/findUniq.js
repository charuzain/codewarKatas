/* Find the unique number
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique */

const findUniq = (arr)=> {
  let output = {};
  for (let elem of arr) {
    output[elem] ? output[elem]++ : output[elem] = 1;
   
  }
  console.log(output);
  for (let key in output) {
    if (output[key] === 1) {
      return key;
    }
  }
};
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));

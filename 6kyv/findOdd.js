// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// const findOdd = (A)=>{
//   let output = {};
//   for (let elem of A) {
//     if (!output[elem]) {
//       output[elem] = 1;
//     } else {
//       output[elem]++;
//     }
//   }
//   for (let key in output) {
//     if (output[key] % 2 !== 0) {
//       return Number(key);
//     }
//   }
// };

const findOdd = (A) => {
  return A.find(number=> A.filter(n => n === number).length % 2 !== 0);
};

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
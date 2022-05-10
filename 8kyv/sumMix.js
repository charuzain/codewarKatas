// Sum Mixed Array
// Instructions
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

const sumMix = (x)=> {
  // return x.reduce((counter,currentItem)=>Number(currentItem) + counter,0);
  return x.reduce((counter,currentItem)=> +currentItem + counter,0);
  // +currentItem --> +n converts a string into number . Its a unary operator

};

console.log(sumMix([9, 3, '7', '3',4]));
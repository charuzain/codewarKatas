// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.'

const average = (array)=>(
  array.length ? array.reduce((count,item)=>count + item,0) / array.length : 0
);
console.log(average([1,2,3]));
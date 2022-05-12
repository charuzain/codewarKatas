// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// const sumArray = (array)=>{
//   if (!array || array.length <= 2) return 0;
//   return array.sort((a,b)=> a - b)
//     .filter((e,i)=> i !== 0 && i !== array.length - 1)
//     .reduce((prev,curr)=>prev + curr,0);
// };

// const sumArray = (arr)=> arr ? arr.sort((a,b)=>a - b).slice(1,-1).reduce((c,p)=> c + p,0) : 0;

const sumArray = (a)=> Array.isArray(a) && a.length > 1 ? a.reduce((c,p)=> c + p,0) - Math.min(...a) - Math.max(...a) : 0;
console.log(sumArray([1, 2,6,4,3]));
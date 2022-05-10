// Reversed sequence
// Instructions
// Build a function that returns an array of integers from n to 1 where n>0.
// Output
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  let output = [];
  for (let i = n; i > 0; i--) {
    output.push(i);
  }
  return output;
};

console.log(reverseSeq(14));
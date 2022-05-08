// Opposite number
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

const opposite = (number)=>{
  return Math.sign(number) ? -number : number;
};

console.log(opposite(-1));
console.log(opposite(-131));
console.log(opposite(11));
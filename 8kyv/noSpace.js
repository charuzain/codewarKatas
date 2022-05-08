// Remove String Spaces
// Simple, remove the spaces from the string, then return the resultant string.

const noSpace = (x)=>{
  // return  x.trim().split("").filter(elem => elem !== " ").join("");
  return x.split(" ").join("");
};

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
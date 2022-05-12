// Reversed Strings
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


const solution = (str)=>{
  let output = "";
  for (let i = 0; i < str.length; i++) {
    output += str[str.length - 1 - i];
  }
  return output;
};

console.log(solution('world'));
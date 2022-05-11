// Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

const findShort = (s)=>{
  let array = s.split(" ");
  let output = [];
  for (let elem of array) {
    output.push(elem.length);
  }
  return Math.min(...output);
};

console.log(findShort(("bitcoin take over the world maybe who knows perhaps")));
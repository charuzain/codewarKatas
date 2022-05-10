// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

const reverseWords = (str)=>{
  // return str.split(" ").map(elem => elem.split("").reverse().join("")).join(" ");
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
};

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
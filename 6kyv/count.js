/* Count characters in your string
Instructions
Output
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}. */


const count = (string)=> {
  const output =  {};
  string.split("").map(elem=>output[elem] ? output[elem] += 1 : output[elem] = 1);
  return output;
};

console.log(count("aba"));
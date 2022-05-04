/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

// const fakeBin = (x)=> {
//   let string = "";
//   for (let char of x) {
//     char >= 5  ? string  += 1 : string += 0;
//   }
//   return string;
// };

// console.log(fakeBin('45385593107843568'));

// other solution
// create an array
// use map
const fakeBin = (x)=> x.split("").map(char=>char >= 5 ? 1 : 0).join("");

console.log(fakeBin('45385593107843568'));

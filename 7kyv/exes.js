/* Exes and Ohs
Instructions
Output
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

const XO = (str)=> {
  if (!str.toUpperCase().includes("X") && !str.toUpperCase().includes("O")) {
    return true;
  } else {
    let count1 = str.toUpperCase().split("").reduce((count , item)=>{
      if (item === 'X') {
        count = count + 1;
      }
      return count;
    },0);
    console.log("count is " + count1);

    let count2 = str.toUpperCase().split("").reduce((count , item)=>{
      if (item === 'O') {
        count = count + 1;
      }
      return count;
    },0);

    return count1 === count2 ? true : false;

  }
};

console.log(XO("xxaaoo"));
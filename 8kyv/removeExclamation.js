/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string */

const removeExclamationMarks = (s)=> {
  return s.split("").filter(elem => elem !== '!').join("");
};

console.log(removeExclamationMarks("Hello World!"));
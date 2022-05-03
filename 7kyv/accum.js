/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */

const accum = (s)=> {
  let output = [];
  for (let i = 0; i < s.length; i++) {
    output.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i + 1).slice(1));
  }
  return output.join("-");
};

console.log(accum("ZpglnRxqenU"));
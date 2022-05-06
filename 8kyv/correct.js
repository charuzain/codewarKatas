/* Correct the mistakes of the character recognition software
Instructions
Output
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.*/
const correct = (string)=>{
  // for (let chars of string) {
  //   console.log(chars);

  // }
  return string.replaceAll('0','O').replaceAll('5',"S").replaceAll('1','I');
  // return string.replace(/0/g,'O').replace(/5/g,'S').replace(/1/g,'I')
  
};
console.log(correct("1U1APE5T55511"));

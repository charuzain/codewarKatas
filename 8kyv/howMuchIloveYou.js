// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.


const howMuchILoveYou = (nbPetals)=> {
  let count;
  nbPetals > 6 ? count = nbPetals % 6 : count = nbPetals;
  if (count === 1) return "I love you";
  if (count === 2) return "a little";
  if (count === 3) return "a lot";
  if (count === 4) return "passionately";
  if (count === 5) return "madly";
  if (count === 6 || count === 0) return "not at all";
};

console.log(howMuchILoveYou(474));

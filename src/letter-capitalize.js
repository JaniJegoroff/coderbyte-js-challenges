/*
Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the 
first letter of each word. Words will be separated by only one space.
*/

function letterCapitalize(str) {
  let words = str.split(' ');

  for(let i=0; i<words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
}
module.exports = letterCapitalize;

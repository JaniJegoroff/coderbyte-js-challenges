/*
Have the function CamelCase(str) take the str parameter being passed and return it in proper camel 
case format where the first letter of each word is capitalized (excluding the first letter). The 
string will only contain letters and some combination of delimiter punctuation characters 
separating each word.

For example: if str is "BOB loves-coding" then your program should return the string 
bobLovesCoding.
*/

function camelCase(str) {
  const regexp = /[^A-Za-z0-9]/g;
  str = str.replace(regexp, ' ');
  let words = str.toLowerCase().split(' ');

  for(let i=1; i<words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join('');
}
module.exports = camelCase;

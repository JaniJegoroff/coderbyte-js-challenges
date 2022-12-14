/*
Have the function VowelCount(str) take the str string parameter being passed and return the number 
of vowels the string contains (ie. "All cows eat grass and moo" would return 8). 
Do not count y as a vowel for this challenge.
*/

function vowelCount(str) {
  return Array.from(str.toLowerCase()).filter(letter => 'aeiou'.includes(letter)).length;
}
module.exports = vowelCount;

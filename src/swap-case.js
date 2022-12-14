/*
Have the function SwapCase(str) take the str parameter and swap the case of each character. 
For example: if str is "Hello World" the output should be "hELLO wORLD".
Let numbers and symbols stay the way they are.
*/

function swapCase(str) {
  let ret = '';

  for (let i=0; i<str.length; i++) {
    ret += str[i] === str[i].toUpperCase() ? str[i].toLowerCase() : str[i].toUpperCase();
  }

  return ret;
}
module.exports = swapCase;

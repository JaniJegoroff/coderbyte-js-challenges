/*
Have the function SimpleEvens(num) check whether every single number in the passed in parameter is 
even. If so, return the string true, otherwise return the string false. For example: if num is 
4602225 your program should return the string false because 5 is not an even number.
*/

function simpleEvens(num) {
  let ret = true;
  const str = num.toString();

  for (let i=0; i<str.length; i++) {
    if (str[i]%2 === 0) {
      continue;
    } else {
      ret = false;
      break;
    }
  }

  return ret;
}
module.exports = simpleEvens;

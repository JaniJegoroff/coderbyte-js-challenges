/*
Have the function BitwiseOne(strArr) take the array of strings stored in strArr, which will only 
contain two strings of equal length that represent binary numbers, and return a final binary string 
that performed the bitwise OR operation on both strings. A bitwise OR operation places a 0 in the 
new string where there are zeroes in both binary strings, otherwise it places a 1 in that spot. 
For example: if strArr is ["1001", "0100"] then your program should return the string "1101"
*/

function bitwiseOne(strArr) {
  let ret = '';
  const str1 = strArr[0];
  const str2 = strArr[1];

  for (let i=0; i<str1.length; i++) {
    (str1[i] === '1') || (str2[i] === '1') ? ret += '1' : ret += '0';
  }

  return ret;
}
module.exports = bitwiseOne;

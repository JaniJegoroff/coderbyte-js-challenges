/*
Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. 
For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.
*/

function dashInsert(str) {
  let array = Array.from(str);

  for (let i=0; i<array.length-1; i++) {
    if (array[i]%2 !== 0 && array[i+1]%2 !== 0) {
      array[i] = array[i] + '-';
    }
  }

  return array.join('');
}
module.exports = dashInsert;

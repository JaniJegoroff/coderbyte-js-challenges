/*
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will 
contain 2 elements: the first element will represent a list of comma-separated numbers sorted in 
ascending order, the second element will represent a second list of comma-separated numbers (also 
sorted). Your goal is to return a comma-separated string containing the numbers that occur in 
elements of strArr in sorted order. If there is no intersection, return the string false.
*/

function findIntersection(strArr) {
  const str1 = strArr[0].split(', ');
  const str2 = strArr[1].split(', ');

  const result = str1.filter(x => str2.find(y => y === x));

  return result.length > 0 ? result.toString() : false;
}
module.exports = findIntersection;

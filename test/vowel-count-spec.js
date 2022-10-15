const vowelCount = require('../src/vowel-count');
const { expect } = require('chai');

describe('Vowel Count', () => {
  it('should return the number of vowels the string contains', () => {
    expect(vowelCount('')).to.equal(0);
    expect(vowelCount('yy')).to.equal(0);
    expect(vowelCount('aa')).to.equal(2);
    expect(vowelCount('A e I o U')).to.equal(5);
    expect(vowelCount('All Cows Eat grasS anD moO')).to.equal(8);
  });
});

const palindrome = require('../src/palindrome');
const { expect } = require('chai');

describe('Palindrome', () => {
  it('should detect if string is a palindrome', () => {
    expect(palindrome('Racecar')).to.equal(true);
    expect(palindrome('race')).to.equal(false);
    expect(palindrome(' ')).to.equal(true);
  });
});

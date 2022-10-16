const longestWord = require('../src/longest-word');
const { expect } = require('chai');

describe('Longest Word', () => {
  it('should return the longest word in a string', () => {
    expect(longestWord('hello world')).to.equal('hello');
    expect(longestWord('hello world123')).to.equal('world123');
    expect(longestWord('Bitcoin cryptocurrency Ethereum........')).to.equal('cryptocurrency');
  });
});

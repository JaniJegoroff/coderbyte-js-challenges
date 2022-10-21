const distinctCharacters = require('../src/distinct-characters');
const { expect } = require('chai');

describe('Distinct Characters', () => {
  it('should determine if given string contains at least 10 distinct characters', () => {
    expect(distinctCharacters('abc123kkmmmm?')).to.equal(false);
    expect(distinctCharacters('abc123def456')).to.equal(true);
    expect(distinctCharacters('1')).to.equal(false);
    expect(distinctCharacters('11223344556677889900')).to.equal(true);
  });
});

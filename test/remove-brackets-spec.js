const removeBrackets = require('../src/remove-brackets');
const { expect } = require('chai');

describe('Remove Brackets', () => {
  it('should remove the matching brackets and return number of non-matching brackets', () => {
    expect(removeBrackets('()')).to.equal(0);
    expect(removeBrackets('(()))')).to.equal(1);
    expect(removeBrackets('))()()()))')).to.equal(4);
    expect(removeBrackets('((((((((')).to.equal(8);
  });
});

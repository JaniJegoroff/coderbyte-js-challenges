const simpleEvens = require('../src/simple-evens');
const { expect } = require('chai');

describe('Simple Evens', () => {
  it('should check whether every single number in the passed parameter is even', () => {
    expect(simpleEvens(0)).to.equal(true);
    expect(simpleEvens(1)).to.equal(false);
    expect(simpleEvens(2)).to.equal(true);
    expect(simpleEvens(4602225)).to.equal(false);
    expect(simpleEvens(46022286420)).to.equal(true);
  });
});

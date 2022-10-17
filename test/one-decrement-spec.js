const oneDecrement = require('../src/one-decrement');
const { expect } = require('chai');

describe('One Decrement', () => {
  it('should count how many times a digit appears that is exactly one less than the previous digit', () => {
    expect(oneDecrement('3579')).to.equal(0);
    expect(oneDecrement('21')).to.equal(1);
    expect(oneDecrement('5655984')).to.equal(2);
  });
});

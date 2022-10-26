const firstReverse = require('../src/first-reverse');
const { expect } = require('chai');

describe('First Reverse', () => {
  it('should reverse a string', () => {
    expect(firstReverse('Hello')).to.equal('olleH');
    expect(firstReverse('abc def')).to.equal('fed cba');
    expect(firstReverse('a')).to.equal('a');
  });
});

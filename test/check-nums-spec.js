const checkNums = require('../src/check-nums');
const { expect } = require('chai');

describe('Check Nums', () => {
  it('should return -1 when numbers are equal', () => {
    expect(checkNums(1, 1)).to.equal(-1);
  });

  it('should return true when num2 > num1', () => {
    expect(checkNums(1, 2)).to.equal(true);
  });

  it('should return false when num2 < num1', () => {
    expect(checkNums(2, 1)).to.equal(false);
  });
});

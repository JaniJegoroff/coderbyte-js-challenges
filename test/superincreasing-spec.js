const superincreasing = require('../src/superincreasing');
const { expect } = require('chai');

describe('Superincreasing', () => {
  it('should find if each element in the array is greater than the sum of all previous elements', () => {
    expect(superincreasing([1, 1])).to.equal(false);
    expect(superincreasing([1, 2])).to.equal(true);
    expect(superincreasing([5, 1])).to.equal(false);
    expect(superincreasing([1, 2, 3, 4, 5, 6])).to.equal(false);
    expect(superincreasing([1, 3, 6, 13, 54])).to.equal(true);
  });
});

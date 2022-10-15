const bitwiseOne = require('../src/bitwise-one');
const { expect } = require('chai');

describe('Bitwise One', () => {
  it('should return correct string after performing bitwise OR operation for array of strings (2)', () => {
    expect(bitwiseOne(['0000', '0000'])).to.equal('0000');
    expect(bitwiseOne(['1111', '1111'])).to.equal('1111');
    expect(bitwiseOne(['1001', '0100'])).to.equal('1101');
  });
});

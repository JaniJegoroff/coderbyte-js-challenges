const swapCase = require('../src/swap-case');
const { expect } = require('chai');

describe('Swap Case', () => {
  it('should swap the case of each character', () => {
    expect(swapCase('')).to.equal('');
    expect(swapCase('aaa')).to.equal('AAA');
    expect(swapCase('BBB')).to.equal('bbb');
    expect(swapCase('123')).to.equal('123');
    expect(swapCase('Hello World')).to.equal('hELLO wORLD');
  });
});

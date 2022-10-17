const simpleAdding = require('../src/simple-adding');
const { expect } = require('chai');

describe('Simple Adding', () => {
  it('should add up all the numbers from 1 to num', () => {
    expect(simpleAdding(1)).to.equal(1);
    expect(simpleAdding(4)).to.equal(10);
    expect(simpleAdding(10)).to.equal(55);
  });
});

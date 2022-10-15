const dashInsert = require('../src/dash-insert');
const { expect } = require('chai');

describe('Dash Insert', () => {
  it('should insert dash between each two odd numbers in a string', () => {
    expect(dashInsert('222222')).to.equal('222222');
    expect(dashInsert('000')).to.equal('000');
    expect(dashInsert('454793')).to.equal('4547-9-3');
    expect(dashInsert('13579')).to.equal('1-3-5-7-9');
  });
});

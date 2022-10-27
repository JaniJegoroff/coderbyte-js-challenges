const camelCase = require('../src/camel-case');
const { expect } = require('chai');

describe('Camel Case', () => {
  it('should return given string in camel case', () => {
    expect(camelCase('Hello')).to.equal('hello');
    expect(camelCase('BOB loves-coding')).to.equal('bobLovesCoding');
  });
});

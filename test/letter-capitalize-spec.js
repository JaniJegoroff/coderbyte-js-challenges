const letterCapitalize = require('../src/letter-capitalize');
const { expect } = require('chai');

describe('Letter Capitalize', () => {
  it('should capitalize the first letter in every word', () => {
    expect(letterCapitalize('hello')).to.equal('Hello');
    expect(letterCapitalize('hello world')).to.equal('Hello World');
  });
});

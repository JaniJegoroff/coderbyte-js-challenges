const snakeCase = require('../src/snake-case');
const { expect } = require('chai');

describe('Snake Case', () => {
  it('should return given string in snake case', () => {
    expect(snakeCase('Hello')).to.equal('hello');
    expect(snakeCase('BOB loves-coding')).to.equal('bob_loves_coding');
  });
});

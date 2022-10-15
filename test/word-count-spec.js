const wordCount = require('../src/word-count');
const { expect } = require('chai');

describe('Word Count', () => {
  it('should return the number of words that string contains', () => {
    expect(wordCount('Never eat')).to.equal(2);
    expect(wordCount('Never eat shredded wheat or cake')).to.equal(6);
  });
});

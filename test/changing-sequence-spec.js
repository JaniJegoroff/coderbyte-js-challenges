const changingSequence = require('../src/changing-sequence');
const { expect } = require('chai');

describe('Changing Sequence', () => {
  it('should find where array starts changing sequence', () => {
    expect(changingSequence([1, 2, 4, 6, 4, 3, 1])).to.equal(3);
    expect(changingSequence([1, 2, 4])).to.equal(-1);
    expect(changingSequence([4, 3, 2])).to.equal(-1);
  });
});

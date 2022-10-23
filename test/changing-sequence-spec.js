const changingSequence = require('../src/changing-sequence');
const { expect } = require('chai');

describe('Changing Sequence', () => {
  it('should find where array starts changing sequence', () => {
    expect(changingSequence([1, 2, 4, 6, 4, 3, 1])).to.equal(3);
    expect(changingSequence([9, 7, 5, 3, 1, 4, 6, 8])).to.equal(4);
    expect(changingSequence([1, 2, 4])).to.equal(-1);
    expect(changingSequence([4, 3, 2])).to.equal(-1);
    expect(changingSequence([1, 1, 1, 1])).to.equal(-1);
    expect(changingSequence([0, 0, 1, 2])).to.equal(-1);
    expect(changingSequence([2, 1, 0, 0])).to.equal(-1);
    expect(changingSequence([0, 2, 2, 0])).to.equal(2);
    expect(changingSequence([2, 2, 3, 2, 2])).to.equal(-1);
  });
});

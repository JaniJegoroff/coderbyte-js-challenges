const findIntersection = require('../src/find-intersection');
const { expect } = require('chai');

describe('Find Intersection', () => {
  it('should return a comma-separated string containing the numbers that occur in elements of strArr in sorted order', () => {
    expect(findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15'])).to.equal('1,4,13');
    expect(findIntersection(['4, 5, 6', '1, 2, 3'])).to.equal(false);
    expect(findIntersection(['1, 2, 3', '1, 2, 3'])).to.equal('1,2,3');
  });
});

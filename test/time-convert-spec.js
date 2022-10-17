const timeConvert = require('../src/time-convert');
const { expect } = require('chai');

describe('Time Convert', () => {
  it('should return the number of hours and minutes separated by colon', () => {
    expect(timeConvert(63)).to.equal('1:3');
    expect(timeConvert(60)).to.equal('1:0');
    expect(timeConvert(10)).to.equal('0:10');
  });
});

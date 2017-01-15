const assert = require('chai').assert;
const messageUtils = require('./message');

describe('Message Utils', function() {
  describe('formatDate', function() {
    it('should return a non empty string given a date', function() {
      const date = new Date();
      const resultString = messageUtils.formatDate(date);
      assert.isString(resultString, 'expected a string');
      assert.isAbove(resultString.length, 0, 'expected length of string to be over 0');
    });

    it('should return empty string for input that is not a date object', function() {
      const notDate = '11-10-2016';
      const resultString = messageUtils.formatDate(notDate);
      assert.isString(resultString, 'expected a string');
      assert.equal(resultString.length, 0, 'expected length of string to be 0');
    });
  });
});

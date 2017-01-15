const assert = require('chai').assert;
const dateUtils = require('./date');

describe('Date Utils', function() {
  describe('getWeekDay', function() {
    it('should return the string \'Sunday\' given 0 as input', function() {
      const input = 0;
      const resultString = dateUtils.getWeekDay(input);
      assert.equal(resultString, 'Sunday');
    });

    it('should return the string \'Monday\' given 1 as input', function() {
      const input = 1;
      const resultString = dateUtils.getWeekDay(input);
      assert.equal(resultString, 'Monday', 'expected result string to be \'Monday\'');
    });

    it('should return the string \'Tuesday\' given 2 as input', function() {
      const input = 2;
      const resultString = dateUtils.getWeekDay(input);
      assert.equal(resultString, 'Tuesday', 'expected result string to be \'Tuesday\'');
    });

    it('should return the string \'Wednesday\' given 3 as input', function() {
      const input = 3;
      const resultString = dateUtils.getWeekDay(input);
      assert.equal(resultString, 'Wednesday', 'expected result string to be \'Wednesday\'');
    });

    it('should return the string \'Thursday\' given 4 as input', function() {
      const input = 4;
      const resultString = dateUtils.getWeekDay(input);
      assert.equal(resultString, 'Thursday', 'expected result string to be \'Thursday\'');
    });

    it('should return the string \'Friday\' given 5 as input', function() {
      const input = 5;
      const resultString = dateUtils.getWeekDay(input);
      assert.equal(resultString, 'Friday', 'expected result string to be \'Friday\'');
    });

    it('should return the string \'Saturday\' given 6 as input', function() {
      const input = 6;
      const resultString = dateUtils.getWeekDay(input);
      assert.equal(resultString, 'Saturday', 'expected result string to be \'Saturday\'');
    });

    it('should return an empty string \'\' given 7 as input', function() {
      const input = 7;
      const resultString = dateUtils.getWeekDay(input);
      assert.equal(resultString, '', 'expected result string to be \'\'');
    });
  })
});

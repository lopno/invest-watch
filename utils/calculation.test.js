const assert = require('chai').assert;
const calculationUtils = require('./calculation');

/* global describe, it */

describe('Calculation utils', () => {
  describe('previousValue', () => {
    it('should give a previous value of 100 for a value of 110 and a change of +10', () => {
      const currentValue = 110;
      const change = 10;
      const isPositive = true;
      const previousValue = calculationUtils.previousValue(currentValue, change, isPositive);
      assert.equal(previousValue, 100, 'previous value should be 100');
    });

    it('should give a previous value of 100 for a value of 80 and a change of -20', () => {
      const currentValue = 80;
      const change = 20;
      const isPositive = false;
      const previousValue = calculationUtils.previousValue(currentValue, change, isPositive);
      assert.equal(previousValue, 100, 'previous value should be 100');
    });
  });
});

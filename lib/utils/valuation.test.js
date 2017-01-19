const assert = require('chai').assert;
const fundType = require('./../constant/fundType');
const valuationUtils = require('./valuation');

/* global describe, it */

describe('Valuation Utils', () => {
  describe('getSite', () => {
    it('should return a function given defensive fund type', () => {
      const valuationFunction = valuationUtils.getSite(fundType.defensive);
      assert.isFunction(valuationFunction, 'expected getSite to return a function');
    });

    it('should return a function given moderate short fund type', () => {
      const valuationFunction = valuationUtils.getSite(fundType.moderateShort);
      assert.isFunction(valuationFunction, 'expected getSite to return a function');
    });

    it('should return a function given moderate fund type', () => {
      const valuationFunction = valuationUtils.getSite(fundType.moderate);
      assert.isFunction(valuationFunction, 'expected getSite to return a function');
    });

    it('should return a function given balanced fund type', () => {
      const valuationFunction = valuationUtils.getSite(fundType.balanced);
      assert.isFunction(valuationFunction, 'expected getSite to return a function');
    });

    it('should return a function given progressive fund type', () => {
      const valuationFunction = valuationUtils.getSite(fundType.progressive);
      assert.isFunction(valuationFunction, 'expected getSite to return a function');
    });

    it('should return a function given opportunity fund type', () => {
      const valuationFunction = valuationUtils.getSite(fundType.opportunity);
      assert.isFunction(valuationFunction, 'expected getSite to return a function');
    });

    it('should return null for an invalid fund type', () => {
      const valuationFunction = valuationUtils.getSite(null);
      assert.isNull(valuationFunction, 'expected getSite to return null for invalid fund type');
    });
  });

  describe('getValuation', () => {
    it('should return valid valuation given a fund type', (done) => {
      const defensiveType = fundType.defensive;
      valuationUtils.getValuation(defensiveType)
        .then((valuation) => {
          assert.property(valuation, 'value', 'expected valuation to have value property');
          assert.property(
            valuation, 'previousValue', 'expected valuation to have previousValue property');
          assert.property(valuation, 'change', 'expected valuation to have change property');
          assert.property(valuation, 'isPositive', 'expected valuation to have isPositive property');
        })
        .then(done, done);
    });
  });
});

const assert = require('chai').assert;
const valuationApi = require('./../api/valuation');
const fundSquareValuationParser = require('./fundSquareValuation');

/* global describe, it */

describe('Fund Square valuation parser', () => {
  it('Should return valuation object given a fund square site', (done) => {
    valuationApi.getJuneBalancedSite()
      .then((site) => {
        const valuation = fundSquareValuationParser.parseFundSquareValuationSite(site);
        assert.property(valuation, 'value', 'expected valuation to have value property');
        assert.property(
          valuation, 'previousValue', 'expected valuation to have previousValue property');
        assert.property(valuation, 'change', 'expected valuation to have change property');
        assert.property(valuation, 'isPositive', 'expected valuation to have isPositive property');
      })
      .then(done, done);
  });
});

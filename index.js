/* eslint-disable strict, no-console */

'use strict';

const valuationApi = require('./lib/api/valuation');
const fundSquareValuationParser = require('./lib/parse/fundSquareValuation');
const messageUtils = require('./lib/utils/message');

const sharesCount = process.env.SHARES_COUNT || 1;
let hasWaited = false;

function checkValuation() {
  valuationApi.getJuneBalancedSite()
    .then(site => fundSquareValuationParser.parseFundSquareValuationSite(site))
    .then((valuation) => {
      if (valuation.date.getDay() !== new Date().getDay()) {
        console.log('Today\'s valuation is not yet up, checking again in 5 minutes.');
        hasWaited = true;
        setTimeout(checkValuation, 300000);
      } else {
        console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
        messageUtils.printJuneLogo();
        console.log('\n\n');
        if (hasWaited) {
          console.log(new Date());
        }
        console.log(messageUtils.formatDate(valuation.date));
        console.log('New:         ', valuation.value, ' ', valuation.value * sharesCount);
        console.log('change:      ', valuation.isPositive ? '+' : '-', valuation.change);
        console.log('Old:         ', valuation.previousValue, ' ', valuation.previousValue * sharesCount);
        console.log('value change:', (valuation.value - valuation.previousValue) * sharesCount);
        console.log('\n');
      }
    });
}

checkValuation();

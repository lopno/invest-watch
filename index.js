/* eslint-disable strict, no-console */

'use strict';

const valuationUtils = require('./lib/utils/valuation');
const messageUtils = require('./lib/utils/message');
const fundTypeConstants = require('./lib/constant/fundType');

const sharesCount = process.env.SHARES_COUNT || 1;
const fundType = process.env.FUND_TYPE || fundTypeConstants.balanced;
let hasWaited = false;

function checkValuation() {
  valuationUtils.getValuation(fundType)
    .then((valuation) => {
      if (!valuation) {
        console.log('Invalid fund type supplied.');
        console.log('Valid types are:');
        console.log('DEFENSIVE, MODERATE_SHORT, MODERATE, BALANCED, PROGRESSIVE, OPPORTUNITY');
        return;
      }
      if (valuation.date.getDay() !== new Date().getDay()) {
        console.log('Today\'s valuation is not yet up, checking again in 5 minutes.');
        hasWaited = true;
        setTimeout(checkValuation, 300000);
      } else {
        console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
        messageUtils.printJuneLogo();
        console.log('\n', fundType, '\n');
        if (hasWaited) {
          console.log(new Date());
        }
        console.log(messageUtils.formatDate(valuation.date));
        console.log('New:         ', valuation.value, ' ', valuation.value * sharesCount);
        console.log('change:      ', valuation.isPositive ? '+' : '-', valuation.change);
        console.log('Old:         ', valuation.previousValue, ' ', valuation.previousValue * sharesCount);
        console.log('value change:', (valuation.value - valuation.previousValue) * sharesCount, '\n');
      }
    })
    .catch((e) => {
      console.log('Something went wrong.', e.message);
    });
}

checkValuation();

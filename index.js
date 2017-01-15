/* eslint-disable strict, no-console */

'use strict';

const fetchUrl = require('fetch').fetchUrl;
const xpath = require('xpath');
const parse5 = require('parse5');
const xmlser = require('xmlserializer');
const dom = require('xmldom').DOMParser;

const messageUtils = require('./utils/message');
const calculationUtils = require('./utils/calculation');

const sharesCount = process.env.SHARES_COUNT || 1;
let hasWaited = false;

function checkValuation() {
  // alternative site:
  // http://trustnetoffshore.com/Factsheets/Factsheet.aspx?fundCode=NLFYO&univ=DC
  return fetchUrl('https://www.fundsquare.net/security/summary?idInstr=256570', (error, meta, body) => {
    const document = parse5.parse(body.toString());
    const xhtml = xmlser.serializeToString(document);
    /* eslint-disable new-cap */
    const doc = new dom({ errorHandler: { error: () => {} } }).parseFromString(xhtml);
    /* eslint-enable new-cap */
    const select = xpath.useNamespaces({ x: 'http://www.w3.org/1999/xhtml' });
    const dateString =
      select('(//x:div[@id="content"]/x:table)[2]/x:tbody/x:tr/x:td[2]/text()', doc)
        .toString().trim();
    const value =
      select('(//x:div[@id="content"]/x:table)[2]/x:tbody/x:tr/x:td[3]/x:span[1]/text()', doc)
        .toString().trim();
    const change =
      select('(//x:div[@id="content"]/x:table)[2]/x:tbody/x:tr/x:td[3]/x:span[2]/text()', doc)
      .toString().trim();
    const valueNumber = parseFloat(value.split(' ')[0], 10);
    const numberRegex = /(\d)+\.(\d)+/;
    const isPositive = (change.charAt(0) === '+');
    const changeNumber = parseFloat(numberRegex.exec(change)[0]);
    const previousValue = calculationUtils.previousValue(valueNumber, changeNumber, isPositive);
    const dateArray = dateString.split('/');
    const valuationDate = new Date(
        parseInt(dateArray[2], 10),
        parseInt(dateArray[1], 10) - 1,
        parseInt(dateArray[0], 10));

    const currentDate = new Date(Date.now());

    if (valuationDate.getDay() !== currentDate.getDay()) {
      console.log('Today\'s valuation is not yet up, checking again in 5 minutes.');
      hasWaited = true;
      setTimeout(checkValuation, 30000);
    } else {
      console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
      messageUtils.printJuneLogo();
      console.log('\n\n');
      if (hasWaited) {
        console.log(currentDate.toTimeString());
      }
      console.log(messageUtils.formatDate(valuationDate));
      console.log('New:         ', valueNumber, ' ', valueNumber * sharesCount);
      console.log('change:      ', change);
      console.log('Old:         ', previousValue, ' ', previousValue * sharesCount);
      console.log('value change:', (valueNumber - previousValue) * sharesCount);
      console.log('\n');
    }
  });
}

checkValuation();

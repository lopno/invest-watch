const xpath = require('xpath');
const parse5 = require('parse5');
const xmlser = require('xmlserializer');
const dom = require('xmldom').DOMParser;
const calculationUtils = require('./../utils/calculation');

/**
 * Parses fundSquare site
 * @param site
 * @returns {{value: Number, previousValue: *, change: null, isPositive: boolean, date: Date}}
 */
function parseFundSquareValuationSite(site) {
  const document = parse5.parse(site.toString());
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
  const changeSomething = numberRegex.exec(change);
  const changeNumber =
    changeSomething && changeSomething.length ? parseFloat(changeSomething[0]) : null;
  const previousValue = calculationUtils.previousValue(valueNumber, changeNumber, isPositive);
  const dateArray = dateString.split('/');
  const valuationDate = new Date(
    parseInt(dateArray[2], 10),
    parseInt(dateArray[1], 10) - 1,
    parseInt(dateArray[0], 10));

  return {
    value: valueNumber,
    previousValue,
    change: changeNumber,
    isPositive,
    date: valuationDate,
  };
}

module.exports = {
  parseFundSquareValuationSite,
};

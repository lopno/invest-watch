const fetchUrl = require("fetch").fetchUrl;
const xpath = require('xpath');
const parse5 = require('parse5');
const xmlser = require('xmlserializer');
const dom = require('xmldom').DOMParser;

const sharesCount = process.env.SHARES_COUNT || 1;

function checkValuation() {
  // alternative site:
  // http://trustnetoffshore.com/Factsheets/Factsheet.aspx?fundCode=NLFYO&univ=DC
  return fetchUrl("https://www.fundsquare.net/security/summary?idInstr=256570", function(error, meta, body){
    const document = parse5.parse(body.toString());
    const xhtml = xmlser.serializeToString(document);
    const doc = new dom({errorHandler: {error: function(e) {}}}).parseFromString(xhtml);
    const select = xpath.useNamespaces({"x": "http://www.w3.org/1999/xhtml"});
    const dateString =
      select("(//x:div[@id=\"content\"]/x:table)[2]/x:tbody/x:tr/x:td[2]/text()", doc)
        .toString().trim();
    const value =
      select("(//x:div[@id=\"content\"]/x:table)[2]/x:tbody/x:tr/x:td[3]/x:span[1]/text()", doc)
        .toString().trim();
    const change =
      select("(//x:div[@id=\"content\"]/x:table)[2]/x:tbody/x:tr/x:td[3]/x:span[2]/text()", doc)
      .toString().trim();
    const valueNumber = parseFloat(value.split(' ')[0], 10);
    const dateArray = dateString.split('/');
    const valuationDate = new Date(
        parseInt(dateArray[2], 10),
        parseInt(dateArray[1], 10) - 1,
        parseInt(dateArray[0], 10)
      );

    const currentDate = new Date(Date.now());

    if (valuationDate.getDay() !== currentDate.getDay()) {
      console.log('Today\'s valuation is not yet up, checking again in 5 minutes.');
      setTimeout(checkValuation, 30000);
    } else {
      console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
      console.log('JJJJJJJJJJJ   UU       UU   NN       NN   EEEEEEEEE');
      console.log('JJJJJJJJJJJ   UU       UU   NNN      NN   EEEEEEEEE');
      console.log('         JJ   UU       UU   NNNN     NN   EE       ');
      console.log('         JJ   UU       UU   NN NN    NN  EEEEEEE   ');
      console.log('         JJ   UU       UU   NN  NN   NN   EE       ');
      console.log('         JJ   UU       UU   NN   NN  NN  EEEEEEE   ');
      console.log('        JJJ   UU       UU   NN    NN NN   EE       ');
      console.log('JJJJJJJJJJJ   UUU     UUU   NN     NNNN   EEEEEEEEE');
      console.log('JJJJJJJJJJ     UUUUUUUUU    NN      NNN   EEEEEEEEE');
      console.log('\n\n\n');
      console.log(valuationDate.getDate() + '/' + (valuationDate.getMonth() + 1) + ' ' + value + ' '
        + change + ' ' + (valueNumber * sharesCount));
      console.log('\n\n');
    }
  });
}

checkValuation();

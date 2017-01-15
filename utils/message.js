const dateUtils = require('./date');

function printJuneLogo() {
  /* eslint-disable no-console */
  console.log('JJJJJJJJJJJ   UU       UU   NN       NN   EEEEEEEEE');
  console.log('JJJJJJJJJJJ   UU       UU   NNN      NN   EEEEEEEEE');
  console.log('         JJ   UU       UU   NNNN     NN   EE       ');
  console.log('         JJ   UU       UU   NN NN    NN  EEEEEEE   ');
  console.log('         JJ   UU       UU   NN  NN   NN   EE       ');
  console.log('         JJ   UU       UU   NN   NN  NN  EEEEEEE   ');
  console.log('        JJJ   UU       UU   NN    NN NN   EE       ');
  console.log('JJJJJJJJJJJ   UUU     UUU   NN     NNNN   EEEEEEEEE');
  console.log('JJJJJJJJJJ     UUUUUUUUU    NN      NNN   EEEEEEEEE');
  /* eslint-enable no-console */
}

function formatDate(date) {
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    return '';
  }
  return `${date.getDate()}/${(date.getMonth() + 1)} ${dateUtils.getWeekDay(date.getDay())}`;
}


module.exports = {
  printJuneLogo,
  formatDate,
};

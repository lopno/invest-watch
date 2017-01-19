const fundType = require('./../constant/fundType');
const valuationApi = require('./../api/valuation');
const fundSquareValuationParser = require('./../parse/fundSquareValuation');

/* global Promise */

function getSite(type) {
  switch (type) {
    case fundType.defensive: return valuationApi.getJuneDefensiveSite;
    case fundType.moderateShort: return valuationApi.getJuneModerateShortSite;
    case fundType.moderate: return valuationApi.getJuneModerateSite;
    case fundType.balanced: return valuationApi.getJuneBalancedSite;
    case fundType.progressive: return valuationApi.getJuneProgressiveSite;
    case fundType.opportunity: return valuationApi.getJuneOpportunitySite;
    default: return null;
  }
}

function getValuation(type) {
  const getSiteFunction = getSite(type);
  return getSiteFunction ? getSiteFunction()
    .then(fundSquareValuationParser.parseFundSquareValuationSite) : Promise.resolve();
}

module.exports = {
  getSite,
  getValuation,
};

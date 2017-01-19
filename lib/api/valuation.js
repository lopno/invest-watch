const fetch = require('node-fetch');

function getJuneDefensiveSite() {
  return fetch('https://www.fundsquare.net/security/summary?idInstr=256575')
    .then(res => res.text());
}

function getJuneModerateShortSite() {
  return fetch('https://www.fundsquare.net/security/summary?idInstr=257492')
    .then(res => res.text());
}

function getJuneModerateSite() {
  return fetch('https://www.fundsquare.net/security/summary?idInstr=256580')
    .then(res => res.text());
}

function getJuneBalancedSite() {
  return fetch('https://www.fundsquare.net/security/summary?idInstr=256570')
    .then(res => res.text());
}

function getJuneProgressiveSite() {
  return fetch('https://www.fundsquare.net/security/summary?idInstr=256590')
    .then(res => res.text());
}

function getJuneOpportunitySite() {
  return fetch('https://www.fundsquare.net/security/summary?idInstr=256585')
    .then(res => res.text());
}

module.exports = {
  getJuneDefensiveSite,
  getJuneModerateShortSite,
  getJuneModerateSite,
  getJuneBalancedSite,
  getJuneProgressiveSite,
  getJuneOpportunitySite,
};

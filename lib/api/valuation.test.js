const assert = require('chai').assert;
const valuationApi = require('./valuation');

/* global describe, it */

describe('Valuation API', () => {
  describe('GET June Defensive site', () => {
    it('Should return a response for a GET request', (done) => {
      valuationApi.getJuneDefensiveSite()
        .then((site) => {
          assert.isOk(site, 'expected a response from GET June Defensive site');
        })
        .then(done, done);
    });
  });

  describe('GET June Moderate Short site', () => {
    it('Should return a response for a GET request', (done) => {
      valuationApi.getJuneModerateShortSite()
        .then((site) => {
          assert.isOk(site, 'expected a response from GET June Moderate Short site');
        })
        .then(done, done);
    });
  });

  describe('GET June Moderate site', () => {
    it('Should return a response for a GET request', (done) => {
      valuationApi.getJuneModerateSite()
        .then((site) => {
          assert.isOk(site, 'expected a response from GET June Moderate site');
        })
        .then(done, done);
    });
  });

  describe('GET June balanced site', () => {
    it('Should return a response for a GET request', (done) => {
      valuationApi.getJuneBalancedSite()
        .then((site) => {
          assert.isOk(site, 'expected a response from GET June balanced site');
        })
        .then(done, done);
    });
  });

  describe('GET June Progressive site', () => {
    it('Should return a response for a GET request', (done) => {
      valuationApi.getJuneProgressiveSite()
        .then((site) => {
          assert.isOk(site, 'expected a response from GET June Progressive site');
        })
        .then(done, done);
    });
  });

  describe('GET June Opportunity site', () => {
    it('Should return a response for a GET request', (done) => {
      valuationApi.getJuneOpportunitySite()
        .then((site) => {
          assert.isOk(site, 'expected a response from GET June Opportunity site');
        })
        .then(done, done);
    });
  });
});

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.bilkamadudafhuset.dk/',
  },
  pageLoadTimeout: 1000000,
  video: false,
  numTestsKeptInMemory: 100,
  requestTimeout: 9000000,
  responseTimeout: 9000000,
    "chromeWebSecurity": false,
    "redirectionLimit": 1000
};

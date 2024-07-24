const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    projectId: "xgvkov",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())

      // implement node event listeners here
    },
    specPattern: "cypress/e2e/Features/*.feature",
    baseUrl: 'https://www.bilkamadudafhuset.dk/',

  },
  pageLoadTimeout: 1000000,
  video: false,
  numTestsKeptInMemory: 100,
  requestTimeout: 9000000,
  responseTimeout: 9000000,
    "chromeWebSecurity": false,
    "chromeWebSecurity": false,
    "redirectionLimit": 1000
   

});

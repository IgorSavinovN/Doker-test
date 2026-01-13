const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",

    specPattern: "cypress/e2e/**/*.cy.{js,ts}",

    supportFile: "cypress/support/e2e.js",

    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,

    setupNodeEvents(on, config) {
      // node events (пока не нужны)
      return config;
    },
  },
});

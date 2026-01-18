import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://doker-test-production.up.railway.app",
    chromeWebSecurity: false,

    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    supportFile: "cypress/support/e2e.ts",

    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,

    setupNodeEvents(on, config) {
      return config;
    },
  },
});
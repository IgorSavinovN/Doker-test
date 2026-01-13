import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://docker-test.onrender.com',
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.ts",
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});

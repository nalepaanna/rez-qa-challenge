import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 10000,

  e2e: {
    baseUrl: "https://www.rezfusionhubdemo.com/hub-test-vacation-rentals",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

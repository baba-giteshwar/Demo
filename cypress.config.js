const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    screenshotsFolder: 'cypress/screenshots',
    chromeWebSecurity: false,
    "trashAssetsBeforeHeadlessRuns": false,
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'results/my-test-output.xml',
      toConsole: true,
  },
    setupNodeEvents(on, config) {
      
    },
    
  },
  
});

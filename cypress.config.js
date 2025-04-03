const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for generating HTML Report
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on) // for HTML Report
      return require('./cypress/baseUrlProperties/index.js')(on, config) //call baseUrl setup
      } 
  }
})

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for generating HTML Report
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure=true
      require('cypress-mochawesome-reporter/plugin')(on) // for HTML Report      
      },
    //calling baseUrl config  
    setupNodeEvents: function (on, config) {
        return require('./cypress/baseUrlProperties/index.js')(on, config)
     }  
  }
})

THIS IS A DEMO CYPRESS FRAMEWORK"# cypress-demo" 


Software Required
1. Nodejs
2. npm
3. Cypress (npm install cypress --save-dev)
4. mocha (npm install mocha --save-dev)

5. mochawesome for reporting 
(npm i --save-dev cypress-mochawesome-reporter)
Change cypress reporter & setup hooks---
-------
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
})
----------------------------
Add to cypress/support/e2e.js
import 'cypress-mochawesome-reporter/register'
----------------------------

6. To run All Spec file
npx cypress run

to run specific file
npx cypress run --spec cypress\e2e\sauceLab\login\loginPage.cy.js
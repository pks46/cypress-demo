import { loginPageComponents } from '../../../pages/sauceLab/loginPage/loginPageComponents'
const config = require('../../../config/config.json')

Cypress.Commands.add(
    'login', 
    (username, password) => {
    // cy.visit(config.swagLab.qa.baseUrl)
    cy.visit(config[Cypress.env('SITE')][Cypress.env('ENV')].baseUrl)

    loginPageComponents.elements.userNameInput().type(username)
    loginPageComponents.elements.passwordInput().type(password)
    loginPageComponents.elements.loginBtn().click()
    cy.wait(2500)
    
})
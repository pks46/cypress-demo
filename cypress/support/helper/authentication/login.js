import { loginPageComponents } from '../../../pages/sauceLab/loginPage/loginPageComponents'
const config = require('../../../config/config.json')

Cypress.Commands.add(
    'login', 
    (username, password) => {
    // cy.visit(config[Cypress.env('SITE')][Cypress.env('ENV')].baseUrl)
    cy.visit('/')

    loginPageComponents.elements.userNameInput().type(username)
    loginPageComponents.elements.passwordInput().type(password)
    loginPageComponents.elements.loginBtn().click()
    cy.wait(2500)  
})

Cypress.Commands.add('loginPreserveSession', (username, password) => {
    cy.session([username, password], () => {
        cy.login(username, password)
    })
})
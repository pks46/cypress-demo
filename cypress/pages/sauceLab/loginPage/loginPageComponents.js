class LoginPageComponents {
    elements = {
        userNameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMsg: () => cy.get('[data-test="error"]')
    }

    validLogin() {
        cy.login('standard_user', 'secret_sauce').wait(2500)
        cy.url().should('include', '/inventory.html')
    }

    lockedoutUserLogin() {
        cy.login('locked_out_user', 'secret_sauce')
        this.elements.errorMsg().should('be.visible')
    }
}

export const loginPageComponents = new LoginPageComponents()
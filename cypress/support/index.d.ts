declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to log in to Swag Lab
       * @param username - User's username
       * @param password - User's password
       */
      login(username: string, password: string): Chainable<any>;
    }
  }
  
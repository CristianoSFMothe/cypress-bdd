/// <reference types="cypress" />

export default {
  doLogin() {
    cy.get("#btnLogin").click();
  },

  checkMessageError(message) {
    cy.get(".invalid_input").should("have.text", message);
  },

  fillEmail(email) {
    cy.get("#user").type(email);
  },

  fillPassword(password) {
    cy.get("#password").type(password);
  },
};

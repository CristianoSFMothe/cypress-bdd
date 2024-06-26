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

  checkSuccessMessage(message, email) {
    cy.get("#swal2-title")
      .should("be.visible")
      .should("have.text", message);

    cy.get("#swal2-html-container", {timeout: 3000})
      .should("be.visible")
      .should("contain.text", `Olá, ${email}`);
  },
};

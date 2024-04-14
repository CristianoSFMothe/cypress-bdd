/// <reference types="cypress" />

export default {
  accessRegister() {
    cy.visit("/register").get("#top_header");

    cy.get(".fa-user").click();
  },
};

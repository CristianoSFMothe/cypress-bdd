/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import home_page from "../pages/home_page";
import login_page from "../pages/login_page";

import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = faker.internet.password();


Given("I am on login screan", () => {
  home_page.accessLogin();
});

Given("I fill e-mail", () => {
  login_page.fillEmail(email);
})

Given("I fill my credencials", () => {
  login_page.fillEmail(email);
  login_page.fillPassword(password);
})

When("I click on Login", () => {
  login_page.doLogin();
});

Then("I see the message {string}", (message) => {
  login_page.checkMessageError(message);
});

Then("I see success message {string}", (message) => {
  login_page.checkSuccessMessage(message, email);
});


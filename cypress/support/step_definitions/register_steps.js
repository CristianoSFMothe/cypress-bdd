/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import register_page from "../pages/register_page";


import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = faker.internet.password();

Given("I am register screen", () => {
  register_page.accessRegister();
});

Given("I fill e-mail {string}", (email) => {});

Given("I fill password {string}", (password) => {});

Given("I fill my datas of register", () => {});

When("I click on Register", () => {});

Then("I see message {string} on register", (message) => {});

Then("I see message {string} on register", (message) => {});

Then("I see success message {string}", (message) => {});

Then("I see message success message on register", () => {});

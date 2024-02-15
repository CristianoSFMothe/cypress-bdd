/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import home_page from "../pages/home_page";
import login_page from "../pages/login_page";


Given("I am on login screan", () => {
  home_page.accessLogin();
});

When("I click on Login", () => {
  login_page.doLogin();
});

Then("I see the message {string}", (message) => {
  login_page.checkMessageError(message);
});

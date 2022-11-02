/// <reference types="cypress" />

import MainPage from "../e2e/pom/mainPage";

const mainPage = new MainPage();

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add("openMainPage", () => {
  cy.visit("/");
});

// -- This is a workaround because cy.scrollTo works very slowly
Cypress.Commands.add("getAllProperties", () => {
  mainPage.numberOfSavedProperties().click();
  mainPage.numberOfSavedProperties().click();
});

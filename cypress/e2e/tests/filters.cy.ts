/// <reference types="cypress" />
import FiltersPage from "../pom/filtersPage";
import MainPage from "../pom/mainPage";
import { times } from "lodash";

const filtersPage = new FiltersPage();
const mainPage = new MainPage();

describe(`As a user I want the ability to filter properties 
  based on the number of bedrooms and bathrooms.`, () => {
  beforeEach(() => {
    cy.openMainPage();
  });

  it(`The Filters selection should allow the user to select the number 
    of either bedrooms and/or bathrooms.`, () => {
    mainPage.filtersButton().click({ force: true });

    filtersPage.minBedroomsPlusButton().should("be.enabled");
    filtersPage.minBathroomsPlusButton().should("be.enabled");

    filtersPage.minBedroomsMinusButton().should("be.enabled");
    filtersPage.minBathroomsMinusButton().should("be.enabled");
  });

  it(`The selection should limit the value to an integer 
    with a lower value of 0 (zero).`, () => {
    mainPage.filtersButton().click({ force: true });

    filtersPage.minBedroomsValue().should("have.text", "0");
    filtersPage.minBathroomsValue().should("have.text", "0");

    filtersPage.minBedroomsMinusButton().click();
    filtersPage.minBedroomsValue().should("have.text", "0");

    filtersPage.minBathroomsMinusButton().click();
    filtersPage.minBedroomsValue().should("have.text", "0");
  });

  it(`The Clear Filters button should reset both filters 
    to their lower value.`, () => {
    mainPage.filtersButton().click({ force: true });

    filtersPage.minBedroomsPlusButton().click();
    filtersPage.minBathroomsPlusButton().click();

    filtersPage.minBedroomsValue().should("not.have.text", "0");
    filtersPage.minBathroomsValue().should("not.have.text", "0");

    filtersPage.clearFiltersButton().click({ force: true });

    filtersPage.minBedroomsValue().should("have.text", "0");
    filtersPage.minBathroomsValue().should("have.text", "0");
  });

  it(`The View Results button should close the Filter Results page 
    and display properties on the hub meeting the criteria.`, () => {
    const minBedrooms = 4;
    const minBathrooms = 2;
    mainPage.filtersButton().click({ force: true });

    times(minBedrooms, () => filtersPage.minBedroomsPlusButton().click());
    times(minBathrooms, () => filtersPage.minBathroomsPlusButton().click());

    filtersPage.minBedroomsValue().should("have.text", minBedrooms);
    filtersPage.minBathroomsValue().should("have.text", minBathrooms);

    filtersPage.viewResultsButton().click({ force: true });

    filtersPage.filtersModal().should("not.exist");

    cy.getAllProperties();

    mainPage.propertyInfo().each((element) => {
      const number = Number(element.text().split(" ")[1]);
      expect(number).to.be.not.lessThan(minBedrooms);
    });

    mainPage.propertyInfo().each((element) => {
      const number = Number(element.text().split(" ")[4]);
      expect(number).to.be.not.lessThan(minBathrooms);
    });
  });
});

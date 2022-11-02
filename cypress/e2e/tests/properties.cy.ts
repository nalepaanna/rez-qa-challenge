/// <reference types="cypress" />
import MainPage from "../pom/mainPage";

const mainPage = new MainPage();

describe(`As a user I want the ability to save properties I am looking at 
  so they can be reviewed at a later time.`, () => {
  beforeEach(() => {
    cy.openMainPage();
  });

  it(`Each property on the hub should have an easy Favorite on/off button
  indicating that this property has been saved`, () => {
    cy.getAllProperties();

    mainPage.favouriteButtons().then((buttons) => {
      mainPage.propertyName().should("have.length", buttons.length);
    });
  });

  it(`The hub should have an indicator on the number of properties
  selected as saved.`, () => {
    mainPage.numberOfSavedProperties().should("be.visible");
  });

  it(`This indicator should show the total count of saved properties.`, () => {
    mainPage.favouriteButtonsUnchecked().eq(1).click();

    mainPage.favouriteButtonsChecked().then((favourite) => {
      mainPage
        .numberOfSavedProperties()
        .invoke("text")
        .then((text) => +text.slice(1, -1).trim())
        .should("eq", favourite.length);
    });
  });

  it(`When the indicator is clicked the hub should only display saved properties`, () => {
    mainPage
      .propertyName()
      .eq(1)
      .then((info) => {
        mainPage.favouriteButtonsUnchecked().eq(1).click();
        mainPage.numberOfSavedProperties().click();

        mainPage.propertyName().should("have.length", 1);
        mainPage.propertyName().eq(0).should("have.text", info.text());
      });
  });

  it(`I can un-save a property from the filtered view.`, () => {
    mainPage.favouriteButtonsUnchecked().eq(1).click();
    mainPage.numberOfSavedProperties().click();
    mainPage.favouriteButtonsChecked().eq(0).click();

    mainPage
      .noResultsMessage()
      .should(
        "have.text",
        "Looks like you have no favorites.Click the heart icon on properties you like."
      );
  });

  it(`When a property is selected; there should be an indicator
    showing the property has been saved.`, () => {
    mainPage
      .favouriteButtons()
      .eq(0)
      .should("have.class", "bt-favorite--unflagged");

    mainPage.favouriteButtons().eq(0).click();

    mainPage
      .favouriteButtons()
      .eq(0)
      .should("have.class", "bt-favorite--flagged");
  });

  it(`This indicator can be toggled on or off from the property detail's view.`, () => {
    // TODO: not possible to create this tests because of broken /details-page
  });

  it(`This change (saved/un-saved) should reflect correctly 
    on the total saved count on the main hub`, () => {
    // TODO: not possible to create this tests because of broken /details-page
  });
});

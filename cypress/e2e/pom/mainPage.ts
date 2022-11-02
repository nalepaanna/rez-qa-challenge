class MainPage {
  filtersButton() {
    return cy.get(".bt-modal-toggle--filters");
  }

  favouriteButtons() {
    return cy.get(".bt-teaser").get("[role='checkbox']");
  }

  favouriteButtonsChecked() {
    return cy.get(".bt-favorite--flagged");
  }

  favouriteButtonsUnchecked() {
    return cy.get(".bt-favorite--unflagged");
  }

  numberOfSavedProperties() {
    return cy.get(".bt-favorites-link__count");
  }

  propertyInfo() {
    return cy.get(".bt-teaser__info");
  }

  propertyName() {
    return cy.get(".bt-teaser__heading");
  }

  noResultsMessage() {
    return cy.get(".bt-no-results");
  }
}
export default MainPage;

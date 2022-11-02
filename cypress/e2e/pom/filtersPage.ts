class FiltersPage {
  filtersModal() {
    return cy.get("[aria-label='Filter Results']");
  }

  minBedroomsValue() {
    return cy.get("[id='bt-range-value--Minimum Bedrooms']");
  }

  minBathroomsValue() {
    return cy.get("[id='bt-range-value--Minimum Bathrooms']");
  }

  minBedroomsMinusButton() {
    return cy
      .get("#bt-range-label--Minimum-Bedrooms")
      .siblings(".bt-range-filter__button--minus");
  }

  minBathroomsMinusButton() {
    return cy
      .get("#bt-range-label--Minimum-Bathrooms")
      .siblings(".bt-range-filter__button--minus");
  }

  minBedroomsPlusButton() {
    return cy
      .get("#bt-range-label--Minimum-Bedrooms")
      .siblings(".bt-range-filter__button--plus");
  }

  minBathroomsPlusButton() {
    return cy
      .get("#bt-range-label--Minimum-Bathrooms")
      .siblings(".bt-range-filter__button--plus");
  }

  clearFiltersButton() {
    return cy.contains("Clear Filters");
  }

  viewResultsButton() {
    return cy.contains("View results");
  }
}
export default FiltersPage;

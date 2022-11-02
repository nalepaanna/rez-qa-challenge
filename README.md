# QA challenge

This repository contains automated tests written in Cypress.io related to the site: https://www.rezfusionhubdemo.com/hub-test-vacation-rentals

Tests are splitted into two tests suites, each for one of the user stories:

- As a user I want the ability to save properties I’m looking at so they can be reviewed at a later time:
  properties.cy.ts
- As a user I want the ability to filter properties based on the number of bedrooms and bathrooms:
  filters.cy.ts

## Requirements

- Node.js are installed to your local system. Install at least v18.12.0 or higher. https://nodejs.org/en/
- Visual Studio Code is the preferred IDE. https://code.visualstudio.com/Download

## Usages

At the first, clone or download this repository.

Then install dependencies from root directory:

```bash
$ npm install
```

Open Cypress from root directory:

```bash
$ npx cypress open
```

In the launchpad choose "E2E Testing" option and then click "Start E2E Testing in Chrome".

New browser instance should open and you should see two tests suites: filters.cy.ts and properties.cy.ts

Click one of them to run tests.

You can also choose the suite on left sidebar.

/// <reference types="cypress" />

import users from "../../src/data/users.json";

describe("critical path tests", () => {
  beforeEach("visits the app", () => {
    cy.visit("/");
  });

  it("likes a match and views matches", () => {
    cy.contains(users[0].username);
    cy.get("[data-cy=like-button]").click();
    cy.get("[data-cy=easygoing]").click();
    cy.get("[data-cy=smart]").click();
    cy.get("[data-cy=creative]").click();
    cy.get("[data-cy=match-button]").click();
    cy.get("[data-cy=matches-tab]").click();
    cy.contains(users[0].username);
  });
});

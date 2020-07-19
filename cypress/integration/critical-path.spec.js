/// <reference types="cypress" />

import users from "../../src/data/users.json";

describe("critical path tests", () => {
  beforeEach("visits the app", () => {
    cy.visit("/");
  });

  it("passes and likes several matches, views match tab, then goes back to find tab", () => {
    // sorts five matches
    cy.contains(users[0].username);
    cy.likeMatch();
    cy.contains(users[1].username);
    cy.likeMatch();
    cy.contains(users[2].username);
    cy.passMatch();
    cy.contains(users[3].username);
    cy.passMatch();
    cy.contains(users[4].username);
    cy.likeMatch();

    // liked matches should appear on Matches list and have correct traits
    cy.get("[data-cy=matches-tab]").click();
    cy.contains(users[0].username);
    cy.contains(users[1].username);
    cy.contains(users[4].username);
    cy.contains("easygoing");
    cy.contains("smart");
    cy.contains("creative");
    cy.contains(users[2].username).should("not.exist");
    cy.contains(users[3].username).should("not.exist");

    // liked match should have correct traits within individual view

    cy.getBySel("match").first().click();
    cy.contains("easygoing");
    cy.contains("smart");
    cy.contains("creative");

    // Navigating back to the Find tab should show the next available match
    cy.get("[data-cy=find-tab]").click();
    cy.contains(users[5].username);
  });
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
/// <reference types="cypress" />

/**
 * Overwrites some common Cypress commands like "cy.click", "cy.type"
 * by adding a pause after the command.
 * @param {number} pauseMs - pause to add after the command, default 1000ms
 */
export const slowDownCommands = (pauseMs = 1000) => {
  // could be all commands
  // const commandsToSlowDown = Object.keys(Cypress.Commands._commands)
  const commandsToSlowDown = ["click", "check"];
  commandsToSlowDown.forEach((commandName) => {
    Cypress.Commands.overwrite(commandName, (commandFn, ...args) => {
      return commandFn(...args).then((subject) => {
        return Cypress.Promise.resolve(subject).delay(pauseMs);
      });
    });
  });
};

const clearViewport = () => {
  const runnerContainer = window.parent.document.getElementsByClassName(
    "iframes-container"
  )[0];
  runnerContainer.setAttribute(
    "style",
    "left: 0; top: 0; width: 100%; height: 100%;"
  );

  const sizeContainer = window.parent.document.getElementsByClassName(
    "size-container"
  )[0];
  sizeContainer.setAttribute("style", "");

  const sidebar = window.parent.document.getElementsByClassName(
    "reporter-wrap"
  )[0];
  sidebar.setAttribute("style", "opacity: 0");

  const header = window.parent.document.querySelector(
    ".runner.container header"
  );
  header.setAttribute("style", "opacity: 0");
};

Cypress.Commands.add("clearViewport", clearViewport);

Cypress.Commands.add("likeMatch", () => {
  cy.get("[data-cy=like-button]").click();
  cy.get("[data-cy=easygoing]").click();
  cy.get("[data-cy=smart]").click();
  cy.get("[data-cy=creative]").click();
  cy.get("[data-cy=match-button]").click();
});

Cypress.Commands.add("passMatch", () => {
  cy.get("[data-cy=pass-button]").click();
});

Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});

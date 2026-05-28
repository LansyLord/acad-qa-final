/// <reference types="cypress" />
import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('eu clico no card de serviço chamado {string}', (servico) => {
    const regex = new RegExp(servico, 'i');
    cy.contains(regex, { timeout: 6000 })
        .click({ force: true });
});

Then('o título principal da nova página deve conter {string}', (termo) => {
    cy.get('h1', { timeout: 5000 })
        .should('be.visible')
        .and('contain.text', termo);
});
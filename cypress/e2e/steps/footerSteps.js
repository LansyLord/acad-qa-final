/// <reference types="cypress" />
import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('eu clico no link do rodapé {string}', (textoLink) => {
    cy.get('footer')
        .contains('a', textoLink, { timeout: 3000 })
        .click({ force: true });
});

Then('eu devo ser redirecionado para o link institucional de sobre', () => {
    cy.url().should('match', /governo-digital|governodigital|por-dentro-do-govbr/);
});

Then('eu devo ser redirecionado para o link institucional de termos', () => {
    cy.url().should('include', '/termos-de-uso');
});
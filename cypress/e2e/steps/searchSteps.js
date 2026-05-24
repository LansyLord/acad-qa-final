/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

When('eu insiro o texto {string} na barra de pesquisa', (text) => {
    cy.get('#searchtext-input').type(text);
});

And('clico no botão de buscar', () => {
    cy.get('.aa-SubmitButton').click();
});

Then('eu devo ser redirecionado para a página com resultados de {string}', (text) => {
    cy.get('.totalTermo').should('contain', text);
});
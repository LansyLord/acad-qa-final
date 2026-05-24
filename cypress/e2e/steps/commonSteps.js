/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('que eu estou na página incial do site', () => {

    cy.viewport(1280, 720);

    cy.log('Acessando a página inicial do gov.br');
    cy.visit('https://www.gov.br/pt-br');

    cy.wait(1500);

    cy.get('body').then(($body) => {

        if ($body.find('button.reject-all').length > 0) {
            cy.log('Aviso de cookies encontrado. Rejeitando...');
            cy.get('button.reject-all').click();
        }


        if ($body.find('.popup-login-overlay').length > 0) {
            cy.log('Caixa de "Para começar" encontrada. Fechando...');

            cy.get('.wrapper-login')
                .find('.fa-times, i[class*="close"], [aria-label="Fechar"]')
                .first()
                .click({ force: true });
        }
    });
});
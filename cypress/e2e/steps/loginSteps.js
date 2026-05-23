/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Cenário: Login bem-sucedido

Given('que eu estou na página de login do duolingo', () => {
    cy.log('Acessando a página de login do duolingo');
    cy.visit('https://www.duolingo.com/');
    cy.get('[data-test="have-account"]').click();
});

When('eu insiro o usuário e a senha correta', () => {
    cy.get('body').then(($body) => {
        if ($body.find(':contains("Que bom ver você de novo!")').length > 0) {

            cy.log('Tela de Login com usuário já preenchido');
            cy.get('[data-test="password-input"]').type('123456');

        } else {

            cy.log('Tela de Login sem usuário preenchido');
            cy.get('[data-test="email-input"]').type('qZ4HEWh2');
            cy.get('[data-test="password-input"]').type('123456');
            cy.get('[data-test="password-input"]').blur();
            cy.wait(1000);
            cy.get('[data-test="register-button"]').click();
        }
    });
});

And('clico no botão de login', () => {
    cy.get('[data-test="register-button"]').click();
});

Then('eu devo ser redirecionado para a página de aprendizado', () => {
    cy.location('pathname', { timeout: 10000 }).should('eq', '/learn');
});

// Cenário: Login mal sucedido (Usuário inválido)

// When('eu insiro o usuário {string}', (username) => {
//     cy.get('[data-test="username"]').type(username);
// });

// When('insiro a senha {string}', (password) => {
//     cy.get('[data-test="password"]').type(password);
// });

// Then('está exibindo uma mensagem de erro', () => {
//     cy.get('.error-message-container').should('be.visible')
// });
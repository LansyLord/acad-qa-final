/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

When('eu clico no botão da navbar {string}', (text) => {

    cy.get('header')
        .contains('a', text, { timeout: 3000 })
        .click({ force: true });
});

Then('eu devo ser redirecionado para a página de {string}', (text) => {
    // Cria um dicionário mapeando o nome do botão para o pedaço correto da URL
    const urlsEsperadas = {
        "Órgãos do Governo": "orgaos-do-governo",
        "Acesso à Informação": "acessoainformacao",
        "Legislação": "legislacao",
        "Acessibilidade": "acessibilidade-digital"
    };

    // Busca no dicionário a URL correspondente ao texto recebido do Cucumber
    const urlCorreta = urlsEsperadas[text];

    cy.log(`Validando redirecionamento para a rota: ${urlCorreta}`);

    // Verifica se a URL atual inclui o fragmento correto
    cy.url().should('include', urlCorreta);
});
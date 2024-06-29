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
 Cypress.Commands.add('login', (email, password) => { 
    cy.visit("../sistema/login.html");
    cy.get('#email').type(email);
    cy.get('#senha').type(password);
    cy.get('#btn-entrar').click();
  })

 Cypress.Commands.add('criarProd', (code, name, amount, value, date) => { 
    cy.visit("../sistema/login.html");
    cy.login("admin@admin.com","admin@123");
    cy.get('#btn-adicionar').click();
    cy.get('#btn-adicionar').click();
    cy.get('#codigo').type(code);
    cy.get('#nome').type(name);
    cy.get('#quantidade').type(amount);
    cy.get('#valor').type(value);
    cy.get('#data').type(date);
    cy.get('#btn-salvar').click();
  })

 
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
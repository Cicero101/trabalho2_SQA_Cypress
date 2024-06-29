/// <reference types="cypress" />

describe('GUI - Testes relacionados a login', () => {

    it('TC001-001- Login com e-mail não encontrado', () => {

        cy.login("teste","admin@123");
        cy.get('#mensagem').should('contain', 'E-mail ou senha inválidos');
    });

    it('TC001-002- Login com senha invalida', () => {
        
        cy.login("admin@admin.com","teste");
        cy.get('#mensagem').should('contain', 'E-mail ou senha inválidos');
    });

    it('TC001-003- Usuário e Senha null', () => {

        cy.visit("../sistema/login.html");
        cy.get('#btn-entrar').click();
        cy.get('#mensagem').should('contain', 'Informe usuário e senha, os campos não podem ser brancos.');
    });

    it('TC001-004- Usuário null', () => {

        cy.visit("../sistema/login.html");
        cy.get('#senha').type("admin@123");
        cy.get('#btn-entrar').click();
        cy.get('#mensagem').should('contain', 'Informe usuário e senha, os campos não podem ser brancos.');
    });

    it('TC001-005- Senha null', () => {

        cy.visit("../sistema/login.html");
        cy.get('#email').type("admin@admin.com");
        cy.get('#btn-entrar').click();
        cy.get('#mensagem').should('contain', 'Informe usuário e senha, os campos não podem ser brancos.');
    });
    it('TC001-006- Login Valido', () => {

        cy.login("admin@admin.com","admin@123");
        cy.get('.navbar-brand').should('contain', 'Controle de produtos');
    });

    it('TC001-007- Recuperar Login', () => {

        cy.login("admin@admin.com","teste");
        cy.get('#btn-esqueci-minha-senha');
    });
    



})
/// <reference types="cypress" />

describe('GUI - Testes relacionados a produtos', () => {


    it('TC002-001- Criação de produto da maneira correta', () => {

        cy.criarProd(90, "teste", 5, 30, '2024-06-30');
        cy.get('tbody > tr > :nth-child(2)').should('contain', 'teste');

    });

    it('TC002-002- Criação de produto campos obrigatórios em branco', () => {

    cy.login("admin@admin.com","admin@123");
    cy.get('#btn-adicionar').click();
    cy.get('#btn-adicionar').click();
    cy.get('#btn-salvar').click();
    cy.get('#mensagem').should('contain', 'Todos os campos são obrigatórios para o cadastro!');
    });

    it('TC002-003- Criação de produto com codigo invalido', () => {

        cy.criarProd(3.1415, "teste", 5, 30, '2024-06-30');
        cy.get('#mensagem').should('contain', 'Codigo invalido');
    });

    it('TC002-004- Criação de produto com nome invalido', () => {

        cy.criarProd(90, "ab", 5, 30, '2024-06-30');
        cy.get('#mensagem').should('contain', 'Nome invalido');
    });

    it('TC002-005- Criação de produto com quantidade invalido', () => {

        cy.criarProd(90, "teste", 3.1415, 30, '2024-06-30');
        cy.get('#mensagem').should('contain', 'Quantidade invalido');
    });

    it('TC002-006- Criação de produto com valor invalido', () => {

        cy.criarProd(90, "teste", 5, -30, '2024-06-30');
        cy.get('#mensagem').should('contain', 'Valor invalido');
    });

    it('CT002-008- Fechar modal com campos preenchidos', () => {

        cy.login("admin@admin.com","admin@123");
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();
        cy.get('#codigo').type(90);
        cy.get('#nome').type("teste");
        cy.get('#quantidade').type(5);
        cy.get('#valor').type(30);
        cy.get('#data').type('2024-06-30');
        cy.get('#btn-sair').click();
        cy.get('#mensagem').should('contain', 'Os dados inseridos não serão salvos ! Deseja continuar ?');
    });

    it('CT002-009- Limpar modal quando solicitar SAIR', () => {

        cy.login("admin@admin.com","admin@123");
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();
        cy.get('#codigo').type(90);
        cy.get('#nome').type("teste");
        cy.get('#quantidade').type(5);
        cy.get('#valor').type(30);
        cy.get('#data').type('2024-06-30');
        cy.get('#btn-sair').click();
        cy.get('#btn-sair').click();
        cy.get('#codigo').should('contain', '');
    });

    it('TC002-010- Clique no logo', () => {

        cy.login("admin@admin.com","admin@123");
        cy.get('.navbar-brand').click();
        cy.get('.navbar-brand').should('contain', 'Controle de produtos');
    });

    it('TC002-011- Botão Voltar', () => {

        cy.login("admin@admin.com","admin@123");
        cy.get('.nav-link').click();
        cy.get('h1').should('contain', 'Login');
    });

    it('TC002-012-Clicar no "x" para fechar o modal', () => {

        cy.login("admin@admin.com","admin@123");
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();
        cy.get('.modal-header > .close').click();
    });
    
    it('TC002-015- Não deve ser possível acessar a página de produtos sem primeiro fazer login', () => {

        cy.visit("../sistema/produtos.html");
        cy.get('h1').should('contain', 'Login');
    });





})
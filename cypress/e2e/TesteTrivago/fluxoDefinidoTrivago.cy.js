/// <reference types="Cypress"/>


describe('Teste Fluxo Trivago', () => {
    it('Realizar pesquisa, ordenação, nome, avaliação e valor', () => {
    cy.visit("http://www.trivago.com.br", {failOnStatusCode: false})
    cy.get('.not-found__button').click()
   
    
    });
});
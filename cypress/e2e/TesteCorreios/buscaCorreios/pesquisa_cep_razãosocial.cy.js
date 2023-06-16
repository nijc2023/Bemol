/// <reference types="Cypress"/>


describe('Teste Funcional - Realizar a busca no site dos correios', () => {
    it('Deve realizar busca do cep “69005-040” com sucesso', () => {
        cy.visit("https://buscacepinter.correios.com.br/app/endereco/index.php")
        cy.get('#endereco').type("69005-040")
        cy.get('#tipoCEP').select ("Localidade/Logradouro") 
        cy.get('#btn_pesquisar').click()
        cy.get('h5').should('contain','Resultado da Busca por Endereço ou CEP')
     
    });

        it('Deve realizar busca do cep  “Lojas Bemol” com sucesso', () => {
            cy.visit("https://buscacepinter.correios.com.br/app/endereco/index.php")
            cy.get('#endereco').type("Lojas Bemol")
            cy.get('#tipoCEP').select ("Grande Usuário") 
            cy.get('#btn_pesquisar').click()
            cy.get('h5').should('contain','Resultado da Busca por Endereço ou CEP')
         
        });
});





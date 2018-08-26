/// <reference types="Cypress" />

context('Vertical margin test', () => {
    it('has margins for desktop', () => {
    	cy.visit('/');
    	cy.viewport(800, 1000);
        cy.get('.foo-bar').should('have.css', 'margin-top', '50px');
        cy.get('.foo-bar').should('have.css', 'margin-right', '40px');
        cy.get('.foo-bar').should('have.css', 'margin-bottom', '50px');
        cy.get('.foo-bar').should('have.css', 'margin-left', '60px');
    });

    it('has margins for mobile', () => {
    	cy.visit('/');
    	cy.viewport(800, 500);

        cy.get('.foo-bar').should('have.css', 'margin-top', '20px');
        cy.get('.foo-bar').should('have.css', 'margin-right', '10px');
        cy.get('.foo-bar').should('have.css', 'margin-bottom', '20px');
        cy.get('.foo-bar').should('have.css', 'margin-left', '30px');
    })

    it('has margins for middle breakpoint', () => {
    	cy.visit('/');
    	cy.viewport(800, 750);
    	
        cy.get('.foo-bar').should('have.css', 'margin-top', '35px');
        cy.get('.foo-bar').should('have.css', 'margin-right', '25px');
        cy.get('.foo-bar').should('have.css', 'margin-bottom', '35px');
        cy.get('.foo-bar').should('have.css', 'margin-left', '45px');
    })
});
context('Margin test', () => {
    it('has margins for desktop', () => {
    	cy.visit('/');
    	cy.viewport(1000, 800);
        cy.get('.bar').should('have.css', 'margin-top', '50px');
        cy.get('.bar').should('have.css', 'margin-right', '40px');
        cy.get('.bar').should('have.css', 'margin-bottom', '50px');
        cy.get('.bar').should('have.css', 'margin-left', '60px');
    });

    it('has margins for mobile', () => {
    	cy.visit('/');
    	cy.viewport(500, 800);

        cy.get('.bar').should('have.css', 'margin-top', '20px');
        cy.get('.bar').should('have.css', 'margin-right', '10px');
        cy.get('.bar').should('have.css', 'margin-bottom', '20px');
        cy.get('.bar').should('have.css', 'margin-left', '30px');
    })

    it('has margins for middle breakpoint', () => {
    	cy.visit('/');
    	cy.viewport(750, 800);
    	
        cy.get('.bar').should('have.css', 'margin-top', '35px');
        cy.get('.bar').should('have.css', 'margin-right', '25px');
        cy.get('.bar').should('have.css', 'margin-bottom', '35px');
        cy.get('.bar').should('have.css', 'margin-left', '45px');
    })
});
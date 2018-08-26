context('Padding test', () => {
    it('has paddings for desktop', () => {
    	cy.visit('/');
    	cy.viewport(1000, 800);
        cy.get('.foo').should('have.css', 'padding-top', '50px');
        cy.get('.foo').should('have.css', 'padding-right', '40px');
        cy.get('.foo').should('have.css', 'padding-bottom', '50px');
        cy.get('.foo').should('have.css', 'padding-left', '60px');
    });

    it('has paddings for mobile', () => {
    	cy.visit('/');
    	cy.viewport(500, 800);

        cy.get('.foo').should('have.css', 'padding-top', '20px');
        cy.get('.foo').should('have.css', 'padding-right', '1px');
        cy.get('.foo').should('have.css', 'padding-bottom', '20px');
        cy.get('.foo').should('have.css', 'padding-left', '1px');
    })

    it('has paddings for middle breakpoint', () => {
    	cy.visit('/');
    	cy.viewport(750, 800);
    	
        cy.get('.foo').should('have.css', 'padding-top', '35px');
        cy.get('.foo').should('have.css', 'padding-right', '20.5px');
        cy.get('.foo').should('have.css', 'padding-bottom', '35px');
        cy.get('.foo').should('have.css', 'padding-left', '30.5px');
    })
});
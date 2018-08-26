context('font-size test', () => {
    it('has font-sizes for desktop', () => {
    	cy.visit('/');
    	cy.viewport(1000, 800);
        cy.get('h1').should('have.css', 'font-size', '100px');
    });

    it('has font-sizes for mobile', () => {
    	cy.visit('/');
    	cy.viewport(500, 800);

        cy.get('h1').should('have.css', 'font-size', '20px');
    })

    it('has font-sizes for middle breakpoint', () => {
    	cy.visit('/');
    	cy.viewport(750, 800);
    	
        cy.get('h1').should('have.css', 'font-size', '60px');
    })
});
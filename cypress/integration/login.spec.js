describe('Login', function() {

    it('Login fail, wrong password', function() {
        cy.visit('/login')
        cy.get('input[ng-reflect-name=email]').type('mac@mac.com');
        cy.get('input[ng-reflect-name=password]').type('123456');
        cy.get('button[type=submit]').click();
        cy.get('.error-messages').should('contain', 'email or password is invalid');
    });

    it('Login success', function() {
        cy.login();
        cy.location('pathname').should('eq', '/')
    });

});
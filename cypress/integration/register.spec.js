describe('Register', function() {

    it('Register new account', function() {
        cy.visit('/register');
        cy.get('input[ng-reflect-name=username]').type('mac');
        cy.get('input[ng-reflect-name=email]').type('mac@mac.com');
        cy.get('input[ng-reflect-name=password]').type('password');
        cy.get('button[type=submit]').click();
    });

});
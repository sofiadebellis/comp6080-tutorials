describe('Login Flow', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173')
    });

    it('successfully log in after entering the correct details', () => {
        // log in
        const email = 'cs6080@email.com';
        const password = 'super secure password';
        const welcomeText = "You're logged in!";

        cy.get('input[name=email]').focus().type(email);
        cy.get('input[name=password]').focus().type(password);

        cy.get('button[type=submit]').click();

        cy.get('h1').then((h1) => {
            expect(h1.text()).to.contain(welcomeText);
        })
    })
})
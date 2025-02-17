describe('Login Flow', () => {

    beforeEach(() => {
        cy.visit('localhost:5173/')
    })

    it("sucessfully logs in after entering correct user detials", () => {
        const email = 'cs6080@email.com'
        const password = 'password'
        const welcomeText = 'You\'re logged in!'

        cy.get('input[name="email"]').focus().type(email);
        cy.get('input[name="password"]').focus().type(password);
        cy.get('button').click();

        cy.get('h1').then((h1) => {
            expect(h1.text()).to.contain(welcomeText);
        });
    });
});
describe('Login e2e', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('Successfully logs in after entering correct credentials', () => {
    cy.get('input[name=email').focus().type('cs6080@email.com');
    cy.get('input[name=password]').focus().type('super secure password');
    cy.get('button[type=submit').click();

    cy.get('h1').then((h1) => {
      expect(h1.text()).to.contain("You're logged in!");
    })
  })
})
describe('Home Page', () => {

  beforeEach(() => {
    cy.log('Runs on each test');
    cy.log('Load request');
    cy.request('https://picsum.photos/v2/list').its('body').as('listContent');
    // cy.log('Visit the page');
    // cy.visit('/');
    // cy.hash().should('eq', '');
  });

  it('Visits the initial project page and search images', () => {
    cy.visit('/')
    cy.contains('Buscador')
    cy.get('input[name="search"]').clear()

    cy.get('@listContent').then((data) => {
      cy.log('Request content', data);
      cy.wrap(data).each((value, i, array) => {
        cy.get('input[name="search"]').clear().type(value.id);
        cy.get('img').should(($img) => {
          expect($img.length).to.be.greaterThan(1)
        });
      });
    })
  });

});

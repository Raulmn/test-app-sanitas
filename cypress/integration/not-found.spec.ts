describe('Not Found Page', () => {
  it('Visits the not found page', () => {
    cy.visit('./pages/not-found/not-found.component.html')
    cy.contains('404')
    cy.contains('Página no encontrada')
  })
})

describe('Org Page', () => {
  it('Should render org page', () => {
    cy.visit('/org?name=facebook')
    cy.get('h4').contains('Facebook')
  })

  it('should page error', () => {
    cy.visit('/org?name=aksjhajs')
    cy.get('h5').contains('Ooops! Não foi possivel')
  })
})

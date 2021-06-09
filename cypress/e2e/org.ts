describe('Org Page', () => {
  it('Should render org page', () => {
    cy.visit('/org/facebook')
    cy.get('h4').contains('Facebook')
  })

	it('should page error', () => {
		 cy.visit('/search')
    cy.get('input').type('asasas')
    cy.get('.styles__Button-sc-12mhrge-0').click()
    cy.get('h5').contains('Ooops! Não foi possivel')
  })
})

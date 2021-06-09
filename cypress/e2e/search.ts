describe('Search Page', () => {
  it('Should render search page', () => {
    cy.visit('/search')

    cy.get('h1').contains('GetOrg')
    cy.get('input').should('exist')
    cy.get('button').contains('GET INFO')
  })

  it('Fluxo Page', () => {
    cy.get('input').type('facebook')
    cy.get('.styles__Button-sc-12mhrge-0').click()
    cy.url().should('eq', 'http://localhost:3000/org?name=facebook')
    cy.get('.styles__Title-ry3nyh-3').contains('Facebook')
  })
})

describe('Скролл', () => {
  it('Скролл в низ', () => {
    cy.visit('https://google.ru')
    cy.get('textarea[class="gLFyf"]').type('Белка{Enter}')
    cy.get('div, [class="PZPZlf ssJ7i B5dxMb"]').should('have.text','Белка') 
    cy.scrollTo(0, 4000)
    cy.get('span, [class="dg6jd"]').should('have.text','Белка класс')
    
  })
})

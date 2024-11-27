describe('Петрович', () => {
  it('Покупка выключателя', () => {
    cy.visit('https://moscow.petrovich.ru/')
    cy.viewport(1289, 760)
    cy.get('[name="q"]').type('Выключатель')
    cy.contains('Найти').click()
    cy.contains('Выключатель Systeme Electric AtlasDesign двухклавишный встраиваемый белый (ATN000151)').click()
    cy.contains('Характеристики').click()
    cy.contains('В корзину').click()
    cy.contains('Корзина').click()
    cy.get('[data-test="product-title"]')
  })
})
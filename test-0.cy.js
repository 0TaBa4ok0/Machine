describe('Тест погоды', () => {
  it('Проверяем погоду в Москве', () => {
    cy.visit('https://google.ru')
    
    cy.get('[id="APjFqb"]').type('погода в москве')
    cy.contains('Мне повезёт!').click()
    
  })
})
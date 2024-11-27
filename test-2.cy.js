const email = 'User'
const password = '12345'

describe('Форма входа', () => {
  it('Валидация', () => {
    cy.visit('https://b2c.passport.rt.ru/auth/realms/b2c/protocol/openid-connect/auth/?client_id=lk_onlime&redirect_uri=https%3A%2F%2Fmy.rt.ru%2Fauth%2Fssoredirect%2F&response_type=code&auth_type=standard')

    cy.get('[id="username"]').type(`${email}`)
    cy.get('[id="password"]').type(`${password}`)
    cy.get('[id="kc-login"]').click()
  })
})
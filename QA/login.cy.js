describe('customer select is functional', () => {
  it('customer select page test', () => {
    cy.clearCookies()
    cy.clearAllSessionStorage()
    cy.clearAllLocalStorage()
    cy.visit('https://app.hatsandladders.com/')
    cy.url().should('include', '/customer-check')
    cy.get("button").contains("GO").should('be.disabled')
    cy.get('div[id="customer-select"]').click()
    cy.get("ul").find("li").each((option) => {
      cy.get(option).click()
      cy.get("button").contains("GO").click()
      cy.url().should('include', '/login')
      // test if there is either start button for DYCD or a Google sign in?
      cy.clearCookies().then(cy.clearAllSessionStorage()).then(cy.clearAllLocalStorage())
      cy.getCookies().should('be.empty')
      cy.getAllSessionStorage().should('be.empty')
      cy.getAllLocalStorage().should('be.empty')
      cy.go('back')
    })
  })
})
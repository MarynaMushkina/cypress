describe("My allo.ua", function() {
    beforeEach(function() {
        cy.viewport('macbook-13')
      })
      it("Open site", function() {
        cy.visit("https://allo.ua/")
        cy.contains('Магазини').click()
        cy.get('.content__title').should('have.text','Адреси магазинів')
    })
})

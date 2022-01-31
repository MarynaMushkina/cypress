describe('My allo.ua', () => {
    it('Open site', () => {
        cy.visit('/')
        cy.contains('Магазини').click()
        cy.get('.content__title').should('have.text','Адреси магазинів')

    })
    it('Check the search field', () => {  
        cy.get('input[id="search-form__input"]').type('xiaomi{enter}')
        cy.get('.product-card').should('be.visible')
        cy.get('.product-card').should('have.length', 28)
    }) 
    it('Check that active filter "Смартфони і мобільні телефони"', () => {  
        cy.get('a[title="Смартфони і мобільні телефони"]').click()
        cy.get('.filter-popup__button').click()
        cy.get('.toolbar-block').find('.active-filter span').should('have.text','Смартфони і мобільні телефони')
    }) 
})

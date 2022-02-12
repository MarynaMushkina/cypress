const { find } = require("lodash")

describe('My allo.ua', () => {
    it('Open site', () => {
        cy.visit('/')
        cy.contains('Магазини').click()
        cy.get('.content__title').should('have.text','Адреса магазинів АЛЛО')

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

    it('Check payment for Monobank', () => {  
        cy.get('input[id="search-form__input"]').type('samsung{enter}')
        cy.get('.products-layout__item').eq(0).click()
        cy.get('[data-tab="credit"]').click()
        cy.get('.p-view__header-title').should('have.text','Samsung Galaxy S21 FE 6/128 GRAY (SM-G990BZADSEK)')
        cy.get('[data-bank-id="12"]', { timeout: 20000 }).find('.custom_select_field').click()
        cy.get('.v-custom-select').should('be.visible')
        cy.get('.custom_select_list').find('[data-value="3"]').click()
        cy.get('[data-bank-id="12"]').find('span.credit-item__monthly').should('have.text','7 333 ₴')

        cy.get('[data-bank-id="12"]').find('.custom_select_field').click()
        cy.get('.custom_select_list').find('[data-value="8"]').click()
        cy.get('[data-bank-id="12"]').find('span.credit-item__monthly').should('have.text','2 750 ₴')
    })
})

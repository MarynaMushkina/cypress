const { find, first, last } = require("lodash")

describe('My allo.ua', () => {
    // it('Open site', () => {
    //     cy.visit('/')
    //     cy.contains('Магазини').click()
    //     cy.get('.content__title').should('have.text','Адреса магазинів АЛЛО')

    // })
    // it('Check the search field', () => {  
    //     cy.get('input[id="search-form__input"]').type('xiaomi{enter}')
    //     cy.get('.product-card').should('be.visible')
    //     cy.get('.product-card').should('have.length', 28)
    // }) 
    // it('Check that active filter "Смартфони і мобільні телефони"', () => {  
    //     cy.get('a[title="Смартфони і мобільні телефони"]').click()
    //     cy.get('.filter-popup__button').click()
    //     cy.get('.toolbar-block').find('.active-filter span').should('have.text','Смартфони і мобільні телефони')
    // }) 

    // it('Check payment for Monobank', () => {  
    //     cy.get('input[id="search-form__input"]').type('samsung{enter}')
    //     cy.get('.products-layout__item').eq(0).click()
    //     cy.get('[data-tab="credit"]').click()
    //     cy.get('.p-view__header-title').should('have.text','Samsung Galaxy S21 FE 6/128 GRAY (SM-G990BZADSEK)')
    //     cy.get('[data-bank-id="12"]', { timeout: 20000 }).find('.custom_select_field').click()
    //     cy.get('.v-custom-select').should('be.visible')
    //     cy.get('.custom_select_list').find('[data-value="3"]').click()
    //     cy.get('[data-bank-id="12"]').find('span.credit-item__monthly').should('have.text','7 333 ₴')

    //     cy.get('[data-bank-id="12"]').find('.custom_select_field').click()
    //     cy.get('.custom_select_list').find('[data-value="8"]').click()
    //     cy.get('[data-bank-id="12"]').find('span.credit-item__monthly').should('have.text','2 750 ₴')
    // })

    
    it('Compare two phones', () => {  
        cy.visit('/')
        cy.contains('Каталог').click()
        cy.get('.menu__list').should('be.visible')
        cy.get('.item__content').find('[title="Nokia"]').click()
        cy.get('.product-card').eq(0).find('.compare').click()
        cy.get('.product-card').eq(1).find('.compare').click()
        cy.get('.compare-list').should('be.visible')
        cy.get('.compare-list__buttons-compare').click()

        cy.get('#compare-table > tbody:nth-child(11) > tr.attr-table__tr.is-different > td:nth-child(2)')
        .invoke('text').then((text1) => {
            
        cy.get('#compare-table > tbody:nth-child(11) > tr.attr-table__tr.is-different > td:nth-child(3)')
            .invoke('text')
            .should((text2) => {
              expect(text1).to.eq(text2)
            })
        })
    })
})

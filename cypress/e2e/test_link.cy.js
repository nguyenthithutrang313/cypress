

//test navigation

describe('Test left navigation bar', () => {

    beforeEach( () => {
        cy.visit('http://localhost:3000/sign-in')
        cy.get('.flex').find('input[name = "email"]').type('trang42a1dqh@gmail.com')
        cy.get('.flex').find('input[name = "password"]').type('31032002')
        cy.get('button[type="submit"]').click()
    })

    it('page Error Products Statistic', () => {
       cy.contains('span', 'Error Products Statistic').click()
       cy.url().should('eq', 'http://localhost:3000/dashboards/error-products-analytics' )
    })

    it('page Request Product Recall', () => {
        cy.contains('span', 'Request Product Recall').click()
        cy.url().should('eq', 'http://localhost:3000/dashboards/create-request-recall' ) 
    })

    it('page Statistic Products', () => {
        cy.contains('span', 'Statistic Products').click()
        cy.url().should('eq', 'http://localhost:3000/dashboards/statistic-products' )
    })

    it('pageProfile', () => {

        cy.contains('span', 'Profile').click()
        cy.url().should('eq', 'http://localhost:3000/apps/profile' )

    })
    it('page Allocate Account', () => {
        cy.contains('span', 'Account').click()

        cy.contains('span', 'Allocate Account').click()
        cy.url().should('eq', 'http://localhost:3000/apps/accounts/create-account' )
    })

    it(' page Accounts List', () => {
        cy.contains('span', 'Account').click()

        cy.contains('span', 'Accounts List').click()
        cy.url().should('eq', 'http://localhost:3000/apps/accounts/accounts-list' )    
    })

    it('page Create Executive Board', () => {
        cy.contains('span', 'Departments').click()

        cy.contains('span', 'Create Executive Board').click()
        cy.url().should('eq', 'http://localhost:3000/apps/departments/create-executive-board' )      
    })

    it('page Create Factory', () => {
        cy.contains('span', 'Departments').click()

        cy.contains('span', 'Create Factory').click()
        cy.url().should('eq', 'http://localhost:3000/apps/departments/create-factory' )    
    })

    it('page Create Distribution Agent', () => {
        cy.contains('span', 'Departments').click()

        cy.contains('span', 'Create Distribution Agent').click()
        cy.url().should('eq', 'http://localhost:3000/apps/departments/create-distribution-agent' )    
    })

    it('page Create Warranty Center', () => {
        cy.contains('span', 'Departments').click()

        cy.contains('span', 'Create Warranty Center').click()
        cy.url().should('eq', 'http://localhost:3000/apps/departments/create-warranty-center' )
    })

    it('page Manage Departments', () => {
        cy.contains('span', 'Departments').click()

        cy.contains('span', 'Manage Departments').click()
        cy.url().should('eq', 'http://localhost:3000/apps/departments/manage-departments' ) 
    })

    it('page error 404', () => {

        cy.contains('span', 'Error').click()

        cy.contains('span', '404').click()
        cy.url().should('eq', 'http://localhost:3000/pages/error/404' )
    }) 

    it('page error 500', () => {
        cy.contains('span', 'Error').click()

        cy.contains('span', '500').click()
        cy.url().should('eq', 'http://localhost:3000/pages/error/500' )
    })

    it('page Create Product Line', () => {
      cy.contains('span', 'Products').click()

      cy.contains('span', 'Create Product Line').click()
      cy.url().should('eq', 'http://localhost:3000/apps/productLines/create-product-line' )
        })

    it('page Product Line', () => {
      cy.contains('span', 'Products').click()

      cy.contains('span', 'Product Line').click()
      cy.url().should('eq', 'http://localhost:3000/apps/productLines/manage-product-line' )
    })

    it('page check Product Information', () => {
       cy.contains('span', 'Products').click()

       cy.contains('span', 'Check Product Information').click()
       cy.url().should('eq', 'http://localhost:3000/apps/productLines/check-product-info' )
    })

    it('Test ExcutiveBoard: page My Profile', () => {
        cy.contains('button', 'ExecutiveBoard').click()

        cy.contains('span', 'My Profile').click()
        cy.url().should('eq', 'http://localhost:3000/apps/profile')

    })

    it('Test ExcutiveBoard: Sign out', () => {
        cy.contains('button', 'ExecutiveBoard').click()
            
        cy.contains('span', 'Sign out').click()
        cy.url().should('eq', 'http://localhost:3000/sign-in')
        
    })

})
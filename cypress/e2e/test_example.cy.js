describe('My test profile', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/apps/accounts/sign-in')
    cy.get('.flex').find('input[name = "email"]').type('trang42a1dqh@gmail.com')
    cy.get('.flex').find('input[name = "password"]').type('31032002')
    cy.get('button[type="submit"]').click()
    cy.contains('button', 'ExecutiveBoard').click()
    cy.contains('span', 'My Profile').click()
  })

  it('Test page profile', () => {
   
    cy.get('textarea[placeholder="Write something.."]'). click()
    .type('Hello Mr.Son!')
    .should('have.value', 'Hello Mr.Son!') 
    
  })

})
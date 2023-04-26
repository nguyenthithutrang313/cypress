// Test mẫu đăng ký tài khoản doanh nghiệp

describe('My form test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/apps/accounts/create-account')
    cy.get('.flex').find('input[name = "email"]').type('trang42a1dqh@gmail.com')
    cy.get('.flex').find('input[name = "password"]').type('31032002')
    cy.get('button[type="submit"]').click()
    cy.contains('span','Account').click()
    cy.contains('span', 'Allocate Account').click()
  })

  it('Test form', ()=>{

    //test input Username(correct format)
    cy.get('.flex').find('input[name = "username"]')
    .type('trangbeee').should('have.value', 'trangbeee') 

    //test input Display Name(correct format)
    cy.get('.flex').find('input[name = "displayName"]')
    .type('Thu Trang').should('have.value', 'Thu Trang')

    //test input Email(correct format)
    cy.get('.flex').find('input[name = "email"]')
    .type('trang42a1dqhh@gmail.com').should('have.value', 'trang42a1dqhh@gmail.com')

    //test input Password(correct format)
    cy.get('.flex').find('input[name = "password"]')
    .type('31032002').should('have.value', '31032002')
  
    //test input Password confirm(correct format)
    cy.get('.flex').find('input[name = "confirmPassword"]')
    .type('31032002').should('have.value', '31032002')

    //test select related department
    cy.get('#select-department').click()
    cy.get('ul li').filter(':contains("Công ty trách nhiệm hết hạn")').click()

    //test select roles
    cy.get('#select-roles').click()
    cy.get('ul li').filter(':contains("Factory")').click()
  
    //test submit()
    cy.get('button[type="submit"]').click()
  })

  it('Test email input', () => {
   //test input Username(correct format)
   cy.get('.flex').find('input[name = "username"]')
   .type('trangbeee').should('have.value', 'trangbeee') 

    //test input Display Name(correct format)
   cy.get('.flex').find('input[name = "displayName"]')
   .type('Thu Trang').should('have.value', 'Thu Trang')

    //test input Email(correct format)
    cy.get('.flex').find('input[name = "email"]')
    .type('trang42a1dqhhgmail.com').should('have.value', 'trang42a1dqhhgmail.com')
    cy.get('.flex').find('input[name = "email"]')
    .invoke('prop', 'validationMessage') 
    .should('contain', "Please include an '@' in the email address. 'trang42a1dqhhgmail.com' is missing an '@'.");

    //test input Password(correct format)
    cy.get('.flex').find('input[name = "password"]')
   .type('31032002').should('have.value', '31032002')

    //test input Password confirm(correct format)
     cy.get('.flex').find('input[name = "confirmPassword"]')
    .type('31032002').should('have.value', '31032002')

    //test select related department
    cy.get('#select-department').click()
     cy.get('ul li').filter(':contains("Công ty trách nhiệm hết hạn")').click()

    //test select roles
    cy.get('#select-roles').click()
    cy.get('ul li').filter(':contains("Factory")').click()

    //test submit()
    cy.get('button[type="submit"]').should('have.attr', 'disabled')

  })

  it('Test username input', () => {
    //test input Username(correct format)
    cy.get('.flex').find('input[name = "username"]')
    .type('trang beee').should('have.value', 'trang beee') 
 
     //test input Display Name(correct format)
    cy.get('.flex').find('input[name = "displayName"]')
    .type('Thu Trang').should('have.value', 'Thu Trang')
 
     //test input Email(correct format)
     cy.get('.flex').find('input[name = "email"]')
     .type('trang42a1dqh@gmail.com').should('have.value', 'trang42a1dqh@gmail.com')
     
     //test input Password(correct format)
     cy.get('.flex').find('input[name = "password"]')
    .type('31032002').should('have.value', '31032002')
 
     //test input Password confirm(correct format)
      cy.get('.flex').find('input[name = "confirmPassword"]')
     .type('31032002').should('have.value', '31032002')
 
     //test select related department
     cy.get('#select-department').click()
      cy.get('ul li').filter(':contains("Công ty trách nhiệm hết hạn")').click()
 
     //test select roles
     cy.get('#select-roles').click()
     cy.get('ul li').filter(':contains("Factory")').click()
 
     //test submit()
     cy.get('button[type="submit"]').click()
 
   })
  

   it('Test password input', () => {
    //test input Username(correct format)
    cy.get('.flex').find('input[name = "username"]')
    .type('trangbeee').should('have.value', 'trangbeee') 
 
     //test input Display Name(correct format)
    cy.get('.flex').find('input[name = "displayName"]')
    .type('Thu Trang').should('have.value', 'Thu Trang')
 
     //test input Email(correct format)
     cy.get('.flex').find('input[name = "email"]')
     .type('trang42a1dqh@gmail.com').should('have.value', 'trang42a1dqh@gmail.com')
     
     //test input Password(correct format)
     cy.get('.flex').find('input[name = "password"]')
    .type('3103').should('have.value', '3103')
 
     //test input Password confirm(correct format)
      cy.get('.flex').find('input[name = "confirmPassword"]')
     .type('3103').should('have.value', '3103')
 
     //test select related department
     cy.get('#select-department').click()
      cy.get('ul li').filter(':contains("Công ty trách nhiệm hết hạn")').click()
 
     //test select roles
     cy.get('#select-roles').click()
     cy.get('ul li').filter(':contains("Factory")').click()
 
     //test submit()
     cy.get('button[type="submit"]').should('have.attr', 'disabled')
 
   })

   
   it('Test cf password input', () => {
    //test input Username(correct format)
    cy.get('.flex').find('input[name = "username"]')
    .type('trangbeee').should('have.value', 'trangbeee') 
 
     //test input Display Name(correct format)
    cy.get('.flex').find('input[name = "displayName"]')
    .type('Thu Trang').should('have.value', 'Thu Trang')
 
     //test input Email(correct format)
     cy.get('.flex').find('input[name = "email"]')
     .type('trang42a1dqh@gmail.com').should('have.value', 'trang42a1dqh@gmail.com')
     
     //test input Password(correct format)
     cy.get('.flex').find('input[name = "password"]')
     .type('31032002').should('have.value', '31032002')
 
     //test input Password confirm(correct format)
      cy.get('.flex').find('input[name = "confirmPassword"]')
     .type('31032003').should('have.value', '31032003')
 
     //test select related department
     cy.get('#select-department').click()
      cy.get('ul li').filter(':contains("Công ty trách nhiệm hết hạn")').click()
 
     //test select roles
     cy.get('#select-roles').click()
     cy.get('ul li').filter(':contains("Factory")').click()
 
     //test submit()
     cy.get('button[type="submit"]').should('have.attr', 'disabled')
 
   })

   
   it('Test without select', () => {
    //test input Username(correct format)
    cy.get('.flex').find('input[name = "username"]')
    .type('trangbeee').should('have.value', 'trangbeee') 
 
     //test input Display Name(correct format)
    cy.get('.flex').find('input[name = "displayName"]')
    .type('Thu Trang').should('have.value', 'Thu Trang')
 
     //test input Email(correct format)
     cy.get('.flex').find('input[name = "email"]')
     .type('trang42a1dqh@gmail.com').should('have.value', 'trang42a1dqh@gmail.com')
     
     //test input Password(correct format)
     cy.get('.flex').find('input[name = "password"]')
    .type('31032002').should('have.value', '31032002')
 
     //test input Password confirm(correct format)
      cy.get('.flex').find('input[name = "confirmPassword"]')
     .type('31032002').should('have.value', '31032002')
 
     //test submit()
     cy.get('button[type="submit"]').click()
 
   })

   it('Test field is empty ', () => {

    cy.get('.flex').find('input[name = "email"]')
    .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")

    cy.get('.flex').find('input[name = "password"]')
    .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")

    cy.get('.flex').find('input[name = "username"]')
    .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")
 
     
    cy.get('.flex').find('input[name = "displayName"]')
    .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")
  
    cy.get('.flex').find('input[name = "password"]')
    .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")
 
    cy.get('.flex').find('input[name = "confirmPassword"]')
    .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")

    cy.get('button[type="submit"]').should('have.attr', 'disabled')
   })

})
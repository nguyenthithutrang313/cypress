// Test mẫu đăng nhập

describe('Test sign in page', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000/sign-in')
    })
  
    it('test 1', ()=>{

      //Tài khoản đã được đăng ký
      cy.get('.flex').find('input[name = "email"]').type('trang42a1dqh@gmail.com').should('have.value', 'trang42a1dqh@gmail.com')

      cy.get('.flex').find('input[name = "password"]')
      .type('31032002').should('have.value', '31032002')

      cy.get('button[type="submit"]').click()
      cy.url().should('eq', 'http://localhost:3000/dashboards/project')
    })
  
    it('test 2', ()=>{

      cy.get('.flex').find('input[name = "email"]').type('trang42a1dqhemail.com')

      cy.get('.flex').find('input[name = "email"]')
      .invoke('prop', 'validationMessage').should('contain', "Please include an '@' in the email address. 'trang42a1dqhemail.com' is missing an '@'.")

      cy.get('.flex').find('input[name = "password"]')
      .type('31032002').should('have.value', '31032002')

      cy.get('button[type="submit"]').click()
      cy.url().should('eq', 'http://localhost:3000/sign-in')
    })


    it('Test 3', ()=>{
      //nhập email chưa được đăng ký
      cy.get('.flex').find('input[name = "email"]').type('trang42a1@email.com')

      cy.get('.flex').find('input[name = "password"]').type('31032002')

      cy.get('button[type="submit"]').click()

      cy.url().should('eq', 'http://localhost:3000/sign-in')
    })

    it('Test 4', () => {
      cy.get('.flex').find('input[name = "email"]').type('trang42a1dqh@email.com')

      cy.get('.flex').find('input[name="password"]').type('3103')

      cy.get('button[type="submit"]').should('have.attr', 'disabled')
    })

    it('Test 5', ()=>{
      cy.get('.flex').find('input[name = "email"]').type('trang42a1dqh@email.com')

      cy.get('.flex').find('input[name = "password"]').type('31030203')

      cy.get('button[type="submit"]').click()
      cy.url().should('eq', 'http://localhost:3000/sign-in')
    })

    it('Test 6', ()=>{

      //thông báo điền trường email
      cy.get('.flex').find('input[name = "email"]')
      .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")

      //thông báo yêu cầu điền trường mật khẩu
      cy.get('.flex').find('input[name = "password"]')
      .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")
    })
  })
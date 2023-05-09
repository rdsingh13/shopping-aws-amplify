import Forgot from "../../src/Component/Forgot"

describe('Forgot component', () => {
    it('submits the form successfully', () => {
        it('mounts', () => {
            cy.mount(<Forgot/>)
  
      cy.get('#email').type('test@example.com')
      cy.get('#password').type('password')
      cy.get('.btn').click()
  
      cy.get('.alert-primary').should('not.exist')
      cy.contains('success').should('be.visible')
    })
  
    it('shows an error message if email id is incorrect', () => {
      cy.intercept('POST', 'http://localhost:8081/api/v1.0/shopping/forgot', (req) => {
        req.reply({ message: 'Email id is incorrect' })
      })
  
      cy.visit('/forgot')
  
      cy.get('#email').type('test@example.com')
      cy.get('#password').type('password')
      cy.get('.btn').click()
  
      cy.get('.alert-primary').should('be.visible')
    })
  })
})
import Signup from "../../src/Component/SignUp";

describe('Signup component', () => {
    it('mounts', () => {
        cy.mount(<Signup />)
      // fill out form fields
      cy.get('input[name="first_name"]').type('John');
      cy.get('input[name="last_name"]').type('Doe');
      cy.get('input[name="email"]').type('johndoe@example.com');
      cy.get('input[name="user"]').type('johndoe');
      cy.get('input[name="password"]').type('password');
      cy.get('input[name="confirm_password"]').type('password');
      cy.get('input[name="number"]').type('1234567890');
      cy.get('input[name="role"]').type('CUSTOMER');
      cy.get('input[type="checkbox"]').check();
  
      // submit the form
      cy.get('form').submit();
  
    //   // check for success message
    //   cy.contains('User Register Successfully').should('be.visible');
  
      // check that user is redirected to the login page
      cy.on("window:alert", (str) => {
        expect(str).to.equal("User already exist with email id");
      })
    });
  });
  
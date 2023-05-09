
describe('My First Test', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000') // change URL to match your dev URL
  })

  it('Testing for Login', () => {
   
    cy.visit('http://localhost:3000/login')
    cy.get("input.Username") // 2.
    .type("ramandeep");
    cy.get("input.password") // 2.
    .type("123456"); 
    cy.get("button.submit") // 6.
    .click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Invalid Username/Password");
    })
  })

 

  it('Testing for Registration', () => {
   
    cy.visit('http://localhost:3000/signup')
    cy.get('input[name="first_name"]').type('John');
      cy.get('input[name="last_name"]').type('Doe');
      cy.get('input[name="email"]').type('johndoe@example.com');
      cy.get('input[name="user"]').type('johndoe');
      cy.get('input[name="password"]').type('password');
      cy.get('input[name="confirm_password"]').type('password');
      cy.get('input[name="number"]').type('1234567890');
      cy.get('input[name="role"]').type('CUSTOMER');
      cy.get('input[type="checkbox"]').check();
      cy.get("button.submit") // 6.
    .click();
  
      
        cy.on("window:alert", (str) => {
          expect(str).to.equal("User already exist with email id");
        })
      
  })

  it('Testing for Add', ()=>{
    cy.visit('http://localhost:3000/add');
    cy.get("#productName").type("New Product");
      cy.get("#productDescription").type("A new product description");
      cy.get("#price").type("10.99");
      cy.get("#feature").type("A great feature");
      cy.get("#productStatus").type("In stock");
  
      cy.get("button[type='submit']").click();
      cy.on("window:alert", (str) => {
        expect(str).to.equal("Added Successfully");
      })

  })

  it('Testing for All Product', () => {
   
    // cy.visit('http://localhost:3000/')
    cy.visit('http://localhost:3000/')
  

   

    // cy.get("img").contains("./mobile_banner.jpg")
  })
})

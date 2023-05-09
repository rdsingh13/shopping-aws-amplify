import AddProduct from "../../src/Component/AddProduct";

describe("AddProduct component", () => {
    it('mounts', () => {
        cy.mount(<AddProduct />)
  
      cy.get("#productName").type("New Product");
      cy.get("#productDescription").type("A new product description");
      cy.get("#price").type("10.99");
      cy.get("#feature").type("A great feature");
      cy.get("#productStatus").type("In stock");
  
      cy.get("button[type='submit']").click();
      cy.on("window:alert", (str) => {
        expect(str).to.equal("Added Successfully");
      })
    });
  });
  
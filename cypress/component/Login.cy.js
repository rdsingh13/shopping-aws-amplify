import Login from "../../src/Component/Login";

describe("Login Component", () => {
  

  it('mounts', () => {
    cy.mount(<Login />)
    //Stepper should have initial count of 100
 
    cy.get("input.Username") // 2.
      .type("ramandeep"); // 3.
    // cy.get('[Username=new-todo]').type(`${newItem}`)
    cy.get("input.password") // 2.
    .type("123456"); // 3.
    // Now that we've typed our new item, let's check that it actually was added to the list.
    // Since it's the newest item, it should exist as the last element in the list.
    // In addition, with the two default items, we should have a total of 3 elements in the list.
    // Since assertions yield the element that was asserted on,
    // we can chain both of these assertions together into a single statement.
    cy.get("button.submit") // 6.
    .click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Invalid Username/Password");
    })

  })
});

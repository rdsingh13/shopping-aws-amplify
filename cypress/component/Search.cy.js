
import Search from '../../src/Component/Search';

describe('Search component', () => {
    it('mounts', () => {
        cy.mount(<Search />)

    

    cy.wait('@getProducts');

    cy.get('ul').should('be.visible');
    cy.get('li').should('have.length', 3);
    cy.get('li').eq(0).should('contain.text', 'Product 1');
    cy.get('li').eq(0).should('contain.text', '$10.00');
    cy.get('li').eq(1).should('contain.text', 'Product 2');
    cy.get('li').eq(1).should('contain.text', '$20.00');
    cy.get('li').eq(2).should('contain.text', 'Product 3');
    cy.get('li').eq(2).should('contain.text', '$30.00');
  });
});

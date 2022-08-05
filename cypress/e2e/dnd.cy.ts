describe("drag and drop", () => {
  it('adds ingredient to constructor', () => {
    cy.visit('http://localhost:3000');

    cy.get('section#bun [data-cy="ingredientItem"]').first().as('bunItem');
    cy.get('section#sauce [data-cy="ingredientItem"]').first().as('sauceItem');
    cy.get('section#main [data-cy="ingredientItem"]').first().as('mainItem');
    cy.get('[data-cy="burgerConstructor"]').first().as('burgerConstructor');


    cy.get('@bunItem').trigger('dragstart', { dataTransfer: new DataTransfer });
    cy.get('@burgerConstructor').trigger('drop').trigger('dragend');
    cy.get('@sauceItem').trigger('dragstart', { dataTransfer: new DataTransfer });
    cy.get('@burgerConstructor').trigger('drop').trigger('dragend');
    cy.get('@mainItem').trigger('dragstart', { dataTransfer: new DataTransfer });
    cy.get('@burgerConstructor').trigger('drop').trigger('dragend');

    expect(cy.get('@burgerConstructor').contains('булка'))
    expect(cy.get('@burgerConstructor').contains('Соус'))
    expect(cy.get('@burgerConstructor').contains('Филе'))
  })
})

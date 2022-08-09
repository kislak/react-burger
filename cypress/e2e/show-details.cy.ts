describe("show details", () => {
  it("opens modal", () => {
    cy.visit("http://localhost:3000");

    cy.get('section#bun [data-cy="ingredientItem"]').first().as("bunItem");
    cy.get("@bunItem").click();
    cy.get("#modal").should("contain", "Детали ингредиента");
  });

  it("contains details", () => {
    cy.visit("http://localhost:3000");

    cy.get('section#bun [data-cy="ingredientItem"]').first().as("bunItem");
    cy.get("@bunItem").click();
    cy.get("#modal").should("contain", "Краторная булка N-200i");
    cy.get("#modal").should("contain", "Калории");
    cy.get("#modal").should("contain", "420");
    cy.get("#modal").should("contain", "Белки");
    cy.get("#modal").should("contain", "80");
    cy.get("#modal").should("contain", "Жиры");
    cy.get("#modal").should("contain", "24");
    cy.get("#modal").should("contain", "Углеводы");
    cy.get("#modal").should("contain", "53");
  });

  it("closes modal on X click", () => {
    cy.visit("http://localhost:3000");

    cy.get('section#bun [data-cy="ingredientItem"]').first().as("bunItem");
    cy.get("@bunItem").click();
    cy.get("#modal").should("contain", "Детали ингредиента");

    cy.get("#modal button").first().click();
    cy.contains("Детали ингредиента").should("not.be.visible");
  });

  it("closes modal on overlay click", () => {
    cy.visit("http://localhost:3000");

    cy.get('section#bun [data-cy="ingredientItem"]').first().as("bunItem");
    cy.get("@bunItem").click();
    cy.get("#modal").should("contain", "Детали ингредиента");

    cy.get("body").click(0, 0);
    cy.contains("Детали ингредиента").should("not.be.visible");
  });
});

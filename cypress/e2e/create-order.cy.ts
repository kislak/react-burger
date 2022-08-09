describe("service", () => {
  it("is available on localhost:3000", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").contains("Соберите бургер").click();
  });
});

describe("create order", () => {
  it("adds ingredient to constructor", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("input[type=email]").type("kislak7@gmail.com");
    cy.get("input[type=password]").type("123123123");
    cy.get("button").contains("Войти").click();

    cy.get('section#bun [data-cy="ingredientItem"]').first().as("bunItem");
    cy.get('section#sauce [data-cy="ingredientItem"]').first().as("sauceItem");
    cy.get('section#main [data-cy="ingredientItem"]').first().as("mainItem");
    cy.get('[data-cy="burgerConstructor"]').first().as("burgerConstructor");

    cy.get("@bunItem").trigger("dragstart", {
      dataTransfer: new DataTransfer(),
    });
    cy.get("@burgerConstructor").trigger("drop").trigger("dragend");
    cy.get("@sauceItem").trigger("dragstart", {
      dataTransfer: new DataTransfer(),
    });
    cy.get("@burgerConstructor").trigger("drop").trigger("dragend");
    cy.get("@mainItem").trigger("dragstart", {
      dataTransfer: new DataTransfer(),
    });
    cy.get("@burgerConstructor").trigger("drop").trigger("dragend");
    cy.get("button").contains("Оформить заказ").click();

    cy.get("#modal", { timeout: 20000 }).should(
      "contain",
      "Ваш заказ начали готовить"
    );
    cy.get("#modal", { timeout: 20000 }).should(
      "contain",
      "Идентификатор заказа"
    );
  });
});

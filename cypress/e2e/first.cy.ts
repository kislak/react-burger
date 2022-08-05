describe("service", () => {
  it("is available on localhost:3000", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").contains("Соберите бургер").click();
  });
});

describe("Testing product details page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("There should be a button", () => {
    cy.contains("Scented Blade").click();
  });
});

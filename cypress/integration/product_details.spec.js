describe("Testing product details page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("There should be a button", () => {
    cy.contains("Scented Blade")
      .click()
      .contains(
        " The Scented Blade is an extremely rare, tall plant and can be found mostly in savannas. It blooms once a year, for 2 weeks"
      );
  });
});

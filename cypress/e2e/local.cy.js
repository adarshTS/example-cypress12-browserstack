describe("localdemo", () => {
  it("localdemo", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.get('[href="#designers"]').click();
    cy.get('[href="#contact"]').click();
  });
});
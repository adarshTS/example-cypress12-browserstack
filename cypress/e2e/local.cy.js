describe("localdemo", () => {
    it("localdemo", () => {
      cy.visit("http://127.0.0.1:5500/");
      cy.xpath("//a[text()='Designers']").click();
    });
  });
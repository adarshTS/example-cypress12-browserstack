describe("bstackdemo", () => {
  it("bstackdemo", () => {
    cy.visit("https://bstackdemo.com/");
    cy.get('#signin').click();
    cy.get('#username').click();
    cy.get('#react-select-2-option-0-0').click();
    cy.get("#password").click();
    cy.get("#react-select-3-option-0-0").click();
    cy.get("#login-btn").click();
    cy.get(':nth-child(2) > label > .checkmark').click();
    cy.get('#1 > div:nth-child(5)').click();
    cy.get('#2 > div:nth-child(5)').click();
    cy.get('.buy-btn').click();
    cy.get("#firstNameInput").type("Adarsh");
    cy.get("#lastNameInput").type("S");
    cy.get("#addressLine1Input").type("Avenue 21");
    cy.get("#provinceInput").type("KL");
    cy.get("#postCodeInput").type("500");
    cy.get("#checkout-shipping-continue").click();
  });
});
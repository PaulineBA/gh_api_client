describe("User can search name", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/",
      //response: "fixture:products.json",
    });
    cy.visit("/");
    cy.get('#search').clickOn()
  });
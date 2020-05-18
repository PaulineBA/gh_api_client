describe("User can search name", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/",
      response: "fixture:people.json",
    });
    cy.visit("/")
    cy.
    cy.get('button#search').click()
  });
  it("successfully", () => {
    cy.get("#name","#email","#body")
  })
})
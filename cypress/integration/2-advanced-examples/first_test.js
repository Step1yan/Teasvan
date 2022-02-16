describe("google", () => {
    it ("i can search google", () => {
        cy.visit('https://www.google.com/')
        cy.get("input[name='q']").type('Tesvan').type('{enter}')
        cy.contains('https://www.tesvan.com')
        cy.contains ('https://am.linkedin.com › tesvan')
});
});
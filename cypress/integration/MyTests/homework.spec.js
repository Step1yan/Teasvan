describe("Opening web page", () => {
    it("Visit demo qa web page", () => {
        cy.visit('https://demoqa.com/')
        cy.get(".category-cards > :nth-child(4)").click();
        cy.location("pathname").should("equal", "/widgets");
        cy.get(".col-12.mt-4.col-md-6")
            .should("contain.text", "Please select an item from left to start practice.")
        cy.contains("Date Picker").click();
        cy.location("pathname").should("equal", "/date-picker");
        cy.get("#datePickerMonthYearInput").click();
        // cy.get(".react-datepicker__month-container").trigger('eventname',-1,-1).click();

        });
})
import DatePickerPage from "../../support/pageObjects/DatePickerPage";

describe("Opening web page", () => {

    var datePickerPage = new DatePickerPage();

    it("Visit demo qa web page", () => {
        cy.visit('https://demoqa.com/')
        cy.get(".category-cards > :nth-child(4)").click();
        cy.location("pathname").should("equal", "/widgets");
        cy.get(".col-12.mt-4.col-md-6")
            .should("contain.text", "Please select an item from left to start practice.")
        cy.contains("Date Picker").click();
        cy.location("pathname").should("equal", "/date-picker");

        datePickerPage.getDatePicker().click()
        datePickerPage.getCalendar().should('be.visible');


        // cy.get("#datePickerMonthYearInput").click();
        // cy.get(".react-datepicker__month")
        //     .each(($el, index, $list)=>
        //     var dateName = $el.text()
        //     if (dateName == "14" ) {
        //         cy.wrap ($el).click()
        //     }
        // )
        // cy.get(".react-datepicker__month-container").trigger('eventname',-1,-1).click();

        });
    it('select date ', function () {
        cy.selectYear (2023)
        cy.selectMonth ('January')
        cy.selectDay (14)
    });
})
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
        cy.get(".react-datepicker__day--014").click();
        cy.contains("Slider").click();
        cy.location("pathname").should("equal", "/slider");
        cy.get(".range-slider--primary").invoke("val", "70")
        cy.get("#sliderValue").invoke("val", "70")
        // cy.contains("Progress Bar").click()
        // cy.location("pathname").should("equal", "/progress-bar");
        // cy.get("#progressBarContainer").should("contain.text", "Progress Bar")
        // // 100%
        // cy.get("#startStopButton").click()
        // cy.get('[role="progressbar"]').should("have.attr", "aria-valuenow", "100")
        // //@todo color
        // cy.get('.bg-success').should("have.css", "background-color", "rgb(40, 167, 69)")
        // cy.get("#resetButton").click()
        // cy.get("#startStopButton").click()
        // cy.get('[role="progressbar"]').should("have.attr", "aria-valuenow", "100")
        // cy.get("#progressBar").should("contain.text", "100%")
        //
         cy.contains("Tabs").click()
        cy.location("pathname").should("equal", "/tabs");
        cy.get("#demo-tab-origin").click({force: true}).should("be.visible")
        cy.get("#demo-tab-use").click().should("be.visible")

        cy.get("#demo-tab-more").should("not.be.disabled");
        cy.contains("Tool Tips").click()
        cy.get("#toolTipButton").trigger("mouseover");
        cy.get(".tooltip-inner").should("contain.text", "You hovered over the Button");
        cy.contains("Menu").click()
        cy.location("pathname").should("equal","/menu")
        cy.get("#nav > :nth-child(2) > :nth-child(1)").trigger("mouseover",{force:true})

      //  cy.contains("#nav > :nth-child(2)").should("equal","Main Item2")
        // cy.contains("Progress Bar").click();
        // cy.location("pathname").should("equal", "/progress-bar");
        // cy.get("#progressBarContainer").should("contain.text","Progress Bar")
        // cy.get("#startStopButton").click()

    })
    // it('select date ', function () {
    //     cy.selectYear ("2023")
    //     cy.selectMonth ('January')
    //     cy.selectDay ("14")
    // });
})
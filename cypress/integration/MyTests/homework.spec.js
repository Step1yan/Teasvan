import DatePickerPage from "../../support/pageObjects/DatePickerPage";

describe("Demo QA widgets test", () => {

    var datePickerPage = new DatePickerPage();

    it("Visit demo qa web page", () => {
        cy.visit('https://demoqa.com/')
    })
    it('Enter to Widgets', function () {

        cy.get(".category-cards > :nth-child(4)").click();
        cy.location("pathname").should("equal", "/widgets");
        cy.get(".col-12.mt-4.col-md-6")
            .should("contain.text", "Please select an item from left to start practice.")
    });
    // datePickerPage.getCalendar().should('be.visible');
    it('Widgets > Date Picker', function () {
        cy.contains("Date Picker").click();
        cy.location("pathname").should("equal", "/date-picker");
        datePickerPage.getDatePicker().click()
        cy.selectYear ("2024")
        cy.selectMonth ('March')
        cy.selectDay ("09")
    });

        it('Widgets > slider', function () {

            cy.contains("Slider").click();
            cy.location("pathname").should("equal", "/slider");
            cy.get(".range-slider--primary").invoke("val", "70")
            cy.get("#sliderValue").invoke("val", "70")
            cy.contains("Progress Bar").click()
            cy.location("pathname").should("equal", "/progress-bar");
            cy.get("#progressBarContainer").should("contain.text", "Progress Bar")
            // @todo 100%
            cy.get("#startStopButton").click()
            cy.get('[role="progressbar"]').should("have.attr", "aria-valuenow", "100")
            //@todo color
            cy.get('.bg-success').should("have.css", "background-color", "rgb(40, 167, 69)")
            cy.get("#resetButton").click()
            cy.get("#startStopButton").click()
            cy.get('[role="progressbar"]').should("have.attr", "aria-valuenow", "100")
            cy.get("#progressBar").should("contain.text", "100%")
                 });

        it('Widgets > Tabs ', function () {

            cy.contains("Tabs").click()
            cy.location("pathname").should("equal", "/tabs");
            cy.get("#demo-tab-origin").click({force: true}).should("be.visible")
            cy.get("#demo-tab-use").click().should("be.visible")
            cy.get("#demo-tab-more").should("not.be.disabled");
            cy.contains("Tool Tips").click()
            cy.get("#toolTipButton").trigger("mouseover");
            cy.get(".tooltip-inner").should("contain.text", "You hovered over the Button");



    });

        it('Widgets > Menu ', function () {
            cy.contains("Menu").click()
            cy.location("pathname").should("equal","/menu")
            cy.get("#nav > :nth-child(2) > :nth-child(1)").trigger("mouseover",{force:true})
    });
    it('Widgets Select Menu', function () {
            cy.contains('Select Menu').click();
            cy.location('pathname').should('equal', '/select-menu');
            cy.get("#withOptGroup > div").click().type('Group 2, option 1{enter}')
            cy.get('#selectOne > div').click().type('Dr {enter}')
        cy.get('#oldSelectMenu').select('6')
            cy.get('#selectMenuContainer > div:nth-child(7) div > div.css-1hwfws3')
                .type("red {enter}").get("#selectMenuContainer").click()
            cy.get('#cars').select("volvo").should('not.be.disabled');
    });
});
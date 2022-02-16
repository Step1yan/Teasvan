describe("Opening web page", () => {
    it ("Visit demo qa web page", () => {
        cy.visit('https://demoqa.com/')
        // cy.get(".banner-image").click();
        cy.get(".category-cards > :nth-child(1)").click();
        cy.get("div:nth-child(1) > span > div").click();
        cy.get("div:nth-child(2) > span > div").click();
        cy.get(".left-pannel").contains("Practice Form").click();
        cy.get("input[id='firstName']").type('Poxos');
        cy.get("input[id='lastName']").type("Poxosyan");
        cy.get("input[id='userEmail").type("poxos123@mail.ru");
        cy.get("#genterWrapper  ").contains("Male").click();
        cy.get("input[id='userNumber']").type("3747777777");
        cy.get("input[id='dateOfBirthInput']").type("{enter}");
        cy.get(".subjects-auto-complete__value-container--is-multi").type('hi')
        cy.get(".subjects-auto-complete__option").first().click({multiple: true});

        cy.get(".custom-checkbox").click({multiple: true});
        // cy.pause();
        // @todo image input
        cy.fixture('test-image.jpg').then(fileContent => {
            cy.get('#uploadPicture').attachFile({
                fileContent: fileContent.toString(),
                fileName: 'test-image.jpg',
                mimeType: 'image/jpg'
            });
        });
        cy.get("#currentAddress").type('no address');
        cy.get("#state").type('{enter}');
        cy.get("#city").click().contains("Noida").click();
        cy.get("#submit").click();



    });
});
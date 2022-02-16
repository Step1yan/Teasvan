// describe("Opening web page", () => {
//     it ("Visit demo qa web page", () => {
//         cy.visit('https://demoqa.com/automation-practice-form')
//

//         cy.get('#hobbies-checkbox-1').should('have.attr', 'type', 'checkbox').and('be.not.checked');
//

//     })
//     });
describe("Opening web page", () => {
    it ("Visit demo qa web page", () => {
        cy.visit('https://demoqa.com/')

        let arr=['Elements','Forms','Alerts, Frame & Windows','Widgets','Interactions','Book Store Application'];

        cy.get('[class="card mt-4 top-card"]').then(sel=> {
                for (let i = 0; i < sel.length; i++) {
                    cy.wrap(sel[i]).should('have.text', arr[i]).and('be.visible')
                }
                cy.wrap(sel[0]).click();

                cy.get('#item-0').click();
                cy.get('#userName').should("be.enabled").and('be.visible')
                cy.get('#userEmail').should("be.enabled").and('be.visible')
                cy.get('#currentAddress').should("be.visible")
                cy.get('#permanentAddress').should('be.enabled').and("be.visible")
                cy.get('#userName').type('Poxos')
                cy.get('#userEmail').type('test@mail.ru')
                cy.get('#currentAddress').type('Sevan')
                cy.get('#permanentAddress').type('avan avan')
                cy.get('.btn-primary').click()
                cy.get('.mt-4.row').should("be.visible")

                cy.get('[id="userForm"] input, textarea').then(form=>{
                    cy.get('[id="output"] p').then(output=>{
                        for (let k = 0; k < form.length; k++) {
                            cy.wrap(form[k]).invoke('val').then($val =>{
                                cy.wrap(output[k]).invoke('text').then(outval =>{
                                     let a = outval.split(":");
                                     expect($val).to.eq(a[1].trim())
                                })
                            })
                        }
                    })
                })




        })
    })
});
// @todo yellow comment
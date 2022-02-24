import {faker} from "@faker-js/faker";

class RegisterPage{
    firstName = faker.name.firstName();
    lastName = faker.name.lastName();
    companyName = faker.company.companyName()
    email = faker.internet.email()
    pass = faker.internet.password()
    getRegistorBtn(){
        return cy.get('.ico-register')
    }
    getGenderMale(){
        return cy.get('#gender-male')
    }
    getGenderFemale(){
        return cy.get('#gender-female')
    }
    getFirstNameInput(){
        return cy.get('#FirstName')
    }
    getLastNameInput(){
        return cy.get('#LastName')
    }
    getBirthDay(){
        return cy.get('[name="DateOfBirthDay"]')
    }
    getBirthMonth(){
        return cy.get('[name="DateOfBirthMonth"]')
    }
    getBirthYear(){
        return cy.get('[name="DateOfBirthYear"]')
    }
    getEmailInput(){
        return cy.get('#Email')
    }
    getCompNameInput(){
        return cy.get('#Company')
    }
    getNewsletter(){
        return cy.get('[class="inputs"] [name="Newsletter"]')
    }
    getPasswordInput(){
        return cy.get('#Password')
    }
    getConfirmPassInput(){
        return cy.get('#ConfirmPassword')
    }
    getSubmitReg(){
        return cy.get('#register-button')
    }
    getContinueReg(){
        return cy.get(".buttons > .button-1")
    }
    getFillFirstlEr(){
        return cy.get("#FirstName-error")

    }
    getFillLastErr(){
        return cy.get("#LastName-error")
    }
    getEmailErr(){
        return cy.get("#Email-error")
    }
    getErrCol(){
        return cy.get(".field-validation-error")
    }
    getPasEr(){
        return cy.get("#Password-error")
    }
    getConPasEr(){
        return cy.get("#ConfirmPassword-error")
    }
    getResult(){
       return  cy.get(".result")
    }
}
export default RegisterPage
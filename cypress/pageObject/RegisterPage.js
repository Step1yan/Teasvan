class RegisterPage{
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
}
export default RegisterPage
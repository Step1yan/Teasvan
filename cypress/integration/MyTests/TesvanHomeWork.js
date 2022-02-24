import LoginPage from "../../pageObject/LoginPage";
import RegisterPage from "../../pageObject/RegisterPage";
var loginPage = new LoginPage();
var registerPage = new RegisterPage();
describe("Register nopcommerce ", () => {


    before(() =>{
        cy.visit('https://demo.nopcommerce.com/')

     })
    it('register positive case ', function () {
        registerPage.getRegistorBtn().click().location("pathname")
            .should("equal","/register");
        registerPage.getGenderMale().click().should("be.checked")
        registerPage.getFirstNameInput().type(registerPage.firstName).should("be.enabled")
        registerPage.getLastNameInput().type(registerPage.lastName).should("be.enabled")
        registerPage.getBirthDay().select("9").should("be.enabled")
        registerPage.getBirthMonth().select("February").should("be.enabled")
        registerPage.getBirthYear().select("1995").should("be.enabled")
        registerPage.getEmailInput().type(registerPage.email).should("be.enabled")
        registerPage.getCompNameInput().type(registerPage.companyName).should("be.enabled")
        registerPage.getNewsletter().uncheck().should("not.be.checked")
        registerPage.getPasswordInput().type(registerPage.pass).should("be.enabled")
        registerPage.getConfirmPassInput().type(registerPage.pass).should("be.enabled")
        registerPage.getSubmitReg().click().should("be.enabled")
       registerPage.getResult().should("contain.text","Your registration completed")
       registerPage.getResult().should("have.css", "color", "rgb(76, 177, 124)")
        registerPage.getContinueReg().click()

    });

})
describe("Login nopcommerce ", () => {
    before(() =>{
        cy.visit('https://demo.nopcommerce.com/')

    })

    it('Login positive', function () {
        loginPage.getLoginIcon().click().location("pathname")
            .should("equal","/login");
        registerPage.getEmailInput().type("GrigArman@mailinator.com").should("be.enabled")
        registerPage.getPasswordInput().type("qwerty").should("be.enabled")
        loginPage.getLoginBttn().click().location("hostname")
            .should("equal", "demo.nopcommerce.com")
    });

})
describe("Registration Negative nopcommerce ", () => {
    before(() => {
        cy.visit('https://demo.nopcommerce.com/')
    })
    it('Invalid "empty" data', function () {
        registerPage.getRegistorBtn().click()
            .location("pathname")
            .should("equal","/register");
        registerPage.getGenderMale().click().should("be.checked")
        registerPage.getSubmitReg().click()
        registerPage.getFillFirstlEr().should("contain.text","First name is required.")
        registerPage.getErrCol().should("have.css","color","rgb(228, 67, 75)")
        registerPage.getFillLastErr().should("contain.text","Last name is required.")
        registerPage.getErrCol().should("have.css","color","rgb(228, 67, 75)")
        registerPage.getEmailErr().should("contain.text", "Email is required.")
        registerPage.getErrCol().should("have.css","color","rgb(228, 67, 75)")
        registerPage.getPasEr().should("contain.text", "Password is required.")
        registerPage.getErrCol().should("have.css","color","rgb(228, 67, 75)")
        registerPage.getConPasEr().should("contain.text", "Password is required.")
        registerPage.getErrCol().should("have.css","color","rgb(228, 67, 75)")

    })
})
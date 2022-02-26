import LoginPage from "../../pageObject/LoginPage";
import RegisterPage from "../../pageObject/RegisterPage";
    var loginPage = new LoginPage();
    var registerPage = new RegisterPage();
describe("Register to nopcommerce.com ", () => {


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
    it('registration positive to real email', function () {
        registerPage.getLogoutBtn().click()
        registerPage.getRegistorBtn().click().location("pathname")
            .should("equal","/register");
        registerPage.getGenderMale().click().should("be.checked")
        registerPage.getFirstNameInput().type(registerPage.firstName).should("be.enabled")
        registerPage.getLastNameInput().type(registerPage.lastName).should("be.enabled")
        registerPage.getBirthDay().select("9").should("be.enabled")
        registerPage.getBirthMonth().select("February").should("be.enabled")
        registerPage.getBirthYear().select("1995").should("be.enabled")
        registerPage.getEmailInput().type('Stepanyan.95@gmail.com').should("be.enabled")
        registerPage.getCompNameInput().type(registerPage.companyName).should("be.enabled")
        registerPage.getNewsletter().uncheck().should("not.be.checked")
        registerPage.getPasswordInput().type('qwerty123').should("be.enabled")
        registerPage.getConfirmPassInput().type('qwerty123').should("be.enabled")
        registerPage.getSubmitReg().click().should("be.enabled")
    });

})
describe("Login to nopcommerce.com ", () => {
    before(() =>{
        cy.visit('https://demo.nopcommerce.com/')

    })
    it('Login positive', function () {
        loginPage.getLoginIcon().click().location("pathname")
            .should("equal","/login");
        registerPage.getEmailInput().type("Stepanyan.95@gmail.com").should("be.enabled")
        registerPage.getPasswordInput().type("qwerty123").should("be.enabled")
        loginPage.getLoginBttn().click().location("hostname")
            .should("equal", "demo.nopcommerce.com")
    });

})
describe("Registration Negative cases nopcommerce.com ", () => {
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
    it('invalid confirm password', function () {
        registerPage.getRegistorBtn().click()
            .location("pathname")
            .should("equal","/register");
        registerPage.getGenderFemale().click().should("be.checked")
        registerPage.getFirstNameInput().type(registerPage.firstName).should("be.enabled")
        registerPage.getLastNameInput().type(registerPage.lastName).should("be.enabled")
        registerPage.getBirthDay().select("9").should("be.enabled")
        registerPage.getBirthMonth().select("February").should("be.enabled")
        registerPage.getBirthYear().select("1995").should("be.enabled")
        registerPage.getEmailInput().type(registerPage.email).should("be.enabled")
        registerPage.getCompNameInput().type(registerPage.companyName).should("be.enabled")
        registerPage.getNewsletter().uncheck().should("not.be.checked")
        registerPage.getPasswordInput().type('newpassword123').should("be.enabled")
        registerPage.getConfirmPassInput().type('newpassword12').should("be.enabled")
        registerPage.getSubmitReg().click().should("be.enabled")
        registerPage.getConPasEr().should("contain.text", "The password and confirmation password do not match.")
        registerPage.getErrCol().should("have.css","color","rgb(228, 67, 75)")
    });
    it('Invalid email test ', function () {
        registerPage.getRegistorBtn().click().location("pathname")
            .should("equal","/register");
        registerPage.getGenderMale().click().should("be.checked")
        registerPage.getFirstNameInput().type(registerPage.firstName).should("be.enabled")
        registerPage.getLastNameInput().type(registerPage.lastName).should("be.enabled")
        registerPage.getBirthDay().select("9").should("be.enabled")
        registerPage.getBirthMonth().select("February").should("be.enabled")
        registerPage.getBirthYear().select("1995").should("be.enabled")
        registerPage.getEmailInput().type('invalid.com').should("be.enabled")
        registerPage.getCompNameInput().type(registerPage.companyName).should("be.enabled")
        registerPage.getNewsletter().uncheck().should("not.be.checked")
        registerPage.getPasswordInput().type(registerPage.pass).should("be.enabled")
        registerPage.getConfirmPassInput().type(registerPage.pass).should("be.enabled")
        registerPage.getSubmitReg().click().should("be.enabled")
        registerPage.getEmailErr().should('contain.text', 'Wrong email')
        registerPage.getErrCol().should("have.css","color","rgb(228, 67, 75)")
    });
    it('short password ', function () {
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
        registerPage.getPasswordInput().type('12345').should("be.enabled")
        registerPage.getConfirmPassInput().type('12345').should("be.enabled")
        registerPage.getSubmitReg().click().should("be.enabled")
        registerPage.getPasEr().should("contain.text", 'Password must meet the following rules: must have at least 6 characters')
        registerPage.getErrCol().should("have.css","color","rgb(228, 67, 75)")
    });
    it('register using an existing email', function () {
        registerPage.getRegistorBtn().click().location("pathname")
            .should("equal", "/register");
        registerPage.getFirstNameInput().type(registerPage.firstName).should("be.enabled")
        registerPage.getLastNameInput().type(registerPage.lastName).should("be.enabled")
        registerPage.getBirthDay().select("9").should("be.enabled")
        registerPage.getBirthMonth().select("February").should("be.enabled")
        registerPage.getBirthYear().select("1995").should("be.enabled")
        registerPage.getEmailInput().type('Stepanyan.95@gmail.com').should("be.enabled")
        registerPage.getCompNameInput().type(registerPage.companyName).should("be.enabled")
        registerPage.getNewsletter().uncheck().should("not.be.checked")
        registerPage.getPasswordInput().type('qwerty123').should("be.enabled")
        registerPage.getConfirmPassInput().type('qwerty123').should("be.enabled")
        registerPage.getSubmitReg().click().should("be.enabled")
        registerPage.getMessageErr().should('contain.text', 'The specified email already exists')
        registerPage.getMessageErr().should("have.css","color","rgb(228, 67, 75)")
    })
})
describe("Login Negative cases nopcommerce.com ", () => {
    before(() => {
        cy.visit('https://demo.nopcommerce.com/')
    })
    it('empty data', function () {
        loginPage.getLoginIcon().click().location("pathname")
            .should("equal","/login");
        loginPage.getLoginBttn().click()
        registerPage.getEmailErr().should('contain.text', 'Please enter your email')
        registerPage.getErrCol().should("have.css","color","rgb(228, 67, 75)")
    });
    it('input invalid email', function () {
        loginPage.getLoginIcon().click().location("pathname")
            .should("equal","/login");
        registerPage.getEmailInput().type("GrigArman@mailinatorcom").should("be.enabled")
        registerPage.getPasswordInput().type("qwerty").should("be.enabled")
        loginPage.getLoginBttn().click()
        registerPage.getMessageErr()
          .should('contain.text', 'Login was unsuccessful. Please correct the errors and try again.')
        loginPage.getMessageEr2Row().should('contain.text', 'No customer account found')
    });
    it('input invalid password', function () {
        loginPage.getLoginIcon().click().location("pathname")
            .should("equal","/login");
        registerPage.getEmailInput().type("Stepanyan.95@gmail.com").should("be.enabled")
        registerPage.getPasswordInput().type("qwertydfvbn").should("be.enabled")
        loginPage.getLoginBttn().click()
        registerPage.getMessageErr()
            .should('contain.text', 'Login was unsuccessful. Please correct the errors and try again.')
        loginPage.getMessageEr2Row().should('contain.text', 'The credentials provided are incorrect')
    });
})
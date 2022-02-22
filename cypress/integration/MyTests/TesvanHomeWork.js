import LoginPage from "../../pageObject/LoginPage";
import DatePickerPage from "../../support/pageObjects/DatePickerPage";
import RegisterPage from "../../pageObject/RegisterPage";
describe("Register nopcommerce ", () => {
    var loginPage = new LoginPage();
    var registerPage = new RegisterPage();

    it("go to register form", () => {
        cy.visit('https://demo.nopcommerce.com/')
        registerPage.getRegistorBtn().click();
    })
    it('register positive case ', function () {
        registerPage.getGenderMale().click()
        registerPage.getFirstNameInput().type('Grigor')

        registerPage.getLastNameInput().type("Stepanyan")
        registerPage.getBirthDay().select("9")
        registerPage.getBirthMonth().select("February")
        registerPage.getBirthYear().select("1995")
        registerPage.getEmailInput().type(`Unic${Math.random()}@mailinator.com`)
        registerPage.getCompNameInput().type("Tesvan ")
        registerPage.getNewsletter().uncheck()
        registerPage.getPasswordInput().type("1234qwerty")
        registerPage.getConfirmPassInput().type("1234qwerty")
        registerPage.getSubmitReg().click()
    });
})
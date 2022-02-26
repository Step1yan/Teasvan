class LoginPage{
    getLoginIcon(){
        return cy.get('.ico-login')
    }

    getLoginBttn(){
       return cy.get(".login-button")
}
getMessageEr2Row(){
        return cy.get('.message-error > ul > li')
}
}
export default LoginPage
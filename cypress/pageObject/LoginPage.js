class LoginPage{
    getLoginIcon(){
        return cy.get('.ico-login')
    }

    getLoginBttn(){
       return cy.get(".login-button")
}
}
export default LoginPage


class wb_data{
    getSearchBtn(){
        return cy.get(".nav-element__search.j-search-header-icon")
    }
    getSearchInput(){
        return cy.get("#mobileSearchInput")
    }
}
export default wb_data
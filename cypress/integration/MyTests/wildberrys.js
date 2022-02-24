import wb_data from "../../pageObject/wb_data";
var Wb_data = new wb_data()
describe("Access to the web page ", () => {
    it('should ', function () {
        cy.visit("https://am.wildberries.ru/")
        Wb_data.getSearchBtn().click()
        Wb_data.getSearchInput().type('Lenovo {enter}')
        cy.get('[class="product-card j-card-item"]').each(el=> {
            cy.wrap(el).find('[class="lower-price"]').then(elem =>{
                let a = el.text().split('₽', '')
                a.isInteger()

            })
        })

    });




})
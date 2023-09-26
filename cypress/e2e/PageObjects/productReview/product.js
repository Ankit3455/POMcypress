//const data = require('../../../cypress/fixtures/expectedData.json');

class product{
    shopele = 'span[class="action more button"]';
    allProduct = 'li[class="item product product-item"]';
    product = 'strong[class="product name product-item-name"]';
    productName = 'Ida Workout Parachute Pant';
    grabProduct = 'a[class="action view"]';

    getProduct()
    {
        cy.get(':nth-child(2) > .greet > .logged-in').invoke('text').then((welcomeMessage)=>
        {
            expect(welcomeMessage).to.be.equal("Welcome, t airtable531!")
        })
        //cy.pause();
        cy.wait(10000);
        cy.get(this.shopele).click();
        cy.get(this.allProduct).each(($ele2) => {
        
            //Serach the product form all the products by name and get the element 
            const productText = $ele2.find(this.product).text();
            if (productText.includes(this.productName)) {
                cy.wrap($ele2).within(() => {
                    cy.log(productText)
                    cy.get(this.grabProduct).click();
                });
            }
        });
    }
}
export default (product)
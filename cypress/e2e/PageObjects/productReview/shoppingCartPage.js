class shoppingCart{

    getCartinfo()
    {
        cy.get('.item > .product-item-details > .product-item-name > a').should('be.visible').invoke("text").then((productText)=>
        {
            expect(productText).to.be.equal('Aero Daily Fitness Tee')
        })

        //Remove Product form cart
        cy.clicklink("Remove item")

        //Extract and validate the final text.
        cy.get('.cart-empty>:nth-child(1)').invoke('text').then((emptyText)=>
        {
            expect(emptyText).to.be.equal('You have no items in your shopping cart.')
        })
    }
}

export default (shoppingCart);
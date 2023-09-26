class addToCart{
    
    getaddToCart()
    {
        cy.findByRole('button', {name: /Add to Cart/i}).should('be.visible').click();
        cy.get('div[id="super_attribute[143]-error"]').invoke("text").then(($message)=>
        {
            expect($message).to.be.equal("This is a required field.")
        });
        cy.get('div[id="super_attribute[93]-error"]').invoke("text").then(($message)=>
        {
            expect($message).to.be.equal("This is a required field.")
        });

        cy.get('#option-label-size-143-item-166').click();
        cy.get('#option-label-color-93-item-60').click();
        cy.findByRole('button', {name: /Add to Cart/i}).click();
        cy.get('div[data-block="minicart"]').click();
        cy.get(':nth-child(7) > .secondary > .action > span').then(($btn)=>
        {
            if($btn.length>1)
            {
                cy.get($btn).click({ force: true });
            }
            else
            {
                cy.clicklink("shopping cart")
            }
        })
    }
}
export default (addToCart)
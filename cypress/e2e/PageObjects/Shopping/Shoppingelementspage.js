class Shoppingelements
{
    getElement2 = 'a[class="hrefch"]';
    getMoniter = 'div[class="list-group"]>a:nth-child(4)';

//should be visible.click 
//every page ko verify
//url verify

    getFirstElement()
    {
        cy.clicklink('Sony xperia z5'); 
    }

    getSecondElement()
    {
        cy.get(this.getMoniter).click();
        cy.get(this.getElement2).contains('Apple monitor 24').click();
    }
}
export default (Shoppingelements);
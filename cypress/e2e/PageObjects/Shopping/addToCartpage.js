class addToCart {

    getElement1 = 'div[class="col-sm-12 col-md-6 col-lg-6"]';
    navigatehomeSection = 'li[class="nav-item active"]';
    addSecondEle = '.col-sm-12 > .btn';
    addToCart = '#cartur';
    
    addFirstElement()
    {
        cy.get(this.getElement1).contains('Add to cart').click();   //using contains method for word
        cy.get(this.navigatehomeSection).click();     //navigate to the homepage 
    }

    addSecondElement()
    {
        cy.get(this.addSecondEle).click();
    }

    getCart()
    {
        cy.get(this.addToCart).click();
    }
}

export default (addToCart);
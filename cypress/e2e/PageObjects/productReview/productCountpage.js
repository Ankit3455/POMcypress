class compareProduct{
    
    productCount = ':nth-child(1) > #toolbar-amount';
    sort = "#sorter";
    select = "Price";
    logo = 'a[class="logo"]';

    getcompareProduct(){
        //Grab the product before sorting 
        let productPricesBeforeSorting = [];
        cy.get(this.productCount).each((product_element)=>{
        productPricesBeforeSorting.push(parseFloat(product_element.text()))
        cy.log(productPricesBeforeSorting);
        });

        //Select short dropdown and select price
        cy.get(this.sort).select(this.select);

        //After sorting grab the product count
        let productPricesAfterSorting = [];
        cy.get(this.productCount).each((product_element)=>{
        productPricesAfterSorting.push(parseFloat(product_element.text()))
         }).then(() => {
          // Now the assertions will be captured and displayed properly
          expect(productPricesAfterSorting).to.deep.equal(productPricesBeforeSorting.sort((a, b) => a - b));
      }); 
      cy.get(this.logo).click();
    }
}

export default (compareProduct);

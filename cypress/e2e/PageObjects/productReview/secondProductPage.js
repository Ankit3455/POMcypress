class secondProduct{

    page = '.base';
    secondProduct = ':nth-child(5) > .product-item-info > .details > .name > .product-item-link';
    productCompareBtn = '.tocompare > span';
    compareBtn = '.item > .action';
    compareLink = '.message-success > div > a';

    getCompareSecondProduct() {
        // Wait for the 'Tees' text to appear within the '.base' element
        cy.get(this.page).contains('Tees').should('exist');

        // Click on the second product link
        cy.get(this.secondProduct).click();

        // Click on the product compare button
        cy.get(this.productCompareBtn).click({ force: true });

        // Check if the compare button is visible
        cy.get(this.compareBtn).then(($btn) => {
        if ($btn.length > 0) {
        // If the compare button is visible, click it
        cy.get($btn).click();
        } 
        else {
        // If the compare button is not visible, click the compare link
        cy.get(this.compareLink).click();
    }
});

    }
}
export default (secondProduct)
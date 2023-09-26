class compare{

    allProduct = 'td[data-th="Product"]';
    eachProduct = 'strong[class="product-item-name"]';

    getCompare()
    {
        cy.get(this.allProduct).each(($element1) => {
            cy.wrap($element1).find(this.eachProduct).invoke("text").then((productName) => {
            const expectedNames = ["Ida Workout Parachute Pant", "Aero Daily Fitness Tee", "Echo Fit Compression Short "];
              
            // Check if any of the expected names is a substring of productName
            const matches = expectedNames.some((expectedName) => productName.includes(expectedName));
          
             // Assert that at least one of the expected names is found in productName
            expect(matches).to.be.true;
            });
        })

       //using cypress testing library to find element by Role 
        cy.get('form[data-role="tocart-form"]')
        .findByRole('button', {name: /Add to Cart/i})
        .should('exist').click();
    }
}

export default (compare)
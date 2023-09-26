class productReview
{
    verifyProduct = '.base';
    compareButton = 'div[class="product-addto-links"]> [class="action tocompare"]';
    list1 = '#ui-id-5';
    list2= '#ui-id-17';
    list3 = '#ui-id-21';

    getverifyRating()
    {
      cy.get(this.verifyProduct).should('have.text', 'Ida Workout Parachute Pant');   //Assert the same product
      //cy.get('.message-success > div').should('have.text', 'You submitted your review for moderation.' )//assertin the review subbmited message
    }

    getCompare()
    {
      cy.get(this.compareButton).click();
    }

    getAnotherProduct()
    {
      cy.get(this.list1).trigger('mouseover');
      cy.get(this.list2).trigger('mouseover');
      cy.get(this.list3).trigger('mouseover').click();
    }
}

export default (productReview);


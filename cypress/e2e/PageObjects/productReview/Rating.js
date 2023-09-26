class Rating{
    
    rating = 'label[class="rating-1"]';
    name = 'input[id="nickname_field"]';
    summary = 'input[id="summary_field"]';
    review = '[id="review_field"]';
    submitReview = 'button[class="action submit primary"]';
    getRating()
    {
    //get the rating section and give the review
      cy.get(this.rating).click();
      cy.fixture("Rating").then((ratingInput)=>
      {
        cy.get(this.name).type(ratingInput.dataname);
        cy.get(this.summary).type(ratingInput.dataSummary);
        cy.get(this.review).type(ratingInput.dataReview);
      })
      
      cy.get(this.submitReview).click();
    }
}
export default (Rating)
class shoppingForm
{

    getForm = '.col-lg-1 > .btn';
    name = '#name';
    country = '#country';
    city = '#city';
    card = '#card'
    submitmessage = '.sweet-alert > h2'
    formSubmit = '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
   
    getPurchaseForm()
    {
        cy.get(this.getForm).click();
        cy.fixture("Form").then((input)=>
        {
            cy.get(this.name).type(input.inputname);
            cy.get(this.country).type(input.inputcountry);
            cy.get(this.city).type(input.inputcity);
            cy.get(this.card).type(input.inputcardDetails);            
        })
        
        cy.get(this.formSubmit).click();
        cy.get(this.submitmessage).invoke("text").then((expectedText)=>
        {
         expect(expectedText).to.equal('Thank you for your purchase!');
        })
    }
}
export default (shoppingForm);
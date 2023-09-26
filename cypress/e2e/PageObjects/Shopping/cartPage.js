class cart {

    noOfElements = 'tbody[id="tbodyid"] tr td:nth-child(3)';
    expectedTotalAmmount = 'div[class="panel-heading"] h3';

    getSumofElements()
    {
        var sum =0;
        cy.wait(3000)
        cy.get(this.noOfElements).each(($el)=>
        {
         let actualtext = $el.text();
         sum = sum+Number(actualtext);
         cy.log(sum);
        })

        cy.get(this.expectedTotalAmmount).then((total)=>
        {
         let expectedTotal = total.text();
         expect(sum).to.equal(Number(expectedTotal))   //comparing total and sum of product  
        })
    }
}

export default (cart);
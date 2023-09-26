class contactAdd
{
    bankelement = 'table[class="contactTable"]>tr>td:nth-child(4)';
    deleteContact = 'button[id="delete"]';
    returnhomepage = '#return';
    updatedElement = 'table[class="contactTable"]>tr>td:nth-child(5)';
        
    getBankElement()
    {
        cy.get(this.bankelement).invoke("text").then((contacttext)=>
        {
            expect(contacttext).to.equal('test444@yopmail.com');
        })
    }

    getupdatedContact()
    {
        cy.get(this.returnhomepage).click();
        
        //Verify updated contact info
        cy.get(this.updatedElement).invoke("text").then((updatedEle)=>
        {
            expect(updatedEle).to.equal('98765456778');
        })
                
        //delete contact
        cy.contains('test444@yopmail.com').click();
        cy.get(this.deleteContact).click();
    }
}

export default (contactAdd);
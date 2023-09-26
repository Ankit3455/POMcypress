class contactedit{

    editButton = 'table[class="contactTable"]>tr>td:nth-child(4)';
    editcontact = '#edit-contact';
    editContact = '#phone';
    dataPhone = '98765456778';
    editcontactsubmit = '#submit';

    getedit()
    {
        cy.get(3000);

        //edit contact page 
        cy.get(this.editButton).click();

        //edit button 
        cy.get(this.editcontact).click();
        cy.get(this.editContact).type(this.dataPhone);
        cy.get(this.editcontactsubmit).click();   
    }
}

export default (contactedit);
class addingContact{
    addcontact = '#add-contact';
    h1add = 'h1';
    firstName = '#add-contact [id="firstName"]';
    datafirst = 'test';
    lastname = '#add-contact [id="lastName"]';
    datasecond = '401';
    birthdate = '#add-contact [id="birthdate"]';
    dataDOB = '2023-12-11';
    formEmail = '#add-contact [placeholder="example@email.com"]';
    dataEmail = 'test444@yopmail.com';
    AddcontactSubmit = '#submit';


    getAddingcontact()
    {
        cy.get(this.addcontact).click();
        cy.get(this.h1add).contains('Add Contact');
        cy.get(this.firstName).type(this.datafirst);
        cy.get(this.lastname).type(this.datasecond);
        cy.get(this.birthdate).type(this.dataDOB);
        cy.get(this.formEmail).type(this.dataEmail);
        cy.get(this.AddcontactSubmit).click();
    }
}

export default (addingContact);
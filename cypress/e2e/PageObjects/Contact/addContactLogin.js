class addContactLogin{

emailele = '#email';
passwordele = '#password';
sumbit = '#submit'

getLogin()
{
    cy.fixture('contactLogin').then((data)=>
    {
        cy.get(this.emailele).type(data.email);
        cy.get(this.passwordele).type(data.password);
    })
    cy.get(this.sumbit).click();
}

}
export default (addContactLogin);

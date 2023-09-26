import addContactLogin from "../PageObjects/Contact/addContactLogin";
import addingContact from "../PageObjects/Contact/addingcontact";
import contactedit from "../PageObjects/Contact/editContact";
import contactAdd from "../PageObjects/Contact/verifyContact";




describe("contact", ()=>
{
     it("ProductTest", ()=>
     {
          cy.visit(Cypress.env("contactUrl"))
          
          const loginPage = new addContactLogin();
          const addContact = new addingContact();
          const verifyContact = new contactAdd();
          const editContact = new contactedit();
          

          loginPage.getLogin();
          addContact.getAddingcontact();
          verifyContact.getBankElement();
          editContact.getedit();
          verifyContact.getupdatedContact();
     }) 
       
})


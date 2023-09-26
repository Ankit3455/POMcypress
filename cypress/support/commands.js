// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clicklink', (label)=>
{
    cy.get('a').contains(label).click({ force: true })
})

Cypress.Commands.add('Login' ,()=>
{
    cy.session((EmailID,password)=>
    {
        cy.fixture("Rating").then((loginData)=>
        {
            cy.get(this.email).type(loginData.EmailID);
            cy.get(this.password).type(loginData.password)
        });
    })
   
})
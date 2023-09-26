class loginProductReview{

    signinBtn = '.panel > .header > .authorization-link > a';
    email = '#email';
    password = 'input[title="Password"]';
    loginBtn = 'button[class="action login primary"]';

    getLogin()
    {
        cy.get(this.signinBtn).click();
        cy.fixture("Rating").then((loginData)=>
        {
            cy.get(this.email).type(loginData.EmailID);
            cy.get(this.password).type(loginData.password)
        });
        cy.get(this.loginBtn, { timeout: 5000 }).click();
    }
}

export default (loginProductReview)
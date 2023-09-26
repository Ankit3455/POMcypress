class productSearch{
    search = '.control> #search';
    grabbox = '#search';

    getSearch()
    { 
        cy.get(this.search).type("bag")
        cy.get(this.grabbox).type("{Enter}");
    }
}
export default (productSearch)
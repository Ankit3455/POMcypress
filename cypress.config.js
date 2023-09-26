const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 8000,
  failOnStatusCode: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

  "env":
    {
        "contactUrl": "https://thinking-tester-contact-list.herokuapp.com/",
        //"productReviewurl": "https://magento.softwaretestingboard.com/",
        "shoppingurl": "https://www.demoblaze.com/index.html"
    }

});

import Shoppingelements from "..//PageObjects/Shopping/Shoppingelementspage"
import addToCart from "../PageObjects/Shopping/addToCartpage";
import cart from "../PageObjects/Shopping/cartPage";
import shoppingForm from "../PageObjects/Shopping/shoppingForm";

describe("Ecart", ()=>
{
     it("ProductTest", ()=>
     {
          cy.visit(Cypress.env("shoppingurl"))
          const getelements = new Shoppingelements();
          const addTocart = new addToCart();
          const getCart = new cart();
          const Form = new shoppingForm();

          // getelements.getFirstElement();
          // addTocart.addFirstElement();
          // getelements.getSecondElement();
          // addTocart.addSecondElement();
          // addTocart.getCart();
          // getCart.getSumofElements();
          // Form.getPurchaseForm();

          getelements.getFirstElement()
          addTocart.addFirstElement()
          getelements.getSecondElement();
          addTocart.addSecondElement();
          addTocart.getCart();
          getCart.getSumofElements();
          Form.getPurchaseForm();




     })      
})
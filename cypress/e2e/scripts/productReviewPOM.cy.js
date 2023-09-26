import loginProductReview from "../PageObjects/productReview/loginProductReview";
import product from "../PageObjects/productReview/product";
import Rating from "../PageObjects/productReview/Rating";
import productReview from "../PageObjects/productReview/productReview";
import secondProduct from "../PageObjects/productReview/secondProductPage";
import compare from "../PageObjects/productReview/comparePage";
import productSearch from "../PageObjects/productReview/productSearchpage"
import compareProduct from "../PageObjects/productReview/productCountpage";
import addToCart from "../PageObjects/productReview/productAddToCartpage";
import shoppingCart from "../PageObjects/productReview/shoppingCartPage";

describe("Ecart", ()=>
{
     it("reviewProduct", ()=>
     {
          
          //cy.visit(Cypress.env("productReviewurl"))
          const randomNumber = () => Cypress._.random(0, 10000);
          cy.visit('https://magento.softwaretestingboard.com/' + '?' + randomNumber());
          const login = new loginProductReview();
          const seachProduct = new productSearch()
          const compareCount = new compareProduct();
          const getproduct = new product();
          const placeRating = new Rating();
          const verifyProduct = new productReview();
          const selectSecondProduct = new secondProduct();
          const compareProducts = new compare();
          const productAddtoCart = new addToCart();
          const produtInfo = new shoppingCart();

          //In this case Get login and compare product count after sorting
          seachProduct.getSearch();          
          compareCount.getcompareProduct();

          //This case grab the product and place the rating and assert the same prodcut
          login.getLogin();
          getproduct.getProduct();
          placeRating.getRating();
          verifyProduct.getverifyRating();
          verifyProduct.getCompare();


          //Add another prodcut
          verifyProduct.getAnotherProduct();
          selectSecondProduct.getCompareSecondProduct();
          //Verify only previous selected products compared
          compareProducts.getCompare();


          //case now added product to card and deleted it and asset theright message
          productAddtoCart.getaddToCart()
          produtInfo.getCartinfo();

     })    
});
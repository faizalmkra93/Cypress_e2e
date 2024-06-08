import { homePage } from "../../pages/homePage"
const homePageObj=new homePage()
import testData from "../../fixtures/testData.json"

describe("Add to cart suite1", () =>{
    
    before(() => {
        cy.login(testData.login.email,testData.login.password)
    })

    it("Add to Cart Test1", () =>{
        homePageObj.searchProduct(testData.product.prductName)
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should('contain',testData.message.successMessage)
        .and('contain',testData.product.prductName)
    })
})

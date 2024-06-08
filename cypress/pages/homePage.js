export class homePage{
    weblocators={
        search_textbox:'.form-control.input-lg',
        search_icon: '.fa.fa-search',
        macbook_image: ".img-responsive[title='MacBook']",
        addToCart_button:"#button-cart[type='button']",
        successMessage:".alert.alert-success.alert-dismissible"
    }
    searchProduct(productName){
        cy.get(this.weblocators.search_textbox).type(productName)
        cy.get(this.weblocators.search_icon).click()

    }
    addToCart(){
        cy.get(this.weblocators.macbook_image).click()
        cy.get(this.weblocators.addToCart_button).click()
    }
    verifySuccessMessage(){
        return cy.get(this.weblocators.successMessage)
    }
}
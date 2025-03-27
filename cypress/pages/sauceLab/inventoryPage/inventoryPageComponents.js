class InventoryPageComponents {
    elements = {
        productContainer: ()=> cy.get('#inventory_container'),
        inventoryList: ()=> cy.get('.inventory_list'),
        listOfProducts: ()=> cy.get('.inventory_item'),
        productImg: ()=> cy.get('.inventory_item_img'),
        inventoryDesc: ()=> cy.get('.inventory_item_description'),
        productName: ()=> cy.get('.inventory_item_name'),
        productDesc: ()=> cy.get('.inventory_item_desc'),
        productPrice: ()=> cy.get('.inventory_item_price'),
        addToCartBtn: ()=> cy.get('[add-to-cart-sauce-labs-backpack]')
    }

    productDetails() {
        this.elements.listOfProducts().then((items)=> {
            const itemCounts = items.length
            cy.log(`Number of Products = ${itemCounts}`)

            cy.wrap(items).each((product, index) => {
                cy.wrap(product).within(() => {
                    
                    this.elements.productName().then((name) => {
                        cy.log(`Product ${index + 1} Name: ${name.text()}`)
                    })
                })
            })
        })
        
        
    }
}

export const inventoryPageComponents = new InventoryPageComponents()
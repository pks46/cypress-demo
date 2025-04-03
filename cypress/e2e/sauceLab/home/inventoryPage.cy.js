const { inventoryPageComponents } = require("../../../pages/sauceLab/inventoryPage/inventoryPageComponents")

describe('Validate inventory Page Products', () => {
    before(()=> {
        cy.loginPreserveSession('standard_user', 'secret_sauce')
    })
    it('Verify Products', ()=> {
        inventoryPageComponents.productDetails()
    })
    it('Verify the page has menu options', () => {
        //
    })
})
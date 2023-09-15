describe('Flipcart', function () {
    it('flipcart add to cart', function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        }
        );
        cy.visit('https://www.flipkart.com/')
        cy.get('[name="q"]').type('Nothing phone one {Enter}')
        cy.contains('Nothing Phone (1) (Black, 256 GB)').first().click({ force: true })
        //cy.contains('Add to cart').click
        cy.wait(5000)
        cy.get('[class="_2KpZ6l _2U9uOA _3v1-ww"]').click()

        //cy.get('[class="a4bIc"]').type('Flipcart{enter}')
        //cy.get('[href="https://www.flipkart.com/"]').first().click({force:true})
    }
    )
}
)
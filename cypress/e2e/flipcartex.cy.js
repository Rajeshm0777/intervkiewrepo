import data from '../fixtures/sample.json'
describe('template spec', () => {

    
 
    it.skip('Test 3', () => {

    
      cy.visit('https://www.flipkart.com/')
      cy.get('input[name="q"]').type("laptop{enter}")

      cy.get('footer').scrollIntoView()

      cy.xpath("//div[@class='_220jKJ JyiPCp']",{timeout:30000}).should("have.attr", "style", 'background: rgb(0, 160, 152);')
        //or
      cy.xpath("//div[@class='_220jKJ JyiPCp']",{timeout:30000}).should('have.css', 'background-color', 'rgb(0, 160, 152)')

      cy.xpath("//div[@class='_220jKJ JyiPCp']",{timeout:30000}).parent().parent().within(()=>{


        cy.get('._4rR01T').then((txt)=>{

            var productname = txt.text()
            cy.log(productname)
        })

        cy.get('._30jeq3._1_WHN1').then((txt)=>{

            var currentprice = txt.text().replace("₹", "").replace(",", "")
            cy.log(currentprice)
        })

        cy.get('._3I9_wc._27UcVY').then((txt)=>{

            var oldprice = txt.text().replace("₹", "").replace(",", "")
            cy.log(oldprice)
        })
      })
      
    })

    it("tabel",()=>{

     

        cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html')

        cy.get("summary").click()

       cy.get('#jsondata').clear()

       cy.get('#jsondata').type(JSON.stringify(data),{ parseSpecialCharSequences: false })
       cy.contains("Refresh Table").click()

      
       cy.contains(data[3].name).should("be.visible")
        
    })
  })

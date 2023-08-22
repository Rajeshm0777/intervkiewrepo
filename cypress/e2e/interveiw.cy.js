describe('template spec', () => {
  var x=[];
  var y =[];
  it('Test 1', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('p[class="oxd-text oxd-text--p"]').first().then((txt)=>{

      var username = txt.text().split(" ")    
      cy.get('input[name="username"]').type(username[2])
    })

    cy.get('p[class="oxd-text oxd-text--p"]').last().then((txt)=>{

      var password = txt.text().split(" ")

      cy.get('input[name="password"]').type(password[2])
    })

    cy.get('button[type="submit"]').click()

    cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  })

  it.only('Test 2', () => {
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')

    cy.get('#t01 >tbody ').within(()=>{

       
      cy.get(' tr > td:nth-child(1)').each((txt)=>{

         var firstcoloumntext = txt.text()
         cy.log(firstcoloumntext)
         x.push(firstcoloumntext)
         cy.log(x)
      })

      cy.get(' tr > td:nth-child(3)').each((txt, index)=>{

        var thirdcoloumntext = txt.text()
        cy.log(thirdcoloumntext)
        y.push(thirdcoloumntext)
        cy.log(y)
        
     })
     
    })

    
  })


  it.only('Test 2', () => {
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')

    
  })
})
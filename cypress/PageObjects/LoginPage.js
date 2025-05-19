
export default class login{

     setUserName(username){
       cy.get('input#email').type("cy.qa@example.com")
        

     }

     setPassword(password){
          cy.get('input#password').type("password") 

     }

     clickLogin(){
         cy.get('button[data-cy="sign-in-button"]').click()

     }

     verifyLogin(){
        cy.get('[data-cy="dashboard-section-header"]').should("contain.text",'Applications')
     }
}


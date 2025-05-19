/// <reference types="cypress" />

import 'cypress-file-upload';
import login from '../PageObjects/LoginPage';
import launch from '../PageObjects/siteLaunch';



describe("test suit 1", ()=>{
    it("loginverification",()=>{
        const launc = new launch()
        launc.launchSite()
        cy.get('button[data-cy="sign-in-button"]').should("be.disabled")//checking that button is disabled intially
        const log = new login()
        log.setUserName("cy.qa@example.com")
        Cypress.on('uncaught:exception', (err, runnable) => {
 
         return false;
       });
        log.setPassword("password")
        log.clickLogin()
        log.verifyLogin()//postive scenario valid creds
        cy.get('.d-xl-block').click()
        cy.get('[data-cy="logout-link"]').click()
        cy.wait(4000)
        cy.get('[data-cy="email-input"]').type("wrongcreds@") //negative scenarios
        cy.get('span[data-cy="email-error-message"]').should('contain.text','Email is invalid') //email filed validation
         cy.get('button[data-cy="sign-in-button"]').should("be.disabled") //button validation
        cy.get('[data-cy="password-input"]').type("pa")
        cy.get('p[data-cy="password-error"]').should('be.visible').and("contain.text","Password must be at least 5 characters long")// password field validation
        cy.get('button[data-cy="sign-in-button"]').should("be.disabled") //button validation


   })

})





/// <reference types="cypress" />

import 'cypress-file-upload';
import launch from '../PageObjects/siteLaunch';
import login from '../PageObjects/LoginPage';


describe("test suit 2", ()=>{
    it("tempalte creation in two different ways",()=>{
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
        log.verifyLogin()
        cy.get('[data-cy="create-new-app-button"]').click()
        cy.get('[data-cy="app-name-input"]').type("Myapp")
        cy.get('[data-cy="+-create-app"]').click()
        cy.get('button[data-cy="cancel-button"]').click()
        cy.get('[data-cy="myapp-title"]').should('have.text','Myapp') //verfication
        cy.get('[data-cy="import-dropdown-menu"]').click()
        cy.get('a').contains("Choose from template").click()
        cy.get('[data-cy="data-and-analytics-category-title"]').click()
        cy.get('[data-cy="advanced-data-visualization-list-item"]').click()
        cy.get('[data-cy="create-application-from-template-button"]').click()
        cy.get('[data-cy="app-name-input"]').type("My Advanced data visualization")
         cy.get('button[data-cy="cancel-button"]').click()
         cy.get('[data-cy="my-advanced-data-visualization-title"]').should("have.text","My Advanced data visualization") //verfication
         cy.get('[data-cy="import-dropdown-menu"]').click()
         cy.get('input[data-cy="import-option-input"]').attachFile('Mynew-advanced-data-visualization.json');
         cy.wait(1000);
        cy.get('button[data-cy="import-app"]').should('be.visible').click()
        cy.get('[data-cy="app-name-error-label"]').should('have.text',"App name already exists") //verfication
        cy.get('button[data-cy="cancel-button"]').click()
        cy.get('[data-cy="mynew-advanced-data-visualization-title"]').should('have.text',"Mynew-advanced-data-visualization") //verfication
   })

})





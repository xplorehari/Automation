import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
//const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("I visit www.way2automation.com", () => {
  cy.visit("https://www.way2automation.com/angularjs-protractor/webtables");
 });

 When("I click on Add user and enter the details and click on Save button", () => {
  cy.contains("Add User").click()
      cy.get('h3[class=ng-binding]').should ('contain', 'Add User')
      cy.get('input[name=FirstName]').type("testfirstname").should("have.value","testfirstname")
      cy.get('input[name=LastName]').type("testlastname").should("have.value","testlastname")
      cy.get('input[name=UserName]').type("testusername").should("have.value","testusername")
      cy.get('input[name=Password]').type("password").should("have.value","password")
      //cy.xpath("//label[text()='Company AAA']//input").click()
      cy.get('input[value=15]').click()
      cy.get('select[name=RoleId]').select("Customer")
      cy.wait(3)
      cy.get('input[name=Email]').type("test@gmail.com").should("have.value","test@gmail.com")
      cy.get('input[name=Mobilephone]').type("84530403463").should("have.value","84530403463")
      cy.get('.btn.btn-success').click()
 });

 When("I search for the User Novak and click on the Delete button", () => {
  // Finding the parent element(row) containing 'Novak' and finding the delete buttons
  cy.contains("Novak").parent().find("button").find("i").eq(1).click()
  cy.get('div button').eq(1).click()
});

 Then("I should see a user added to the webtable with all the details entered above", () => {
      cy.get('.smart-table.table.table-striped').contains('td','test@gmail.com').should('be.visible')
    });

 Then("I should see the user Novak deleted from the table sucessfully", () => {
      cy.get('.smart-table.table.table-striped').contains('td', 'novak').should('not.exist');
});   

  


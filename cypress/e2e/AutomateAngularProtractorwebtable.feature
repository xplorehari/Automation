Feature: AutomateAngularProtractorWebtable1
  Scenario: Add a user and validate the user has been added to the table
    Given I visit www.way2automation.com
    When I click on Add user and enter the details and click on Save button
    Then I should see a user added to the webtable with all the details entered above
    
  Scenario: Delete the user "novak" from the table and validate the user has been deleted.
    Given I visit www.way2automation.com
    When I search for the User Novak and click on the Delete button
    Then I should see the user Novak deleted from the table sucessfully  
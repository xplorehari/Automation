# AutomateAngularProtractorWebtable
This project's main purpose is to automate the user interactions on Angularprotractorwebtable and successfully finish the scenarios:Add user and validate,Delete user Novak and validate  using BDD
## Tech stack used
The project is implemented with Cypress(JavaScript)  and Gherkin Language(Cucumber-BDD).

## Installation and Setup
1.	Cypress version used: Cypress 10.9.0
Operation system : Windows 10 Install Git if you dont have in your system.
https://git-scm.com/download/win
2.	Open Git Bash and clone this repository in a directory.
   - **$ git clone :https://github.com/xplorehari/Automation**
3.	Open the cloned project in a code editor.
4.	In the Terminal window of the Code editor  and  use NPM commands for installing cypress(Javascript) using following commands
   -	Download and setup Node.JS by installing the exe from the link below based on the system requirments.To make sure node.js is installed sucessfully run the command node -v
https://nodejs.org/en/download/
open Command Prompt or Terminal window and run the following NPM commands
  -	**Npm init**
    <sub>(enter for all the default options and this will create a package.json file)<sub>

  - **create a folder in desktop where you want new cypress tests to be created and go to   the folder location** 

  -	**Npm install Cypress**
    <sub>(if you are getting SSL certificate error or any other error you can download the binary from https://www.cypress.io/. And follow the instructions on the page for the direct download: https://docs.cypress.io/guides/getting-started/installing-cypress#Direct-download)<sub>

  -	**Npx cypress open**
    <sub>(When we open the first time cypress asks for the default setup of e2e spec file and other support file configuration click continue to proceed. Now click on E2E testing and select the browser:chrome and it asks for default scaffold set of spec files or create new spec file directly. Select the second option)<sub>


     Go to Terminal window again and install other dependencies for cucumber setup within cypress
    - **Npm i -D cypress-fill-command @badeball/cypress-cucumber-preprocessor @cypress/webpack-preprocessor**
    <sub>(installing the Cucumber preprocessor and webpack dependencies and configuring the same is mandatory for running this project sucessfully.Copy the contents of **package.Json file** and **cypress.config.js** file(located in the Parent folder from where Cypress is installed) from the github repository and update your local copy for these files.For more instructions please refer to the github page:https://github.com/badeball/cypress-cucumber-preprocessor)<sub>  

5.	Now copy the spec files from the github repository to your local
        cypress\e2e\AutomateAngularProtractorwebtable.feature and cypress\e2e\AutomateAngularProtractorwebtable.js
   <sub>(For the feature file to highlight in blue cucumber/full gherkin extension may be required to install depending on the editor from the extension/plugin section)<sub>

## Execution
**npx cypress open**
Cypress Testrunner will open in a new window and show the updated AutomateAngularProtractorwebtable.feature as hyperlink 
Click on the feature and the execution will start on the new chrome browser window for both Add and the Delete scenarios

## Results

The script runs and completes the execution of both the scenarios and the test report shows all the assertions used as well as the screenshots of the applications (before/after state when we hover) in the new chrome browser window directly
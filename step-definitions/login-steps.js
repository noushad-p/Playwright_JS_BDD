const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const{expect} = require('@playwright/test');
const { LoginPage } = require('../page-objects/login-page')

// Initializing the object (loginPage) of class (LoginPage)
const loginPage = new LoginPage()

// Add your step definitions here

Given('I visit a login page', async ()=> {
//defineStep('I visit a login page', async ()=> {
  await loginPage.navigateToLoginScreen()
})

// When('I fill the login form with valid credentials', async ()=> {
defineStep('I fill the login form with valid credentials', async ()=> {
  await loginPage.submitLoginForm()
})

Then('I should see the home page', async ()=> {
// defineStep('I should see the home page', async ()=> {
    await loginPage.assertUserIsLoggedIn()
})

defineStep('I wait for 3 seconds', async ()=> {
  await loginPage.pause()
})

// /^I fill the login form with "([^"]*)" and "([^"]*)"$/, -> This is regular expression
// Using this for execution the scenario with multiple set of data
defineStep(
  /^I fill the login form with "([^"]*)" and "([^"]*)"$/,
  async (username, password)=> {
    await loginPage.submitLoginWithParameters(username, password)
  }
)

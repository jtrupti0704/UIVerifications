var WaitMethods = require("WaitMethods");
let browser = Aliases.browser;
let signInPage= browser.meddispenseSignInPage;
let loginPage = signInPage.medDispenseLoginForm;
let commonControls = browser.commonControls

function navigateToMedDispense()
{
  try{
  //Navigate To meddispense page
  Browsers.Item(btChrome).Navigate("https://"+ Project.Variables.qa1Env +".medplatform.medavail.com/MedDispense?provider=MedAvailFederation");
  //Wait to open login window
  browser.LoginWindow.WaitProperty("WndCaption", "Sign In - Google Chrome");
  browser.LoginWindow.Maximize();
  //Validate login window is open
//  aqObject.CheckProperty(signInPage.medDispenseLogo, "Exists" , cmpEqual , true);
  Log.Message("Navigated to meddispense page");
  }
  catch(err)
  {
    Log.Error(err.message)
  }
}



function signIn(){
  //Enter UserName
  loginPage.usernameTextField.SetText(Project.Variables.LoginUsername);
  Log.Message("Username entered.");
  //Enter Password
  loginPage.passwordTextField.SetText(Project.Variables.LoginPassword);
  Log.Message("Password entered.");
//  signInPage.medDispenseLogo.Click();
  //Click on Submit button
  loginPage.SignInButton.Click();
  Log.Message("Clicked On sign In button.");
  WaitMethods.waitForElement(browser.medDispensePage.pinVerificationHeader,40000)                                                                                                                          //Wait until receives Pin verification popup
  //Verify pin verification popup appears                                                                                                                                        
  aqObject.CheckProperty(browser.medDispensePage.pinVerificationHeader , "contentText", cmpEqual, "PIN Verification");
  Log.Message("Pin Verification popup appeared");
}

function submitPin()
{
  //Enter PIN
  browser.medDispensePage.pinVerificationForm.pinBox.SetText(Project.Variables.PIN);
  Log.Message("PIN entered");
  //Click on submit button
  browser.medDispensePage.pinSubmitButton.Click();
  Log.Message("Clicked on Submit button.");
                                                                                                                                          //Wait until receives Contact Center Agent page appears
  aqObject.CheckProperty(browser.medDispensePage.contactCenterAgentHeader , "contentText", cmpEqual, "Contact Center Agent");
  Log.Message("User logged in successfully");
}

function verifyPinVerificationPopupUI()
{
  //Verify Pin textbox is displayed
  aqObject.CheckProperty(browser.medDispensePage.pinVerificationForm.pinBox, "Exists", cmpEqual, true)
  aqObject.CheckProperty(browser.medDispensePage.panelIfYouForgotYourPin, "contentText", cmpEqual, "If you forgot your PIN,\nClick here\nto reset it." )
  
  //Verify Submit button is disabled and greyed out
  aqObject.CheckProperty(browser.medDispensePage.pinVerificationSubmitButtonGrey,  "className", cmpEqual, "greyButton")
  Log.Message("Submit button is disabled and displayed as greyed out")
}

function verifySignInPageUI()
{
  aqObject.CheckProperty(signInPage.medDispenseLoginForm.usernameTextField, "Exists", cmpEqual, true);
  aqObject.CheckProperty(signInPage.medDispenseLoginForm.passwordTextField, "Exists", cmpEqual, true);
  aqObject.CheckProperty(signInPage.medDispenseLoginForm.SignInButton, "Exists", cmpEqual, true);
  aqObject.CheckProperty(signInPage.medDispenseLogo, "Exists", cmpEqual, true);
}

module.exports.navigateToMedDispense = navigateToMedDispense;
module.exports.verifySignInPageUI = verifySignInPageUI;
module.exports.signIn = signIn;
module.exports.submitPin = submitPin;
module.exports.verifyPinVerificationPopupUI = verifyPinVerificationPopupUI;
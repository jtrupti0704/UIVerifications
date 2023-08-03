var WaitMethods = require("WaitMethods");
let browser = Aliases.browser;
let identifyCustomerPage = browser.IdentifyCustomerPage;

//Wait to receive serach patient task
function receiveSearchPatientTask()
  {                                                                                                                                        //Wait until receives identify customer task appears
    WaitMethods.waitForPageToLoad("https://qa1.medplatform.medavail.com/MedDispense/identifyCustomer")
  }

//Search patient and select patientcard
function searchPatient()
  {
    //Enter Last name
    identifyCustomerPage.firstName.firstNameTextField.SetText(Project.Variables.PatientFirstName);
    //Enter First Name
    identifyCustomerPage.lastName.lastNameTextField.SetText(Project.Variables.PatientLastName);
    //Enter DOB
    identifyCustomerPage.dateOfBirth.dateOfBirthTextField.setAttribute(Project.Variables.patientDateOfBirth);
    //Click on Search Patients button
    identifyCustomerPage.searchPatientsButton.Click();
  }

//Select patient Card
function selectPatientCard()
  {
                                                                                                                                            //Wait until patient card appears
    //Select patient card
    identifyCustomerPage.patientInformationCard.Click();
  }

//Complete Identification
function completeIdentification()
  {
    //Click on identification button
    identifyCustomerPage.identificationCompleteButton.Click();
    aqObject.CheckProperty(browser.medDispensePage.contactCenterAgentHeader , "contentText", cmpEqual, "Contact Center Agent1");
  }
  
  

module.exports.receiveSearchPatientTask = receiveSearchPatientTask;
module.exports.searchPatient = searchPatient;
module.exports.selectPatientCard = selectPatientCard;
module.exports.completeIdentification = completeIdentification;


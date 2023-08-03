var SearchAndIdentifyCustomerPage = require("SearchAndIdentifyCustomerPage");
var SelectPatientAndRxPage = require("SelectPatientAndRxPage");
var QaConsultAuthorizePage = require("QaConsultAuthorizePage");
var LogoutMeddispense = require("LogoutMeddispense");
var InventoryPage = require("InventoryPage");
var CommonActionsPage = require("CommonActionsPage");
var EndTransactionOnIdentifyAndSpnRx = require("EndTransactionOnIdentifyAndSpnRx");
var NavigateAndSignInToMedDispense = require("NavigateAndSignInToMedDispense");


//@tag1
function testVerifyInventoryUi_TC96686()
{
  Log.Message("Testcase execution started for 966686-Verify the UI for Inventory Grid window in MedDispense.")
  //Navigate To meddispense
  NavigateAndSignInToMedDispense.navigateToMedDispense();
  NavigateAndSignInToMedDispense.signIn();
  NavigateAndSignInToMedDispense.submitPin();
  //open , verify and close inventory
  VerifyInventoryPage.OpenInventoryWindow();
  VerifyInventoryPage.VerifyInventoryUI();
  VerifyInventoryPage.closeInventory();
  //End transaction
  EndTransactionOnIdentifyAndSpnRx.EndTransaction();
  //Logout
  LogoutMeddispense.logout();
  Log.Message("Testcase execution completed for TC966686")
}


// @medDispenseRegressionSuite  //@medDispenseP1
function testVerifyQAConsultAuthorizeTaskUi_TC96667()
{
  //Navigate To meddispense
  NavigateAndSignInToMedDispense.navigateToMedDispense();
  NavigateAndSignInToMedDispense.signIn();
  NavigateAndSignInToMedDispense.submitPin();

  //Search patient and complete identification
  SearchAndIdentifyCustomerTask.receiveSearchPatientTask();
  SearchAndIdentifyCustomerTask.searchPatient();
  SearchAndIdentifyCustomerTask.selectPatientCard();
  SearchAndIdentifyCustomerTask.completeIdentification();
  
  //Select Rx And confirm rx
  SelectPatientAndRxTask.submitRx();
  SelectPatientAndRxTask.confirmRx();
  
  //Verify Ui of QA page
  QaConsultAuthorizeTask.verifyTransactionTableBeforeAcceptAndAfterSignature();
  commonControlsPage.verifyRibbonDetails();
  commonControlsPage.verifyButtons();
  QaConsultAuthorizeTask.verifyQaButtons();
  commonControlsPage.verifyNotesForPatient();
  commonControlsPage.verifyScanCollateralAndNotes();
  QaConsultAuthorizeTask.ClickViewPackageImageButton();
  QaConsultAuthorizeTask.VerifyUiOfEditAndCompareWindow();
  QaConsultAuthorizeTask.closeEditAndCompareWindow();  
  QaConsultAuthorizeTask.AcceptPackage();
  QaConsultAuthorizeTask.clickAuthorizeButton();
  QaConsultAuthorizeTask.VerifyUiOfAuthorizePopup();
  QaConsultAuthorizeTask.cancelAuthorization();
}

function testVerifyMedDispenseSignInAndSignOutPageUi_TC96654()
{
  Log.Message("Testcase execution started for Test Case 96654:Verify MedDispense UI for Login and Log out functionality")
  
  //Navigate To meddispense
  NavigateAndSignInToMedDispense.navigateToMedDispense();
  
  //Verify UI of SignIn Page
  NavigateAndSignInToMedDispense.verifySignInPageUI();
  
  //SignIn to medDispense
  NavigateAndSignInToMedDispense.signIn();
  NavigateAndSignInToMedDispense.verifyPinVerificationPopupUI();
  NavigateAndSignInToMedDispense.submitPin();
  
   //Logout from medDispense
  LogoutMeddispense.logout()
}

function testVerifyTransferTaskPopupUi_TC96673()
{
  Log.Message("Testcase execution started for Test Case 96673:Verify UI of transfer task pop-up.")
  
  //Navigate To meddispense
  NavigateAndSignInToMedDispense.navigateToMedDispense();
  NavigateAndSignInToMedDispense.signIn();
  NavigateAndSignInToMedDispense.submitPin();
  
  // Receives Search and Identify Customer Task
  SearchAndIdentifyCustomerPage.receiveSearchPatientTask()
  
  // Verify Transfer Task Popup UI
  CommonActionsPage.clickOnTransferTaskButton();
  CommonActionsPage.verifyTransferTaskPopupUi();
  CommonActionsPage.closeTransferTaskPopup();
  
  //End Transcation on Search and Identify Customer Task
  EndTransactionOnIdentifyAndSpnRx.EndTransaction()
  
  //Logout from medDispense
  LogoutMeddispense.logout()
}
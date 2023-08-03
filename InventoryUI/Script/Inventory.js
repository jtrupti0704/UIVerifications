var SearchAndIdentifyCustomerPage = require("SearchAndIdentifyCustomerPage");
var SelectPatientAndRxPage = require("SelectPatientAndRxPage");
var QaConsultAuthorizePage = require("QaConsultAuthorizePage");
var LogoutMeddispense = require("LogoutMeddispense");
var InventoryPage = require("InventoryPage");
var CommonActionsPage = require("CommonActionsPage");
var EndTransactionOnIdentifyAndSpnRx = require("EndTransactionOnIdentifyAndSpnRx");
var NavigateAndSignInToMedDispense = require("NavigateAndSignInToMedDispense");

function Verify_user_is_able_to_search_for_packages_in_the_global_search_field_in_Inventory_Grid_window_TC96696()
{
  /*Log.Message("Testcase execution started for 966686-Verify the UI for Inventory Grid window in MedDispense.")
  //Navigate To meddispense
  NavigateAndSignInToMedDispense.navigateToMedDispense();
  NavigateAndSignInToMedDispense.signIn();
  NavigateAndSignInToMedDispense.submitPin();
  //open , verify and close inventory
  VerifyInventoryPage.OpenInventoryWindow();*/
  
  //Pass Product name to global search
  Project.Variables.globalSearch = Project.Variables.productName;
  InventoryPage.SearchInGlobalSearch();
  InventoryPage.VerifyProductName();
  
  //pass package Description to global search
  Project.Variables.globalSearch = Project.Variables.packageDescription ;
  InventoryPage.SearchInGlobalSearch();
  InventoryPage.VerifyPackageDesription();
  
  //Pass product code to global search
  Project.Variables.globalSearch = Project.Variables.productCode;
  InventoryPage.SearchInGlobalSearch();
  InventoryPage.VerifyProductCode();
  
  //Pass package Quantity to global search
  Project.Variables.globalSearch = Project.Variables.packageQuantity;
  InventoryPage.SearchInGlobalSearch();
  InventoryPage.VerifyquantityInPackage();
  
  //Pass manufacturer to global search
  Project.Variables.globalSearch = Project.Variables.manufacturer;
  InventoryPage.SearchInGlobalSearch();
  InventoryPage.VerifyManufacturer();
  
  //Pass package code to global search
  Project.Variables.globalSearch = Project.Variables.packageCode;
  InventoryPage.SearchInGlobalSearch();
  InventoryPage.VerifyPackageCode();
  
  //Pass soonestExpiration to global search
  Project.Variables.globalSearch = Project.Variables.soonestExpiration;
  InventoryPage.SearchInGlobalSearch();
  InventoryPage.VerifySoonestExpiration();
  
  //Pass availablePackages to global search
  Project.Variables.globalSearch = Project.Variables.soonestExpiration;
  InventoryPage.SearchInGlobalSearch();
  InventoryPage.VerifyAvailablePackages();
  
  //Pass Is demo packages to global search
  Project.Variables.globalSearch = Project.Variables.soonestExpiration;
  InventoryPage.SearchInGlobalSearch();
  InventoryPage.VerifyIsDemoPackage();
}

function inventoryTc()
{
  /*Log.Message("Testcase execution started for 966686-Verify the UI for Inventory Grid window in MedDispense.")
  //Navigate To meddispense
  NavigateAndSignInToMedDispense.navigateToMedDispense();
  NavigateAndSignInToMedDispense.signIn();
  NavigateAndSignInToMedDispense.submitPin();
  //open , verify and close inventory
  VerifyInventoryPage.OpenInventoryWindow();*/
  
  //Pass Product name to global search
  InventoryPage.VerifyProductName();
  
  //pass package Description to global search
  InventoryPage.VerifyPackageDesription();
  
  //Pass product code to global search
  InventoryPage.VerifyProductCode();
  
  
  //Pass manufacturer to global search
  InventoryPage.VerifyManufacturer();
  
  //Package Code
  InventoryPage.VerifyPackageCode();
  
}
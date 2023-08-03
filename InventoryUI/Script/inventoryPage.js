
let browser = Aliases.browser;
let inventoryPage= browser.InventoryPage;
function OpenInventoryWindow()
{
  //Click On Inventory button
  browser.IdentifyCustomerPage.viewInventorybutton.ClickButton();
  //Verify caption of inventory page
  aqObject.CheckProperty(browser.InventoryWindow, "WndCaption", cmpEqual, "MedDispense - Google Chrome");
  browser.InventoryWindow.Maximize();
}

function VerifyInventoryUI(){
  //Verify The title of the window is 'MedDispense - Google Chrome'
  aqObject.CheckProperty(browser.InventoryWindow, "WndCaption", cmpEqual, "MedDispense - Google Chrome");
  Log.Message("Window caption verified successfully.");
  
  //Verify Header as MedCenter:<MedCenter_Name>
  aqObject.CheckProperty(inventoryPage.medCenterHeader, "contentText", cmpEqual, "MedCenter:\nV4-00023");
  
  //Validate Searchbox of inventory
  aqObject.CheckProperty(inventoryPage.inventorySeachBox, "Exists" , cmpEqual, true);
  aqObject.CheckProperty(inventoryPage.searchIcon, "Exists" , cmpEqual, true);
  aqObject.CheckProperty(inventoryPage.searchPlaceholder, "placeholder", cmpEqual, "Search");
  Log.Message("Searchbox of inventory verified successfully.");
  
  //Validate product name and its filter box
  aqObject.CheckProperty(inventoryPage.productName, "Exists" , cmpEqual , true);
  aqObject.CheckProperty(inventoryPage.productName.productNameText, "contentText", cmpEqual, "Product Name");
  aqObject.CheckProperty(inventoryPage.productName.productNameFilterbox, "Exists", cmpEqual, true);
  Log.Message("Product name and its filter box is exists");
  
  //Validate package descriptioncolumn and its filter box
  aqObject.CheckProperty(inventoryPage.packageDescription, "Exists" , cmpEqual , true);
  aqObject.CheckProperty(inventoryPage.packageDescription.packageDescriptionText, "contentText", cmpEqual, "Package Description");
  aqObject.CheckProperty(inventoryPage.packageDescription.packageDescriptionFilterbox, "Exists", cmpEqual, true);
  Log.Message("Package description and its filter box is exists");

  //Validate product code column and its filter box
  aqObject.CheckProperty(inventoryPage.productCode, "Exists" , cmpEqual , true);
  aqObject.CheckProperty(inventoryPage.productCode.productCodeText, "contentText", cmpEqual, "Product Code");
  aqObject.CheckProperty(inventoryPage.productCode.productCodeFilterbox, "Exists", cmpEqual, true);
  Log.Message("Product Code and its filter box is exists");
  
  //Validate Quantity in package column
  aqObject.CheckProperty(inventoryPage.quantityInPackage, "contentText", cmpEqual, "Quantity In Package");
  Log.Message("Quantity in Package column exists.");
  
  //Validate Manufacturer column and its filter box
  aqObject.CheckProperty(inventoryPage.manufacturer, "Exists" , cmpEqual , true);
  aqObject.CheckProperty(inventoryPage.manufacturer.manufacturerText, "contentText", cmpEqual, "Manufacturer");
  aqObject.CheckProperty(inventoryPage.manufacturer.manufacturerFilterbox, "Exists", cmpEqual, true);
  Log.Message("Manufacturer and its filter box is exists");    
  
  //Validate package code column and its filter box
  aqObject.CheckProperty(inventoryPage.packageCode, "Exists" , cmpEqual , true);
  aqObject.CheckProperty(inventoryPage.packageCode.packageCodeText, "contentText", cmpEqual, "Package Code");
  aqObject.CheckProperty(inventoryPage.packageCode.packageCodeFilterbox, "Exists", cmpEqual, true);
  Log.Message("Package Code and its filter box is exists");
  
  //Validate Soonest Expiration column
  aqObject.CheckProperty(inventoryPage.soonestExpirationText, "contentText", cmpEqual, "Soonest Expiration");
  Log.Message("Soonest Expiration column exists.");
  
  //Validate Available Packages column
  aqObject.CheckProperty(inventoryPage.availablePackagesText, "contentText", cmpEqual, "Available Packages");
  Log.Message("Available Packages column exists.");
  
  //Validate Is Demo Package column
  aqObject.CheckProperty(inventoryPage.isDemoPackageText, "contentText", cmpEqual, "Is Demo Package");
  Log.Message("Is Demo Package column exists.");
  
 
}

//Search product in global search
function SearchInGlobalSearch()
{
  inventoryPage.searchPlaceholder.SetText(Project.Variables.globalSearch)
  aqObject.CheckProperty(inventoryPage.searchPlaceholder , "Text" , cmpEqual , Project.Variables.globalSearch)
}

function verifyDrugTableCount()
{
  drugTableCount = inventoryPage.DrugTable.childElementCount;
   Log.Message(drugTableCount);
}

//Verify all searched product name
function VerifyProductName()
{
  verifyDrugTableCount();
   if(drugTableCount==0){
       Log.Message("No RX in Inventory");
   }else{
      for(let i=1;i<=drugTableCount;i++){
     let product_name_xpath = "//div[@class='WzVcYlXql-4ydhSVtF-qU']/ul["+i+"]/li[1]";    
     aqObject.CheckProperty(inventoryPage.FindElement(product_name_xpath), "contentText", cmpContains , Project.Variables.productName);     
     }
   }
}

//Verify all searched package description
function VerifyPackageDesription()
{
  drugTableCount = inventoryPage.DrugTable.childElementCount;
   Log.Message(drugTableCount);
   if(drugTableCount==0){
       Log.Message("No RX in Inventory");
   }else{
      for(let i=1;i<=drugTableCount;i++){
     let product_name_xpath = "//div[@class='WzVcYlXql-4ydhSVtF-qU']/ul["+i+"]/li[2]";    
     aqObject.CheckProperty(inventoryPage.FindElement(product_name_xpath), "contentText", cmpContains , Project.Variables.packageDescription);     
     }
   }
}

//Verify all searched product code
function VerifyProductCode()
{
  drugTableCount = inventoryPage.DrugTable.childElementCount;
   Log.Message(drugTableCount);
   if(drugTableCount==0){
       Log.Message("No RX in Inventory");
   }else{
      for(let i=1;i<=drugTableCount;i++){
     let product_name_xpath = "//div[@class='WzVcYlXql-4ydhSVtF-qU']/ul["+i+"]/li[3]";    
     aqObject.CheckProperty(inventoryPage.FindElement(product_name_xpath), "contentText", cmpContains , Project.Variables.productCode);     
     }
   }
}

//Verify all searched quantity In Package
function VerifyquantityInPackage()
{
  drugTableCount = inventoryPage.DrugTable.childElementCount;
   Log.Message(drugTableCount);
   if(drugTableCount==0){
       Log.Message("No RX in Inventory");
   }else{
      for(let i=1;i<=drugTableCount;i++){
     let product_name_xpath = "//div[@class='WzVcYlXql-4ydhSVtF-qU']/ul["+i+"]/li[4]";    
     aqObject.CheckProperty(inventoryPage.FindElement(product_name_xpath), "contentText", cmpContains , Project.Variables.packageQuantity);     
     }
   }
}

//Verify all searched manufacturer
function VerifyManufacturer()
{
  drugTableCount = inventoryPage.DrugTable.childElementCount;
   Log.Message(drugTableCount);
   if(drugTableCount==0){
       Log.Message("No RX in Inventory");
   }else{
      for(let i=1;i<=drugTableCount;i++){
     let product_name_xpath = "//div[@class='WzVcYlXql-4ydhSVtF-qU']/ul["+i+"]/li[5]";    
     aqObject.CheckProperty(inventoryPage.FindElement(product_name_xpath), "contentText", cmpContains , Project.Variables.manufacturer);     
     }
   }
}

//Verify all searched package code
function VerifyPackageCode()
{
  drugTableCount = inventoryPage.DrugTable.childElementCount;
   Log.Message(drugTableCount);
   if(drugTableCount==0){
       Log.Message("No RX in Inventory");
   }else{
      for(let i=1;i<=drugTableCount;i++){
     let product_name_xpath = "//div[@class='WzVcYlXql-4ydhSVtF-qU']/ul["+i+"]/li[6]";    
     aqObject.CheckProperty(inventoryPage.FindElement(product_name_xpath), "contentText", cmpContains , Project.Variables.packageCode);     
     }
   }
}

//Verify all searched soonest expiration
function VerifySoonestExpiration()
{
  drugTableCount = inventoryPage.DrugTable.childElementCount;
   Log.Message(drugTableCount);
   if(drugTableCount==0){
       Log.Message("No RX in Inventory");
   }else{
      for(let i=1;i<=drugTableCount;i++){
     let product_name_xpath = "//div[@class='WzVcYlXql-4ydhSVtF-qU']/ul["+i+"]/li[7]";    
     aqObject.CheckProperty(inventoryPage.FindElement(product_name_xpath), "contentText", cmpContains , Project.Variables.packageCode);     
     }
   }
}

//Verify all searched available packages
function VerifyAvailablePackages()
{
  drugTableCount = inventoryPage.DrugTable.childElementCount;
   Log.Message(drugTableCount);
   if(drugTableCount==0){
       Log.Message("No RX in Inventory");
   }else{
      for(let i=1;i<=drugTableCount;i++){
     let product_name_xpath = "//div[@class='WzVcYlXql-4ydhSVtF-qU']/ul["+i+"]/li[8]";    
     aqObject.CheckProperty(inventoryPage.FindElement(product_name_xpath), "contentText", cmpContains , Project.Variables.availablePackages);     
     }
   }
}

//Verify all searched is demo packages
function VerifyIsDemoPackage()
{
  drugTableCount = inventoryPage.DrugTable.childElementCount;
   Log.Message(drugTableCount);
   if(drugTableCount==0){
       Log.Message("No RX in Inventory");
   }else{
      for(let i=1;i<=drugTableCount;i++){
     let product_name_xpath = "//div[@class='WzVcYlXql-4ydhSVtF-qU']/ul["+i+"]/li[9]";    
     aqObject.CheckProperty(inventoryPage.FindElement(product_name_xpath), "contentText", cmpContains , Project.Variables.isDemoPackage);     
     }
   }
}

function clearGlobalSearch()
{
  inventoryPage.searchPlaceholder.SetText("")
  aqObject.CheckProperty(inventoryPage.searchPlaceholder , "Text" , cmpEqual , "")
}

function searchProductNameFromFilterbox()
{
  inventoryPage.productName.productNameFilterbox.SetText(Project.Variables.productName);
  aqObject.CheckProperty(inventoryPage.productName.productNameFilterbox , "Text" , cmpEqual , Project.Variables.productName)
}


function searchPackageDescriptionFromFilterbox()
{
  inventoryPage.productName.productNameFilterbox.SetText(Project.Variables.packageDescription);
  aqObject.CheckProperty(inventoryPage.productName.productNameFilterbox , "Text" , cmpEqual , Project.Variables.packageDescription)
}

function searchProductCodeFromFilterbox()
{
  inventoryPage.productName.productNameFilterbox.SetText(Project.Variables.productCode);
  aqObject.CheckProperty(inventoryPage.productName.productNameFilterbox , "Text" , cmpEqual , Project.Variables.productCode)
}

function searchManufacturerFromFilterbox()
{
  inventoryPage.productName.productNameFilterbox.SetText(Project.Variables.manufacturer);
  aqObject.CheckProperty(inventoryPage.productName.productNameFilterbox , "Text" , cmpEqual , Project.Variables.manufacturer)
}

function searchPackageCodeFromFilterbox()
{
  inventoryPage.productName.productNameFilterbox.SetText(Project.Variables.packageCode);
  aqObject.CheckProperty(inventoryPage.productName.productNameFilterbox , "Text" , cmpEqual , Project.Variables.packageCode)
}

function clearProductNameFromFilterbox()
{
  inventoryPage.productName.productNameFilterbox.SetText("");
  aqObject.CheckProperty(inventoryPage.productName.productNameFilterbox , "Text" , cmpEqual , "")
}


function clearPackageDescriptionFromFilterbox()
{
  inventoryPage.productName.productNameFilterbox.SetText("");
  aqObject.CheckProperty(inventoryPage.productName.productNameFilterbox , "Text" , cmpEqual , "")
}

function clearProductCodeFromFilterbox()
{
  inventoryPage.productName.productNameFilterbox.SetText("");
  aqObject.CheckProperty(inventoryPage.productName.productNameFilterbox , "Text" , cmpEqual , "")
}

function clearManufacturerFromFilterbox()
{
  inventoryPage.productName.productNameFilterbox.SetText("");
  aqObject.CheckProperty(inventoryPage.productName.productNameFilterbox , "Text" , cmpEqual , "")
}

function clearPackageCodeFromFilterbox()
{
  inventoryPage.productName.productNameFilterbox.SetText(Project.Variables.packageCode);
  aqObject.CheckProperty(inventoryPage.productName.productNameFilterbox , "Text" , cmpEqual , "")
}

function maxAndMinInventoryPage()
{
  
  
}


function closeInventory()
{
  //Close inventory window
  browser.InventoryPage.Close();
 
}
module.exports.OpenInventoryWindow = OpenInventoryWindow;
module.exports.SearchInGlobalSearch = SearchInGlobalSearch;
module.exports.VerifyProductName = VerifyProductName;
module.exports.VerifyProductCode = VerifyProductCode;
module.exports.VerifyPackageDesription = VerifyPackageDesription
module.exports.VerifyquantityInPackage = VerifyquantityInPackage
module.exports.VerifyManufacturer = VerifyManufacturer;
module.exports.VerifyPackageCode = VerifyPackageCode;
module.exports.VerifySoonestExpiration = VerifySoonestExpiration
module.exports.VerifyAvailablePackages = VerifyAvailablePackages
module.exports.VerifyIsDemoPackage = VerifyIsDemoPackage
module.exports.clearGlobalSearch = clearGlobalSearch;
module.exports.VerifyInventoryUI = VerifyInventoryUI;
module.exports.closeInventory = closeInventory;

module.exports.searchProductNameFromFilterbox = searchProductNameFromFilterbox;
module.exports.searchPackageDescriptionFromFilterbox = searchPackageDescriptionFromFilterbox;
module.exports.searchProductCodeFromFilterbox = searchProductCodeFromFilterbox;
module.exports.searchManufacturerFromFilterbox = searchManufacturerFromFilterbox;
module.exports.searchPackageCodeFromFilterbox = searchPackageCodeFromFilterbox;




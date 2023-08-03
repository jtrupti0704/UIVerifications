let browser = Aliases.browser;

/*function test()
{
try
{
  
  Browsers.Item(btChrome).Navigate("https://qa1.medplatform.medavail.com/MedDispense?provider=MedAvailFederation");
  aqObject.CheckProperty(browser.medDispensePage.pinVerificationHeader , "contentText", cmpEqual, "PIN Verification");
  
}
catch (e)
{
 // Posts an exception message to the test log
  Log.Error(e.message);
}
finally
{
  
}
}

function test2()
{
  try {
  throw "Oops; this is not an Error object";
} catch (e) {
  if (!(e instanceof Error)) {
    e = new Error(e);
  }
  console.error(e.message);
}
}

function test3()
{
  try {  
   throw new Error('This is the throw keyword'); //user-defined throw statement.  
}  
catch (e) {  
  Log.Error(e.message); // This will generate an error message  
}  
}


function test4()
{
  try{  
var a=3;  
if(a==2)  
Log.Message("ok");  
}  
catch(Error){  
Log.Message("Error found"+e.message);  
}  
finally{  
Log.Message("Value of a is 2 ");  
}  
}




function test6()
{
  try
{
  //Navigate To meddispense page
  Browsers.Item(btChrome).Navigate("https://qa1.medplatform.medavail.com/MedDispense?provider=MedAvailFederation");
  //Wait to open login window
  browser.LoginWindow.WaitProperty("WndCaption", "Sign In - Google Chrome");
  browser.LoginWindow.Maximize();
  //Validate login window is open
  aqObject.CheckProperty(signInPage.medDispenseLogo, "Exists" , cmpEqual , true);
  Log.Message("Navigated to meddispense page");
}
catch (e)
{
 // Posts an exception message to the test log
  Log.Error(e.message);
}
}





*/

function test7()
{

try {
  //Navigate To meddispense page
  Browsers.Item(btChrome).Navigate("https://qa1.medplatform.medavail.com/MedDispense?provider=MedAvailFederation");
  //Wait to open login window
    browser.LoginWindow.WaitProperty("WndCaption", "Sign In - Google Chrome");
  browser.LoginWindow.Maximize();
  //Validate login window is open
  aqObject.CheckProperty(signInPage.medDispenseLogo, "Exists" , cmpEqual , true);
  Log.Message("Navigated to meddispense page");
} catch(err) 
{
  Log.error(err.message); 
}
}

module.exports.test7 = test7;





function test8()
{
  Log.Message("It worked");
}

//SignIn page //Sign out page

function AdvancedExceptionHand()
{
  var ExepHand = DebugAgent.AdvancedExceptionHandling;
  
  if (ExepHand)
    Log.Message("The exceptions are handled.")
  else
    Log.Message("The exceptions are not handled.");
}

function Test1()
{
  Browsers.Item(btChrome).Navigate("https://qa1.medplatform.medavail.com/MedOps/Inventory/ProductDefinition/Index");
  let browser = Aliases.browser;
  browser.loginWindow.Maximize();
  browser.pageMedopsPackageDefinitions.navNavigation.textnodeMenu.linkMenuInventory.Click();
}

function Test2()
{
  Browsers.Item(btChrome).Navigate("https://qa1.medplatform.medavail.com/MedOps/Inventory/ProductDefinition/Index");
  let browser = Aliases.browser;
  browser.loginWindow.Maximize();
  browser.pageMedopsPackageDefinitions.navNavigation.textnodeMenu.linkMenuProductdefinition.Click();
}

function Test3()
{
  Browsers.Item(btChrome).Navigate("https://qa1.medplatform.medavail.com/MedOps/Inventory/ProductDefinition/Index");
  let browser = Aliases.browser;
  browser.loginWindow.Maximize();
  browser.pageMedopsPackageDefinitions.navNavigation.textnodeMenu.linkMenuQuarantineRule.Click();
  let page = browser.pageIndex;
  page.Wait();
  let textNode = page.textnodeQuarantineRule;
  textNode.Click();
  textNode.Click();
}
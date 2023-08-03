let page; 
let browser = Sys.Browser("chrome");

function waitForElement(Selector, maxWaitTime)
{
   page = Sys.Browser().Page("*");
    while(true){
        // Wait for the element to appear on the page
        let element = page.WaitElement(Selector, maxWaitTime);
        Log.Message("Element found: " + Selector);
        break;     
    } 
}
module.exports.waitForElement = waitForElement



function IsButtonEnabled(buttonObj, maxWaitTime) {
  if (buttonObj.WaitProperty("Enabled", true, maxWaitTime))
  {
  Log.Message("Button is enabled.");
  }
  else
  {
  Log.Message("Button is disabled or not found: ")
  }
}
module.exports.IsButtonEnabled = IsButtonEnabled




function waitForPageToLoad(pageUrl) {
    timeout = 120000
    function isPageReady() {
             let pageLoadedCondition = browser.Page(pageUrl).Exists; 
             Log.Message(pageLoadedCondition)
            return pageLoadedCondition;
    }
    while (true) {
        browser.WaitPage(pageUrl, timeout)
        if (isPageReady()) {
            Log.Message("Page loaded successfully.");
            break
        }
        Delay(1000);
         }
        
    }

module.exports.waitForPageToLoad = waitForPageToLoad


function CheckIfBrowserRunning(browserName) {
    var browser = Sys.WaitBrowser(browserName, 10000);

    // Check if the browser object is null or not
    if (browser != null) {
        Log.Message("Browser is already running.");
    } else {
        Log.Message("Browser is not running.");
    }
}
module.exports.CheckIfBrowserRunning = CheckIfBrowserRunning



function waitForTaskToLoad(pageUrl, timeout) {
    let page = browser.Page(pageUrl);

    let readyState;
    let startTime = new Date();

    while (true) {
        try {
            browser.WaitPage(pageUrl, timeout)
            readyState = page.contentDocument.readyState;
            if (readyState === "complete") {
                Log.Message(`Page with URL "${pageUrl}" has loaded successfully.`);
                return true;
            }
        } catch (e) {
            Log.Message(`Page with URL "${pageUrl}" is still loading...`);
        }

        if ((new Date() - startTime) > timeout) {
            Log.Error(`Timeout: Page with URL "${pageUrl}" did not load within ${timeout / 1000} seconds.`);
            return false;
        }

        Delay(1000); 
    }
}
module.exports.waitForTaskToLoad = waitForTaskToLoad





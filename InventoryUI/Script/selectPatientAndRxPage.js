
let browser = Aliases.browser;
let spnrxTask = browser.SpnRxPage;

function receiveSelectPatientAndRxTask()
{
                                                                                                                                              //Wait until receives spnrx task appears
    Delay(10000)
}

function submitRx()
{
  //Select required checkbox
  spnrxTask.requiredCheckbox.Click();
  //click on submit button
  spnrxTask.submitButton.Click();
}

function confirmRx()
{
  spnrxTask.confirmButton.Click();
}

module.exports.submitRx = submitRx;
module.exports.confirmRx = confirmRx;
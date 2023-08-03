var archivePath;


function exportAndSendReportByMail(){
  var workDir = Project.ConfigPath + "Log\\ExportedResults\\";
  var packedResults = Project.ConfigPath + "Log\\PackedResults\\";

  // Clears the previous results
  aqFileSystem.DeleteFolder(workDir, true);
  aqFileSystem.DeleteFolder(packedResults, true);

  aqFileSystem.CreateFolder(packedResults);
  aqFileSystem.CreateFolder(workDir);

  // Exports the results
  var fileName = workDir + "Report.html";
  Log.SaveResultsAs(fileName, lsHTML, false);

  // Gets the list of files to pack
  fileList = slPacker.GetFileListFromFolder(workDir);

  // Specifies the name of the archive
  archivePath = packedResults + "MedDispenseExecutionReport";

  // Packes the resutls
  if (slPacker.Pack(fileList, workDir, archivePath)){
    Log.Message("Files compressed successfully.");
    }
    sendEmail();
}

function sendEmail(){
  if (SendMail("Rutuja.Patil@encora.com", "mail.encora.com", "Rutuja Patil", "rutuja.patil@encora.com", "MedDispense Test Regression Report", "Hello,\n\nPlease find an attachment for the report.\n\nThank You,\n\nAutomation Team", Project.ConfigPath + "Log\\PackedResults\\MedDispenseExecutionReport.zip"))
    Log.Message("Mail was sent");
  else
    Log.Warning("Mail was not sent");
}

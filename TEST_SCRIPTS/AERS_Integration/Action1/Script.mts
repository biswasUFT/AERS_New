
Location="Q:\UFT AutoTestCases\Cases in Progress\bsangroula\AERS_Integration\TEST_RESULTS"

Function RunResults(Location)
Set App = CreateObject("QuickTest.Application")
'''App.Launch
App.Visible = True
App.Options.Run.AutoExportReportConfig.AutoExportResults = True
App.Options.Run.AutoExportReportConfig.StepDetailsReport = True
App.Options.Run.AutoExportReportConfig.DataTableReport = False
App.Options.Run.AutoExportReportConfig.LogTrackingReport = False
App.Options.Run.AutoExportReportConfig.ScreenRecorderReport = False
App.Options.Run.AutoExportReportConfig.SystemMonitorReport = False
App.Options.Run.AutoExportReportConfig.ExportLocation =Location 
App.Options.Run.AutoExportReportConfig.UserDefinedXSL = ""
App.Options.Run.AutoExportReportConfig.StepDetailsReportType = "PDF"
App.Options.Run.AutoExportReportConfig.StepDetailsReportFormat = "Detailed"
App.Options.Run.AutoExportReportConfig.ExportForFailedRunsOnly = False



End Function


USERNAME=Environment("strUsername")
PASSWORD=Environment("strPassword")
strBrowser=Environment("strBrowser")
strUrl=Environment("strUrl")
ErrorPath=environment.Value("ErrorPath")
FilePath_NonIntervention=environment.Value("FilePath_NonIntervention")



Print "this is just a test"


Call Launch_AERS(strBrowser,strUrl)'''''' This function is sued to launch AERS Application

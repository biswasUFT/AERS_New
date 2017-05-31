





USERNAME=Environment("strUsername")
PASSWORD=Environment("strPassword")
strBrowser=Environment("strBrowser")
strUrl=Environment("strUrl")
ErrorPath=environment.Value("ErrorPath")
FilePath_NonIntervention=environment.Value("FilePath_NonIntervention")



Print "this is just a test"


Call Launch_AERS(strBrowser,strUrl)'''''' This function is sued to launch AERS Application

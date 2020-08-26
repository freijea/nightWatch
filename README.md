//to run this module in node you need following this steps:

// 1) Just run it if you try to make an app equal this: 
// 1.1 Create a package.json by terminal with this command: npm init -i
// 1.2 After that in the package.json, below license create a bin section and then put the command you want run in your project, in my case I choose nols and declare the file wich you want run.

//2) If you are running in Linux enviroment run this command your terminal chmod +x index.js. But if you use windows you may not need change your permission. To see your Permission in Windows programs run the coomand below:
// Get-ExecutionPolicy
// If you policy isn't ByPass you have to change it by executing the following command in the Windows Powersheel as Run as Administrator:
// Set-ExecutionPolicy -Scope CurrentUser
// you have to change for ByPass.

// 3) If you are trying to make an app equal this:
/// You need put in the first line from a index.js the following statement:
// #!/usr/bin/env node
// This will allow the node execute your command your declare in bin section.

// 4) Finally you need link this app to the node_module by execute the following command:
// npm link
// This commmand will allow you execute this command, in my case, nols in everywhere, if you have node installed in your machine.

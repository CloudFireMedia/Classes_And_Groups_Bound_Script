/* Redevelopment note: 

   The two menu items 'Delete Future Calendar Events' and 'Push 
   Events to Google Calendar' are not working in the code below:
   
   var SCRIPT_NAME = 'Classes And Groups Script',	
   SCRIPT_VERSION = 'v1.5';
   
   I need this functionality for my job. So I am restoring an older 
   version of the script (found here: 
   https://script.google.com/d/1J8p7pQDIrJOnmt9MGWUB1KzIdj9bPnF6zs1KFRihw9T9nnSdVkbEQXIC/edit?usp=drivesdk)
   and hope this works.
   
   (Each restored file is appended with '_old'. I am commenting out the v1.5 below. 
   I am also restoring the old appscript.json file and moving the v1.5 one
   to this file, as comments are not allowed in the manifest file.)
   
   Update: well, shoot. The '_old' files did not work either. Same result 
   with the 'Delete GCal Events_old.gs' and 'Doc --> Gcal_old.gs' functions. 
   Nothing happens when these functions are run. :( 
   
   -cdb 2019.03.31
*/

//var SCRIPT_NAME = 'Classes And Groups Script',
//	SCRIPT_VERSION = 'v1.5';
//
//function onOpen(e) {
//	var ui = DocumentApp.getUi();
//
//	ui.createMenu('CloudFire')
//		.addItem('Read Instructions', 'instructionsDialogueBox') 
//		.addItem('Format Text', 'myFunction')
//		.addSeparator()
//		.addSubMenu(
//			ui.createMenu('Update Promotion Material')
//				.addItem('Delete Future Calendar Events', 'ShowDeletePopup')
//				.addItem('Push Events to Google Calendar', 'ShowExportPopup')
//				.addItem('Download .json for INDD Classrooms Signage', 'ChooseSettingsFile')
//				.addItem('Update Classes and Groups filename', 'SetTrigger')
//		)
//		.addToUi();
//}
//
//function instructionsDialogueBox() 		{ ClassesAndGroups.instructionsDialogueBox(); }
//function myFunction() 					{ ClassesAndGroups.myFunction(); }
//function ShowDeletePopup() 				{ ClassesAndGroups.ShowDeletePopup(); }
//function DeleteEvents(calendars_names) 	{ ClassesAndGroups.DeleteEvents(calendars_names); }
//function ShowExportPopup() 				{ ClassesAndGroups.ShowExportPopup(); }
//function ExportEvents(settings) 		{ ClassesAndGroups.ExportEvents(settings); }
//function ChooseSettingsFile() 			{ ClassesAndGroups.ChooseSettingsFile(); }
//function SetTrigger() 					{ ClassesAndGroups.SetTrigger(); }


// Manifest

//{
//  "timeZone": "America/Chicago",
//  "dependencies": {
//    "libraries": [{
//      "userSymbol": "ClassesAndGroups",
//      "libraryId": "1J8p7pQDIrJOnmt9MGWUB1KzIdj9bPnF6zs1KFRihw9T9nnSdVkbEQXIC",
//      "version": "48"
//    }]
//  },
//  "exceptionLogging": "STACKDRIVER"
//}
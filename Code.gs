var SCRIPT_NAME = 'Classes And Groups Script',
	SCRIPT_VERSION = 'v1.4';

function onOpen(e) {
	var ui = DocumentApp.getUi();

	ui.createMenu('CloudFire')
		.addItem('Read Instructions', 'instructionsDialogueBox') 
		.addItem('Format Text', 'myFunction')
		.addSeparator()
		.addSubMenu(
			ui.createMenu('Update Promotion Material')
				.addItem('Delete Future Calendar Events', 'ShowDeletePopup')
				.addItem('Push Events to Google Calendar', 'ShowExportPopup')
				.addItem('Download .json for INDD Classrooms Signage', 'ChooseSettingsFile')
				.addItem('Update Classes and Groups filename', 'SetTrigger')
		)
		.addToUi();
}

function instructionsDialogueBox() 		{ ClassesAndGroups.instructionsDialogueBox(); }
function myFunction() 					{ ClassesAndGroups.myFunction(); }
function ShowDeletePopup() 				{ ClassesAndGroups.ShowDeletePopup(); }
function DeleteEvents(calendars_names) 	{ ClassesAndGroups.DeleteEvents(calendars_names); }
function ShowExportPopup() 				{ ClassesAndGroups.ShowExportPopup(); }
function ExportEvents(settings) 		{ ClassesAndGroups.ExportEvents(settings); }
function ChooseSettingsFile() 			{ ClassesAndGroups.ChooseSettingsFile(); }
function SetTrigger() 					{ ClassesAndGroups.SetTrigger(); }
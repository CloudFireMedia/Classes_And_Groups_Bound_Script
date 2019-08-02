var SCRIPT_NAME = 'Classes And Groups Script',
	SCRIPT_VERSION = 'v1.5.dev_ajr';

function onOpen(e) {
	var ui = DocumentApp.getUi();

	ui.createMenu('CloudFire')
		.addItem('Read Instructions', 'instructionsDialogueBox') 
		.addItem('Format Text', 'formatDoc')
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

// Menu 
function instructionsDialogueBox() 		{ ClassesAndGroups.instructionsDialogueBox(); }
function formatDoc() 					{ ClassesAndGroups.formatDoc(); }
function ShowDeletePopup() 				{ ClassesAndGroups.ShowDeletePopup(); }
function ShowExportPopup() 				{ ClassesAndGroups.ShowExportPopup(); }
function ChooseSettingsFile() 			{ ClassesAndGroups.ChooseSettingsFile(); }
function SetTrigger() 					{ ClassesAndGroups.SetTrigger(); }

// Client-side
function ExportEvents(settings) 		{ ClassesAndGroups.ExportEvents(settings); }
function DeleteEvents(calendars_names) 	{ ClassesAndGroups.DeleteEvents(calendars_names); }

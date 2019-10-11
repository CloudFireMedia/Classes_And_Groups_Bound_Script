var SCRIPT_NAME = 'Classes And Groups Script';
var SCRIPT_VERSION = 'v1.5.dev_ajr';

function onOpen(e) {
  var ui = DocumentApp.getUi();
  
  ui.createMenu('CloudFire')
    .addItem('Read Instructions', 'instructionsDialogueBox') 
    .addItem('Format Text', 'formatDoc')
    .addSeparator()
    .addSubMenu(
      ui.createMenu('Update Promotion Material')
        .addItem('Delete Future Calendar Events',              'showDeletePopup')
        .addItem('Push Events to Google Calendar',             'showExportPopup')
        .addItem('Download .json for INDD Classrooms Signage', 'chooseSettingsFile')
        .addItem('Update Classes and Groups filename',         'setTrigger')
    )
    .addToUi();
}

// Menu 
// ----

function instructionsDialogueBox() 		{ ClassesAndGroups.instructionsDialogueBox(); }
function formatDoc() 					{ ClassesAndGroups.formatDoc(); }
function showDeletePopup() 				{ ClassesAndGroups.showDeletePopup(); }
function showExportPopup() 				{ ClassesAndGroups.showExportPopup(); }
function chooseSettingsFile() 			{ ClassesAndGroups.chooseSettingsFile(); }
function setTrigger() 					{ ClassesAndGroups.setTrigger(); }

// Client-side
// -----------

function deleteEvents(calendarsNames) 	{ ClassesAndGroups.deleteEvents(calendarsNames); }
function exportEvents(settings) 		{ ClassesAndGroups.exportEvents(settings); }

// Triggers
// --------

function changeFilename()               { ClassesAndGroups.changeFilename(); }
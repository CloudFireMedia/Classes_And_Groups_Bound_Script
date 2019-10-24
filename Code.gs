var SCRIPT_NAME = 'Classes And Groups Script';
var SCRIPT_VERSION = 'v1.5.dev_ajr';

function onOpen(e) {
  DocumentApp.getUi()
    .createMenu('CloudFire')
    .addItem('Format Text',                                  'formatDoc')
    .addItem('Delete Future Calendar Events',                'showDeletePopup')
    .addItem('Push Events to Google Calendar',               'showExportPopup')
    .addItem('Download .json for INDD Classrooms Signage',   'chooseSettingsFile')
    .addItem('Set trigger to update filename on title date', 'setTrigger')
    .addToUi();
}

// Menu 
// ----

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

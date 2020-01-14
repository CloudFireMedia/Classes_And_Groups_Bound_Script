var SCRIPT_NAME = 'Classes And Groups Bound Script';
var SCRIPT_VERSION = 'v1.7.1';

function onOpen(e) {
  DocumentApp.getUi()
    .createMenu('CloudFire')
      .addItem('Open instructions in user guide',              'showInstructions')
      .addItem('Format text',                                  'formatDoc')
      .addItem('Delete future calendar events',                'showDeletePopup')
      .addItem('Push events to Google Calendar',               'showExportPopup')
      .addItem('Download .json for INDD Classrooms Signage',   'chooseSettingsFile')
      .addItem('Set trigger to update filename on title date', 'setTrigger')
    .addToUi();
}

// Menu 
// ----

function showInstructions()   { ClassesAndGroups.showInstructions(); }
function formatDoc() 		  { ClassesAndGroups.formatDoc(); }
function showDeletePopup()    { ClassesAndGroups.showDeletePopup(); }
function showExportPopup()    { ClassesAndGroups.showExportPopup(); }
function chooseSettingsFile() { ClassesAndGroups.chooseSettingsFile(); }
function setTrigger()         { ClassesAndGroups.setTrigger(); }

// Client-side
// -----------

function deleteEvents(calendarsNames) { return ClassesAndGroups.deleteEvents(calendarsNames); }
function exportEvents(settings) { return ClassesAndGroups.exportEvents(settings); }

// Triggers
// --------

function changeFilename() { ClassesAndGroups.changeFilename(); }

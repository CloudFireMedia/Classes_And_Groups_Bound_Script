function instructionsDialogueBox() {
	ui.alert("INSTRUCTIONS:\n\nBefore any of the tasks below, run '[ Format Text ]' in the menu above.\n\nTo update INDD Booklet:\n- Format this document with the proper Menu Styles (Heading 1-6) - Open 'Booklet.indd'\n- Right click link 'New Classes and Groups' -> Update Link\n- Manually format the body text for printing\n- Manually update the cover text and colors to match the current season (Fall, Winter, etc.)\n- Copy the manually edited text back into this Google doc and 'Format'\n\nTo update INDD Classroom Signage:\n- In the main menu for this Google Document, click [ Automation ] -> Download .json for INDD Classroom Signage\n- Enter URL from ‘Classroom Signage Quantities’ Google Spreadsheet\n- Open ‘Classroom Signage Template’ INDD doc\n- Run Srcipts -> User -> ‘Update Classroom Signage’\n- Choose ‘New Classes and Groups Info.json in Google Drive home folder\n- Export ‘Classroom Signage Template’ to PDF \n- Exit without saving. DO NOT SAVE ‘Classroom Signage Template’. \n\nTo update Google Calendar: \n- In the main menu for this Google Document, click [ Automation ] -> Push to Google Calendar\n- Delete any events (such as Sunday School) that are 'too much' and overload the web calendar");
}
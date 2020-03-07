/*** return sheet names for active document
 * @customfunction
 * source: https://support.google.com/docs/thread/14213575?hl=en
 */
function sheetnames() {return SpreadsheetApp.getActiveSpreadsheet().getSheets().map(function(x) {return x.getName();});}


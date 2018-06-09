/**
 * Retrieves all the rows in the active spreadsheet that contain data and logs the
 * values for each row.
 * For more information on using the Spreadsheet API, see
 * https://developers.google.com/apps-script/service_spreadsheet
 */
//function readRows() {
//  var sheet = SpreadsheetApp.getActiveSheet();
//  var rows = sheet.getDataRange();
//  var numRows = rows.getNumRows();
//  var values = rows.getValues();
//
//  for (var i = 0; i <= numRows - 1; i++) {
//    var row = values[i];
//    Logger.log(row);
//  }
//};

/**
 * Adds a custom menu to the active spreadsheet, containing a single menu item
 * for invoking the readRows() function specified above.
 * The onOpen() function, when defined, is automatically invoked whenever the
 * spreadsheet is opened.
 * For more information on using the Spreadsheet API, see
 * https://developers.google.com/apps-script/service_spreadsheet
 */
//function onOpen() {
//  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
//  var entries = [{
//    name : "Read Data",
//    functionName : "readRows"
//  }];
//  spreadsheet.addMenu("Script Center Menu", entries);
//};

//function addCheckboxes () {
////  var sheet = SpreadsheetApp.getActiveSpreadsheet();
////  var r = sheet.getRange(2,1,sheet.getLastRow());
////  var data = dataRange.getValues();
////  for (i in data) {
////    if (sheet.
//  var app = UiApp.createApplication().setTitle('hi');
//   var sheet = SpreadsheetApp.getActiveSheet();
//  var rows = sheet.getDataRange();
//  for (var i=1; i<= rows.getNumRows();i++)
//  {
//    var c = rows.getCell(i, 1);
//   var cBox = app.createCheckBox().setId('yourId').setText("in cart");
//    c.add(cBox);
//  }
//};



function onChange(e){
  zipList();
  // SpreadsheetApp.getActiveSpreadsheet().toast(e + ' onchange', 'Status');
  //zipList();
//  
  //Logger.log(e+"onChange event fired");
  //zipList();
//   //SpreadsheetApp.getActiveSpreadsheet().getCell(2, 2).setValue("here");
//  //SpreadsheetApp.getActiveSheet().getRange('F2').setValue('Hello');
//
//    //var ss = SpreadsheetApp.getActiveSpreadsheet();
//  var ss = e.source;
//    var cell = ss.getActiveSheet().getActiveCell();
//  ss.toast("got cell:" + cell.getA1Notation());
//  var inCart=false;
//  var t= cell.getFontWeight();
//  if (cell.getFontWeight()=="bold")
//    inCart=true;
//  SpreadsheetApp.getActiveSpreadsheet().toast(inCart);
//  
}

function zipList()
{
  
    var inEditBlock=  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1, 1).getValue()=="busy";
  if (!inEditBlock)
//  {
//    SpreadsheetApp.getActiveSpreadsheet().toast("Block!");
//    return;
//  }
//  else
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1, 1).setValue("busy");
  
  
  //loop over spreadsheet, and change the values
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var t=SpreadsheetApp.getActiveSpreadsheet();
 
  var lr = ss.getLastRow()+1;
  
  //t.toast(ss.getActiveCell().getA1Notation());
  
  for (var i=2; i<lr; i++)
  {
    if (ss.getRange("B"+i).getValue()=="")
      ss.getRange("A"+i).setValue("");
    else    if (ss.getRange("B"+i).getFontWeight()=="bold")
    {
      ss.getRange("A"+i).setValue("Yes");
    }
    else
      ss.getRange("A"+i).setValue("No");
    
  }
  
  //sort ... by in cart (at bottom), Store, then by product
  ss.getRange("A2:Z"+lr).sort([{column: 1,asending:true}, {column:3}, {column:2}]);
  //range.sort([{column: 3, ascending: false},{column: 2, ascending: false}, {column: 1, ascending: false}]);
  
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1, 1).setValue("inCart");
}

  
 
////var inEditBlock =false;
//function onEdit(e)
//{
//  var inEditBlock=  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1, 1).getValue()=="busy";
//  if (inEditBlock)
//  {
//    SpreadsheetApp.getActiveSpreadsheet().toast("Block!");
//    return;
//  }
//  else
//    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1, 1).setValue("busy");
//  
//  var ss = e.source;
//  var t=SpreadsheetApp.getActiveSpreadsheet();
//  // Logger.log(e);
//  
//  if (e.range=="Range")
//  {
//    //need to convert Range to cells
//    var i = e.range.getRow();
//      //t.toast(i);
//
//    
//    if (e.value===undefined)
//      ss.getRange("A"+i).setValue("");
//    else    if (e.range.getFontWeight()=="bold")
//    {
//      ss.getRange("A"+i).setValue("Yes");
//    }
//    else
//      ss.getRange("A"+i).setValue("No");
//  
//    ss.getRange("A2:Z"+ss.getLastRow()).sort([{column: 1,asending:true}, {column:3}, {column:2}]);
//  }
//  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1, 1).setValue("inCart");
//}
function scrapePresoDataThenSendToSpreadsheet() {
  
  // Open a spreadsheet by ID.
  var sheetId = 'XXXXXXXXXXXXXXXXXX'
  var ss = SpreadsheetApp.openById(sheetId);
  var sheetName = ss.getSheetByName("RoadmapExport");
  
  // Open a presentation by ID.
  var presoId = 'YTYYYYYYYYYYYYYYYY'
  var preso = SlidesApp.openById(presoId);
  
  var slides = preso.getSlides();  // returns an array of Slide Object data
      
  var numSlides = slides.length  // get the length of the array
  
  // loop thru the array of Slide Objects and grab the Shapes
  var i;
  for (i = 6; i < numSlides; i++) {

    var slideNumber = i+1;
    var objectId = slides[i].getObjectId();
    var slideURL = 'https://docs.google.com/presentation/d/' + presoId + '/edit#slide=id.' + objectId;    

    // loop thru the slide and grab the sheets / textRange / text
    var pageShapes = slides[i].getShapes();
    var text = ''
    
    var j;
    for (j = 0; j < pageShapes.length; j++) {
      
      // https://developers.google.com/apps-script/reference/slides/shape#getText()
      // https://developers.google.com/apps-script/reference/slides/text-range#asString()
      
      try {
        text += pageShapes[j].getText().asString() + '\n' ; 
      }
      catch(err) {
        //do nothing  -- Exception: Page element is not of type shape.
      }
    }  
    
    // transform the slide text to be more easy to read
    // https://www.w3schools.com/jsref/jsref_replace.asp
    
    var slideText = text;
    slideText = slideText.replace('SLACK CONFIDENTIAL', '');
    slideText = slideText.replace('\n\n\n\n\n\n\n\n', '\n');
    slideText = slideText.replace('\n\n\n\n\n\n\n', '\n');
    slideText = slideText.replace('\n\n\n\n\n\n', '\n');
    slideText = slideText.replace('\n\n\n\n\n', '\n');
    slideText = slideText.replace('\n\n\n\n', '\n');
    slideText = slideText.replace('\n\n\n', '\n');
     
    // add a row to the sheet and include 3 columns
    sheetName.appendRow([slideNumber, slideText, slideURL])
    
  }
}
  


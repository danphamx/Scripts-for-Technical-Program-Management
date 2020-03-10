/************************************************************************
 *
 * Gets the last row number based on a selected column range values
 * Author is: https://yagisanatode.com/2019/05/11/google-apps-script-get-the-last-row-of-a-data-range-when-other-columns-have-content-like-hidden-formulas-and-check-boxes/
 *
 * @param {array} range : takes a 2d array of a single column's values
 *
 * @returns {number} : the last row number with a value. 
 *
 * Note: If using this within code.gs, use getRange.getValues()
 *
 */ 

function getLastRowSpecial(range){
  var rowNum = 0;
  var blank = false;
  for(var row = 0; row < range.length; row++){

    if(range[row][0] === "" && !blank){
      rowNum = row;
      blank = true;

    }else if(range[row][0] !== ""){
      blank = false;
    };
  };
  return rowNum;
};

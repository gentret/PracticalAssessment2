/*********************************************************************
 *                Calculator: A JavaScript Implementation            *
 * PLEASE DO NOT MODIFY THE CODE THE SECTION LABELED AS UNMODIFIABLE *
 * CIS 5620: Authoring Websites                                      *
 *********************************************************************/

/* 
  Avoid creating global variables by implementing all the application
  inside an Immediately Invoked Function Expression (IIFE).
*/
(() => {

  /******************************************
   *          UNMODIFIABLE SECTION          *
   * DO NOT MODIFY THE CODE IN THIS SECTION *
   ******************************************/

  /**
  Add event listeners to each operator button in the interface.

  @returns No value.
  */
  function addCalculatorListeners() {
    for (let calcFunction of [clear, add, substract, multiply, divide, calculate]) {
      const control = document.querySelector("#" + calcFunction.name);
      control.addEventListener('click', calcFunction);
    }
  }

  // Add event listeners
  addCalculatorListeners();

  /******************************************
   *       END OF UNMODIFIABLE SECTION      *
   ******************************************/  
 $('#operand').prop('type', 'number'); // Change input type to number... better to use keypress event:

// This code was appropriated from stackexchange, but I'll leave it commented since I didn't write it. //
// Sure did work nicely, though.
//
// document.querySelector("#operand").addEventListener("keypress", function (e) {
//  var allowedChars = '0123456789.';
//  function contains(stringValue, charValue) {
//      return stringValue.indexOf(charValue) > -1;
//  }
//  var invalidKey = e.key.length === 1 && !contains(allowedChars, e.key)
//          || e.key === '.' && contains(e.target.value, '.');
//  invalidKey && e.preventDefault();});
/////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Initialize values to hold input/function data
  let prevValue = 0;
  let funcValue = '';

  // Function to validate data presence prior to calculating.
  function checkStat() {
    if(prevValue != 0 && funcValue != '') {
      return true;
    }
    return false;
  }

 /**
  Resets the calculator to its initial state.

  @returns No value.
  */  
  function clear() {
    $('#operand').val('');
    prevValue = 0;
    console.log("CLEAR");
  }

 /**
  Performs the addition operation.

  @returns No value.
  */
  function add() {
    if(checkStat) {calculate();};
    prevValue = $('#operand').val();
    funcValue = '+';
  }

 /**
  Performs the substraction operation.

  @returns No value.
  */  
  function substract() {
    if(checkStat) {calculate();};
    prevValue = $('#operand').val();
    funcValue = '-';
  }

 /**
  Performs the multiplication operation.

  @returns No value.
  */    
  function multiply() {
    if(checkStat) {calculate();};
    prevValue = $('#operand').val();
    funcValue = '*';
  }

 /**
  Performs the division operation.

  @returns No value.
  */    
  function divide() {
    if(checkStat) {calculate();};
    prevValue = $('#operand').val();
    funcValue = '/';
  }

 /**
  Handles the "=" operator.

  @returns No value.
  */    
  function calculate() {
    curValue = $('#operand').val();
    let newVal = 0;
    switch(funcValue) {
      case '+':
        newVal = parseFloat(prevValue) + parseFloat(curValue);
        break;
      case '-':
        newVal = parseFloat(prevValue) - parseFloat(curValue);
        break;
      case '*':
        newVal = parseFloat(prevValue) * parseFloat(curValue);
        break;
      case '/':
        newVal = parseFloat(prevValue) / parseFloat(curValue);
    }
    if(checkStat()) { // To prevent things going awry if a user clicks "=" before entering any values/functions
      $('#operand').val(newVal);
      console.log("CALCULATE " + prevValue + funcValue + curValue);
      $('#operand').focus();
    }
    prevValue = 0;
    funcValue = '';
    $('#operand').focus();
    $('#operand').select();
  };
})();
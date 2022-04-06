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

 /**
  Resets the calculator to its initial state.

  @returns No value.
  */  
  function clear() {
    console.log("CLEAR");
  }

 /**
  Performs the addition operation.

  @returns No value.
  */
  function add() {
    console.log("ADD");

  }

 /**
  Performs the substraction operation.

  @returns No value.
  */  
  function substract() {
    console.log("SUBSTRACT");
  }

 /**
  Performs the multiplication operation.

  @returns No value.
  */    
  function multiply() {
    console.log(" MULTIPLY");
  }

 /**
  Performs the division operation.

  @returns No value.
  */    
  function divide() {
    console.log("DIVIDE");
  }

 /**
  Handles the "=" operator.

  @returns No value.
  */    
  function calculate() {
    console.log("CALCULATE");

  }

})();
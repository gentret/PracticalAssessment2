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

  function addCalculatorListeners() {
    for (let calcFunction of [clear, add, substract, multiply, divide, calculate]) {
      const control = document.querySelector("#" + calcFunction.name);
      control.addEventListener('click', calcFunction);
    }
  }

  addCalculatorListeners();
  /******************************************
   *       END OF UNMODIFIABLE SECTION      *
   ******************************************/  

  let operand1;

  function clear() {
    console.log("CLEAR");
  }

  function add() {
    console.log("ADD");

    operand1 = document.querySelector("#operand").value;  
    document.querySelector("#operand").value = "";
  }

  function substract() {
    console.log("SUBSTRACT");
  }

  function multiply() {
    console.log(" MULTIPLY");
  }

  function divide() {
    console.log("DIVIDE");
  }

  function calculate() {
    console.log("CALCULATE");

    let operand2 = document.querySelector("#operand").value;

    document.querySelector("#operand").value =
      parseInt(operand1) + parseInt(operand2);



  }

})();
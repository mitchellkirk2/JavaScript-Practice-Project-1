const defaultResult = 0;
let currentResult = defaultResult;

//Gets input from input field
function getUserNumberInput(){
    return parseInt(userInput.value);
}

//Writes the calculation that is occuring to the log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription); //from vendor file
}

//adds the user input to the current result
function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + parseInt(enteredNumber);
    createAndWriteOutput('+', initialResult, enteredNumber);
}

//subtracts the user input from the current result
function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - parseInt(enteredNumber);
    createAndWriteOutput('-', initialResult, enteredNumber);
}

//multiplies the user input by the current result
function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * parseInt(enteredNumber);
    createAndWriteOutput('*', initialResult, enteredNumber);
}

//divides the user input by the current result
function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / parseInt(enteredNumber);
    createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
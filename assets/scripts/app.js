const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return +userInput.value;
}

function createAdnWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}
function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  // currentResult = currentResult + parseInt(userInput.value);
  currentResult += enteredNumber;
  createAdnWriteOutput('+', initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAdnWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAdnWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  if (enteredNumber !== 0) {
    currentResult /= enteredNumber;
    createAdnWriteOutput('/', initialResult, enteredNumber);
  } else { outputResult(currentResult, 'Divide by 0 not allowed')}
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


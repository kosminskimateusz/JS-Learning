const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  const calcDescription = `${currentResult} + ${userInput.value}`;
  // currentResult = currentResult + parseInt(userInput.value);
  currentResult = currentResult + +userInput.value;
  outputResult(currentResult, calcDescription);
  console.log("OK");
}

addBtn.addEventListener('click', add);


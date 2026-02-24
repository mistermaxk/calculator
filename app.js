/* Calculator @mistermaxk 2026 */
let currentNum = 0;
let operandA = 0;
let operandB = null
let operator = null;
let nextOp = null;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        updateDisplay("Division by 0 is a no");
        return 0;
    }
    return a / b;
}

function equals() {
    if (String(operandA).length > 20) {
        operandA = Number(operandA).toFixed(18);
    }
    updateDisplay(operandA);
}

function operate(op) {
    let result = 0;
    let opA = Number(operandA);
    let opB = Number(operandB);
    switch (op) {
        case "+":
            result = add(opA, opB);
            break;
        case "-":
            result = subtract(opA, opB);
            break;
        case "x":
            result = multiply(opA, opB);
            break;
        case "&#247":
        case "÷":
            result = divide(opA, opB);
            break;
        case "=":
            equals();
            break;
    }
    if (operator !== "=") operandA = result;
    operandB = null;
    operator = nextOp;
    nextOp = null;
}

function storeOperator(entry) {
    if (operandA === 0 && operandB === null && currentNum !== null) {
        operator = entry;
        operandA = currentNum;
    } else if (operandB === null && operator !== null && nextOp === null) {
        operandB = currentNum;
        nextOp = entry;
        operate(operator);
        equals();
    } 
    if (operator === "=") {
        currentNum = operandA;
    } else {
        currentNum = null;
    }
}

function storeNumberToDisplay(entry) {
    if (currentNum === 0 && entry === ".") {
        currentNum += entry;
    } else if (currentNum === 0 || currentNum === null) {
        currentNum = entry;
    } else if (currentNum[0] === "0" && entry === "0") {
        currentNum = 0;
    } else {
        if (!(currentNum.includes(".") && entry === "."))  {
            currentNum += entry;
        } 
    }
    updateDisplay(currentNum);
}

function clear() {
    currentNum = 0;
    operandA = 0;
    operandB = null;
    operator = null;
    nextOp = null;
    updateDisplay(currentNum);
}

const display = document.querySelector("#display");
function updateDisplay(toDisplay) {
    display.textContent = toDisplay;
}

const numeralsBtn = document.querySelector(".numerals");
numeralsBtn.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
        storeNumberToDisplay(e.target.textContent)
    }
});

const operatorsBtn = document.querySelector(".operators");
operatorsBtn.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
        storeOperator(e.target.textContent);
    }
});

const auxiliaryBtn = document.querySelector(".auxiliary");
auxiliaryBtn.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
        if (e.target.textContent === "&#171;" || e.target.textContent === "«") {
            currentNum = currentNum.split("").splice(0, currentNum.length - 1).join("");
            updateDisplay(currentNum);
        } else if (e.target.textContent == "CLEAR") {
            clear();
        }
    }
});
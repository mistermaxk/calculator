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
        // add timer to implement properly
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
        case "add":
            result = add(opA, opB);
            break;
        case "subtract":
            result = subtract(opA, opB);
            break;
        case "multiply":
            result = multiply(opA, opB);
            break;
        case "divide":
            result = divide(opA, opB);
            break;
        case "equals":
            equals();
            break;
    }
    if (operator !== "equals") operandA = result;
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
    if (operator === "equals") {
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
let selectedOpID = null;
let prevSelectedOp = null;
operatorsBtn.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
        if (selectedOpID !== null) {
            prevSelectedOp = document.getElementById(selectedOpID);
            prevSelectedOp.style.backgroundImage = "linear-gradient(to bottom, #fce40d, transparent)";
            prevSelectedOp.style.backgroundColor = "rgb(244, 186, 25)";
            }
        selectedOpID = e.target.id;
        e.target.style.backgroundImage = "linear-gradient(to bottom, transparent, #f6d623)";
        e.target.style.backgroundColor = "rgb(231, 116, 9)";
        storeOperator(selectedOpID);
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
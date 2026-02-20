/* Calculator @mistermaxk 2026 */
let currentNum = 0;
let operator = null;
let operandA = 0;
let operandB = 0;

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

function equals(result) {
    if (String(result).length > 20) {
        result = Number(result).toFixed(18);
    }
    updateDisplay(result);
}

function operate(op) {
    switch (op) {
        case "+":
            add(operandA, operandB);
            break;
        case "-":
            subtract(operandA, operandB);
            break;
        case "x":
            multiply(operandA, operandB);
            break;
        case "&#247":
        case "÷":
            divide(operandA, operandB);
            break;
        case "=":
            equals();
            break;
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

function storeOperator(entry) {

}

function clear() {
    currentNum = 0;
    operandA = 0;
    operandB = 0;
    operator = null;
    updateDisplay(0);
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
/* Calculator
   Max K @mistermaxk 2026 */
let operandA = 0;
let operandB = 0;
let operator = "";

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
    return a / b;
}

function operate(operandA, operandB, operator) {
    return operator(operandA, operandB);
}

const display = document.querySelector("#display");

const numeralsBtn = document.querySelector(".numerals");
numeralsBtn.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
        operandA = Number(e.target.textContent);
        display.textContent = operandA;
    }
});

const operatorsBtn = document.querySelector(".operators");
operatorsBtn.addEventListener("click", (e) => {
    console.log(e.target.textContent);
});

const auxiliaryBtn = document.querySelector(".auxiliary");
auxiliaryBtn.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    console.log(e)
});
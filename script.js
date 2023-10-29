let displayValue = "0";

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function appendToDisplay(value) {
    if (displayValue === "0") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById("result").value = displayValue;
}

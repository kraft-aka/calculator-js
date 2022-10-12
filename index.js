class Caluclator {
  constructor(previousNumberText, currentNumber) {
    this.previousNumberText = previousNumberText;
    this.currentNumberText = currentNumberText;
    this.clear();
  }

  clear() {
    this.currentValue = "";
    this.previousValue = "";
    this.operation = undefined;
  }

  delete() {
    this.currentValue = this.currentValue.toString().slice(0, -1);
  }

  appendNumberItem(num) {
    if (num === "." && this.currentValue.includes(".")) return;
    this.currentValue = this.currentValue + num;
  }

  chooseOperation(operation) {
    if (this.currentValue === "") return;
    if (this.previousValue !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousValue = this.currentValue;
    this.currentValue = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousValue);
    const current = parseFloat(this.currentValue);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;

      case "x":
        computation = prev * current;
        break;

      case "/":
        computation = prev / current;
        break;

      default:
        return;
    }
    this.currentValue = computation;
    this.operation = undefined;
    this.previousValue = "";
  }

  updateDisplay() {
    this.currentNumberText.innerText = this.currentValue;
    this.previousNumberText.innerText = this.previousValue;
  }

  operation() {}
}

// init variables from DOM elements
const numberKeys = document.querySelectorAll("[data-number]");
const operationKeys = document.querySelectorAll("[data-operation]");
const equalKey = document.querySelector("[data-equal]");
const deleteKey = document.querySelector("[data-clear]");
const clearDisplayKey = document.querySelector("[data-clear-display]");
const numnberDisplay = document.querySelector("[data-display]");
const previousNumberText = document.querySelector("[data-previous-number]");
const currentNumberText = document.querySelector("[data-current-number]");

// init the object Calculator
const calculator = new Caluclator(previousNumberText, currentNumberText);

// gets number keys
numberKeys.forEach((key) =>
  key.addEventListener("click", () => {
    calculator.appendNumberItem(key.innerText);
    calculator.updateDisplay();
  })
);

// gets operation keys
operationKeys.forEach((key) =>
  key.addEventListener("click", () => {
    calculator.chooseOperation(key.innerText);
    calculator.updateDisplay();
  })
);

// gets equal key
equalKey.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

// gets clear screen key
clearDisplayKey.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

// gets delete key
deleteKey.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});

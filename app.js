const main = document.querySelector("main");

const circle1 = document.querySelector(".circle-1");
const circle2 = document.querySelector(".circle-2");
const circle3 = document.querySelector(".circle-3");
const theme1 = document.querySelector(".theme-1");
const theme2 = document.querySelector(".theme-2");
const theme3 = document.querySelector(".theme-3");

const resultContainer = document.querySelector(".result-container"); //but this only gets the first one

const keys = document.querySelectorAll(".keys");
const calc = document.querySelector(".calc");

//FUNCTIONS
keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const key = e.target;
    const keyValue = key.textContent;
    const displayValue = resultContainer.textContent;
    const { type } = key.dataset;
    const { previousKeyType } = calc.dataset;

    if (type === "number")
      if (displayValue === "0") {
        //if there is a 0 in the displayContainter print the keyValue
        resultContainer.textContent = keyValue;
        //but what if we click an operator? we don't want it to display
        //and we want to remove numbers that are there and replace
        //with just the new number
      } else if (previousKeyType === "operator") {
        resultContainer.textContent = keyValue;
      } else {
        resultContainer.textContent = displayValue + keyValue;
        //this will concatonate the numbers not add them
      }

    if (type === "operator") {
      calc.dataset.firstNumber = displayValue;
      calc.dataset.operator = key.dataset.key; //the first key here
      //is e.target
    }
    if (type === "equal") {
      //must get firstNumber from after we click an operator
      const firstNumber = Number(calc.dataset.firstNumber);
      const operator = calc.dataset.operator;
      const secondNumber = Number(displayValue);
      //console.log(firstNumber, operator, secondNumber);

      let result = "";
      if (operator === "plus") {
        result = firstNumber + secondNumber;
      }
      if (operator === "minus") {
        result = firstNumber - secondNumber;
      }
      if (operator === "divide") {
        result = firstNumber / secondNumber;
      }
      if (operator === "multiply") {
        result = firstNumber * secondNumber;
      }
      resultContainer.textContent = result;
    }

    if (type === "reset") {
      resultContainer.textContent = "0";
    }

    if (type === "delete") {
      resultContainer.textContent = "0";
    }
    calc.dataset.previousKeyType = type;
  });
});

//EVENT LISTENERS
window.addEventListener("DOMContentLoaded", () => {
  theme1.style.display = "block";
});

circle1.addEventListener("click", () => {
  console.log("clicked");
  main.classList.remove("theme-1");
  main.classList.add("theme-2");
});

circle2.addEventListener("click", () => {
  main.classList.remove("theme-2");
  main.classList.add("theme-3");
});

circle3.addEventListener("click", () => {
  main.classList.remove("theme-3");
  main.classList.add("theme-1");
});

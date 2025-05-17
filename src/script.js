let btns = document.querySelectorAll("button");
let output = document.querySelector(".output");
let display = document.querySelector(".display");
let str = "";
const operators = ["+", "-", "*", "/"];
  
const backspaceBtn = document.querySelector(".back");

backspaceBtn.addEventListener("click", () => {
  // Remove the last character from your string
  str = str.slice(0, -1);
  // Update your display
  display.innerText = str;
  output.innerText = "";
});


btns.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;
    console.log(value);


    if (value === "x2") {
      square(str);
    } else if (value === "√x") {
      sqrt(str);
    } else if (value === "1/x") {
      inverse(str);
    } else if (value === "=") {
      calculate();
    } else if (value === "C") {
      str = "";
      output.innerText = "";
      display.innerText = "";
    }else if (value === "CE") {
  // Remove last number entered (after last operator)
  let parts = str.split(/([\+\-\*\/])/); 
  if (parts.length > 0) {
    parts.pop(); 
    if (parts.length > 0 && /[\+\-\*\/]/.test(parts[parts.length - 1])) {
      parts.pop(); 
    }
  }

  str = parts.join("");
  display.innerText = str;
  output.innerText = "";
}  else {
      const lastChar = str[str.length - 1];
      const isCurrentOperator = operators.includes(value);
      const isLastCharOperator = operators.includes(lastChar);

      if (isCurrentOperator && isLastCharOperator) {
        return; 
      }
      if (value === ".") {
    let lastNumber = str.split(/[\+\-\*\/]/).pop();
    if (lastNumber.includes(".")) {
      return;
    }
  }
  str += value;
  display.innerText = str;
}
});
});


function square(num) {
  str = Math.pow(parseFloat(num), 2).toString();
  output.innerText = str;
}
function sqrt(num) {
  str = Math.sqrt(parseFloat(num)).toString();
  output.innerText = str;
}
function inverse(num) {
  str = (1 / parseFloat(num)).toString();
  output.innerText = str;
}
function calculate() {
  try {
    str = eval(str).toString();
    output.innerText = str;
     }catch (error) {
    output.innerText = "Error";
    str = "";
  }
}

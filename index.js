const display = document.getElementById("display");
let typingStarted = false;

function appendToDisplay(char) {
  if (!typingStarted) {
    display.value = "";
    typingStarted = true;
  }
  display.value += char;
}

function calculate() {
  let result;
  try {
    result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
  typingStarted = false;
}

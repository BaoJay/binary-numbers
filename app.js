// set Document Object for the element
// with ID of inputNum
const inputNum = document.querySelector("#inputNum");
const blockquote = document.querySelector(".blockquote");

// Function that displays 0 or 1 in HTML
const binary = (num) => {
  const span = document.createElement("span");
  span.innerText = num;
  blockquote.appendChild(span);
};

// Recursion function
const binaryPlace = (num, pos) => {
  if (pos == 0) {
    num >= Math.pow(2, 0) ? binary(1) : binary(0);
    num = num % Math.pow(2, 0);
  } else {
    num >= Math.pow(2, pos) ? binary(1) : binary(0);
    num = num % Math.pow(2, pos);
    binaryPlace(num, pos - 1);
  }
};

inputNum.addEventListener("change", (e) => {
  // Empty display whether the value is changed
  blockquote.innerHTML = "";
  let n = inputNum.value;
  binaryPlace(n, 19);
});

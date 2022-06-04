const inputNum = document.querySelector("#inputNum");
const d1 = document.querySelector("#d1");
const d2 = document.querySelector("#d2");
const d3 = document.querySelector("#d3");
const d4 = document.querySelector("#d4");
const d5 = document.querySelector("#d5");
const d6 = document.querySelector("#d6");
const d7 = document.querySelector("#d7");
const d8 = document.querySelector("#d8");

inputNum.addEventListener("change", (e) => {
  let n = inputNum.value;
  // So sánh với 128
  if (n >= 128) {
    d1.innerText = "1";
    n = n % Math.pow(2, 7);
  } else {
    d1.innerText = "0";
  }
  // So sánh với 64
  if (n >= 64) {
    d2.innerText = "1";
    n = n % Math.pow(2, 6);
  } else {
    d2.innerText = "0";
  }
  // So sánh với 32
  if (n >= 32) {
    d3.innerText = "1";
    n = n % Math.pow(2, 5);
  } else {
    d3.innerText = "0";
  }
  // So sánh với 16
  if (n >= 16) {
    d4.innerText = "1";
    n = n % Math.pow(2, 4);
  } else {
    d4.innerText = "0";
  }
  // So sánh với 8
  if (n >= 8) {
    d5.innerText = "1";
    n = n % Math.pow(2, 3);
  } else {
    d5.innerText = "0";
  }
  // So sánh với 4
  if (n >= 4) {
    d6.innerText = "1";
    n = n % Math.pow(2, 2);
  } else {
    d6.innerText = "0";
  }
  // So sánh với 2
  if (n >= 2) {
    d7.innerText = "1";
    n = n % Math.pow(2, 1);
  } else {
    d7.innerText = "0";
  }
  // So sánh với 1
  if (n >= 1) {
    d8.innerText = "1";
  } else {
    d8.innerText = "0";
  }
});

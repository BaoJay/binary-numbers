const inputNum = document.querySelector("#inputNum");
const d0 = document.querySelector("#d0");
const d1 = document.querySelector("#d1");
const d2 = document.querySelector("#d2");
const d3 = document.querySelector("#d3");
const d4 = document.querySelector("#d4");
const d5 = document.querySelector("#d5");
const d6 = document.querySelector("#d6");
const d7 = document.querySelector("#d7");

inputNum.addEventListener("change", (e) => {
  let n = inputNum.value;

  // So sánh với 128
  n >= 128 ? (d7.innerText = "1") : (d7.innerText = "0");
  n = n % Math.pow(2, 7);
  // So sánh với 64
  n >= 64 ? (d6.innerText = "1") : (d6.innerText = "0");
  n = n % Math.pow(2, 6);
  // So sánh với 32
  n >= 32 ? (d5.innerText = "1") : (d5.innerText = "0");
  n = n % Math.pow(2, 5);
  // So sánh với 16
  n >= 16 ? (d4.innerText = "1") : (d4.innerText = "0");
  n = n % Math.pow(2, 4);
  // So sánh với 8
  n >= 8 ? (d3.innerText = "1") : (d3.innerText = "0");
  n = n % Math.pow(2, 3);
  // So sánh với 4
  n >= 4 ? (d2.innerText = "1") : (d2.innerText = "0");
  n = n % Math.pow(2, 2);
  // So sánh với 2
  n >= 2 ? (d1.innerText = "1") : (d1.innerText = "0");
  n = n % Math.pow(2, 1);
  // So sánh với 1
  n >= 1 ? (d0.innerText = "1") : (d0.innerText = "0");
  n = n % Math.pow(2, 0);
});

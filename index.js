const btnCalc = document.querySelector("[data-js=btn-calc]");

btnCalc.addEventListener("click", () => {
  const num1 = document.querySelector("[data-js=num1]").value;
  const num2 = document.querySelector("[data-js=num2]").value;
  console.log(typeof num1);
  const result = Number(num1) + Number(num2);
  document.querySelector("[data-js=result]").innerText = result;
});

const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", () => {
  const allPrices = document.querySelectorAll(".prices");
  let sum = 0;

  allPrices.forEach(el => {
    sum += Number(el.innerText);
  });

  document.getElementById("ans").innerText = sum;
});

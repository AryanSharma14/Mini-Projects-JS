const BaseUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".select-container select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amountInput = document.querySelector("form input");
  let amtVal = amountInput.value;

  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amountInput.value = "1";
  }

  const URL = `${BaseUrl}/${fromCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let fromCurrency = fromCurr.value.toLowerCase();
  let toCurrency = toCurr.value.toLowerCase();
  let rate = data[fromCurrency][toCurrency];

  let finalAmt = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt.toFixed(2)} ${toCurr.value}`;
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

window.addEventListener("load", () => {
  updateExchangeRate();
});

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});




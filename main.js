let priceMap = {
  1: ["10K", "$8.00", "$6.00"],
  2: ["50K", "$12.00", "$9.00"],
  3: ["100K", "$16.00", "$12.00"],
  4: ["500K", "$24.00", "$18.00"],
  5: ["1M", "$35.00", "$26.25"],
};

function setPrice(value) {
  let pageViewElment = document.getElementById("page-view");
  let amountElement = document.getElementById("amount");
  let switchElement = document.querySelector(".discount-switch");

  pageViewElment.textContent = priceMap[value][0];

  if (switchElement.checked) {
    amountElement.textContent = priceMap[value][2];
  } else {
    amountElement.textContent = priceMap[value][1];
  }
}

document.getElementById("range-pageview").oninput = function () {
  const value = ((this.value - this.min) / (this.max - this.min)) * 100;
  //console.log(value);
  sliderTrackBackground =
    "linear-gradient(to right, hsl(174, 77%, 80%) " +
    value +
    "%, hsl(224, 65%, 95%) " +
    value +
    "%, hsl(224, 65%, 95%) 100%";
  //console.log(aBackground);
  this.style.background = sliderTrackBackground;
  //console.log(this.style.background);

  //set the pageview and amount
  setPrice(this.value);
};

let switchElement = document.querySelector(".discount-switch");

switchElement.addEventListener("change", () => {
  rangeElement = document.getElementById("range-pageview");
  setPrice(rangeElement.value);
});

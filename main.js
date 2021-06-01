let priceMap = {
  1: ["10K", "$8"],
  2: ["50K", "$12"],
  3: ["100K", "$16"],
  4: ["500K", "$24"],
  5: ["1M", "$35"],
};

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
  document.getElementById("page-view").textContent = priceMap[this.value][0];
  document.getElementById("amount").textContent = priceMap[this.value][1];
};

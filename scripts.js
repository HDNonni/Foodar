let bannerArray = [
  '<img src="images/banner11.jpeg" width="100%" height="80" class="changeBanner" />',
  '<img src="images/banner22.jpeg" width="100%" height="80" class="changeBanner" />',
  '<img src="images/banner33.jpeg" width="100%" height="80" class="changeBanner" />'
];

let currentBannerIndex = 0;
function rotateBanner() {
  let bannerElement = document.getElementById("banner");
  let currentBanner = bannerArray[currentBannerIndex];

  bannerElement.innerHTML = currentBanner;
  currentBannerIndex = currentBannerIndex + 1;

  if (currentBannerIndex === bannerArray.length) {
    currentBannerIndex = 0;
  }
}

//setInterval(rotateBanner, 5000);
function stopBanner() {
  let stopBannerEvent = document.getElementById("closeBanner");
  stopBannerEvent.addEventListener("click", function() {
    clearInterval("banner");
  });
  console.log("Interval Cleared");
}

let chosenAmount = 0;
function addClickHandlerToStyleTypes() {
  let styleTypes = document.getElementsByName("radio");
  console.log(styleTypes);
  for (let i = 0; i < styleTypes.length; i++) {
    styleTypes[i].onclick = function() {
      console.log("Style Click Handler");
      chosenAmount = Number(this.value);
    };
  }
}
addClickHandlerToStyleTypes();

let percentAmount = 0;
function addClickToPercentAmount() {
  let tipPercent = document.getElementsByName("radio2");
  console.log(tipPercent);
  for (let i = 0; i < tipPercent.length; i++) {
    tipPercent[i].onclick = function() {
      console.log("Tip Click Handler");
      percentAmount = Number(this.value);
    };
  }
}
addClickToPercentAmount();

function calculateTotal() {
  let total = chosenAmount * (1 + percentAmount);
  console.log(total);
  document.getElementById("totalDisplay").innerHTML =
    "Total: $" + total.toFixed(2);
}

document.getElementById("buttonEvent").addEventListener("click", function() {
  console.log("Button clicked: ");
  console.log("ChosenAmount: ", chosenAmount);
  console.log("Percent Amount: ", percentAmount);
  calculateTotal();
});

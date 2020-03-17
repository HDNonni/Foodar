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

let timerEvent = setInterval(rotateBanner, 5000);

function stopBanner() {
  let stopBannerEvent = document.getElementById("buttonDiv");
  stopBannerEvent.addEventListener("click", function() {
    clearInterval(timerEvent);
    stopBannerEvent = document.getElementById("banner").style.display = "none";
    //console.log("Interval Cleared button");
  });
}
stopBanner();

//boolean flag pattern

const availableZipCodes = [
  12345,
  23456,
  34567,
  45678,
  56789,
  67888,
  78888,
  09876,
  12021
];

function addClickHandlerToGoBtn() {
  let goEvent = document.getElementById("zip-btn");
  goEvent.addEventListener("click", function() {
    let enteredZipCode = document.getElementById("zipcode").value;
    isValid = true;
    for (let i = 0; i < availableZipCodes.length; i++) {
      if (enteredZipCode == availableZipCodes[i]) {
        isValid = true;
        break
      } else {
        isValid = false;
      }
    }
    if (isValid == true) {
      alert("We've got your area covered");
    } else if (isValid == false) {
      alert("Sorry, haven't expanded to that area yet");
    }
  });
}
addClickHandlerToGoBtn();

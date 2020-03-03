
let bannerArray = [
  '<img src="images/banner11.jpeg" width="100%" height="120" class="changeBanner" />',
  '<img src="images/banner22.jpeg" width="100%" height="120" class="changeBanner" />',
  '<img src="images/banner33.jpeg" width="100%" height="120" class="changeBanner" />'
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

setInterval(rotateBanner, 5000);


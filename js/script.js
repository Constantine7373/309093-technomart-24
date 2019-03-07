var mapLink = document.querySelector(".about-contacts-map");
var mapPopup = document.querySelector(".popup-modal-map");
var mapClose = document.querySelector(".close-btn-map");
var writeUs = document.querySelector(".about-contacts-btn");
var writeUsPopup = document.querySelector(".popup-write-us")
var writeUsClose = document.querySelector(".popup-close-btn-write-us");
var itemBuy = document.querySelectorAll(".catalog-item-popup-buy");
var itemBuyPopup = document.querySelector(".popup-cart")
var itemBuyClose = document.querySelector(".popup-cart-continue");

if (mapLink !== null) {
  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.style.display = "block";
  })
};

if (mapClose !== null) {
  mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.style.display = "none";
  })
};

if (writeUs !== null) {
  writeUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeUsPopup.style.display = "block";
  })
};

if (writeUsClose !== null) {
  writeUsClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeUsPopup.style.display = "none";
  })
};

if (itemBuy !== null) {
  [].forEach.call(itemBuy, function(buy) {
    buy.addEventListener("click", function(evt) {
      evt.preventDefault();
      itemBuyPopup.style.display = "block";
    })
  });
};

if (itemBuyPopup !== null) {
  itemBuyClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    itemBuyPopup.style.display = "none";
  })
};

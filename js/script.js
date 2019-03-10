var mapLink = document.querySelector(".about-contacts-map");
var mapPopup = document.querySelector(".popup-modal-map");
var mapClose = document.querySelector(".close-btn-map");
var writeUs = document.querySelector(".about-contacts-btn");
var writeUsPopup = document.querySelector(".popup-write-us")
var writeUsClose = document.querySelector(".popup-close-btn-write-us");
var itemBuy = document.querySelectorAll(".catalog-item-popup-buy");
var itemBuyPopup = document.querySelector(".popup-cart")
var itemBuyClose = document.querySelector(".popup-cart-continue");
var radToggle = document.getElementsByName("categories-slider-toggle");
var radButtonNext = document.querySelector(".categories-slider-btn-next");
var radButtonPrev = document.querySelector(".categories-slider-btn-prev");

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

// if (radToggle !== null) {
//   for (var i = 0; i < radToggle.length; i++) {
//     if (radToggle[i].checked) {
//       var currentToggle = radToggle[i];
//       var nextToggle = radToggle[i + 1];
//       radToggle.length = i;
//     };
//   };
// };

radButtonNext.addEventListener("click", function() {
  if (radToggle !== null) {
    for (var i = 0; i < radToggle.length; i++) {
      if (radToggle[i].checked) {
        var currentToggle = radToggle[i];
        var nextToggle = radToggle[i + 1];
        radToggle.length = i;
      };
    };
  };
  if (currentToggle === radToggle[radToggle.length - 1]) {
    console.log(radToggle.length);
    i = 0;
    radToggle[i].checked = true;
    currentToggle = radToggle[i];
    nextToggle = radToggle[i + 1];
    i++;
  } else {
    console.log("нажал кнопку");
    if (i = radToggle.length) {
      i = (radToggle.length - 2);
    }
    nextToggle.checked = true;
    currentToggle = radToggle[i + 1];
  };
});

radButtonPrev.addEventListener("click", function() {
  if (radToggle !== null) {
    for (var i = 0; i < radToggle.length; i++) {
      if (radToggle[i].checked) {
        var currentToggle = radToggle[i];
        var prevToggle = radToggle[i - 1];
        radToggle.length = i;
      };
    };
  };
  if (currentToggle === radToggle[0]) {
    console.log(radToggle.length);
    i = (radToggle.length - 1);
    radToggle[i].checked = true;
    currentToggle = radToggle[i];
    prevToggle = radToggle[i - 1];
    i--;
  } else {
    console.log("нажал кнопку");
    if (i = radToggle.length) {
      i = (radToggle.length - 2);
    }
    prevToggle.checked = true;
    currentToggle = radToggle[i + 1];
  };
});

'use strict';
(function () {
  var housingType = document.querySelector('#housing-type');
  var housingPrice = document.querySelector('#housing-price');
  var housingRooms = document.querySelector('#housing-rooms');
  var housingGuests = document.querySelector('#housing-guests');
  var features = document.querySelector('#housing-features');

  housingType.addEventListener('change', function () {
    window.filterHousing = housingType.value;
    window.updateMapPins();
    // window.updateMapPins(housingType.value);

    window.monitorCloseButton();
    window.monitorPopupDisplay();
  });

  housingPrice.addEventListener('change', function () {
    // window.housingPrice = housingPrice.value;
    window.updateMapPins();
    window.monitorCloseButton();
    window.monitorPopupDisplay();
    // window.updateMapPins(housingPrice.value);
  });

  housingRooms.addEventListener('change', function () {
    // window.housingPrice = housingPrice.value;
    window.updateMapPins();
    window.monitorCloseButton();
    window.monitorPopupDisplay();
    // window.updateMapPins(housingPrice.value);
  });

  housingGuests.addEventListener('change', function () {
    // window.housingPrice = housingPrice.value;
    window.updateMapPins();
    window.monitorCloseButton();
    window.monitorPopupDisplay();
    // window.updateMapPins(housingPrice.value);
  });

  features.addEventListener('click', function () {
    // window.housingPrice = housingPrice.value;
    window.updateMapPins();
    window.monitorCloseButton();
    window.monitorPopupDisplay();
    // window.updateMapPins(housingPrice.value);
  });
})();

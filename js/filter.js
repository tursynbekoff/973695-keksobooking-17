'use strict';
(function () {
  var housingType = document.querySelector('#housing-type');

  var housingPrice = document.querySelector('#housing-price');

  var housingRooms = document.querySelector('#housing-rooms');

  var housingGuests = document.querySelector('#housing-guests');

  var features = document.querySelector('#housing-features');


  window.sort = function (object) {

    housingType = document.querySelector('#housing-type');
    var housingTypeValue = housingType.value;

    housingPrice = document.querySelector('#housing-price');
    var housingPriceValue = housingPrice.value;

    housingRooms = document.querySelector('#housing-rooms');
    var housingRoomsValue = housingRooms.value;

    housingGuests = document.querySelector('#housing-guests');
    var housingGuestsValue = housingGuests.value;

    var featureWifi = document.querySelector('#filter-wifi');
    var featureDishwasher = document.querySelector('#filter-dishwasher');
    var featureParking = document.querySelector('#filter-parking');
    var featureWasher = document.querySelector('#filter-washer');
    var featureElevator = document.querySelector('#filter-elevator');
    var featureConditioner = document.querySelector('#filter-conditioner');

    // if (featureWifi.checked) {
    //   if (object.offer.features.includes(featureWifi.value)) {
    //     return true;
    //   }
    // }


    var comparePrice = function (data) {
      if (housingPriceValue === 'middle' &&
          data.offer.price >= 10000 &&
          data.offer.price <= 50000) {
        return true;
      } else if (housingPriceValue === 'low' &&
          data.offer.price < 10000) {
        return true;
      } else if (housingPriceValue === 'high' &&
          data.offer.price > 50000) {
        return true;
      }
      return false;
    };

    if (housingTypeValue === 'any'
        && housingPriceValue === 'any'
        && housingRoomsValue === 'any'
        && housingGuestsValue === 'any') {
      return true;
    } else if (object.offer.type === housingTypeValue
        && housingPriceValue === 'any'
        && housingRoomsValue === 'any'
        && housingGuestsValue === 'any') {
      return true;
    } else if (housingTypeValue === 'any'
        && housingPriceValue !== 'any'
        && housingRoomsValue === 'any'
        && housingGuestsValue === 'any') {
      comparePrice(object);
    } else if (object.offer.type === housingTypeValue
        && housingPriceValue !== 'any'
        && housingRoomsValue === 'any'
        && housingGuestsValue === 'any') {
      comparePrice(object);
    } else if (housingTypeValue === 'any'
        && housingPriceValue === 'any'
        && housingRoomsValue === object.offer.rooms.toString()
        && housingGuestsValue === 'any') {
      return true;
    } else if (object.offer.type === housingTypeValue
        && housingPriceValue === 'any'
        && housingRoomsValue === object.offer.rooms.toString()
        && housingGuestsValue === 'any') {
      return true;
    } else if (housingTypeValue === 'any'
        && housingPriceValue !== 'any'
        && housingRoomsValue === object.offer.rooms.toString()
        && housingGuestsValue === 'any') {
      comparePrice(object);
    } else if (object.offer.type === housingTypeValue
        && housingPriceValue !== 'any'
        && housingRoomsValue === object.offer.rooms.toString()
        && housingGuestsValue === 'any') {
      comparePrice(object);
    } else if (housingTypeValue === 'any'
        && housingPriceValue === 'any'
        && housingRoomsValue === 'any'
        && housingGuestsValue === object.offer.guests.toString()) {
      return true;
    } else if (housingTypeValue === object.offer.type
        && housingPriceValue === 'any'
        && housingRoomsValue === 'any'
        && housingGuestsValue === object.offer.guests.toString()) {
      return true;
    } else if (housingTypeValue === 'any'
        && housingPriceValue !== 'any'
        && housingRoomsValue === 'any'
        && housingGuestsValue === object.offer.guests.toString()) {
      comparePrice(object);
    } else if (housingTypeValue === 'any'
        && housingPriceValue === 'any'
        && housingRoomsValue === object.offer.rooms.toString()
        && housingGuestsValue === object.offer.guests.toString()) {
      return true;
    } else if (housingTypeValue === object.offer.type
        && housingPriceValue !== 'any'
        && housingRoomsValue === 'any'
        && housingGuestsValue === object.offer.guests.toString()) {
      comparePrice(object);
    } else if (housingTypeValue === object.offer.type
        && housingPriceValue === 'any'
        && housingRoomsValue === object.offer.rooms.toString()
        && housingGuestsValue === object.offer.guests.toString()) {
      return true;
    } else if (housingTypeValue === 'any'
        && housingPriceValue !== 'any'
        && housingRoomsValue === object.offer.rooms.toString()
        && housingGuestsValue === object.offer.guests.toString()) {
      comparePrice(object);
    } else if (housingTypeValue === object.offer.type
        && housingPriceValue !== 'any'
        && housingRoomsValue === object.offer.rooms.toString()
        && housingGuestsValue === object.offer.guests.toString()) {
      comparePrice(object);
    }

    return false;
  };

  housingType.addEventListener('change', function () {
    window.filterHousing = housingType.value;
    window.updateMapPins();
    window.updateMapPins();
    // window.updateMapPins(housingType.value);

    window.monitorCloseButton();
    window.monitorPopupDisplay();
  });

  housingPrice.addEventListener('change', function () {
    // window.housingPrice = housingPrice.value;
    window.updateMapPins();
    window.updateMapPins();
    window.monitorCloseButton();
    window.monitorPopupDisplay();
    // window.updateMapPins(housingPrice.value);
  });

  housingRooms.addEventListener('change', function () {
    // window.housingPrice = housingPrice.value;
    window.updateMapPins();
    window.updateMapPins();
    window.monitorCloseButton();
    window.monitorPopupDisplay();
    // window.updateMapPins(housingPrice.value);
  });

  housingGuests.addEventListener('change', function () {
    // window.housingPrice = housingPrice.value;
    window.updateMapPins();
    window.updateMapPins();
    window.monitorCloseButton();
    window.monitorPopupDisplay();
    // window.updateMapPins(housingPrice.value);
  });

  features.addEventListener('click', function () {
    // window.housingPrice = housingPrice.value;
    window.updateMapPins();
    window.updateMapPins();
    window.monitorCloseButton();
    window.monitorPopupDisplay();
    // window.updateMapPins(housingPrice.value);
  });
})();

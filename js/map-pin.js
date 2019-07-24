'use strict';
(function () {
  var map = document.querySelector('.map').querySelector('.map__pins');
  var pin = document.querySelector('#pin').content
      .querySelector('.map__pin');

  var avatar = document.querySelector('#pin').content
      .querySelector('img');

  var assignValuesFromObject = function (object) {
    var mapPin = pin.cloneNode(true);

    pin.style.left = object.location.x + 'px';
    pin.style.top = object.location.y + 'px';
    avatar.src = object.author.avatar;
    avatar.alt = object.offer.type;

    return mapPin;
    // map.appendChild(pin);
  };

  var featureWifi = document.querySelector('#filter-wifi');
  var featureDishwasher = document.querySelector('#filter-dishwasher');
  var featureParking = document.querySelector('#filter-parking');
  var featureWasher = document.querySelector('#filter-washer');
  var featureElevator = document.querySelector('#filter-elevator');
  var featureConditioner = document.querySelector('#filter-conditioner');

  var filterPins = function (object, filter) {
    var mapPin;
    if (object.offer.type === filter) {
      mapPin = assignValuesFromObject(object);
    } else if (filter === undefined) {
      mapPin = assignValuesFromObject(object);
    }

    // map.appendChild(pin);

    // не знаю как это приминить
    // var featureWifi = document.querySelector('#filter-wifi');
    // if (featureWifi.checked) {
    //   if (object.offer.features.includes(featureWifi.value)) {
    //
    //   }
    // } else if (featureWifi.checked === false) {
    //
    // }

    //


    return (typeof (mapPin) === 'object' ? mapPin : null);
  };

  var generatedData = document.createDocumentFragment();

  var placePinsOnMap = function (renderPin) {
    if (renderPin !== null) {
      generatedData.appendChild(renderPin);
      map.appendChild(generatedData);
    }
  };

  var count = 0;
  var countActivePins = function (pins) {
    if (pins !== null) {
      count++;
    }
    return [count, pins];
  };

  window.updateMapPins = function () {
    window.removeMapPins();

    var housingType = document.querySelector('#housing-type');
    var housingTypeValue = housingType.value;

    var housingPrice = document.querySelector('#housing-price');
    var housingPriceValue = housingPrice.value;

    var housingRooms = document.querySelector('#housing-rooms');
    var housingRoomsValue = housingRooms.value;

    var housingGuests = document.querySelector('#housing-guests');
    var housingGuestsValue = housingGuests.value;

    var objectArray = window.userInfo;

    var sort = function (object) {
      var sortedMapPin;

      var comparePrice = function (data) {
        if (housingPriceValue === 'middle' &&
            data.offer.price >= 10000 &&
            data.offer.price <= 50000) {
          sortedMapPin = filterPins(data);
        } else if (housingPriceValue === 'low' &&
            data.offer.price < 10000) {
          sortedMapPin = filterPins(data);
        } else if (housingPriceValue === 'high' &&
            data.offer.price > 50000) {
          sortedMapPin = filterPins(data);
        }
      };

      if (housingTypeValue === 'any'
          && housingPriceValue === 'any'
          && housingRoomsValue === 'any'
          && housingGuestsValue === 'any') {
        sortedMapPin = filterPins(object);
      } else if (object.offer.type === housingTypeValue
          && housingPriceValue === 'any'
          && housingRoomsValue === 'any'
          && housingGuestsValue === 'any') {
        sortedMapPin = filterPins(object);
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
        sortedMapPin = filterPins(object);
      } else if (object.offer.type === housingTypeValue
          && housingPriceValue === 'any'
          && housingRoomsValue === object.offer.rooms.toString()
          && housingGuestsValue === 'any') {
        sortedMapPin = filterPins(object);
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
        sortedMapPin = filterPins(object);
      } else if (housingTypeValue === object.offer.type
          && housingPriceValue === 'any'
          && housingRoomsValue === 'any'
          && housingGuestsValue === object.offer.guests.toString()) {
        sortedMapPin = filterPins(object);
      } else if (housingTypeValue === 'any'
          && housingPriceValue !== 'any'
          && housingRoomsValue === 'any'
          && housingGuestsValue === object.offer.guests.toString()) {
        comparePrice(object);
      } else if (housingTypeValue === 'any'
          && housingPriceValue === 'any'
          && housingRoomsValue === object.offer.rooms.toString()
          && housingGuestsValue === object.offer.guests.toString()) {
        sortedMapPin = filterPins(object);
      } else if (housingTypeValue === object.offer.type
          && housingPriceValue !== 'any'
          && housingRoomsValue === 'any'
          && housingGuestsValue === object.offer.guests.toString()) {
        comparePrice(object);
      } else if (housingTypeValue === object.offer.type
          && housingPriceValue === 'any'
          && housingRoomsValue === object.offer.rooms.toString()
          && housingGuestsValue === object.offer.guests.toString()) {
        sortedMapPin = filterPins(object);
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

      object = null;
      return (typeof (sortedMapPin) !== 'undefined'
        ? sortedMapPin : null);
    };

    var sortedMapPins = objectArray.map(sort);
    sortedMapPins = objectArray.map(sort);
    var slicedMapPins = sortedMapPins.map(countActivePins);

    slicedMapPins.forEach(function (element) {
      element.forEach(function (element2d, index2d, array2d) {
        if (array2d[0] <= 5) {
          placePinsOnMap(array2d[1]);
        }
      });
    });

    count = 0;
  };

  window.removeMapPins = function () {
    var mapPin = document.querySelectorAll('.map__pin');
    var pinArray = Array.from(mapPin);

    pinArray.forEach(function (array) {
      var mainPin = document.querySelector('.map__pin--main');
      if (array !== mainPin) {
        array.parentNode.removeChild(array);
      }
    });
  };

})();

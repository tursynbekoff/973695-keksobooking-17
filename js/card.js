'use strict';
(function () {
  var map = document.querySelector('.map').querySelector('.map__pins');
  var pin = document.querySelector('#pin').content
      .querySelector('.map__pin');

  var assignValuesFromObject = function (object) {
    var mapPin = pin.cloneNode(true);
    var avatar = document.querySelector('#pin').content
        .querySelector('img');
    mapPin.style.left = object.location.x + 'px';
    mapPin.style.top = object.location.y + 'px';
    avatar.src = object.author.avatar;
    avatar.alt = object.offer.type;
    return mapPin;
  };

  var filterPins = function (object, filter) {
    var mapPin;
    if (object.offer.type === filter) {
      mapPin = assignValuesFromObject(object);
    } else if (filter === undefined) {
      mapPin = assignValuesFromObject(object);
    }
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

  window.updateMapPins = function (houseType) {
    var objectArray = window.userInfo;

    var sort = function (object) {
      var sortedMapPin;

      if (houseType === 'any') {
        sortedMapPin = filterPins(object);
      } else if (object.offer.type === houseType) {
        sortedMapPin = filterPins(object, houseType);
      }
      return (typeof (sortedMapPin) !== 'undefined'
        ? sortedMapPin : null);
    };

    var sortedMapPins = objectArray.map(sort);

    var slicedMapPins = sortedMapPins.map(countActivePins);

    slicedMapPins.forEach(function (element) {
      element.forEach(function (element2d, index2d, array2d) {
        if (array2d[0] < 5) {
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

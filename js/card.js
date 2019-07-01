'use strict';
(function () {
  var map = document.querySelector('.map');
  var pin = document.querySelector('#pin').content
      .querySelector('.map__pin');

  var generateMapPins = function (data) {
    var mapPin = pin.cloneNode(true);
    var avatar = document.querySelector('#pin').content
        .querySelector('img');
    mapPin.style.left = '' + data.location.x + 'px';
    mapPin.style.top = '' + data.location.y + 'px';
    avatar.src = data.author.avatar;
    avatar.alt = data.offer.type;
    return mapPin;
  };

  window.activateMapPins = function () {
    var generatedData = document.createDocumentFragment();
    var objectArray = window.userInfo.slice(0, 5);
    objectArray.forEach(function (array) {
      generatedData.appendChild(generateMapPins(array));
    });
    map.appendChild(generatedData);
  };


  var updateNewPins = function (object, filter) {
    if (object.offer.type === filter) {
      var mapPin = pin.cloneNode(true);
      var avatar = document.querySelector('#pin').content
          .querySelector('img');
      mapPin.style.left = '' + object.location.x + 'px';
      mapPin.style.top = '' + object.location.y + 'px';
      avatar.src = object.author.avatar;
      avatar.alt = object.offer.type;
      return mapPin;
    }
    return 0;
  };


  window.updateMapPins = function (houseType) {
    var generatedData = document.createDocumentFragment();
    var objectArray = window.userInfo;
    var count = 0;
    var sort = function (object) {
      if (count <= 5) {
        if (houseType === 'any') {
          window.activateMapPins();
        } else if (object.offer.type === houseType) {
          generatedData.appendChild(updateNewPins(object, houseType));
          count += 1;
        }
      }
      map.appendChild(generatedData);
    };
    objectArray.filter(sort);
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

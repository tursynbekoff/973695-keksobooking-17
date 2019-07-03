'use strict';
(function () {
  var map = document.querySelector('.map');
  var pin = document.querySelector('#pin').content
      .querySelector('.map__pin');

  var updateNewPins = function (object, filter) {
    var mapPin = pin.cloneNode(true);
    if (object.offer.type === filter) {
      var avatar = document.querySelector('#pin').content
          .querySelector('img');
      mapPin.style.left = object.location.x + 'px';
      mapPin.style.top = object.location.y + 'px';
      avatar.src = object.author.avatar;
      avatar.alt = object.offer.type;
    } else if (filter === undefined) {
      avatar = document.querySelector('#pin').content
          .querySelector('img');
      mapPin.style.left = object.location.x + 'px';
      mapPin.style.top = object.location.y + 'px';
      avatar.src = object.author.avatar;
      avatar.alt = object.offer.type;
    }
    return mapPin;
  };

  window.updateMapPins = function (houseType) {
    var generatedData = document.createDocumentFragment();
    var objectArray = window.userInfo;
    var count = 0;
    var sort = function (object) {
      if (count <= 4) {
        if (houseType === 'any') {
          generatedData.appendChild(updateNewPins(object));
          count += 1;
        } else if (object.offer.type === houseType) {
          generatedData.appendChild(updateNewPins(object, houseType));
          count += 1;
        }
      }
      map.appendChild(generatedData);
    };

    objectArray.forEach(sort);
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

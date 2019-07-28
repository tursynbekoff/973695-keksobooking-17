'use strict';
(function () {
  var map = document.querySelector('.map').querySelector('.map__pins');
  var pin = document.querySelector('#pin').content
      .querySelector('.map__pin');

  var avatar = document.querySelector('#pin').content
      .querySelector('img');

  var assignValuesFromObject = function (object) {

    pin.style.left = object.location.x + 'px';
    pin.style.top = object.location.y + 'px';
    avatar.src = object.author.avatar;
    avatar.alt = object.offer.type;

    var mapPin = pin.cloneNode(true);

    return mapPin;
  };

  var generatedData = document.createDocumentFragment();

  var placePinsOnMap = function (renderPin) {

    if (typeof (renderPin) === 'object') {
      generatedData.appendChild(renderPin);
      map.appendChild(generatedData);
    }

  };

  window.updateMapPins = function () {
    window.removeMapPins();

    var objectArray = window.userInfo;

    var sortedMapPins = objectArray.filter(window.sort);

    var catMapPins = sortedMapPins.slice(0, 5);

    var pinsOnMap = catMapPins.map(function (currentVal) {
      return assignValuesFromObject(currentVal);
    });

    pinsOnMap.forEach(placePinsOnMap);
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

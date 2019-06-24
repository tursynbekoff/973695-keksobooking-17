'use strict';
(function () {
  var map = document.querySelector('.map');
  var pin = document.querySelector('#pin').content
      .querySelector('.map__pin');
  var generateMapPins = function (data) {
    var mapPin = pin.cloneNode(true);
    var avatar = document.querySelector('#pin').content
        .querySelector('img');
    mapPin.style.left = data.left;
    mapPin.style.top = data.top;
    avatar.src = data.picture;
    avatar.alt = data.apartmentType;
    return mapPin;
  };

  window.activateMapPins = function () {
    var generatedData = document.createDocumentFragment();

    for (var i = 0; i < window.userInfo.length; i++) {
      generatedData.appendChild(generateMapPins(window.userInfo[i]));
    }
    map.appendChild(generatedData);
  };
})();

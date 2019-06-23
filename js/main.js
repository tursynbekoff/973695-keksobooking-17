'use strict';
(function () {
  var apartmentType = ['palace', 'flat', 'house', 'bungalo'];
  var map = document.querySelector('.map');

  var moch = {
    'author': {
      'avatar': []
    },

    'offer': {
      'type': []
    },
    'location': {
      'x': [],
      'y': []
    }
  };

  window.userInfo = [];
  var mapWidth = map.clientWidth;

  for (var i = 0; i < 8; i++) {
    moch.author.avatar[i] = 'img/avatars/user0' + (i + 1) + '.png';
    moch.offer.type[i] = apartmentType[Math.floor(Math.random() * 4)];
    moch.location.x[i] = '' + Math.floor((Math.random() * (mapWidth - 60)) + 30) + 'px'; // max width mapWidth -30px and min width is 30px
    moch.location.y[i] = '' + Math.floor((Math.random() * (630 - 130)) + 130) + 'px';
    window.userInfo.push(
        {
          picture: moch.author.avatar[i],
          apartmentType: moch.offer.type[i],
          left: moch.location.x[i],
          top: moch.location.y[i]
        });
  }
})();

(function () {
  var address = document.querySelector('#address');
  address.defaultValue = '570,375';

  var minPriceOnClick = function (price) {
    var priceInput = document.querySelector('#price');
    priceInput.placeholder = price;
  };

  var apartmentTypeSelect = document.querySelector('#type');

  apartmentTypeSelect.addEventListener('click', function (evt) {
    evt.preventDefault();
    var apartmentTypeSelectedIndex = apartmentTypeSelect.selectedIndex;

    if (apartmentTypeSelectedIndex === 0) {
      minPriceOnClick(0);
    } else if (apartmentTypeSelectedIndex === 1) {
      minPriceOnClick(1000);
    } else if (apartmentTypeSelectedIndex === 2) {
      minPriceOnClick(5000);
    } else if (apartmentTypeSelectedIndex === 3) {
      minPriceOnClick(10000);
    }
  });

  var timeCheckIn = document.querySelector('#timein');
  var timeCheckOut = document.querySelector('#timeout');

  var settingTimeInInput = function (selectOne, selectTwo) {
    var selectIndex = selectOne.selectedIndex;
    selectTwo.selectedIndex = selectIndex;
  };

  timeCheckIn.addEventListener('click', function () {
    settingTimeInInput(timeCheckIn, timeCheckOut);
  });
  timeCheckOut.addEventListener('click', function () {
    settingTimeInInput(timeCheckOut, timeCheckIn);
  });
})();

(function () {
  var map = document.querySelector('.map');
  var mapWidth = map.clientWidth;
  var pin = document.querySelector('#pin').content
      .querySelector('.map__pin');
  var mapInitialPin = document.querySelector('.map__pin--main');
  var uploadPhotoField = document.querySelector('.ad-form-header');
  uploadPhotoField.disabled = true;
  // selecting all fieldsets
  var inputUserInfoFields = document.querySelectorAll('.ad-form__element');
  // function that disables elements
  var disableInput = function (input) {
    for (var i = 0; i < input.length; i++) {
      input[i].disabled = true;
    }
  };

  var activateInput = function (input) {
    for (var i = 0; i < input.length; i++) {
      input[i].disabled = false;
    }
  };
  // disabling all fieldsets
  disableInput(inputUserInfoFields);

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

  var address = document.querySelector('#address');
  var activateMapPins = function () {
    var generatedData = document.createDocumentFragment();

    for (var i = 0; i < window.userInfo.length; i++) {
      generatedData.appendChild(generateMapPins(window.userInfo[i]));
    }
    map.appendChild(generatedData);
  };

  var pinCoordinate = function (x, y) {
    address.defaultValue = '' + x + ',' + y + '';
  };

  mapInitialPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      if ((((mapInitialPin.offsetLeft - shift.x) <= (mapWidth - 60)) && ((mapInitialPin.offsetLeft - shift.x) >= 0)) &&
      ((mapInitialPin.offsetTop - shift.y) >= 130 && (mapInitialPin.offsetTop - shift.y) <= 630)) {
        mapInitialPin.style.top = (mapInitialPin.offsetTop - shift.y) + 'px';
        mapInitialPin.style.left = (mapInitialPin.offsetLeft - shift.x) + 'px';
        pinCoordinate((mapInitialPin.offsetLeft - shift.x), (mapInitialPin.offsetTop - shift.y));
      }

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      address.focus();
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    var form = document.querySelector('.ad-form');
    activateInput(inputUserInfoFields);
    form.classList.remove('ad-form--disabled');
    activateMapPins();
    map.classList.remove('map--faded');
  });
})();

'use strict';
(function () {
  var address = document.querySelector('#address');
  var map = document.querySelector('.map');
  var mapPins = map.querySelector('.map__pins');
  address.defaultValue = '570,375';

  var priceInput = document.querySelector('#price');
  var apartmentTypeSelect = document.querySelector('#type');
  var titleValue = document.querySelector('#title');

  var minPrice = {
    bungalo: 0,
    flat: 1000,
    house: 5000,
    palace: 10000,
  };

  var minPriceOnChange = function (value) {
    priceInput.placeholder = value;
    priceInput.min = value;
  };

  apartmentTypeSelect.addEventListener('change', function () {
    minPriceOnChange(minPrice[apartmentTypeSelect.value]);
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

  // function that disables elements
  window.disableInput = function (input) {
    for (var i = 0; i < input.length; i++) {
      input[i].disabled = true;
    }
  };

  window.activateInput = function (input) {
    for (var i = 0; i < input.length; i++) {
      input[i].disabled = false;
    }
  };

  var roomNumber = document.querySelector('#room_number');
  var roomCapacity = document.querySelector('#capacity');
  var submit = document.querySelector('.ad-form__submit');
  var successTemplate = document.querySelector('#success')
          .content.querySelector('.success');
  var mapInitialPin = document.querySelector('.map__pin--main');

  var removeSuccessPopup = function () {
    var successPopup = document.querySelector('.success');
    if (successPopup !== null) {
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          successPopup.remove();
        }
      });
      successPopup.addEventListener('click', function () {
        successPopup.remove();
      });
    }
  };

  submit.addEventListener('click', function (evt) {
    var minPriceCost = minPrice[apartmentTypeSelect.value];
    var inputPrice = priceInput.value;
    minPriceOnChange(minPriceCost);
    inputPrice = Number(inputPrice);

    if (roomNumber.selectedIndex !== roomCapacity.selectedIndex) {
      roomCapacity.setCustomValidity('Количество гостей не соответствует количеству комнат');
    } else if (roomNumber.selectedIndex === roomCapacity.selectedIndex
        && titleValue.value.length >= 30
        && inputPrice >= minPriceCost) {
      evt.preventDefault();

      var form = document.querySelector('.ad-form');
      var filterForm = document.querySelector('.map__filters');

      window.upload(new FormData(form), function () {
        form.reset();
        filterForm.reset();
        form.classList.add('ad-form--disabled');
        map.classList.add('map--faded');
        window.removeMapPins();
        address.defaultValue = '570,375';
        mapInitialPin.style.left = '570px';
        mapInitialPin.style.top = '375px';
        mapPins.appendChild(mapInitialPin);

        map.appendChild(successTemplate);
        removeSuccessPopup();
      });
    }
  });


})();

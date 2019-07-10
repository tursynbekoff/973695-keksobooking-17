'use strict';
(function () {
  var address = document.querySelector('#address');
  address.defaultValue = '570,375';

  var priceInput = document.querySelector('#price');
  var apartmentTypeSelect = document.querySelector('#type');

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

  submit.addEventListener('click', function () {
    if (roomNumber.selectedIndex !== roomCapacity.selectedIndex) {
      roomCapacity.setCustomValidity('Количество гостей не соответствует количеству комнат');
    } else if (roomNumber.selectedIndex === roomCapacity.selectedIndex) {
      roomCapacity.setCustomValidity('');
    }
  });

})();

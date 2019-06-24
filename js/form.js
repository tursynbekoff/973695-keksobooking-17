'use strict';
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
})();

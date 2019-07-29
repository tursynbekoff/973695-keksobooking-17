'use strict';
(function () {
  var address = document.querySelector('#address');
  var map = document.querySelector('.map');
  var mapPins = map.querySelector('.map__pins');
  address.defaultValue = '570,375';

  var priceInput = document.querySelector('#price');
  var apartmentTypeSelect = document.querySelector('#type');
  var titleValue = document.querySelector('#title');

  var reset = document.querySelector('.ad-form__reset');

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
    selectTwo.selectedIndex = selectOne.selectedIndex;
  };

  timeCheckIn.addEventListener('click', function () {
    settingTimeInInput(timeCheckIn, timeCheckOut);
  });
  timeCheckOut.addEventListener('click', function () {
    settingTimeInInput(timeCheckOut, timeCheckIn);
  });

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
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var adFormAvatar = document.querySelector('#avatar');
  var avatarPreview = document.querySelector('.ad-form-header__preview img');

  var images = document.querySelector('#images');
  var photosPreview = document.querySelector('.ad-form__photo');

  adFormAvatar.addEventListener('change', function () {
    var file = adFormAvatar.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        avatarPreview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });

  images.addEventListener('change', function (evt) {
    var files = evt.target.files;

    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var fileName = file.name.toLowerCase();

      var matches = FILE_TYPES.some(function (it) {
        return fileName.endsWith(it);
      });

      if (matches) {
        var reader = new FileReader();

        reader.addEventListener('load', function (e) {
          var picFile = e.target;
          var displayImage = document.createElement('img');
          displayImage.setAttribute('src', picFile.result);
          displayImage.setAttribute('width', 70);
          displayImage.setAttribute('height', 70);
          photosPreview.appendChild(displayImage);
        });

        reader.readAsDataURL(file);
      }
    }
  });

  var form = document.querySelector('.ad-form');
  var filterForm = document.querySelector('.map__filters');

  var resetForm = function () {
    window.removeMapPins();
    window.removeCards();

    form.classList.add('ad-form--disabled');
    map.classList.add('map--faded');

    var uploadedPhotos = photosPreview.querySelectorAll('img');
    form.reset();
    filterForm.reset();
    address.defaultValue = '570,375';
    mapInitialPin.style.left = '570px';
    mapInitialPin.style.top = '375px';
    mapPins.appendChild(mapInitialPin);

    avatarPreview.src = 'img/muffin-grey.svg';

    uploadedPhotos.forEach(function (it) {
      it.parentNode.removeChild(it);
    });
  };

  reset.addEventListener('click', function () {
    resetForm();
  });

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

      window.upload(new FormData(form), function () {
        resetForm();

        map.appendChild(successTemplate);
        removeSuccessPopup();
      });
    }
  });
})();

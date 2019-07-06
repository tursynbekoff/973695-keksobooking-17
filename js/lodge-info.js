'use strict';
(function () {
  var apartmentTypes = {
    'flat': 'Квартира',
    'bungalo': 'Бунгало',
    'house': 'Дом',
    'palace': 'Дворец'
  };
  var apartmentFeatures = {
    'wifi': document.querySelector('#card')
            .content.querySelector('.popup__feature--wifi'),
    'dishwasher': document.querySelector('#card')
            .content.querySelector('.popup__feature--dishwasher'),
    'parking': document.querySelector('#card')
            .content.querySelector('.popup__feature--parking'),
    'washer': document.querySelector('#card')
            .content.querySelector('.popup__feature--washer'),
    'elevator': document.querySelector('#card')
            .content.querySelector('.popup__feature--elevator'),
    'conditioner': document.querySelector('#card')
            .content.querySelector('.popup__feature--conditioner')
  };

  var card = document.querySelector('#card')
          .content.querySelector('.map__card');
  var map = document.querySelector('.map');
  var flag = false;

  var updateNewCards = function (object) {
    var mapCard = card.cloneNode(true);
    mapCard.remove();
    var title = document.querySelector('#card').content
          .querySelector('.popup__title');
    var address = document.querySelector('#card').content
          .querySelector('.popup__text--address');
    var price = document.querySelector('#card').content
          .querySelector('.popup__text--price');
    var type = document.querySelector('#card').content
          .querySelector('.popup__type');
    var room = document.querySelector('#card').content
          .querySelector('.popup__text--capacity');
    var time = document.querySelector('#card').content
          .querySelector('.popup__text--time');
    var features = document.querySelector('#card').content
          .querySelector('.popup__features');
    var description = document.querySelector('#card').content
          .querySelector('.popup__description');
    var photos = document.querySelector('#card').content
          .querySelector('.popup__photos');
    var defaultFeatures = document.querySelector('#card').content
          .querySelectorAll('.popup__feature');
    var avatar = document.querySelector('#card').content
          .querySelector('.popup__avatar');
    var img = document.querySelector('#card').content
          .querySelector('.popup__photo');

    var insertFeatures = function (data) {
      for (var j = 0; j < defaultFeatures.length; j++) {
        defaultFeatures[j].remove();
      }

      var feature = document.importNode(apartmentFeatures[data], true);
      features.appendChild(feature);
    };

    var placePhoto = function (src) {
      var imgs = document.importNode(img, true);
      img.remove();
      imgs.src = src;
      photos.appendChild(imgs);
      if (flag === true) {
        var mapCardPopupPhotos = document.querySelectorAll('.popup_photo');
        // mapCardPopup.remove();
        // var mapCardPopupPhotos = mapCardPopup.querySelectorAll('.popup_photo');
        for (var i = 0; i < mapCardPopupPhotos.length; i++) {
          mapCardPopupPhotos[i].parentNode.removeChild(mapCardPopupPhotos[i]);
        }
        // console.log(mapCardPopupPhotos);
      }
      // console.log(flag);
    };

    title.innerHTML = object.offer.title;
    address.innerHTML = object.offer.address;
    price.innerHTML = object.offer.price + '₽/ночь';
    type.innerHTML = apartmentTypes[object.offer.type];

    room.innerHTML = object.offer.rooms +
          (object.offer.rooms === 1 ? ' комната' : ' комнаты')
          + ' для ' + object.offer.guests + ' гостей';
    time.innerHTML = 'Заезд после ' + object.offer.checkin
          + ', выезд до ' + object.offer.checkout;

    var featureArray = Array.from(object.offer.features);
    featureArray.forEach(insertFeatures);

    description.innerHTML = object.offer.description;

    var photoSrc = Array.from(object.offer.photos);
    photoSrc.forEach(placePhoto);
    flag = true;
    avatar.src = object.author.avatar;
    return mapCard;
  };
  var container = document.querySelector('.map__filters-container');

  window.updateCard = function () {
    window.removeCards();
    var generatedData = document.createDocumentFragment();
    var objectArray = window.userInfo[0];
    var cardDisplay = function (object) {
      generatedData.appendChild(updateNewCards(object));
      map.insertBefore(generatedData, container);
    };

    cardDisplay(objectArray);
  };

  window.removeCards = function () {
    var mapCard = document.querySelectorAll('.map__card');
    var cardArray = Array.from(mapCard);

    cardArray.forEach(function (array) {
      array.parentNode.removeChild(array);
    });
  };
})();

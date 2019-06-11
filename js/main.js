'use strict';

var moch = {
  'author': {
    'avatar': ['img/avatars/user01.png',
      'img/avatars/user02.png',
      'img/avatars/user03.png',
      'img/avatars/user04.png',
      'img/avatars/user05.png',
      'img/avatars/user06.png',
      'img/avatars/user07.png',
      'img/avatars/user08.png']
  },

  'offer': {
    'type': ['palace', 'flat', 'house', 'bungalo']
  },
  'location': {
    'x': ['200px', '200px', '50px'],
    'y': ['130px', '400px', '200px']
  }
};

var userInfo = [
  {
    picture: moch.author.avatar[0],
    apartmentType: moch.offer.type[0],
    left: moch.location.x[0],
    top: moch.location.y[0]
  },
  {
    picture: moch.author.avatar[1],
    apartmentType: moch.offer.type[1],
    left: moch.location.x[1],
    top: moch.location.y[1]
  },
  {
    picture: moch.author.avatar[2],
    apartmentType: moch.offer.type[2],
    left: moch.location.x[2],
    top: moch.location.y[2]
  }
];

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

var generatedData = document.createDocumentFragment();

for (var i = 0; i < userInfo.length; i++) {
  generatedData.appendChild(generateMapPins(userInfo[i]));
}

map.appendChild(generatedData);
map.classList.remove('map--faded');

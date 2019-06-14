'use strict';

var apartmentType = ['palace', 'flat', 'house', 'bungalo'];

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

var userInfo = [];
var map = document.querySelector('.map');
var pin = document.querySelector('#pin').content
    .querySelector('.map__pin');
var mapWidth = map.clientWidth;
console.log(mapWidth);

for (var i = 0; i < 8; i++) {
  moch.author.avatar[i] = 'img/avatars/user0' + (i + 1) + '.png';
  moch.offer.type[i] = apartmentType[Math.floor(Math.random() * 4)];
  moch.location.x[i] = '' + Math.floor((Math.random() * (mapWidth - 60)) + 30) + 'px'; // max width mapWidth -30px and min width is 30px
  moch.location.y[i] = '' + Math.floor((Math.random() * (630 - 130)) + 130) + 'px';
  userInfo.push(
      {
        picture: moch.author.avatar[i],
        apartmentType: moch.offer.type[i],
        left: moch.location.x[i],
        top: moch.location.y[i]
      });
}


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

for (var k = 0; k < userInfo.length; k++) {
  generatedData.appendChild(generateMapPins(userInfo[k]));
}

map.appendChild(generatedData);
map.classList.remove('map--faded');

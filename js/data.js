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

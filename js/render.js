'use strict';
(function () {
  var onError = function (message) {
    var map = document.querySelector('.map');
    var errorPopup = document.querySelector('#error').content.querySelector('.error');
    // var popup = errorPopup.cloneNode(true);
    var errorText = document.querySelector('#error').content.querySelector('.error__message');
    errorText.innerHTML = '' + message + '';
    map.appendChild(errorPopup);
  };

  var onSuccess = function (data) {
    window.userInfo = [];
    for (var i = 0; i < data.length; i++) {
      window.userInfo.push(
          {
            picture: data[i].author.avatar,
            apartmentType: data[i].offer.type,
            left: '' + data[i].location.x + 'px',
            top: '' + data[i].location.y + 'px'
          });
    }
  };

  window.load(onSuccess, onError);
})();

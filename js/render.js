'use strict';
(function () {
  var onError = function (message) {
    var map = document.querySelector('.map');
    var errorPopup = document.querySelector('#error').content.querySelector('.error');
    var errorText = document.querySelector('#error').content.querySelector('.error__message');
    errorText.innerHTML = message;
    map.appendChild(errorPopup);
  };

  var onSuccess = function (data) {
    window.userInfo = data;
  };

  window.load(onSuccess, onError);
})();

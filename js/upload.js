'use strict';
(function () {
  var onError = function (message) {
    var map = document.querySelector('.map');
    var errorPopup = document.querySelector('#error').content.querySelector('.error');
    var errorText = document.querySelector('#error').content.querySelector('.error__message');
    errorText.innerHTML = message;
    map.appendChild(errorPopup);
  };

  var url = 'https://js.dump.academy/keksobooking';
  window.upload = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);

      if (xhr.status !== 200) {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.open('POST', url);
    xhr.send(data);
  };
})();

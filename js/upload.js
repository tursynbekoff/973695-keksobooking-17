'use strict';
(function () {
  var onError = function (message) {
    var main = document.querySelector('.map');
    var errorPopupTemplate = document.querySelector('#error').content.querySelector('.error');
    var errorText = document.querySelector('#error').content.querySelector('.error__message');
    errorText.innerHTML = message;
    main.appendChild(errorPopupTemplate);

    var errorPopup = document.querySelector('.error');
    errorPopup.addEventListener('click', function () {
      errorPopup.remove();
    });
  };

  var url = 'https://js.dump.academy/keksobooking';
  window.upload = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {

      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.open('POST', url);
    xhr.send(data);
  };
})();

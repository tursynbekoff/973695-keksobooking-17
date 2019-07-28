'use strict';
(function () {
  var SUCCESS_STATUS = 200;
  var TIMEOUT = 10000;

  window.load = function (onSuccess, onError) {
    var getUrl = 'https://js.dump.academy/keksobooking/data';
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS_STATUS) {
        onSuccess(xhr.response);
        window.userInfo = Array.from(xhr.response);
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

    xhr.timeout = TIMEOUT;

    xhr.open('GET', getUrl);
    xhr.send();
  };

  var postUrl = 'https://js.dump.academy/keksobooking';

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

  window.upload = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {

      if (xhr.status === SUCCESS_STATUS) {
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

    xhr.timeout = TIMEOUT;

    xhr.open('POST', postUrl);
    xhr.send(data);
  };
})();

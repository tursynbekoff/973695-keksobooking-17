'use strict';
(function () {
  var onError = function (message) {
    var main = document.querySelector('main');
    var errorPopupTemplate = document.querySelector('#error').content.querySelector('.error');
    var errorText = document.querySelector('#error').content.querySelector('.error__message');
    errorText.innerHTML = message;
    main.appendChild(errorPopupTemplate);

    var errorPopup = document.querySelector('.error');
    errorPopup.addEventListener('click', function () {
      errorPopup.remove();
    });
  };

  var onSuccess = function (data) {
    window.userInfo = Array.from(data);
    return window.userInfo;
  };

  window.load(onSuccess, onError);
})();

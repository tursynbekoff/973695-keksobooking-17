'use strict';
(function () {
  window.monitorCloseButton = function () {
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        window.removeCards();
      }
    });
    var popupClose = document.querySelector('.popup__close');
    if (popupClose !== null) {
      popupClose.addEventListener('click', function (evnt) {
        evnt.preventDefault();
        window.removeCards();
      });
    }
  };

  var renderCardOnMap = function (evt) {
    evt.preventDefault();
    var target = evt.target;
    var classOfTargetButton = target.parentNode.classList.toString();

    if (!classOfTargetButton.includes('map__pin--main')) {
      var targetSrc = target.src + '';
      for (var j = 0; j < window.userInfo.length; j++) {
        if (targetSrc.includes(window.userInfo[j].author.avatar)
            && window.userInfo[j].offer.type === target.alt) {
          window.updateCard(window.userInfo[j]);
          window.updateCard(window.userInfo[j]);
          window.monitorCloseButton();
        }
      }
    }
  };

  window.monitorPopupDisplay = function () {
    var renderedMapPin = document.querySelectorAll('.map__pin');
    for (var i = 0; i < renderedMapPin.length; i++) {
      if (renderedMapPin[i] !== undefined) {
        renderedMapPin[i].addEventListener('click', renderCardOnMap);
      }
    }
  };
})();

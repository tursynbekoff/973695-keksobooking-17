'use strict';
(function () {
  var housingType = document.querySelector('#housing-type');

  housingType.addEventListener('change', function () {
    window.filterHosing = housingType.value;
    window.updateMapPins(housingType.value);
    // window.updateMapPins(housingType.value);

    window.monitorCloseButton();
    window.monitorPopupDisplay();
  });
})();

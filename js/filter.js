'use strict';
(function () {
  var housingType = document.querySelector('#housing-type');

  housingType.addEventListener('change', function () {
    window.removeMapPins();
    window.filterHosing = housingType.value;
    window.updateMapPins(housingType.value);
    console.log(housingType.value);
  });
})();

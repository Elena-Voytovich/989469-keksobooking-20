'use strict';

(function () {
  // Получение случайного числа и элемента
  var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  var getRandomElement = function (items) {
    var randomIndex = getRandomNumber(0, items.length - 1);
    return items[randomIndex];
  };

  // Перемешивание массива
  var shuffleItems = function (items) {
    var itemsClone = items.slice();
    for (var i = 0; i < itemsClone.length; i++) {
      var swapIndex = getRandomNumber(0, items.length - 1);
      var currentItem = itemsClone[i];
      itemsClone[i] = itemsClone[swapIndex];
      itemsClone[swapIndex] = currentItem;
    }
    return itemsClone;
  };

  var shuffleAndSliceItems = function (items) {
    var shuffledItems = shuffleItems(items);
    return shuffledItems.slice(0, getRandomNumber(1, items.length));
  };

  window.utils = {
    getRandomNumber: getRandomNumber,
    getRandomElement: getRandomElement,
    shuffleAndSliceItems: shuffleAndSliceItems
  };
})();

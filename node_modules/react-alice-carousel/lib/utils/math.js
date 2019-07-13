'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIndexForItemHeightCalculation = exports.calculateSlidesOffset = exports.recalculateTranslatePosition = exports.recalculateCurrentSlideIndex = exports.isTheLastDotIndex = exports.getItemIndexForDotNavigation = exports.getDotsNavigationLength = exports.getMaxSwipeLimitIfNotInfinite = exports.shouldRecalculateSwipePosition = exports.getMinSwipeLimitIfNotInfinite = exports.getSlideOffset = exports.getMaxSwipeLimit = exports.getMinSwipeLimit = exports.recalculateCurrentIndexOnBeforeTouchEnd = exports.recalculatePositionOnBeforeTouchEnd = exports.getMinSwipePosition = exports.getMaxSwipePosition = exports.getFadeOutOffsetOnClick = exports.getFadeOutIndexOnClick = exports.getFadeOutOffsetOnDotClick = exports.setStartIndex = exports.getSlideIndexForMultipleItems = exports.getSlideIndexForNotMultipleItems = exports.getActiveSlideIndex = exports.getDotsLength = undefined;

var _index = require('./index');

var Utils = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var getDotsLength = exports.getDotsLength = function getDotsLength(slidesLength, items) {
  if (slidesLength && items) {
    var dots = Math.floor(slidesLength / items);
    return slidesLength % items === 0 ? dots - 1 : dots;
  }
  return 0;
};

var getActiveSlideIndex = exports.getActiveSlideIndex = function getActiveSlideIndex(isNextSlideDisabled) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var index = props.currentIndex,
      items = props.items,
      _props$slides = props.slides,
      slides = _props$slides === undefined ? [] : _props$slides;

  var currentIndex = index + items;
  var slidesLength = slides.length;

  return items === 1 ? getSlideIndexForNotMultipleItems(currentIndex, items, slidesLength) : getSlideIndexForMultipleItems(currentIndex, items, slidesLength, isNextSlideDisabled);
};

var getSlideIndexForNotMultipleItems = exports.getSlideIndexForNotMultipleItems = function getSlideIndexForNotMultipleItems(currentIndex, items, slidesLength) {
  if (currentIndex < items) return slidesLength - items;
  if (currentIndex > slidesLength) return 0;
  return currentIndex - 1;
};

var getSlideIndexForMultipleItems = exports.getSlideIndexForMultipleItems = function getSlideIndexForMultipleItems(currentIndex, items, slidesLength, isNextSlideDisabled) {
  var dotsLength = getDotsLength(slidesLength, items);

  if (currentIndex === slidesLength + items) return 0;
  if (isNextSlideDisabled || currentIndex < items && currentIndex !== 0) return dotsLength;
  if (currentIndex === 0) {
    return slidesLength % items === 0 ? dotsLength : dotsLength - 1;
  }

  return items > 0 ? Math.floor(currentIndex / items) - 1 : 0;
};

var setStartIndex = exports.setStartIndex = function setStartIndex(childrenLength, index) {
  var startIndex = index ? Math.abs(Math.ceil(index)) : 0;
  return Math.min(startIndex, childrenLength - 1) || 0;
};

var getFadeOutOffsetOnDotClick = exports.getFadeOutOffsetOnDotClick = function getFadeOutOffsetOnDotClick(itemIndex, currentIndex, itemWidth) {
  if (itemIndex < currentIndex) {
    return (currentIndex - itemIndex) * -itemWidth || 0;
  } else {
    return (itemIndex - currentIndex) * itemWidth || 0;
  }
};

var getFadeOutIndexOnClick = exports.getFadeOutIndexOnClick = function getFadeOutIndexOnClick(currentIndex) {
  return currentIndex === 0 ? 1 : currentIndex + 1;
};

var getFadeOutOffsetOnClick = exports.getFadeOutOffsetOnClick = function getFadeOutOffsetOnClick(direction, itemWidth) {
  return direction === 'next' ? itemWidth : -itemWidth;
};

var getMaxSwipePosition = exports.getMaxSwipePosition = function getMaxSwipePosition(items, itemWidth, slidesLength) {
  return (slidesLength + items) * itemWidth || 0;
};

var getMinSwipePosition = exports.getMinSwipePosition = function getMinSwipePosition(items, itemWidth) {
  return items * itemWidth || 0;
};

var recalculatePositionOnBeforeTouchEnd = exports.recalculatePositionOnBeforeTouchEnd = function recalculatePositionOnBeforeTouchEnd(items, itemWidth) {
  return -getMinSwipePosition(items, itemWidth);
};

var recalculateCurrentIndexOnBeforeTouchEnd = exports.recalculateCurrentIndexOnBeforeTouchEnd = function recalculateCurrentIndexOnBeforeTouchEnd(slidesLength, items) {
  return slidesLength - items || 0;
};

var getMinSwipeLimit = exports.getMinSwipeLimit = function getMinSwipeLimit(minSwipePosition) {
  var stagePadding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _stagePadding$padding = stagePadding.paddingLeft,
      paddingLeft = _stagePadding$padding === undefined ? 0 : _stagePadding$padding;

  var result = paddingLeft ? minSwipePosition + paddingLeft : 0;
  return result || 0;
};

var getMaxSwipeLimit = exports.getMaxSwipeLimit = function getMaxSwipeLimit(maxSwipePosition) {
  var stagePadding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _stagePadding$padding2 = stagePadding.paddingRight,
      paddingRight = _stagePadding$padding2 === undefined ? 0 : _stagePadding$padding2;

  var limit = paddingRight ? maxSwipePosition + paddingRight : maxSwipePosition;
  return limit || 0;
};

var getSlideOffset = exports.getSlideOffset = function getSlideOffset(itemWidth) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;

  return Math.min(itemWidth / 2, offset) || 0;
};

var getMinSwipeLimitIfNotInfinite = exports.getMinSwipeLimitIfNotInfinite = function getMinSwipeLimitIfNotInfinite(items, itemWidth) {
  return items * itemWidth - getSlideOffset(itemWidth) || 0;
};

var shouldRecalculateSwipePosition = exports.shouldRecalculateSwipePosition = function shouldRecalculateSwipePosition(currentPosition, minPosition, maxPosition) {
  return currentPosition >= 0 - minPosition || Math.abs(currentPosition) >= maxPosition;
};

var getMaxSwipeLimitIfNotInfinite = exports.getMaxSwipeLimitIfNotInfinite = function getMaxSwipeLimitIfNotInfinite(slidesLength, itemWidth) {
  return slidesLength * itemWidth + getSlideOffset(itemWidth) || 0;
};

var getDotsNavigationLength = exports.getDotsNavigationLength = function getDotsNavigationLength(slidesLength, items) {
  if (Number(items) !== 0) {
    return Math.ceil(slidesLength / items) || 0;
  }
  return 0;
};

var getItemIndexForDotNavigation = exports.getItemIndexForDotNavigation = function getItemIndexForDotNavigation(index, isTheLastIndex, slidesLength, itemsLength) {
  var result = isTheLastIndex ? slidesLength - itemsLength : index * itemsLength;
  return result || 0;
};

var isTheLastDotIndex = exports.isTheLastDotIndex = function isTheLastDotIndex(index, infinite, dotsLength) {
  return infinite === false && index === dotsLength - 1;
};

var recalculateCurrentSlideIndex = exports.recalculateCurrentSlideIndex = function recalculateCurrentSlideIndex() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var currentIndex = state.currentIndex,
      _state$slides = state.slides,
      slides = _state$slides === undefined ? [] : _state$slides;

  return currentIndex < 0 ? slides.length - 1 : 0;
};

var recalculateTranslatePosition = exports.recalculateTranslatePosition = function recalculateTranslatePosition() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var items = state.items,
      itemWidth = state.itemWidth,
      _state$stagePadding = state.stagePadding,
      stagePadding = _state$stagePadding === undefined ? {} : _state$stagePadding,
      _state$slides2 = state.slides,
      slides = _state$slides2 === undefined ? [] : _state$slides2;

  var maxSlidePosition = slides.length - 1;

  var currentIndex = state.currentIndex < 0 ? maxSlidePosition : 0;
  var nextIndex = currentIndex === 0 ? items : maxSlidePosition + items;

  if (stagePadding.paddingLeft || stagePadding.paddingRight) {
    return (nextIndex + 1) * -itemWidth || 0;
  }
  return nextIndex * -itemWidth || 0;
};

var calculateSlidesOffset = exports.calculateSlidesOffset = function calculateSlidesOffset(props, state) {
  var items = state.items,
      infinite = state.infinite;

  var offset = infinite && Utils.isStagePadding(props) ? 1 : 0;
  return items + offset;
};

var getIndexForItemHeightCalculation = exports.getIndexForItemHeightCalculation = function getIndexForItemHeightCalculation(currentIndex, slidesOffset) {
  return currentIndex + slidesOffset;
};
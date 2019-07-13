'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isVerticalTouchMoveDetected = exports.isVerticalTouchMoveDetected = function isVerticalTouchMoveDetected(e, deltaX, deltaY) {
  var gap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 32;

  var vertical = Math.abs(deltaY);
  var horizontal = Math.abs(deltaX);
  return vertical > horizontal && horizontal < gap;
};

var calculateSwipeIndex = exports.calculateSwipeIndex = function calculateSwipeIndex(itemWidth, position, direction) {
  var index = getSwipeIndex(position, itemWidth);
  var offset = getSwipeOffset(direction);
  return index + offset;
};

var getSwipeDirection = exports.getSwipeDirection = function getSwipeDirection(deltaX) {
  return deltaX > 0 ? 'LEFT' : 'RIGHT';
};

var getSwipeOffset = exports.getSwipeOffset = function getSwipeOffset(direction) {
  return direction === 'LEFT' ? 1 : 0;
};

var getSwipeIndex = exports.getSwipeIndex = function getSwipeIndex(position, itemWidth) {
  var swipePosition = Math.abs(position);
  return Math.floor(swipePosition / itemWidth);
};

var getSwipeIndexOnBeforeTouchEnd = exports.getSwipeIndexOnBeforeTouchEnd = function getSwipeIndexOnBeforeTouchEnd(swipeIndex, items) {
  return swipeIndex - items || 0;
};

var getSwipePositionOnBeforeTouchEnd = exports.getSwipePositionOnBeforeTouchEnd = function getSwipePositionOnBeforeTouchEnd(swipeIndex, itemWidth) {
  return swipeIndex * -itemWidth || 0;
};
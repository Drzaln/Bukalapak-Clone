'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemClassName = exports.isClonedItem = exports.isActiveItem = undefined;

var _index = require('./index');

var Utils = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var isActiveItem = exports.isActiveItem = function isActiveItem() {
  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var currentIndex = state.currentIndex,
      items = state.items,
      infinite = state.infinite,
      _state$stagePadding = state.stagePadding,
      stagePadding = _state$stagePadding === undefined ? {} : _state$stagePadding;


  if (infinite && (stagePadding.paddingLeft || stagePadding.paddingRight)) {
    currentIndex += 1;
  }

  var index = currentIndex + items;
  return i >= index && i < index + items;
};

var isClonedItem = exports.isClonedItem = function isClonedItem() {
  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var infinite = state.infinite,
      items = state.items,
      _state$slides = state.slides,
      slides = _state$slides === undefined ? [] : _state$slides;

  return infinite === false && (i < items || i > slides.length + items - 1);
};

var itemClassName = exports.itemClassName = function itemClassName() {
  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var animationProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var isActive = isActiveItem(i, state) ? ' __active' : '';
  var isCloned = isClonedItem(i, state) ? ' __cloned' : '';
  var isAnimated = Utils.isAnimatedItem(i, animationProps) ? ' animated animated-out fadeOut' : '';

  return 'alice-carousel__stage-item' + isActive + isCloned + isAnimated;
};
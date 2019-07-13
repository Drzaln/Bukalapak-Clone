'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAnimatedItem = exports.getTranslate3dPosition = undefined;
exports.animate = animate;
exports.getTranslateX = getTranslateX;
exports.getTransformMatrix = getTransformMatrix;

var _index = require('./index');

var Utils = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function animate(element) {
  var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var durationMs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (Utils.isElement(element)) {
    element.style['transition'] = 'transform ' + durationMs + 'ms ease-out';
    element.style['transform'] = 'translate3d(' + position + 'px, 0, 0)';
  }
  return element;
}

function getTranslateX(element) {
  var translateXIndex = 4;
  var matrix = getTransformMatrix(element);
  return matrix[translateXIndex] || '';
}

function getTransformMatrix(element) {
  if (Utils.isElement(element)) {
    var _ref = getComputedStyle(element) || {},
        _ref$transform = _ref.transform,
        transform = _ref$transform === undefined ? '' : _ref$transform;

    var matched = transform.match(/[0-9., -]+/) || [];
    if (typeof matched[0] === 'string') {
      return matched[0].split(',');
    }
  }
  return [];
}

var getTranslate3dPosition = exports.getTranslate3dPosition = function getTranslate3dPosition() {
  var currentIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var itemWidth = state.itemWidth,
      items = state.items,
      infinite = state.infinite,
      _state$stagePadding = state.stagePadding,
      stagePadding = _state$stagePadding === undefined ? {} : _state$stagePadding;


  if (infinite) {
    var paddingLeft = stagePadding.paddingLeft,
        paddingRight = stagePadding.paddingRight;

    if (paddingLeft || paddingRight) {
      currentIndex += 1;
    }
  }
  return (items + currentIndex) * -itemWidth || 0;
};

var isAnimatedItem = exports.isAnimatedItem = function isAnimatedItem() {
  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var animationProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var allowFadeOutAnimation = animationProps.allowFadeOutAnimation,
      fadeOutIndex = animationProps.fadeOutIndex;

  return !!allowFadeOutAnimation && fadeOutIndex === i;
};
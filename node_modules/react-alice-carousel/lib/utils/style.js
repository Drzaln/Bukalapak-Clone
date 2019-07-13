'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWrapperStyles = exports.getStageStyles = exports.getDefaultStyles = exports.itemStyles = exports.getIntermediateTransitionProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require('./index');

var Utils = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var getIntermediateTransitionProps = exports.getIntermediateTransitionProps = function getIntermediateTransitionProps(condition, duration) {
  return condition ? { fadeoutAnimationProcessing: true, style: { transition: 'transform 0ms ease-out' } } : { style: { transition: 'transform ' + duration + 'ms ease-out' } };
};

var itemStyles = exports.itemStyles = function itemStyles(i, state, animationProps) {
  var fadeOutOffset = animationProps.fadeOutOffset;
  var itemWidth = state.itemWidth,
      duration = state.duration;


  return Utils.isAnimatedItem(i, animationProps) ? { transform: 'translateX(' + fadeOutOffset + 'px)', animationDuration: duration + 'ms', width: itemWidth + 'px' } : { width: itemWidth + 'px' };
};

var getDefaultStyles = exports.getDefaultStyles = function getDefaultStyles() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return { transition: 'transform ' + duration + 'ms ease-out' };
};

var getStageStyles = exports.getStageStyles = function getStageStyles() {
  var nextStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var currentStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _nextStyles$translate = nextStyles.translate3d,
      translate3d = _nextStyles$translate === undefined ? 0 : _nextStyles$translate,
      height = nextStyles.height;

  var transform = 'translate3d(' + translate3d + 'px, 0, 0)';

  return _extends({}, currentStyles, { transform: transform, height: height });
};

var getWrapperStyles = exports.getWrapperStyles = function getWrapperStyles(element) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _Utils$getStagePaddin = Utils.getStagePadding(props),
      paddingLeft = _Utils$getStagePaddin.paddingLeft,
      paddingRight = _Utils$getStagePaddin.paddingRight;

  var height = props.autoHeight && Utils.getGalleryItemHeight(element, props, state);
  var transition = height && 'height ' + state.duration + 'ms ease-out';

  return {
    height: height,
    transition: transition,
    paddingLeft: paddingLeft + 'px',
    paddingRight: paddingRight + 'px'
  };
};
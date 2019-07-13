'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideInfo = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../utils');

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlideInfo = exports.SlideInfo = function SlideInfo(_ref) {
  var currentIndex = _ref.currentIndex,
      slidesLength = _ref.slidesLength;

  var info = Utils.getSlideInfo(currentIndex, slidesLength);

  return _react2.default.createElement(
    'div',
    { className: 'alice-carousel__slide-info' },
    _react2.default.createElement(
      'span',
      { className: 'alice-carousel__slide-info-item' },
      info.slideIndex
    ),
    _react2.default.createElement(
      'span',
      { className: 'alice-carousel__slide-info-item alice-carousel__slide-info-item--separator' },
      '/'
    ),
    _react2.default.createElement(
      'span',
      { className: 'alice-carousel__slide-info-item' },
      info.slidesLength
    )
  );
};

SlideInfo.propTypes = {
  currentIndex: _propTypes2.default.number.isRequired,
  slidesLength: _propTypes2.default.number.isRequired
};
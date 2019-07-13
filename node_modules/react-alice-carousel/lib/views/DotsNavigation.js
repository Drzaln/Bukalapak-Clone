'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DotsNavigation = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../utils');

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DotsNavigation = exports.DotsNavigation = function DotsNavigation(_ref) {
  var state = _ref.state,
      _onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave;
  var slides = state.slides,
      items = state.items,
      infinite = state.infinite;

  var _Utils$itemInfo = Utils.itemInfo(state),
      isNextSlideDisabled = _Utils$itemInfo.isNextSlideDisabled;

  var dotsLength = Utils.getDotsNavigationLength(slides.length, items);

  return _react2.default.createElement(
    'ul',
    { className: 'alice-carousel__dots' },
    slides.map(function (item, i) {
      if (i < dotsLength) {
        var isTheLastDotIndex = Utils.isTheLastDotIndex(i, infinite, dotsLength);
        var itemIndex = Utils.getItemIndexForDotNavigation(i, isTheLastDotIndex, slides.length, items);
        var activeIndex = Utils.getActiveSlideIndex(isNextSlideDisabled, state);
        var className = activeIndex === i ? ' __active' : '';

        return _react2.default.createElement('li', {
          key: 'dot-item-' + i,
          onClick: function onClick() {
            return _onClick(itemIndex);
          },
          onMouseEnter: onMouseEnter,
          onMouseLeave: onMouseLeave,
          className: 'alice-carousel__dots-item' + className
        });
      }
    })
  );
};

DotsNavigation.propTypes = {
  state: _propTypes2.default.object.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  onMouseEnter: _propTypes2.default.func.isRequired,
  onMouseLeave: _propTypes2.default.func.isRequired
};
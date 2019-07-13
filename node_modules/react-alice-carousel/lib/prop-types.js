'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = {
  items: _propTypes2.default.array,
  children: _propTypes2.default.array,
  onSlideChange: _propTypes2.default.func,
  onSlideChanged: _propTypes2.default.func,
  onInitialized: _propTypes2.default.func,
  onResized: _propTypes2.default.func,
  shouldHandleResizeEvent: _propTypes2.default.func,
  keysControlDisabled: _propTypes2.default.bool,
  playButtonEnabled: _propTypes2.default.bool,
  buttonsDisabled: _propTypes2.default.bool,
  dotsDisabled: _propTypes2.default.bool,
  swipeDisabled: _propTypes2.default.bool,
  responsive: _propTypes2.default.object,
  stagePadding: _propTypes2.default.object,
  duration: _propTypes2.default.number,
  startIndex: _propTypes2.default.number,
  slideToIndex: _propTypes2.default.number,
  autoPlay: _propTypes2.default.bool,
  infinite: _propTypes2.default.bool,
  showSlideInfo: _propTypes2.default.bool,
  mouseDragEnabled: _propTypes2.default.bool,
  fadeOutAnimation: _propTypes2.default.bool,
  autoPlayInterval: _propTypes2.default.number,
  autoPlayDirection: _propTypes2.default.string,
  disableAutoPlayOnAction: _propTypes2.default.bool,
  stopAutoPlayOnHover: _propTypes2.default.bool,
  preventEventOnTouchMove: _propTypes2.default.bool,
  autoHeight: _propTypes2.default.bool
};

var defaultProps = exports.defaultProps = {
  items: [],
  children: [],
  responsive: {},
  stagePadding: {},
  duration: 250,
  startIndex: 0,
  slideToIndex: 0,
  autoPlay: false,
  infinite: true,
  dotsDisabled: false,
  showSlideInfo: false,
  swipeDisabled: false,
  autoPlayInterval: 250,
  buttonsDisabled: false,
  mouseDragEnabled: false,
  fadeOutAnimation: false,
  playButtonEnabled: false,
  autoPlayDirection: 'ltr',
  keysControlDisabled: false,
  disableAutoPlayOnAction: false,
  stopAutoPlayOnHover: true,
  preventEventOnTouchMove: false,
  autoHeight: false
};
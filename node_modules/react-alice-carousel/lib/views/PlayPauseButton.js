'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayPauseButton = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayPauseButton = exports.PlayPauseButton = function PlayPauseButton(_ref) {
  var isPlaying = _ref.isPlaying,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'div',
    { className: 'alice-carousel__play-btn' },
    _react2.default.createElement(
      'div',
      { className: 'alice-carousel__play-btn-wrapper' },
      _react2.default.createElement('div', { onClick: onClick, className: 'alice-carousel__play-btn-item' + (isPlaying ? ' __pause' : '') })
    )
  );
};

PlayPauseButton.propTypes = {
  isPlaying: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};
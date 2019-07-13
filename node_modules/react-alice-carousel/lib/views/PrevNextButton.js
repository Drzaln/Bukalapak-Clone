'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrevNextButton = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrevNextButton = exports.PrevNextButton = function PrevNextButton(_ref) {
  var name = _ref.name,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave;

  var className = 'alice-carousel__' + name + '-btn-item' + (disabled ? ' __inactive' : '');

  return _react2.default.createElement(
    'div',
    { className: 'alice-carousel__' + name + '-btn' },
    _react2.default.createElement(
      'div',
      { className: 'alice-carousel__' + name + '-btn-wrapper', onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
      _react2.default.createElement(
        'p',
        { className: className, onClick: onClick },
        _react2.default.createElement('span', { 'data-area': name })
      )
    )
  );
};

PrevNextButton.propTypes = {
  name: _propTypes2.default.oneOf(['next', 'prev']),
  disabled: _propTypes2.default.bool.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  onMouseEnter: _propTypes2.default.func.isRequired,
  onMouseLeave: _propTypes2.default.func.isRequired
};
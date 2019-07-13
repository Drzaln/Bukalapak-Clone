'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StageItem = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StageItem = exports.StageItem = function StageItem(_ref) {
  var item = _ref.item,
      className = _ref.className,
      styles = _ref.styles;

  return _react2.default.createElement(
    'li',
    { style: styles, className: className },
    item
  );
};

StageItem.propTypes = {
  item: _propTypes2.default.node,
  className: _propTypes2.default.string.isRequired,
  styles: _propTypes2.default.object.isRequired
};
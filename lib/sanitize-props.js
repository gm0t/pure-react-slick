'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sanitizeProps;

var _assign = require('./assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sanitizeProps(props, propTypes) {
  var sanitizedProps = (0, _assign2.default)({}, props);
  for (var prop in propTypes) {
    if (propTypes.hasOwnProperty(prop)) {
      delete sanitizedProps[prop];
    }
  }

  return sanitizedProps;
}
module.exports = exports['default'];
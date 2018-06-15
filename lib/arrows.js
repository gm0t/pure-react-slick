'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arrow = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.PrevArrow = PrevArrow;
exports.NextArrow = NextArrow;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Arrow = exports.Arrow = function (_Component) {
  _inherits(Arrow, _Component);

  function Arrow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Arrow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Arrow.__proto__ || Object.getPrototypeOf(Arrow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Arrow, [{
    key: '_isDisabled',
    value: function _isDisabled(to) {
      return !this.state || !this.state[to + 'Allowed'];
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.unbind = this.context.listen(function (data) {
        return _this2.setState(data);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbind();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          to = _props.to,
          children = _props.children,
          disabledClassName = _props.disabledClassName;

      var isDisabled = this._isDisabled(to);
      var onClick = isDisabled ? null : this.context[to];
      var slidesCount = this.state.slidesCount;

      if (slidesCount <= 1) {
        return null;
      }

      var className = this.props.className || '';
      if (this._isDisabled(to)) {
        className += ' ' + disabledClassName;
      }

      return _react2.default.createElement(
        'div',
        { className: className, onClick: onClick },
        children
      );
    }
  }]);

  return Arrow;
}(_react.Component);

Arrow.propTypes = {
  to: _propTypes2.default.oneOf(['prev', 'next']).isRequired,
  className: _propTypes2.default.string,
  disabledClassName: _propTypes2.default.string
};
Arrow.contextTypes = {
  listen: _propTypes2.default.func.isRequired,
  next: _propTypes2.default.func.isRequired,
  prev: _propTypes2.default.func.isRequired
};
Arrow.defaultProps = {
  className: 'slick-arrow',
  disabledClassName: 'disabled'
};
function PrevArrow(props) {
  return _react2.default.createElement(Arrow, _extends({}, props, { to: 'prev' }));
}
PrevArrow.defaultProps = {
  className: 'slick-arrow slick-prev',
  to: 'prev'
};

function NextArrow(props) {
  return _react2.default.createElement(Arrow, props);
}
NextArrow.defaultProps = {
  className: 'slick-arrow slick-next',
  to: 'next'
};
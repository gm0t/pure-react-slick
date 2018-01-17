'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sanitizeProps = require('./sanitize-props');

var _sanitizeProps2 = _interopRequireDefault(_sanitizeProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dots = function (_Component) {
  _inherits(Dots, _Component);

  function Dots() {
    _classCallCheck(this, Dots);

    var _this = _possibleConstructorReturn(this, (Dots.__proto__ || Object.getPrototypeOf(Dots)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Dots, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.setState(this.context.getState());
      this.unbind = this.context.listen(function (state) {
        return _this2.setState(state);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.unbind) {
        this.unbind();
      }
    }
  }, {
    key: 'renderDot',
    value: function renderDot(i, isActive, toScroll) {
      var _this3 = this;

      var className = isActive ? this.props.activeClassName : null;

      return _react2.default.createElement(
        'li',
        { key: i, onClick: function onClick() {
            return _this3.context.goTo(i * toScroll);
          }, className: className },
        _react2.default.createElement(
          'button',
          null,
          i
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          slidesCount = _state.slidesCount,
          slidesToScroll = _state.slidesToScroll,
          slidesToShow = _state.slidesToShow,
          currentSlide = _state.currentSlide,
          infinite = _state.infinite;


      if (currentSlide >= slidesCount) {
        currentSlide = currentSlide - slidesCount;
      } else if (currentSlide < 0) {
        currentSlide = slidesCount + currentSlide;
      } else {
        currentSlide += Math.min(slidesToShow, slidesToScroll) - 1;
      }

      var dotsCount = void 0;
      if (infinite) {
        dotsCount = Math.ceil(slidesCount / Math.min(slidesToShow, slidesToScroll));
      } else {
        dotsCount = 1 + Math.ceil((slidesCount - slidesToShow) / slidesToScroll);
      }

      var dots = [],
          isActive = void 0,
          hasActive = false;
      for (var i = 0; i < dotsCount; i += 1) {
        isActive = !hasActive && currentSlide >= i * slidesToScroll && currentSlide < (i + 1) * slidesToScroll;
        dots.push(this.renderDot(i, isActive, slidesToScroll));
        hasActive = hasActive || isActive;
      }

      return _react2.default.createElement(
        'ul',
        (0, _sanitizeProps2.default)(this.props, Dots.propTypes),
        dots
      );
    }
  }]);

  return Dots;
}(_react.Component);

Dots.contextTypes = {
  getState: _propTypes2.default.func.isRequired,
  listen: _propTypes2.default.func.isRequired,
  goTo: _propTypes2.default.func.isRequired
};
Dots.propTypes = {
  activeClassName: _propTypes2.default.string
};
Dots.defaultProps = {
  className: 'slick-dots',
  activeClassName: 'slick-active'
};
exports.default = Dots;
module.exports = exports['default'];
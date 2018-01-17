'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sliderApi = require('./slider-api');

var _sliderApi2 = _interopRequireDefault(_sliderApi);

var _sanitizeProps = require('./sanitize-props');

var _sanitizeProps2 = _interopRequireDefault(_sanitizeProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
  }

  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var container = this.refs.container;
      this.api.updateContainer(container.offsetWidth, container.offsetHeight);
    }
  }, {
    key: 'buildNewApi',
    value: function buildNewApi() {
      return new _sliderApi2.default(this.props);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var _context;

      if (!this.api) {
        this.api = this.buildNewApi();
      }

      return {
        getState: (_context = this.api).getState.bind(_context),
        listen: (_context = this.api).listen.bind(_context),
        prev: (_context = this.api).prev.bind(_context),
        next: (_context = this.api).next.bind(_context),
        goTo: (_context = this.api).goTo.bind(_context),
        updateSlides: (_context = this.api).updateSlides.bind(_context)
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nprops) {
      this.api.configure(nprops);
    }
  }, {
    key: 'render',
    value: function render() {
      var divProps = (0, _sanitizeProps2.default)(this.props, Slider.propTypes);
      return _react2.default.createElement(
        'div',
        _extends({}, divProps, { ref: 'container' }),
        this.props.children
      );
    }
  }]);

  return Slider;
}(_react.Component);

Slider.childContextTypes = {
  getState: _react.PropTypes.func,
  goTo: _react.PropTypes.func,
  prev: _react.PropTypes.func,
  next: _react.PropTypes.func,
  listen: _react.PropTypes.func,
  updateSlides: _react.PropTypes.func
};
Slider.propTypes = {
  // basic params
  infinite: _react.PropTypes.bool,
  slidesToShow: _react.PropTypes.number,
  slidesToScroll: _react.PropTypes.number,
  vertical: _react.PropTypes.bool,
  transitionSpeed: _react.PropTypes.number,
  transitionTimingFn: _react.PropTypes.string,
  swipe: _react.PropTypes.bool,
  draggable: _react.PropTypes.bool,
  edgeFriction: _react.PropTypes.number,
  touchThreshold: _react.PropTypes.number,
  touchMove: _react.PropTypes.bool,
  autoPlay: _react.PropTypes.bool,
  autoPlaySpeed: _react.PropTypes.number,

  // event handlers
  beforeChange: _react.PropTypes.func,
  afterChange: _react.PropTypes.func
};
Slider.defaultProps = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  vertical: false,
  transitionSpeed: 300,
  transitionTimingFn: 'linear',
  swipe: true,
  draggable: true,
  edgeFriction: 0.15,
  touchThreshold: 5,
  touchMove: true,
  autoPlay: false,
  autoPlaySpeed: 2000
};
exports.default = Slider;
module.exports = exports['default'];
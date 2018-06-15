'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sliderApi = require('./slider-api');

var _sliderApi2 = _interopRequireDefault(_sliderApi);

var _sanitizeProps = require('./sanitize-props');

var _sanitizeProps2 = _interopRequireDefault(_sanitizeProps);

var _events = require('./helpers/events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var findActiveSlides = function findActiveSlides(slides, params) {
  var currentSlide = params.currentSlide,
      slidesToShow = params.slidesToShow,
      slidesToScroll = params.slidesToScroll,
      infinite = params.infinite;

  var idx = currentSlide;
  if (infinite) {
    idx += Math.max(slidesToShow, slidesToScroll);
  }

  var active = [];
  var indicies = [];
  for (var i = 0; i < slidesToShow; i += 1) {
    if (i + idx >= slides.length) {
      idx = infinite ? slidesToShow : 0;
    }
    active.push(slides[idx + i]);
    indicies.push(idx + i);
  }

  return active;
};

var propsToRemove = ['infinite', 'slidesToShow', 'slidesToScroll', 'vertical', 'variedHeight', 'transitionSpeed', 'transitionTimingFn', 'swipe', 'draggable', 'edgeFriction', 'touchThreshold', 'touchMove', 'autoPlay', 'autoPlaySpeed', 'containerCheckInterval', 'forceContainerUpdate', 'beforeChange', 'afterChange'];

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slider.__proto__ || Object.getPrototypeOf(Slider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.bindContainer = function (el) {
      _this.container = el;
    }, _this.onApiChange = function (state) {
      _this.setState(state, _this.updateContainerHeightFromSlide);
    }, _this.updateContainerHeightFromSlide = function () {
      var _this2 = _this,
          container = _this2.container;
      var initialized = _this.state.initialized;
      var variedHeight = _this.props.variedHeight;

      if (!container || !initialized || !variedHeight) {
        return;
      }

      var slides = container.querySelector('[data-react-slip="slides"]');
      if (!slides) {
        return;
      }
      var activeSlides = findActiveSlides(slides.children, _this.state);
      var maxHeight = -Infinity;
      for (var i = 0, l = activeSlides.length; i < l; i += 1) {
        maxHeight = Math.max(activeSlides[i].offsetHeight, maxHeight);
      }

      if (maxHeight <= 0) {
        return;
      }

      var style = container.getAttribute('style') || '';
      if (style.indexOf('height:') === -1) {
        container.setAttribute('style', 'height: ' + maxHeight + 'px; ' + style);
        return;
      }
      container.setAttribute('style', style.replace(/height:\s?[^;]+;?/gi, 'height: ' + maxHeight + 'px;'));
    }, _this.updateContainerSize = function () {
      if (!_this.container) {
        return;
      }

      var variedHeight = _this.props.variedHeight;
      var _this3 = _this,
          container = _this3.container;

      if (variedHeight) {
        _this.updateContainerHeightFromSlide();
      }
      var offsetWidth = container.offsetWidth,
          offsetHeight = container.offsetHeight;

      _this.api.updateContainer(offsetWidth, offsetHeight);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _events.listen)(window, ['resize', 'pageshow', 'load'], this.updateContainerSize);
      this.updateContainerSize();
      if (this.props.containerCheckInterval > 0) {
        this.containerWatchInterval = window.setInterval(this.updateContainerSize, this.props.containerCheckInterval);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.clearInterval(this.containerWatchInterval);
      if (this.unbind) {
        this.unbind();
      }
      (0, _events.unlisten)(window, ['resize', 'pageshow', 'load'], this.updateContainerSize);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var currentProps = this.props;
      if (prevProps.forceContainerUpdate !== currentProps.forceContainerUpdate) {
        this.updateContainerSize();
      }
    }
  }, {
    key: 'buildNewApi',
    value: function buildNewApi() {
      var api = new _sliderApi2.default(this.props);
      this.unbind = api.listen(this.onApiChange);
      return api;
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
      var divProps = (0, _sanitizeProps2.default)(this.props, propsToRemove);

      return _react2.default.createElement(
        'div',
        _extends({}, divProps, { ref: this.bindContainer }),
        this.props.children
      );
    }
  }]);

  return Slider;
}(_react.Component);

Slider.childContextTypes = {
  getState: _propTypes2.default.func,
  goTo: _propTypes2.default.func,
  prev: _propTypes2.default.func,
  next: _propTypes2.default.func,
  listen: _propTypes2.default.func,
  updateSlides: _propTypes2.default.func
};
Slider.propTypes = {
  // basic params
  infinite: _propTypes2.default.bool,
  slidesToShow: _propTypes2.default.number,
  slidesToScroll: _propTypes2.default.number,
  vertical: _propTypes2.default.bool,
  variedHeight: _propTypes2.default.bool,
  transitionSpeed: _propTypes2.default.number,
  transitionTimingFn: _propTypes2.default.string,
  swipe: _propTypes2.default.bool,
  draggable: _propTypes2.default.bool,
  edgeFriction: _propTypes2.default.number,
  touchThreshold: _propTypes2.default.number,
  touchMove: _propTypes2.default.bool,
  autoPlay: _propTypes2.default.bool,
  autoPlaySpeed: _propTypes2.default.number,
  containerCheckInterval: _propTypes2.default.number,
  forceContainerUpdate: _propTypes2.default.any,

  // event handlers
  beforeChange: _propTypes2.default.func,
  afterChange: _propTypes2.default.func
};
Slider.defaultProps = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  vertical: false,
  variedHeight: false,
  transitionSpeed: 300,
  transitionTimingFn: 'linear',
  swipe: true,
  draggable: true,
  edgeFriction: 0.15,
  touchThreshold: 5,
  touchMove: true,
  autoPlay: false,
  autoPlaySpeed: 2000,
  containerCheckInterval: 4000
};
exports.default = Slider;
module.exports = exports['default'];
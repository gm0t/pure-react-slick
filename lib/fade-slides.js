'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FadeSlides = function (_Component) {
  _inherits(FadeSlides, _Component);

  function FadeSlides() {
    _classCallCheck(this, FadeSlides);

    var _this = _possibleConstructorReturn(this, (FadeSlides.__proto__ || Object.getPrototypeOf(FadeSlides)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(FadeSlides, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.update;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.setState(this.context.getState());
      this.context.updateSlides(this.props.children);
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

    // renderers

  }, {
    key: 'renderSlide',
    value: function renderSlide(slide, idx, isPrev, isNext) {
      var _state = this.state,
          slidesToShow = _state.slidesToShow,
          currentSlide = _state.currentSlide;

      var style = slide.props.style || {};
      style.width = this.state.slideWidth + 'px';

      var className = slide.props.className || '';
      if (isPrev || isNext) {
        className += ' animation_' + (isNext ? 'in' : 'out');
      }

      if (slidesToShow > 1) {
        className += ' position_' + (idx - currentSlide);
      }

      return (0, _react.cloneElement)(slide, {
        key: idx,
        style: style,
        className: className
      });
    }
  }, {
    key: 'getSlidesIndexes',
    value: function getSlidesIndexes(slidesCount, index, slidesToShow) {
      var slides = [index];
      while (--slidesToShow && slidesCount > slidesToShow + index) {
        slides.push(slidesToShow + index);
      }

      return slides;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (!this.state.initialized) {
        return null;
      }

      var _state2 = this.state,
          slidesToShow = _state2.slidesToShow,
          lastSlide = _state2.lastSlide,
          currentSlide = _state2.currentSlide;

      var children = _react.Children.toArray(this.props.children);
      var prev = lastSlide === currentSlide ? [] : this.getSlidesIndexes(children.length, lastSlide, slidesToShow);
      var next = this.getSlidesIndexes(children.length, currentSlide, slidesToShow);

      return _react2.default.createElement(
        'div',
        _extends({}, this.props, { style: { width: '100%', height: '100%' } }),
        children.map(function (slide, i) {
          return _this3.renderSlide(slide, i, ~prev.indexOf(i), ~next.indexOf(i));
        })
      );
    }
  }]);

  return FadeSlides;
}(_react.Component);

FadeSlides.propTypes = {};
FadeSlides.contextTypes = {
  getState: _react.PropTypes.func.isRequired,
  listen: _react.PropTypes.func.isRequired,
  updateSlides: _react.PropTypes.func.isRequired
};
FadeSlides.defaultProps = {};
exports.default = FadeSlides;
module.exports = exports['default'];
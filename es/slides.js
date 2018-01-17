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

// TODO: rename to swipe-slides

var Slides = function (_Component) {
  _inherits(Slides, _Component);

  function Slides() {
    _classCallCheck(this, Slides);

    var _this = _possibleConstructorReturn(this, (Slides.__proto__ || Object.getPrototypeOf(Slides)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Slides, [{
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

    // helpers

  }, {
    key: 'buildTrackTransform',
    value: function buildTrackTransform() {
      var _state = this.state,
          vertical = _state.vertical,
          offset = _state.offset;

      return 'translate3d(' + (vertical ? '0px, ' + offset + 'px' : offset + 'px, 0px') + ', 0px)';
    }
  }, {
    key: 'buildTrackTransition',
    value: function buildTrackTransition() {
      if (!this.state.animate) {
        return '';
      }

      var speed = this.state.transitionSpeed / 1000;
      return 'transform ' + speed + 's ease';
    }

    // renderers

  }, {
    key: 'renderSlide',
    value: function renderSlide(slideWidth, slide, key) {
      var style = slide.props.style || {};
      style.width = slideWidth + 'px';

      return (0, _react.cloneElement)(slide, {
        key: key,
        style: style
      });
    }
  }, {
    key: 'renderClones',
    value: function renderClones(pos, slides, width) {
      var _this3 = this;

      return slides.map(function (slide, i) {
        return _this3.renderSlide(width, slide, 'c-' + pos + i);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      if (!this.state.initialized) {
        return null;
      }

      var _state2 = this.state,
          containerWidth = _state2.containerWidth,
          slideWidth = _state2.slideWidth,
          infinite = _state2.infinite,
          slidesToShow = _state2.slidesToShow,
          slidesToScroll = _state2.slidesToScroll;

      var children = _react.Children.toArray(this.props.children);
      var style = this.props.style || {};
      style.width = children.length * containerWidth + (infinite ? slidesToShow * 2 * containerWidth : 0);
      style.transform = this.buildTrackTransform();
      style.WebKitTransform = style.transform;
      style.transition = this.buildTrackTransition();
      style.WebkitTransition = style.transition;

      var beforeClones = void 0,
          afterClones = void 0;
      if (infinite) {
        beforeClones = this.renderClones('b', children.slice(-Math.max(slidesToShow, slidesToScroll)), slideWidth);
        afterClones = this.renderClones('a', children.slice(0, Math.max(slidesToShow, slidesToScroll)), slideWidth);
      }

      return _react2.default.createElement(
        'div',
        _extends({}, this.props, { style: style }),
        beforeClones,
        children.map(function (slide, i) {
          return _this4.renderSlide(slideWidth, slide, i);
        }, this),
        afterClones
      );
    }
  }]);

  return Slides;
}(_react.Component);

Slides.propTypes = {};
Slides.contextTypes = {
  getState: _react.PropTypes.func.isRequired,
  listen: _react.PropTypes.func.isRequired,
  updateSlides: _react.PropTypes.func.isRequired
};
Slides.defaultProps = {};
exports.default = Slides;
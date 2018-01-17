(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactSlip"] = factory(require("react"));
	else
		root["ReactSlip"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Dots = exports.FadeSlides = exports.Slides = exports.Slider = exports.NextArrow = exports.PrevArrow = exports.Arrow = undefined;

	var _arrows = __webpack_require__(3);

	Object.defineProperty(exports, 'Arrow', {
	  enumerable: true,
	  get: function get() {
	    return _arrows.Arrow;
	  }
	});
	Object.defineProperty(exports, 'PrevArrow', {
	  enumerable: true,
	  get: function get() {
	    return _arrows.PrevArrow;
	  }
	});
	Object.defineProperty(exports, 'NextArrow', {
	  enumerable: true,
	  get: function get() {
	    return _arrows.NextArrow;
	  }
	});

	var _slider = __webpack_require__(8);

	var _slider2 = _interopRequireDefault(_slider);

	var _slides = __webpack_require__(9);

	var _slides2 = _interopRequireDefault(_slides);

	var _fadeSlides = __webpack_require__(6);

	var _fadeSlides2 = _interopRequireDefault(_fadeSlides);

	var _dots = __webpack_require__(5);

	var _dots2 = _interopRequireDefault(_dots);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Slider = _slider2.default;
	exports.Slides = _slides2.default;
	exports.FadeSlides = _fadeSlides2.default;
	exports.Dots = _dots2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sanitizeProps;

	var _assign = __webpack_require__(4);

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Arrow = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.PrevArrow = PrevArrow;
	exports.NextArrow = NextArrow;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Arrow = exports.Arrow = function (_Component) {
	  _inherits(Arrow, _Component);

	  function Arrow() {
	    _classCallCheck(this, Arrow);

	    return _possibleConstructorReturn(this, (Arrow.__proto__ || Object.getPrototypeOf(Arrow)).apply(this, arguments));
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
	  to: _react.PropTypes.oneOf(['prev', 'next']).isRequired,
	  className: _react.PropTypes.string,
	  disabledClassName: _react.PropTypes.string
	};
	Arrow.contextTypes = {
	  listen: _react.PropTypes.func.isRequired,
	  next: _react.PropTypes.func.isRequired,
	  prev: _react.PropTypes.func.isRequired
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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	if (typeof Object.assign === 'function') {
	  module.exports = Object.assign;
	} else {
	  module.exports = function assign(target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };
	}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _sanitizeProps = __webpack_require__(2);

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
	  getState: _react.PropTypes.func.isRequired,
	  listen: _react.PropTypes.func.isRequired,
	  goTo: _react.PropTypes.func.isRequired
	};
	Dots.propTypes = {
	  activeClassName: _react.PropTypes.string
	};
	Dots.defaultProps = {
	  className: 'slick-dots',
	  activeClassName: 'slick-active'
	};
	exports.default = Dots;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

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

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SliderApi = function () {
	  function SliderApi(config) {
	    var _this = this;

	    _classCallCheck(this, SliderApi);

	    this.listen = function (cb) {
	      _this.listeners.push(cb);
	      return function () {
	        _this.listeners.splice(_this.listeners.indexOf(cb), 1);
	      };
	    };

	    this.getState = function () {
	      return {
	        slidesCount: _this.slidesCount,
	        slidesToShow: _this.slidesToShow,
	        slidesToScroll: _this.slidesToScroll,
	        slideWidth: _this.slideWidth,
	        slideHeight: _this.slideHeight,
	        containerWidth: _this.containerWidth,
	        offset: _this.offset(),
	        initialized: _this.isInitialized(),

	        // navigation status
	        pagesCount: _this.pagesCount(),
	        animate: _this.animate,
	        infinite: _this.infinite,
	        transitionSpeed: _this.transitionSpeed,
	        transitionTimingFn: _this.transitionTimingFn,
	        currentSlide: _this.currentSlide,
	        lastSlide: _this.lastSlide,
	        nextAllowed: _this.isNextAllowed(),
	        prevAllowed: _this.isPrevAllowed()
	      };
	    };

	    this.isInitialized = function () {
	      return _this.containerHeight !== void 0 && _this.containerWidth !== void 0 && _this.slidesCount !== void 0;
	    };

	    this.initialized = false;
	    this.animate = true;
	    this.listeners = [];
	    this.configure(config);
	  }

	  _createClass(SliderApi, [{
	    key: "offset",
	    value: function offset() {
	      var slideSize = this.verical ? this.slideHeight : this.slideWidth;
	      var offset = -this.currentSlide * slideSize;
	      var clonesCount = Math.max(this.slidesToShow, this.slidesToScroll);

	      return this.infinite ? offset - clonesCount * slideSize : offset;
	    }
	  }, {
	    key: "pagesCount",
	    value: function pagesCount() {
	      if (!this.infinite) {
	        return 1 + Math.ceil((this.slidesCount - this.slidesToShow) / this.slidesToScroll);
	      }
	    }
	  }, {
	    key: "isNextAllowed",
	    value: function isNextAllowed() {
	      return this.infinite || this.currentSlide + this.slidesToShow < this.slidesCount;
	    }
	  }, {
	    key: "isPrevAllowed",
	    value: function isPrevAllowed() {
	      return this.infinite || this.currentSlide !== 0;
	    }
	  }, {
	    key: "updateSlideSize",


	    /////////
	    // API //
	    /////////

	    value: function updateSlideSize() {
	      this.slideWidth = this.containerWidth / this.slidesToShow;
	      this.slideHeight = this.containerHeight / this.slidesToShow;
	    }
	  }, {
	    key: "updateSlides",
	    value: function updateSlides(slides) {
	      this.slidesCount = slides.length;
	      this.triggerChange();
	    }
	  }, {
	    key: "updateContainer",
	    value: function updateContainer(width, height) {
	      this.containerWidth = width;
	      this.containerHeight = height;
	      this.updateSlideSize();
	      this.triggerChange();
	    }
	  }, {
	    key: "configure",
	    value: function configure(config) {
	      this.infinite = config.infinite;
	      this.currentSlide = config.currentSlide || 0;
	      this.lastSlide = this.currentSlide;
	      this.slidesToShow = config.slidesToShow || 1;
	      this.slidesToScroll = config.slidesToScroll || 1;
	      this.transitionSpeed = config.transitionSpeed;
	      this.transitionTimingFn = config.transitionTimingFn;
	      this.updateSlideSize();
	      this.triggerChange();
	    }

	    /**
	     * Navigates to a slide by index
	     * @param  {Number} slide slide index
	     * @param  {Boolean} [false] use or not transition for animation
	     * @return {Boolean} true if slide was changed and false if wasn't
	     */

	  }, {
	    key: "goTo",
	    value: function goTo(slide, dontAnimate) {
	      var slidesToShow = this.slidesToShow,
	          slidesCount = this.slidesCount;

	      if (!this.infinite) {
	        if (slide > slidesCount - slidesToShow) {
	          slide = this.slidesCount - slidesToShow;
	        } else if (slide < 0) {
	          slide = 0;
	        }
	      }

	      this.lastSlide = this.currentSlide;
	      this.currentSlide = slide;
	      this.animate = !dontAnimate;
	      this.triggerChange();
	      return true;
	    }

	    /**
	     * Navigates to the next slide (according to options: infinite and slidesToShow)
	     * @return {Boolean} true if slide was changed and false if wasn't
	     */

	  }, {
	    key: "next",
	    value: function next() {
	      if (!this.isNextAllowed()) {
	        return false;
	      }

	      var currentSlide = this.currentSlide,
	          slidesToShow = this.slidesToShow,
	          slidesToScroll = this.slidesToScroll,
	          slidesCount = this.slidesCount;

	      var slide = currentSlide + slidesToScroll;
	      if (!this.infinite) {
	        return this.goTo(slide);
	      }

	      if (slide >= slidesCount) {
	        this.resetOnAnimationComplete(slide - slidesCount);
	      } else if (slide + slidesToScroll >= slidesCount && currentSlide !== slidesCount - slidesToShow) {
	        slide = slidesCount - slidesToShow;
	      }

	      return this.goTo(slide);
	    }

	    /**
	     * Navigates to the previous slide (according to options: infinite and slidesToShow)
	     * @return {Boolean} true if slide was changed and false if wasn't
	     */

	  }, {
	    key: "prev",
	    value: function prev() {
	      if (!this.isPrevAllowed()) {
	        return false;
	      }

	      var currentSlide = this.currentSlide,
	          slidesToScroll = this.slidesToScroll,
	          slidesCount = this.slidesCount;

	      var slide = currentSlide - slidesToScroll;

	      if (this.infinite && slide < 0) {
	        this.resetOnAnimationComplete(slidesCount + slide);
	      }

	      return this.goTo(slide);
	    }

	    /////////////
	    // helpers //
	    /////////////

	  }, {
	    key: "resetOnAnimationComplete",
	    value: function resetOnAnimationComplete(slide) {
	      var _this2 = this;

	      if (this.resetTimeoutId) {
	        // wow... that's bad!
	        clearTimeout(this.resetTimeoutId);
	      }
	      this.resetTimeoutId = setTimeout(function () {
	        return _this2.goTo(slide, true);
	      }, this.transitionSpeed);
	    }
	  }, {
	    key: "triggerChange",
	    value: function triggerChange() {
	      var listeners = this.listeners;
	      var state = this.getState();
	      var i = listeners.length;

	      while (i--) {
	        listeners[i](state);
	      }
	    }
	  }]);

	  return SliderApi;
	}();

	exports.default = SliderApi;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _sliderApi = __webpack_require__(7);

	var _sliderApi2 = _interopRequireDefault(_sliderApi);

	var _sanitizeProps = __webpack_require__(2);

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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

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

/***/ })
/******/ ])
});
;
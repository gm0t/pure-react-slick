(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactSlip"] = factory(require("react"));
	else
		root["ReactSlip"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	var _arrows = __webpack_require__(7);

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

	var _slider = __webpack_require__(14);

	var _slider2 = _interopRequireDefault(_slider);

	var _slides = __webpack_require__(15);

	var _slides2 = _interopRequireDefault(_slides);

	var _fadeSlides = __webpack_require__(10);

	var _fadeSlides2 = _interopRequireDefault(_fadeSlides);

	var _dots = __webpack_require__(9);

	var _dots2 = _interopRequireDefault(_dots);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Slider = _slider2.default;
	exports.Slides = _slides2.default;
	exports.FadeSlides = _fadeSlides2.default;
	exports.Dots = _dots2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if ((undefined) !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(19)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(18)();
	}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if ((undefined) !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(3);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if ((undefined) !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;

/***/ }),
/* 7 */
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

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(1);

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

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(1);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

	      var _props = this.props,
	          children = _props.children,
	          activeClassName = _props.activeClassName,
	          ulProps = _objectWithoutProperties(_props, ['children', 'activeClassName']);

	      if (slidesCount <= 1) {
	        return null;
	      }

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
	          activeDot = false;
	      for (var i = 0; i < dotsCount; i += 1) {
	        isActive = activeDot === false && currentSlide >= i * slidesToScroll && currentSlide < (i + 1) * slidesToScroll;
	        dots.push(this.renderDot(i, isActive, slidesToScroll));
	        if (isActive) {
	          activeDot = i;
	        }
	      }

	      if (typeof children === 'function') {
	        return children({ currentSlide: currentSlide, activeDot: activeDot, dotsCount: dotsCount, dots: dots });
	      }

	      return _react2.default.createElement(
	        'ul',
	        ulProps,
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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(1);

	var _propTypes2 = _interopRequireDefault(_propTypes);

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

	FadeSlides.contextTypes = {
	  getState: _propTypes2.default.func.isRequired,
	  listen: _propTypes2.default.func.isRequired,
	  updateSlides: _propTypes2.default.func.isRequired
	};
	exports.default = FadeSlides;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.listen = listen;
	exports.unlisten = unlisten;
	////////////////////////////////////////////////////////////////////////////////////////
	// Small helpers that provide an easy and effecient way to add/remove event listeners //
	////////////////////////////////////////////////////////////////////////////////////////

	var elementsWithListeners = [],
	    registeredListeners = [];

	function addListener(el, event, cb) {
	  var idx = elementsWithListeners.indexOf(el);
	  if (idx === -1) {
	    idx = elementsWithListeners.length;
	    elementsWithListeners.push(el);
	    registeredListeners.push({ el: el, totalCount: 0 });
	  }

	  var listeners = registeredListeners[idx],
	      listener = listeners[event];

	  if (!listener) {
	    listener = listeners[event] = { callbacks: [] };
	    listener.cb = function (e) {
	      for (var i = 0, l = listener.callbacks.length; i < l; i += 1) {
	        listener.callbacks[i](e);
	      }
	    };
	    listeners.totalCount += 1;
	    listeners.el.addEventListener(event, listener.cb);
	  }

	  // just to prevent double listeners
	  if (listener.callbacks.indexOf(cb) !== -1) {
	    return;
	  }

	  listener.callbacks.push(cb);
	}

	function removeListener(el, event, cb) {
	  var idx = elementsWithListeners.indexOf(el);
	  if (idx === -1) {
	    return;
	  }

	  var listeners = registeredListeners[idx],
	      listener = listeners[event],
	      callbacks = listener ? listener.callbacks : [];

	  if (!listener || callbacks.indexOf(cb) === -1) {
	    return;
	  }

	  callbacks.splice(callbacks.indexOf(cb), 1);
	  if (callbacks.length > 0) {
	    return;
	  }

	  listeners.el.removeEventListener(event, listener.cb);
	  listeners.totalCount -= 1;
	  delete listeners[event];

	  if (listeners.totalCount > 0) {
	    return;
	  }

	  elementsWithListeners.splice(idx, 1);
	  registeredListeners.splice(idx, 1);
	}

	/**
	 * Subscribe cb to events list
	 * @param  {HTMLElement}   el       target element
	 * @param  {Array}         events   array of event names
	 * @param  {Function} cb   callback that should be called
	 */
	function listen(el, events, cb) {
	  for (var i = 0, l = events.length; i < l; i += 1) {
	    addListener(el, events[i], cb);
	  }
	}

	/**
	 * Unsubscribe cb from events list
	 * @param  {HTMLElement}   el       target element
	 * @param  {Array}         events   array of event names
	 * @param  {Function} cb   callback that should be unsubscribed
	 */

	function unlisten(el, events, cb) {
	  for (var i = 0, l = events.length; i < l; i += 1) {
	    removeListener(el, events[i], cb);
	  }
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sanitizeProps;

	var _assign = __webpack_require__(8);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function sanitizeProps(props, propsToRemove) {
	  var sanitizedProps = (0, _assign2.default)({}, props);
	  for (var i = 0, l = propsToRemove.length; i < l; i += 1) {
	    delete sanitizedProps[propsToRemove[i]];
	  }

	  return sanitizedProps;
	}

/***/ }),
/* 13 */
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
	      if (this.containerHeight === height && this.containerWidth === width) {
	        return;
	      }
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
	      clearTimeout(this.resetTimeoutId);
	      var currentSlide = this.currentSlide,
	          slidesToShow = this.slidesToShow,
	          slidesToScroll = this.slidesToScroll,
	          slidesCount = this.slidesCount;

	      var slide = currentSlide + slidesToScroll;
	      if (!this.infinite) {
	        return this.goTo(slide);
	      }

	      if (slide >= slidesCount) {
	        if (slide >= slidesCount + slidesToShow) {
	          slide = 0;
	        } else {
	          this.resetOnAnimationComplete(slide - slidesCount);
	        }
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

	      clearTimeout(this.resetTimeoutId);
	      var currentSlide = this.currentSlide,
	          slidesToScroll = this.slidesToScroll,
	          slidesCount = this.slidesCount,
	          slidesToShow = this.slidesToShow;

	      var slide = currentSlide - slidesToScroll;

	      if (this.infinite && slide < 0) {
	        if (slide < -slidesToShow) {
	          slide = slidesCount;
	        } else {
	          this.resetOnAnimationComplete(slidesCount + slide);
	        }
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(1);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _sliderApi = __webpack_require__(13);

	var _sliderApi2 = _interopRequireDefault(_sliderApi);

	var _sanitizeProps = __webpack_require__(12);

	var _sanitizeProps2 = _interopRequireDefault(_sanitizeProps);

	var _events = __webpack_require__(11);

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

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(1);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// TODO: rename to swipe-slides

	var isChanged = function isChanged(a, b) {
	  if (a.length !== b.length) {
	    return true;
	  }

	  for (var i = 0, l = a.length; i < l; i += 1) {
	    if (a[i] !== b[i]) {
	      return true;
	    }
	  }

	  return false;
	};

	var Slides = function (_Component) {
	  _inherits(Slides, _Component);

	  function Slides() {
	    _classCallCheck(this, Slides);

	    var _this = _possibleConstructorReturn(this, (Slides.__proto__ || Object.getPrototypeOf(Slides)).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(Slides, [{
	    key: "componentDidUpdate",
	    value: function componentDidUpdate() {
	      // this.update
	    }
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.setState(this.context.getState());
	      this.context.updateSlides(_react.Children.toArray(this.props.children));
	      this.unbind = this.context.listen(function (state) {
	        return _this2.setState(state);
	      });
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nprops) {
	      var oldKeys = _react.Children.toArray(this.props.children).map(function (child) {
	        return child.key;
	      });
	      var newKeys = _react.Children.toArray(nprops.children).map(function (child) {
	        return child.key;
	      });
	      if (isChanged(oldKeys, newKeys)) {
	        console.log("update slides:", oldKeys, newKeys);
	        this.context.updateSlides(_react.Children.toArray(nprops.children));
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      if (this.unbind) {
	        this.unbind();
	      }
	    }

	    // helpers

	  }, {
	    key: "buildTrackTransform",
	    value: function buildTrackTransform() {
	      var _state = this.state,
	          vertical = _state.vertical,
	          offset = _state.offset;

	      return 'translate3d(' + (vertical ? '0px, ' + offset + 'px' : offset + 'px, 0px') + ', 0px)';
	    }
	  }, {
	    key: "buildTrackTransition",
	    value: function buildTrackTransition() {
	      if (!this.state.animate) {
	        return '';
	      }

	      return "transform " + this.state.transitionSpeed / 1000 + "s ease";
	    }

	    // renderers

	  }, {
	    key: "renderSlide",
	    value: function renderSlide(slideWidth, slide, key) {
	      var style = slide.props.style || {};
	      style.width = slideWidth + 'px';

	      return (0, _react.cloneElement)(slide, { key: key, style: style });
	    }
	  }, {
	    key: "renderClones",
	    value: function renderClones(pos, slides, width) {
	      var _this3 = this;

	      return slides.map(function (slide, i) {
	        return _this3.renderSlide(width, slide, 'c-' + pos + i);
	      });
	    }
	  }, {
	    key: "render",
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
	        "div",
	        _extends({}, this.props, { style: style, "data-react-slip": "slides" }),
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
	  getState: _propTypes2.default.func.isRequired,
	  listen: _propTypes2.default.func.isRequired,
	  updateSlides: _propTypes2.default.func.isRequired
	};
	Slides.defaultProps = {};
	exports.default = Slides;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	if ((undefined) !== 'production') {
	  var invariant = __webpack_require__(4);
	  var warning = __webpack_require__(6);
	  var ReactPropTypesSecret = __webpack_require__(5);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if ((undefined) !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(3);
	var invariant = __webpack_require__(4);
	var ReactPropTypesSecret = __webpack_require__(5);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(3);
	var invariant = __webpack_require__(4);
	var warning = __webpack_require__(6);
	var assign = __webpack_require__(16);

	var ReactPropTypesSecret = __webpack_require__(5);
	var checkPropTypes = __webpack_require__(17);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if ((undefined) !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if ((undefined) !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      (undefined) !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      (undefined) !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ })
/******/ ])
});
;
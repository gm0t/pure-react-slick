'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dots = exports.FadeSlides = exports.Slides = exports.Slider = exports.NextArrow = exports.PrevArrow = exports.Arrow = undefined;

var _arrows = require('./arrows');

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

var _slider = require('./slider');

var _slider2 = _interopRequireDefault(_slider);

var _slides = require('./slides');

var _slides2 = _interopRequireDefault(_slides);

var _fadeSlides = require('./fade-slides');

var _fadeSlides2 = _interopRequireDefault(_fadeSlides);

var _dots = require('./dots');

var _dots2 = _interopRequireDefault(_dots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Slider = _slider2.default;
exports.Slides = _slides2.default;
exports.FadeSlides = _fadeSlides2.default;
exports.Dots = _dots2.default;
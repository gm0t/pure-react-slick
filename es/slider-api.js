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
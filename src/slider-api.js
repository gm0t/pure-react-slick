// @flow

export default class SliderApi {
  constructor(config) {
    this.initialized = false;
    this.animate = true;
    this.listeners = [];
    this.configure(config);
  }

  listen = (cb) => {
    this.listeners.push(cb);
    return () => {
      this.listeners.splice(this.listeners.indexOf(cb), 1);
    };
  }

  offset() {
    const slideSize = (this.verical ? this.slideHeight : this.slideWidth);
    const offset = -this.currentSlide * slideSize;
    const clonesCount = Math.max(this.slidesToShow, this.slidesToScroll);

    return this.infinite ? offset - (clonesCount * slideSize) : offset;
  }

  pagesCount() {
    if (!this.infinite) {
      return 1 + Math.ceil((this.slidesCount - this.slidesToShow) / this.slidesToScroll);
    }

    return 0;
  }

  isNextAllowed() {
    return this.infinite || (this.currentSlide + this.slidesToShow < this.slidesCount);
  }

  isPrevAllowed() {
    return this.infinite || this.currentSlide !== 0;
  }

  getState = () => ({
    slidesCount: this.slidesCount,
    slidesToShow: this.slidesToShow,
    slidesToScroll: this.slidesToScroll,
    slideWidth: this.slideWidth,
    slideHeight: this.slideHeight,
    containerWidth: this.containerWidth,
    offset: this.offset(),
    initialized: this.isInitialized(),

    // navigation status
    pagesCount: this.pagesCount(),
    animate: this.animate,
    autoplay: this.autoplay,
    autoplaySpeed: this.autoplaySpeed,
    infinite: this.infinite,
    transitionSpeed: this.transitionSpeed,
    transitionTimingFn: this.transitionTimingFn,
    currentSlide: this.currentSlide,
    lastSlide: this.lastSlide,
    nextAllowed: this.isNextAllowed(),
    prevAllowed: this.isPrevAllowed()
  })

  isInitialized = () => (
    this.containerHeight !== undefined
    && this.containerWidth !== undefined
    && this.slidesCount !== undefined
  )

  updateSlideSize() {
    this.slideWidth = this.containerWidth / this.slidesToShow;
    this.slideHeight = this.containerHeight / this.slidesToShow;
  }

  updateSlides(slides) {
    if (this.slidesCount === slides.length) {
      return;
    }
    this.slidesCount = slides.length;
    this.triggerChange();
  }

  updateContainer(width, height) {
    if (this.containerWidth === width && this.containerHeight === height) {
      return;
    }

    this.containerWidth = width;
    this.containerHeight = height;
    this.updateSlideSize();
    this.triggerChange();
  }

  configure(config) {
    this.infinite = config.infinite;
    this.currentSlide = config.currentSlide || 0;
    this.lastSlide = this.currentSlide;
    this.slidesToShow = config.slidesToShow || 1;
    this.slidesToScroll = config.slidesToScroll || 1;
    this.transitionSpeed = config.transitionSpeed;
    this.transitionTimingFn = config.transitionTimingFn;
    this.autoplay = config.autoplay;
    this.autoplaySpeed = config.autoplaySpeed;
    if (this.autoplay) {
      this.play();
    } else {
      this.stop();
    }
    this.updateSlideSize();
    this.triggerChange();
  }

  play() {
    if (!this.playIntervalId) {
      this.playIntervalId = setInterval(::this.next, this.autoplaySpeed);
    }
  }

  stop() {
    if (this.playIntervalId) {
      window.clearInterval(this.playIntervalId);
      this.playIntervalId = null;
    }
  }

  /**
   * Navigates to a slide by index
   * @param  {Number} slide slide index
   * @param  {Boolean} [false] use or not transition for animation
   * @return {Boolean} true if slide was changed and false if wasn't
   */
  goTo(slide, dontAnimate) {
    const { slidesToShow, slidesCount } = this;
    let to = slide;
    if (!this.infinite) {
      if (to > (slidesCount - slidesToShow)) {
        to = this.slidesCount - slidesToShow;
      } else if (to < 0) {
        to = 0;
      }
    }
    if (slidesCount === 1) {
      to = 0;
    }

    if (this.currentSlide === to) {
      return false;
    }

    this.lastSlide = this.currentSlide;
    this.currentSlide = to;
    this.animate = !dontAnimate;
    this.triggerChange();
    return true;
  }

  /**
   * Navigates to the next slide (according to options: infinite and slidesToShow)
   * @return {Boolean} true if slide was changed and false if wasn't
   */
  next() {
    if (!this.isNextAllowed()) {
      return false;
    }

    const { currentSlide, slidesToShow, slidesToScroll, slidesCount } = this;
    let slide = currentSlide + slidesToScroll;
    if (!this.infinite) {
      return this.goTo(slide);
    }

    if (slide >= slidesCount) {
      this.resetOnAnimationComplete(slide - slidesCount);
    } else if ((slide + slidesToScroll >= slidesCount) && (currentSlide !== slidesCount - slidesToShow)) { // eslint-disable-line max-len
      slide = slidesCount - slidesToShow;
    }

    return this.goTo(slide);
  }

  /**
   * Navigates to the previous slide (according to options: infinite and slidesToShow)
   * @return {Boolean} true if slide was changed and false if wasn't
   */
  prev() {
    if (!this.isPrevAllowed()) {
      return false;
    }

    const { currentSlide, slidesToScroll, slidesCount } = this;
    const slide = currentSlide - slidesToScroll;

    if (this.infinite && slide < 0) {
      this.resetOnAnimationComplete(slidesCount + slide);
    }

    return this.goTo(slide);
  }

  resetOnAnimationComplete(slide) {
    if (this.resetTimeoutId) {
      // wow... that's bad!
      clearTimeout(this.resetTimeoutId);
    }
    this.resetTimeoutId = setTimeout(() => this.goTo(slide, true), this.transitionSpeed);
  }

  triggerChange() {
    const listeners = this.listeners;
    const state = this.getState();
    let i = listeners.length;

    // eslint-disable-next-line no-plusplus
    while (i--) {
      listeners[i](state);
    }
  }
}

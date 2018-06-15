import React, { Component } from 'react';
import PropTypes from "prop-types";
import SliderApi from './slider-api';
import sanitizeProps from './sanitize-props';
import { listen, unlisten } from "./helpers/events";

const findActiveSlides = (slides, params) => {
  const { currentSlide, slidesToShow, slidesToScroll, infinite } = params;
  let idx = currentSlide;
  if (infinite) {
    idx += Math.max(slidesToShow, slidesToScroll);
  }

  const active = [];
  const indicies = [];
  for (let i = 0; i < slidesToShow; i += 1) {
    if (i + idx >= slides.length) {
      idx = infinite ? slidesToShow : 0;
    }
    active.push(slides[idx + i]);
    indicies.push(idx + i);
  }

  return active;
};

const propsToRemove = [
  'infinite',
  'slidesToShow',
  'slidesToScroll',
  'vertical',
  'variedHeight',
  'transitionSpeed',
  'transitionTimingFn',
  'swipe',
  'draggable',
  'edgeFriction',
  'touchThreshold',
  'touchMove',
  'autoPlay',
  'autoPlaySpeed',
  'containerCheckInterval',
  'forceContainerUpdate',
  'beforeChange',
  'afterChange'
];

export default class Slider extends Component {
  static childContextTypes = {
    getState: PropTypes.func,
    goTo: PropTypes.func,
    prev: PropTypes.func,
    next: PropTypes.func,
    listen: PropTypes.func,
    updateSlides: PropTypes.func
  };

  static propTypes = {
    // basic params
    infinite: PropTypes.bool,
    slidesToShow: PropTypes.number,
    slidesToScroll: PropTypes.number,
    vertical: PropTypes.bool,
    variedHeight: PropTypes.bool,
    transitionSpeed: PropTypes.number,
    transitionTimingFn: PropTypes.string,
    swipe: PropTypes.bool,
    draggable: PropTypes.bool,
    edgeFriction: PropTypes.number,
    touchThreshold: PropTypes.number,
    touchMove: PropTypes.bool,
    autoPlay: PropTypes.bool,
    autoPlaySpeed: PropTypes.number,
    containerCheckInterval: PropTypes.number,
    forceContainerUpdate: PropTypes.any,

    // event handlers
    beforeChange: PropTypes.func,
    afterChange: PropTypes.func
  };

  static defaultProps = {
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

  state = {};

  bindContainer = (el) => {
    this.container = el;
  };

  onApiChange = (state) => {
    this.setState(state, this.updateContainerHeightFromSlide);
  };

  updateContainerHeightFromSlide = () => {
    const { container } = this;
    const { initialized } = this.state;
    const { variedHeight } = this.props;
    if (!container || !initialized || !variedHeight) {
      return;
    }

    const slides = container.querySelector('[data-react-slip="slides"]');
    if (!slides) {
      return;
    }
    const activeSlides = findActiveSlides(slides.children, this.state);
    let maxHeight = -Infinity;
    for (let i = 0, l = activeSlides.length; i < l; i += 1) {
      maxHeight = Math.max(activeSlides[i].offsetHeight, maxHeight);
    }

    if (maxHeight <= 0) {
      return;
    }

    const style = container.getAttribute('style') || '';
    if (style.indexOf('height:') === -1) {
      container.setAttribute('style', `height: ${maxHeight}px; ${style}`);
      return;
    }
    container.setAttribute('style', style.replace(/height:\s?[^;]+;?/gi, `height: ${maxHeight}px;`));
  };

  updateContainerSize = () => {
    if (!this.container) {
      return;
    }

    const { variedHeight } = this.props;
    const { container } = this;
    if (variedHeight) {
      this.updateContainerHeightFromSlide()
    }
    const { offsetWidth, offsetHeight } = container;
    this.api.updateContainer(offsetWidth, offsetHeight);
  };

  componentDidMount() {
    listen(window, ['resize', 'pageshow', 'load'], this.updateContainerSize);
    this.updateContainerSize();
    if (this.props.containerCheckInterval > 0) {
      this.containerWatchInterval = window.setInterval(this.updateContainerSize, this.props.containerCheckInterval)
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.containerWatchInterval);
    if (this.unbind) {
      this.unbind();
    }
    unlisten(window, ['resize', 'pageshow', 'load'], this.updateContainerSize);
  }

  componentDidUpdate(prevProps) {
    const currentProps = this.props;
    if (prevProps.forceContainerUpdate !== currentProps.forceContainerUpdate) {
      this.updateContainerSize()
    }
  }

  buildNewApi() {
    const api = new SliderApi(this.props);
    this.unbind = api.listen(this.onApiChange);
    return api;
  }

  getChildContext() {
    if (!this.api) {
      this.api = this.buildNewApi()
    }

    return {
      getState: ::this.api.getState,
      listen: ::this.api.listen,
      prev: ::this.api.prev,
      next: ::this.api.next,
      goTo: ::this.api.goTo,
      updateSlides: ::this.api.updateSlides
    };
  }

  componentWillReceiveProps(nprops) {
    this.api.configure(nprops);
  }

  render() {
    const divProps = sanitizeProps(this.props, propsToRemove);

    return (
      <div {...divProps} ref={this.bindContainer}>
        {this.props.children}
      </div>
    )
  }
}
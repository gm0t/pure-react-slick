// @flow

/* eslint no-restricted-syntax: 0, no-prototype-builtins: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SliderApi from './slider-api';
import { listen, unlisten } from './events';

const sliderProps = [
  'infinite',
  'slidesToShow',
  'slidesToScroll',
  'vertical',
  'transitionSpeed',
  'transitionTimingFn',
  'containerReconciliationInterval',
  'swipe',
  'draggable',
  'edgeFriction',
  'touchThreshold',
  'touchMove',
  'autoplay',
  'autoplaySpeed',
  'beforeChange',
  'afterChange'
].reduce((memo, prop) => { memo[prop] = true; return memo; }, {}); //eslint-disable-line

const sanitizeProps = (props) => {
  const sanitized = {};

  // eslint-disable-next-line prefer-const
  for (let prop in props) {
    if (props.hasOwnProperty(prop) && !sliderProps[prop]) {
      sanitized[prop] = props[prop];
    }
  }

  return sanitized;
};

export default class Slider extends Component {
  props: {
    // basic params
    infinite?: boolean,
    slidesToShow?: number,
    slidesToScroll?: number,
    vertical?: boolean,
    transitionSpeed?: number,
    transitionTimingFn?: PropTypes.string,
    swipe?: boolean,
    draggable?: boolean,
    edgeFriction?: number,
    touchThreshold?: number,
    touchMove?: boolean,
    autoplay?: boolean,
    autoplaySpeed?: number,
    containerReconciliationInterval?: number,

    // event handlers
    beforeChange?: Function,
    afterChange?: Function
  }

  static childContextTypes = {
    getState: PropTypes.func,
    goTo: PropTypes.func,
    prev: PropTypes.func,
    next: PropTypes.func,
    listen: PropTypes.func,
    updateSlides: PropTypes.func
  }

  static defaultProps = {
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
    autoplay: true,
    autoplaySpeed: 2000,
    containerReconciliationInterval: 400,

    // event handlers
    beforeChange: null,
    afterChange: null
  }

  componentDidMount() {
    const container = this.container;
    const { containerReconciliationInterval } = this.props;
    listen(window, ['resize', 'pageshow', 'load'], this.updateContainer);
    if (containerReconciliationInterval) {
      this.reconcilerId = setInterval(this.updateContainer, containerReconciliationInterval);
    }
    this.api.updateContainer(container.offsetWidth, container.offsetHeight);
  }

  componentWillReceiveProps(nprops) {
    this.api.configure(nprops);
    this.updateContainer();
  }

  componentWillUnmount() {
    unlisten(window, ['resize', 'pageshow', 'load'], this.updateContainer);
    if (this.reconcilerId) {
      clearInterval(this.reconcilerId);
    }
  }

  updateContainer = () => {
    this.api.updateContainer(this.container.offsetWidth, this.container.offsetHeight);
  }

  buildNewApi() {
    return new SliderApi(this.props);
  }

  getChildContext() {
    if (!this.api) {
      this.api = this.buildNewApi();
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

  createContainerRef = (container) => { this.container = container; }

  render() {
    const divProps = sanitizeProps(this.props, Slider.propTypes);
    return (
      <div {...divProps} ref={this.createContainerRef}>
        {this.props.children}
      </div>
    );
  }
}

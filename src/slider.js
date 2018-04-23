import React, { Component } from 'react';
import PropTypes from "prop-types";
import SliderApi from './slider-api';
import sanitizeProps from './sanitize-props';
import { listen, unlisten } from "./helpers/events";

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
    transitionSpeed: 300,
    transitionTimingFn: 'linear',
    swipe: true,
    draggable: true,
    edgeFriction: 0.15,
    touchThreshold: 5,
    touchMove: true,
    autoPlay: false,
    autoPlaySpeed: 2000,
    containerCheckInterval: 400
  };

  updateContainerSize = () => {
    const { offsetWidth, offsetHeight } = this.refs.container;
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
    unlisten(window, ['resize', 'pageshow', 'load'], this.updateContainerSize);
  }

  componentDidUpdate(prevProps) {
    const currentProps = this.props;
    if (prevProps.forceContainerUpdate !== currentProps.forceContainerUpdate) {
      this.updateContainerSize()
    }
  }

  buildNewApi() {
    return new SliderApi(this.props);
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
    const divProps = sanitizeProps(this.props, Slider.propTypes);
    return (
      <div {...divProps} ref="container">
        {this.props.children}
      </div>
    )
  }
}
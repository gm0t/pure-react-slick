// @flow

import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

// TODO: rename to swipe-slides

const renderSlide = (slideWidth, slide, key) => {
  const style = slide.props.style || {};
  style.width = `${slideWidth}px`;
  return cloneElement(slide, { key, style });
};

const renderClones = (pos, slides, width) =>
  slides.map((slide, i) => renderSlide(width, slide, `c-${pos}${i}`));

export default class Slides extends Component {
  static propTypes = {
  }

  static contextTypes = {
    getState: PropTypes.func.isRequired,
    listen: PropTypes.func.isRequired,
    updateSlides: PropTypes.func.isRequired
  }

  static defaultProps = {
  }

  constructor(props, context) {
    super();
    this.state = context.getState();
  }

  componentDidUpdate() {
    // TODO: update slides logic
  }

  componentDidMount() {
    this.context.updateSlides(this.props.children);
    this.unbind = this.context.listen(state => this.setState(state));
  }

  componentWillUnmount() {
    if (this.unbind) {
      this.unbind();
    }
  }

  // helpers

  buildTrackTransform() {
    const { vertical, offset } = this.state;
    const xy = vertical ? `0px, ${offset}px` : `${offset}px, 0px`;

    return `translate3d(${xy}, 0px)`;
  }

  buildTrackTransition() {
    if (!this.state.animate) {
      return '';
    }
    return `transform ${this.state.transitionSpeed / 1000}s ease`;
  }

  render() {
    if (!this.state.initialized) {
      return null;
    }

    const { containerWidth, slideWidth, infinite, slidesToShow, slidesToScroll } = this.state;
    const slides = Children.toArray(this.props.children);
    if (slides.length === 1) {
      return this.props.children;
    }

    const style = this.props.style || {};
    // eslint-disable-next-line max-len
    style.width = (slides.length * containerWidth) + (infinite ? slidesToShow * 2 * containerWidth : 0);
    style.transform = this.buildTrackTransform();
    style.WebKitTransform = style.transform;
    style.transition = this.buildTrackTransition();
    style.WebkitTransition = style.transition;

    let beforeClones;
    let afterClones;
    if (infinite) {
      beforeClones = renderClones('b', slides.slice(-Math.max(slidesToShow, slidesToScroll)), slideWidth);
      afterClones = renderClones('a', slides.slice(0, Math.max(slidesToShow, slidesToScroll)), slideWidth);
    }

    return (
      <div {...this.props} style={style}>
        {beforeClones}
        {slides.map((slide, i) => renderSlide(slideWidth, slide, i), this)}
        {afterClones}
      </div>
    );
  }
}

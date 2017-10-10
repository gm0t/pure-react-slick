// @flow

/* eslint no-bitwise: 0 */

import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

const getIndexes = (slidesCount, index, slidesToShow) => {
  const slides = [index];
  let i = slidesToShow;
  // eslint-disable-next-line no-plusplus
  while (--i && slidesCount > i + index) {
    slides.push(i + index);
  }

  return slides;
};

const getSlidesFromChildren = children => Children.toArray(children).filter(s => !!s);
const slidesStyle = { width: '100%', height: '100%' };

export default class FadeSlides extends Component {
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

  componentDidMount() {
    this.context.updateSlides(getSlidesFromChildren(this.props.children));
    this.unbind = this.context.listen(state => this.setState(state));
  }

  componentWillReceiveProps({ children }) {
    this.context.updateSlides(getSlidesFromChildren(children));
  }

  componentWillUnmount() {
    if (this.unbind) {
      this.unbind();
    }
  }

  renderSlide(slide, idx, isPrev, isNext) {
    const { slidesToShow, currentSlide, slideWidth } = this.state;
    const style = slide.props.style || {};
    style.width = `${slideWidth}px`;

    let className = slide.props.className || '';
    if (isPrev || isNext) {
      className += ` animation_${isNext ? 'in' : 'out'}`;
    }

    if (isNext) {
      className += ' slick-active';
    }

    if (slidesToShow > 1) {
      className += ` position_${(idx - currentSlide)}`;
    }

    return cloneElement(slide, { key: idx, style, className });
  }

  render() {
    if (!this.state.initialized) {
      return null;
    }

    const { slidesToShow, lastSlide, currentSlide } = this.state;
    const slides = getSlidesFromChildren(this.props.children);
    // eslint-disable-next-line max-len
    const prev = lastSlide === currentSlide ? [] : getIndexes(slides.length, lastSlide, slidesToShow);
    const next = getIndexes(slides.length, currentSlide, slidesToShow);

    return (
      <div {...this.props} style={slidesStyle}>
        {slides.map((slide, i) => this.renderSlide(slide, i, ~prev.indexOf(i), ~next.indexOf(i)))}
      </div>
    );
  }
}

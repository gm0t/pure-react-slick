// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Dots extends Component {
  props: {
    activeClassName?: string
  }

  constructor(props, context) {
    super(props, context);
    this.state = context.getState();
  }

  static contextTypes = {
    getState: PropTypes.func.isRequired,
    listen: PropTypes.func.isRequired,
    goTo: PropTypes.func.isRequired
  }

  static defaultProps = {
    className: 'slick-dots',
    activeClassName: 'slick-active'
  }

  componentDidMount() {
    this.unbind = this.context.listen(state => this.setState(() => state));
  }

  componentWillUnmount() {
    if (this.unbind) {
      this.unbind();
    }
  }

  goToHandler = (e) => {
    console.log('...', e.currentTarget.getAttribute('data-to'));
    this.context.goTo(+e.currentTarget.getAttribute('data-to'));
  }

  renderDot(i, isActive, toScroll) {
    const className = isActive ? this.props.activeClassName : null;

    return (
      <li key={i} data-to={i * toScroll} onClick={this.goToHandler} className={className}>
        <button>{i}</button>
      </li>
    );
  }

  render() {
    const { slidesCount, slidesToScroll, slidesToShow, infinite } = this.state;
    if (slidesCount <= 1) {
      return null;
    }

    const { activeClassName, ...ulProps } = this.props;
    let currentSlide = this.state.currentSlide;

    if (currentSlide >= slidesCount) {
      currentSlide -= slidesCount;
    } else if (currentSlide < 0) {
      currentSlide = slidesCount + currentSlide;
    } else {
      currentSlide += Math.min(slidesToShow, slidesToScroll) - 1;
    }

    let dotsCount;
    if (infinite) {
      dotsCount = Math.ceil(slidesCount / Math.min(slidesToShow, slidesToScroll));
    } else {
      dotsCount = 1 + Math.ceil((slidesCount - slidesToShow) / slidesToScroll);
    }

    const dots = [];
    for (let i = 0, isActive, hasActive; i < dotsCount; i += 1) {
      // eslint-disable-next-line max-len
      isActive = !hasActive && (currentSlide >= i * slidesToScroll && currentSlide < ((i + 1) * slidesToScroll));
      dots.push(this.renderDot(i, isActive, slidesToScroll));
      hasActive = hasActive || isActive;
    }

    return (
      <ul {...ulProps}>
        {dots}
      </ul>
    );
  }
}

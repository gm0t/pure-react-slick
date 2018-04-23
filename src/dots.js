import React, { Component } from 'react';
import PropTypes from "prop-types";
import sanitizeProps from './sanitize-props';

export default class Dots extends Component {

  constructor() {
    super();
    this.state = {};
  }

  static contextTypes = {
    getState: PropTypes.func.isRequired,
    listen: PropTypes.func.isRequired,
    goTo: PropTypes.func.isRequired
  };

  static propTypes = {
    activeClassName: PropTypes.string
  };

  static defaultProps = {
    className: 'slick-dots',
    activeClassName: 'slick-active'
  };

  componentDidMount() {
    this.setState(this.context.getState());
    this.unbind = this.context.listen(state => this.setState(state));
  }

  componentWillUnmount() {
    if (this.unbind) {
      this.unbind()
    }
  }

  renderDot(i, isActive, toScroll) {
    const className = isActive ? this.props.activeClassName : null

    return (
      <li key={i} onClick={() => this.context.goTo(i * toScroll)} className={className}>
        <button>{i}</button>
      </li>
    );
  }

  render() {
    let {slidesCount, slidesToScroll, slidesToShow, currentSlide, infinite} = this.state;
    const { children } = this.props;

    if (currentSlide >= slidesCount) {
      currentSlide = currentSlide - slidesCount;
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


    let dots = [], isActive, activeDot = false;
    for (let i = 0; i < dotsCount; i += 1) {
      isActive = activeDot === false && (currentSlide >= i * slidesToScroll && currentSlide < ((i + 1) * slidesToScroll))
      dots.push(this.renderDot(i, isActive, slidesToScroll));
      if (isActive) {
        activeDot = i;
      }
    }

    if (typeof children === 'function') {
      return children({ currentSlide, activeDot, dotsCount, dots });
    }

    return (
      <ul {...sanitizeProps(this.props, Dots.propTypes)} >
        {dots}
      </ul>
    );
  }
}

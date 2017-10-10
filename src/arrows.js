// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Arrow extends Component {
  props: {
    to: 'prev' | 'next',
    className?: string,
    disabledClassName?: string
  }

  static contextTypes = {
    listen: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired
  }

  static defaultProps = {
    className: 'slick-arrow',
    disabledClassName: 'disabled'
  }

  constructor(props, context) {
    super(props);
    this.state = context.getState();
  }

  isDisabled(to) {
    return !this.state || !this.state[`${to}Allowed`];
  }

  componentDidMount() {
    this.unbind = this.context.listen(data => this.setState(data));
  }

  componentWillUnmount() {
    this.unbind();
  }

  render() {
    const { slidesCount } = this.state;
    if (slidesCount <= 1) {
      return null;
    }

    const { to, children, className, disabledClassName } = this.props;
    const isDisabled = this.isDisabled(to);
    const onClick = isDisabled ? null : this.context[to];

    return (
      <div className={`${className} ${isDisabled ? disabledClassName : ''}`} onClick={onClick}>
        {children}
      </div>
    );
  }

}


export const PrevArrow = props => <Arrow {...props} to="prev" />;
PrevArrow.defaultProps = {
  className: 'slick-arrow slick-prev',
  to: 'prev'
};

export const NextArrow = props => <Arrow {...props} />;
NextArrow.defaultProps = {
  className: 'slick-arrow slick-next',
  to: 'next'
};

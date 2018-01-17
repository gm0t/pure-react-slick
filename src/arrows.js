import React, { Component } from 'react';
import PropTypes from "prop-types";

export class Arrow extends Component {
  static propTypes = {
    to: PropTypes.oneOf(['prev', 'next']).isRequired,
    className: PropTypes.string,
    disabledClassName: PropTypes.string
  }

  static contextTypes = {
    listen: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired
  }

  static defaultProps = {
    className: 'slick-arrow',
    disabledClassName: 'disabled'
  }

  _isDisabled(to) {
    return !this.state || !this.state[to + 'Allowed'];
  }

  componentDidMount() {
    this.unbind = this.context.listen(data => this.setState(data));
  }

  componentWillUnmount() {
    this.unbind()
  }

  render() {
    const { to, children, disabledClassName } = this.props;
    const isDisabled = this._isDisabled(to);
    const onClick = isDisabled ? null : this.context[to];

    var className = this.props.className || '';
    if (this._isDisabled(to)) {
      className += ' ' + disabledClassName;
    }

    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    )
  }

}


export function PrevArrow(props) {
  return <Arrow {...props} to="prev"/>
}
PrevArrow.defaultProps = {
  className: 'slick-arrow slick-prev',
  to: 'prev'
}

export function NextArrow(props) {
  return <Arrow {...props} />
}
NextArrow.defaultProps = {
  className: 'slick-arrow slick-next',
  to: 'next'
}

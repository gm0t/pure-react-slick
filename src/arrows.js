import React, { Component, PropTypes } from 'react';


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
    className: '',
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
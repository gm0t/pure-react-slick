import React, { Component, PropTypes, Children, cloneElement } from 'react';


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

  constructor() {
    super();
    this.state = {};
  }

  componentDidUpdate() {
    this.update
  }

  componentDidMount() {
    this.setState(this.context.getState());
    this.context.updateSlides(this.props.children);
    this.unbind = this.context.listen(state => this.setState(state));
  }

  componentWillUnmount() {
    if (this.unbind) {
      this.unbind()
    }
  }

  // helpers

  buildTrackTransform() {
    const {vertical, offset} = this.state;
    return 'translate3d(' + (vertical ? ('0px, ' + offset + 'px') : (offset + 'px, 0px')) + ', 0px)';
  }

  buildTrackTransition() {
    if (!this.state.animate) {
      return '';
    }

    var speed = this.state.transitionSpeed / 1000;
    return 'transform ' + speed + 's ease';
  }

  // renderers

  renderSlide(slideWidth, slide, key) {
    var style = slide.props.style || {};
    style.width = slideWidth + 'px';

    return cloneElement(slide, {
      key: key,
      style: style
    })
  }

  renderClones(pos, slides, width) {
    return slides.map((slide, i) => this.renderSlide(width, slide, 'c-' + pos + i))
  }

  render() {
    if (!this.state.initialized) {
      return null;
    }

    const { containerWidth, slideWidth, infinite, slidesToShow, slidesToScroll } = this.state;
    let children = Children.toArray(this.props.children);
    let style = this.props.style || {};
    style.width = children.length * containerWidth + (infinite ? slidesToShow * 2 * containerWidth : 0);
    style.transform = this.buildTrackTransform();
    style.WebKitTransform = style.transform;
    style.transition = this.buildTrackTransition();
    style.WebkitTransition = style.transition;

    let beforeClones, afterClones;
    if (infinite) {
      beforeClones = this.renderClones('b', children.slice(-Math.max(slidesToShow, slidesToScroll)), slideWidth);
      afterClones = this.renderClones('a', children.slice(0, Math.max(slidesToShow, slidesToScroll)), slideWidth);
    }

    return (
      <div {...this.props} style={style}>
        {beforeClones}
        {children.map((slide, i) => this.renderSlide(slideWidth, slide, i), this)}
        {afterClones}
      </div>
    )
  }

}
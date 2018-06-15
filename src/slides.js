import React, { Component, Children, cloneElement } from 'react';
import PropTypes from "prop-types";
// TODO: rename to swipe-slides

const isChanged = (a, b) => {
  if (a.length !== b.length) {
    return true;
  }

  for (let i = 0, l = a.length; i < l; i += 1) {
    if (a[i] !== b[i]) {
      return true;
    }
  }

  return false;
};

export default class Slides extends Component {
  static propTypes = {
  };

  static contextTypes = {
    getState: PropTypes.func.isRequired,
    listen: PropTypes.func.isRequired,
    updateSlides: PropTypes.func.isRequired
  };

  static defaultProps = {
  };

  constructor() {
    super();
    this.state = {};
  }

  componentDidUpdate() {
    // this.update
  }

  componentDidMount() {
    this.setState(this.context.getState());
    this.context.updateSlides(Children.toArray(this.props.children));
    this.unbind = this.context.listen(state => this.setState(state));
  }

  componentWillReceiveProps(nprops) {
    const oldKeys = Children.toArray(this.props.children).map(child => child.key);
    const newKeys = Children.toArray(nprops.children).map(child => child.key);
    if (isChanged(oldKeys, newKeys)) {
      console.log("update slides:", oldKeys, newKeys);
      this.context.updateSlides(Children.toArray(nprops.children));
    }
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

    return `transform ${this.state.transitionSpeed / 1000}s ease`;
  }

  // renderers
  renderSlide(slideWidth, slide, key) {
    const style = slide.props.style || {};
    style.width = slideWidth + 'px';

    return cloneElement(slide, { key, style })
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
    <div {...this.props} style={style} data-react-slip="slides">
        {beforeClones}
        {children.map((slide, i) => this.renderSlide(slideWidth, slide, i), this)}
        {afterClones}
      </div>
    )
  }

}
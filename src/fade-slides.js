import React, { Component, PropTypes, Children, cloneElement } from 'react';

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

  // renderers

  renderSlide(slide, idx, isPrev, isNext) {
    const { slidesToShow, currentSlide } = this.state;
    let style = slide.props.style || {};
    style.width = this.state.slideWidth + 'px';

    let className = slide.props.className || '';
    if (isPrev || isNext) {
      className += ' animation_' + (isNext ? 'in' : 'out');
    }

    if (slidesToShow > 1) {
      className += ' position_' + (idx - currentSlide)
    }

    return cloneElement(slide, {
      key: idx,
      style: style,
      className: className
    });
  }

  getSlidesIndexes(slidesCount, index, slidesToShow) {
    let slides = [index];
    while (--slidesToShow && slidesCount > slidesToShow + index) {
      slides.push(slidesToShow + index)
    }

    return slides;
  }

  render() {
    if (!this.state.initialized) {
      return null;
    }

    const { slidesToShow, lastSlide, currentSlide } = this.state;
    let children = Children.toArray(this.props.children);
    let prev = lastSlide === currentSlide ? [] : this.getSlidesIndexes(children.length, lastSlide, slidesToShow);
    let next = this.getSlidesIndexes(children.length, currentSlide, slidesToShow)

    return (
      <div {...this.props} style={{width: '100%', height: '100%'}}>
        {children.map((slide, i) => this.renderSlide(slide, i, ~prev.indexOf(i), ~next.indexOf(i)))}
      </div>
    );
  }
}
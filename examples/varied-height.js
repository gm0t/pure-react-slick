import React, { Component } from 'react';
import { Slider, Slides, Arrow, Dots } from 'react-slip';

var Prev = () => <Arrow to="prev" className="arrow arrow-prev"/>;
var Next = () => <Arrow to="next" className="arrow arrow-next"/>;
var CDots = () => <Dots className="dots" activeClassName="dots__item_active"/>;

var BasicSlides = () => {
  return (
    <Slides className="slides">
      <div className="slides__item">M</div>
      <div className="slides__item slides__item_sm">SM</div>
      <div className="slides__item slides__item_l">L</div>
      <div className="slides__item slides__item_xl">XL</div>
      <div className="slides__item slides__item_sm">SM</div>
    </Slides>
  );
};

export default class VariedHeight extends Component {
  render() {
    return (
      <div>
        <h2>Multiple slides</h2>
        <Slider className="slider slider_horizontal slider_varied-height" infinite variedHeight slidesToShow={2}>
          <Prev />
          <BasicSlides />
          <Next />
          <CDots/>
        </Slider>
        <h2>Single slide</h2>
        <Slider className="slider slider_horizontal slider_varied-height" infinite variedHeight>
          <Prev />
          <Slides className="slides">
            <div className="slides__item">M</div>
          </Slides>
          <Next />
          <CDots/>
        </Slider>
      </div>
    );
  }
}

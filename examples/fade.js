import React, { Component } from 'react';
import { Slider, FadeSlides, Arrow, Dots } from 'react-slip';

var Prev = () => <Arrow to="prev" className="arrow arrow-prev"/>;
var Next = () => <Arrow to="next" className="arrow arrow-next"/>;
var CDots = () => <Dots className="dots" activeClassName="dots__item_active"/>;

var BasicSlides = () => {
  return (
    <FadeSlides className="slides slides_css-animated slides_fade">
      <div className="slides__item slides__item_odd">1</div>
      <div className="slides__item slides__item_even">2</div>
      <div className="slides__item slides__item_odd">3</div>
      <div className="slides__item slides__item_even">4</div>
      <div className="slides__item slides__item_odd">5</div>
      <div className="slides__item slides__item_even">6</div>
    </FadeSlides>
  );
};

export default class Fade extends Component {
  render() {
    return (
      <div>
        <h2>Single slide</h2>
        <Slider className="slider slider_horizontal" infinite={false}>
          <Prev />
          <BasicSlides />
          <Next />
          <CDots />
        </Slider>
        <hr/>
        <h2>Multiple slides with slidesToScroll</h2>
        <Slider className="slider slider_horizontal" slidesToShow={2} slidesToScroll={2} infinite={false}>
          <Prev />
          <BasicSlides />
          <Next />
          <CDots />
        </Slider>
      </div>
    );
  }
}

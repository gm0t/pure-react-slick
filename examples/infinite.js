import React, { Component } from 'react';
import { Slider, Slides, Arrow, Dots } from 'react-slip';

var Prev = () => <Arrow to="prev" className="arrow arrow-prev"/>;
var Next = () => <Arrow to="next" className="arrow arrow-next"/>;
var CDots = () => <Dots className="dots" activeClassName="dots__item_active"/>;

var BasicSlides = () => {
  return (
    <Slides className="slides">
      <div className="slides__item">1</div>
      <div className="slides__item">2</div>
      <div className="slides__item">3</div>
      <div className="slides__item">4</div>
      <div className="slides__item">5</div>
    </Slides>
  );
};

export default class Infinite extends Component {
  render() {
    return (
      <div>
        <h2>Single slide</h2>
        <Slider className="slider slider_horizontal">
          <Prev />
          <BasicSlides />
          <Next />
          <CDots/>
        </Slider>
        <hr/>
        <h2>Multiple slides</h2>
        <Slider className="slider slider_horizontal" slidesToShow={2}>
          <Prev />
          <BasicSlides />
          <Next />
          <CDots/>
        </Slider>
        <hr/>
        <h2>Multiple slides with slidesToScroll</h2>
        <Slider className="slider slider_horizontal" slidesToShow={2} slidesToScroll={2}>
          <Prev />
          <BasicSlides />
          <Next />
          <CDots/>
        </Slider>
        <hr/>
        <h2>Multiple slides with slidesToScroll &gt; slidesToShow</h2>
        <Slider className="slider slider_horizontal" slidesToShow={2} slidesToScroll={3}>
          <Prev />
          <BasicSlides />
          <Next />
          <CDots/>
        </Slider>
      </div>
    );
  }
}

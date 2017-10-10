import React, { Component } from 'react';
import { Slider, FadeSlides, Arrow, Dots } from 'react-slip';

var Prev = () => <Arrow to="prev" className="arrow arrow-prev"/>;
var Next = () => <Arrow to="next" className="arrow arrow-next"/>;
var CDots = () => <Dots className="dots" activeClassName="dots__item_active"/>;

var BasicSlides = ({ version }) => {
  var slide7 = version % 3 ? null : <div className="slides__item slides__item_even">lol</div>;

  return (
    <FadeSlides className="slides slides_css-animated slides_fade">
      <div className="slides__item slides__item_odd">1</div>
    </FadeSlides>
  );
};

export default class Fade extends Component {
  constructor(props) {
    super(props);
    this.state = { version: 0 }
  }

  render() {
    const version = this.state.version + 1;
    return (
      <div>
        <h2>Single slide </h2>
        <Slider autoplaySpeed={1000} data-version={this.state.version} className="slider slider_horizontal">
          <Prev />
          <BasicSlides version={version}/>
          <Next />
          <CDots />
        </Slider>

        <button onClick={() => this.setState({ version })}>
          inc version: {version}
        </button>
      </div>
    );
  }
}

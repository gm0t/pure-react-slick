import React, { Component } from 'react';
import Infinite from './infinite';
import Basic from './basic';
import Fade from './fade';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Basic</h1>
        <Basic />
        <h1>Infinite</h1>
        <Infinite />
        <h1>Fade</h1>
        <Fade />
      </div>
    )
  }
}

// <h1>Basic</h1>
// <Basic />
// <h1>Infinite</h1>
// <Infinite />

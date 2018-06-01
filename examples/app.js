import React, { Component } from 'react';
import Infinite from './infinite';
import Basic from './basic';
import Fade from './fade';
import VariedHeight from "./varied-height";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Varied height</h1>
        <VariedHeight  />
        <h1>Fade</h1>
        <Fade />
        <h1>Basic</h1>
        <Basic />
        <h1>Infinite</h1>
        <Infinite />
      </div>
    )
  }
}